interface Point {
    x: number
    y: number
}

let p1: Point = {x: 10, y: 20}
let p2: { x: number, y: number } = p1

//console.log(p2)

interface Pet {
    name: string
}

class Dog {
    name: string = ''
}

let pet: Pet
pet = new Dog()
let dog = {name: 'Lassie', owner: null}
pet = dog

//error here
//let anotherDog: Pet = {name: 'Lassie', owner: null}

let x = (a: number) => 0
let y = (b: number, s: string) => 0

y = x
//x = y error

let x1 = () => ({name: 'Alice'})
let y1 = () => ({name: 'Alice', location: 'Seattle'})

x1 = y1
//y1 = x1 erorr


