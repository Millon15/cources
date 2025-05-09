console.log({
    'typeof "hello"': typeof "hello", // "string"
    'typeof true': typeof true, // "boolean"
    'typeof undefined': typeof undefined, // "undefined"
    'typeof Symbol()': typeof Symbol(), // "symbol"

    '(() => {}) instanceof Function': (() => {}) instanceof Function, // true
    'typeof function(){}': typeof function(){}, // "function"
    'typeof (() => {})': typeof (() => {}), // "function"

    // Number
    'typeof 42': typeof 42, // "number"

    'Number.isFinite(Infinity)': Number.isFinite(Infinity), // false
    'typeof Infinity': typeof Infinity, // "number" (quirk!)

    'isNaN(NaN) | Number.isNaN(NaN)': Number.isNaN(NaN), // true
    'typeof NaN': typeof NaN, // "number" (quirk!)

    // Object
    'null === null': null === null, // true
    'typeof null': typeof null, // "object" (quirk!)

    '{} instanceof Object': {} instanceof Object, // true
    'Array.isArray({})': Array.isArray({}), // false
    'typeof {}': typeof {}, // "object"

    '[] instanceof Object': [] instanceof Object, // true
    '[] instanceof Array': [] instanceof Array, // true
    'ArrayBuffer.isView(new Int8Array())': ArrayBuffer.isView(new Int8Array()), // true - Checks if a value is a typed array or DataView
    'Array.isArray([])': Array.isArray([]), // true
    'typeof []': typeof [], // "object"

    'new Date() instanceof Date': new Date() instanceof Date, // true
    'typeof new Date()': typeof new Date(), // "object"
})
