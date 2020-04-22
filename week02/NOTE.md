## Week02总结

### 乔姆斯基谱系

- 0 无限制文法
- 1 上下文相关
- 2 上下文无关
- 3 规则文法（正则）

### 产生式 BNF

#### 加法定义

```
<Number> = "0" | "1" | "2" | ..... | "9"
<DecimalNumber> = "0" | (("1" | "2" | ..... | "9") <Number>* ) // 代表十进制
// 连加/减
<AdditiveExpression> = <MultiplicativeExpression> |
  <AdditiveExpression> "+" <MultiplicativeExpression> |
  <AdditiveExpression> "-" <MultiplicativeExpression>
```

#### 乘法定义

```
<Number> = "0" | "1" | "2" | ..... | "9"
<DecimalNumber> = "0" | (("1" | "2" | ..... | "9") <Number>* )
<MultiplicativeExpression> = <DecimalNumber> |
<MultiplicativeExpression> "*" <DecimalNumber> |
<MultiplicativeExpression> "/" <DecimalNumber>
```

#### 其他

```
<Number> = "0" | "1" | "2" | ..... | "9"
<DecimalNumber> = "0" | (("1" | "2" | ..... | "9") <Number>* )
<AdditiveExpression> = <MultiplicativeExpression> |
  <AdditiveExpression> "+" <MultiplicativeExpression> |
  <AdditiveExpression> "-" <MultiplicativeExpression>

<MultiplicativeExpression> = <DecimalNumber> |
<MultiplicativeExpression> "*" <DecimalNumber> |
<MultiplicativeExpression> "/" <DecimalNumber>

<LogicalExpression> = <AdditiveExpression> |
  <LogicalExpression> "||" <AdditiveExpression> |
  <LogicalExpression> "&&" <AdditiveExpression>

<PrimaryExpression> = <DecimalNumber> |
  "(" <LogicalExpression> ")"
// 演变
<MultiplicativeExpression> = <PrimaryExpression> |
  <MultiplicativeExpression> "*" <PrimaryExpression> |
  <MultiplicativeExpression> "/" <PrimaryExpression>
```

### 动态与静态

#### 动态

- 运行阶段
- 在用户设备或者在线服务器上

#### 静态

- 编译阶段
- 在程序员的设备上

#### 强类型语言

- 无隐式转换

#### 弱类型语言

- 有隐式转换