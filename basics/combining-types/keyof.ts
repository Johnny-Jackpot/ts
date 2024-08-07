type Point = {x: number, y: number}
type P = keyof Point

let foo: P = 'x'
foo = 'y'

interface User {
    name: string
    age: number
    location: string
}

type UserKeys = keyof User
const key: UserKeys = 'name'
