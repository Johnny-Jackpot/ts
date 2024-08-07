function isNum(n: any): n is number {
    return typeof n === 'number'
}

const values = [1, 'dsdf', true, {}, []]
const numbers = values.filter(isNum)
console.log(numbers)

