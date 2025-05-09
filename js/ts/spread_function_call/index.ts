const policy = (name: string, age: number, minor: boolean) => {
    if (minor) {
        console.log(`No wine or alchohol purchase allowed for ${name} who is ${age} years old.`);
    }
}

const child = ['Stan', 15, true]
const child2: [string, number, boolean] = ['Stan2', 16, true]

// policy(...child)
console.log({
    'policy(...child)': new Error('A spread argument must either have a tuple type or be passed to a rest parameter'),
    'policy(...child2)': policy(...child2)
})
