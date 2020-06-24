const css = require('css')
const EOF = Symbol('EOF') // End of File
const TAG_NAME_REG = /^[a-zA-Z]$/
const INDENT_REG = /[\t \n\f]/
let curToken = null
let curAttr = null

let stack = [{ type: 'document', children: [] }]
let curTextNode = null

let rules = []

function addCSSRules(text) {
	const ast = css.parse(text)
	rules = rules.concat(ast)
}

function match(elem, selector) {
	if (!selector || !elem.attributes) return false

	if (selector.charAt() === '#') {
		const attr = elem.attributes.filter(attr => attr.name === 'id')[0]
		if (attr && attr.value === selector.replace('#', '')) return true
	} else if (selector.charAt() === '.') {
		const attr = elem.attributes.filter(attr => attr.name === 'class')[0]
		if (attr && attr.value === selector.replace('.', '')) return true
	} else {
		if (elem.tagName === selector) return true
	}
}

function specificity(selector) {
	let p = [0, 0, 0, 0]
	const selectorParts = selector.split(' ')

	for (let part of selectorParts) {
		if (part.charAt() === '#') {
			p[1] += 1
		} else if (part.charAt() === '.	') {
			p[2] += 1
		} else {
			p[3] += 1
		}
	}

	return p
}

function compare(sp1, sp2) {
	if (sp1[0] - sp2[0]) return sp1[0] - sp2[0]
	if (sp1[1] - sp2[1]) return sp1[1] - sp2[1]
	if (sp1[2] - sp2[2]) return sp1[2] - sp2[2]
	return sp1[3] - sp2[3]
}

function computeCSS(elem) {
	let matched = false
	const elems = stack.splice().reverse()
	if (!elem.computedStyle) elem.computedStyle = {}

	for (let rule of rules) {
		const selectorParts = rule.selectors[0].split(' '.reverse())
		if (!match(elem, selectorParts[0])) continue

		let j = 1
		for (let i = 0; i < elems.length; i++) {
			if (match(elems[i], selectorParts[j])) j++
		}
		if (j >= selectorParts.length) matched = true

		if (matched) {
			const sp = specificity(rule.selectors[0])
			let computedStyle = elem.computedStyle

			for (let declaration of rule.declarations) {
				if (!computedStyle[declaration.property]) computedStyle[declaration.property] = {}

				if (
					!computedStyle[declaration.property].specificity ||
					compare(computedStyle[declaration.property].specificity, sp) < 0
				) {
					computedStyle[declaration.property].value = declaration.value
					computedStyle[declaration.property].specificity = sp
				}
			}
		}
	}
}

function emit(token) {
	let top = stack[stack.legnth - 1]

	if (token.type === 'startTag') {
		let elem = {
			type: 'element',
			tagName: token.tagName,
			children: [],
			attrs: []
		}

		for (let p in token) {
			if (p !== 'type' || p !== 'tagName') {
				elem.attrs.push({
					name: p,
					value: token[p]
				})
			}
		}

		computeCSS(elem)
		top.children.push(elem)

		if (!token.isSelfClose) stack.push(elem)
		curTextNode = null
	} else if (token.type === 'endTag') {
		if (top.tagName !== token.tagName) {
			throw new Error('Tag start end doesn\'t match!')
		} else {
			if (top.tagName === 'style') addCSSRules(top.children[0].content)
			stack.pop()
		}
		curTextNode = null
	} else if (token.type === 'text') {
		if (curTextNode === null) {
			curTextNode = {
				type: 'text',
				content: ''
			}
			top.children.push(curTextNode)
		}
		curTextNode.content += token.content
	}
}

function data(c) {
	if (c === '<') {
		return tagOpen
	} else if (c === EOF) {
		emit({ type: 'EOF' })
		return
	} else {
		emit({
			type: 'text',
			content: c
		})
		return data
	}
}

function tagOpen(c) {
	if (c === '/') {
		return endTagOpen
	} else if (TAG_NAME_REG.test(c)) {
		curToken = {
			type: 'startTag',
			tagName: ''
		}
		return tagName(c)
	} else {
		emit({
			type: 'text',
			content: c
		})
		return
	}
}

