export function sleep(duration) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, duration);
    });
}

// backgroundColor => background-color
export function getKebabCase(name) {
    //return name.replace(/([A-Z])/g, "-$1").toLowerCase()
    return name.replace(/([A-Z])/g, c => '-' + c.toLowerCase());
}

// background-color => backgroundColor
export function getCamelCase(name) {
    return name.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}
