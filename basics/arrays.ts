let array: string[]

array = ['foo', 'bar']

let anotherArray: Array<number>

anotherArray = [1, 2, 3]

const numbers: ReadonlyArray<number> = [1, 2, 3]
//numbers.push(7)
//numbers[3] = 5
//numbers[0] = 2

type TypeMyTuple = [number, string, boolean]
const myTuple: TypeMyTuple = [1, 'foo', true]