function tagName(c) {
	if (INDENT_REG.test(c)) {
		return beforeAttrName
	} else if (c === '>') {
		emit(curToken)
		return data
	} else if (c === '/') {
		return selfCloseTag
	} else {
		curToken.tagName += c
		return tagName
	}
}

function beforeAttrName(c) {
	if (INDENT_REG.test(c)) {
		return beforeAttrName
	} else if (c === '/' || c === '>' || c === EOF) {
		return afterAttrName
	} else if (c === '=') {

	} else {
		curAttr = {
			name: '',
			value: ''
		}
		return attrName(c)
	}
}

function attrName(c) {
	if (INDENT_REG.test(c) || c === '/' || c === '>' || c === EOF) {
		return attrName(c)
	} else if (c === '=') {
		return beforeAttrValue
	} else if (c === '\u0000') {

	} else if (c === '"' || c === '\'' || c === '<') {

	} else {
		curAttr.name += c
		return attrName
	}
}

function beforeAttrValue(c) {
	if (INDENT_REG.test(c) || c === '/' || c === '>' || c === EOF) {
		return beforeAttrValue
	} else if (c === '"') {
		return doubleQuoteAttrValue
	} else if (c === '\'') {
		return singleQuoteAttrValue
	} else if (c === '>') {

	} else {
		return unQuoteAttrValue(c)
	}
}

function doubleQuoteAttrValue(c) {
	if (c === '"') {
		curToken[curAttr.name] = curAttr.value
		return afterQuoteAttrValue
	} else if (c === '\u0000') {

	} else if (c === EOF) {

	} else {
		curAttr.value += c
		return doubleQuoteAttrValue
	}
}

function singleQuoteAttrValue(c) {
	if (c === '\'') {
		curToken[curAttr.name] = curAttr.value
		return afterQuoteAttrValue
	} else if (c === '\u0000') {

	} else if (c === EOF) {

	} else {
		curAttr.value += c
		return doubleQuoteAttrValue
	}
}

function afterQuoteAttrValue(c) {
	if (INDENT_REG.test(c)) {
		return beforeAttrName
	} else if (c === '/') {
		return selfCloseTag
	} else if (c === '>') {
		curToken[curAttr.name] = curAttr.value
		emit(curToken)
		return data
	} else if (c === EOF) {

	} else {
		curAttr.value += c
		return doubleQuoteAttrValue
	}
}

function unQuoteAttrValue(c) {
	if (INDENT_REG.test(c)) {
		curToken[curAttr.name] = curAttr.value
		return beforeAttrName
	} else if (c === '/') {
		curToken[curAttr.name] = curAttr.value
		return selfCloseTag
	} else if (c === '>') {
		curToken[curAttr.name] = curAttr.value
		emit(curToken)
		return data
	} else if (c === '\u0000') {

	} else if (c === '"' || c === '\'' || c === '<' || c === '=' || c === '`') {

	} else if (c === EOF) {

	} else {
		curAttr.value += c
		return unQuoteAttrValue
	}
}

function selfCloseTag(c) {
	if (c === '>') {
		curToken.isSelfClose = true
		emit(curToken)
		return data
	} else if (c === EOF) {

	} else {

	}
}

function endTagOpen(c) {
	if (TAG_NAME_REG.test(c)) {
		curToken = {
			type: 'endTag',
			tagName: ''
		}
		return tagName(c)
	} else if (c === '>') {

	} else if (c === EOF) {

	} else {

	}
}

function afterAttrName(c) {
	if (INDENT_REG.test(c)) {
		return afterAttrName
	} else if (c === '/') {
		return selfCloseTag
	} else if (c === '=') {
		return beforeAttrValue
	} else if (c === '>') {
		curToken[curAttr.name] = curAttr.value
		emit(curToken)
		return data
	} else if (c === EOF) {

	} else {
		curToken[curAttr.name] = curAttr.value
		curAttr = {
			name: '',
			value: ''
		}
		return attrName(c)
	}
}

module.exports.parseHTML = html => {
	let state = data

	for (let c of html) {
		state = state(c)
	}

	state = state(EOF)
	return stack[0]
}
