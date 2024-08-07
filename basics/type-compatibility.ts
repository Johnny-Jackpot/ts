interface Point {
    x: number
    y: number
}

let p1: Point = {x: 10, y: 20}
let p2: { x: number, y: number } = p1

console.log(p2)

interface Pet {
    name: string
}

class Dog {
    name: string
}

let pet: Pet
pet = new Dog()
let dog = {name: 'Lassie', owner: null}
pet = dog

//error here
//let anotherDog: Pet = {name: 'Lassie', owner: null}
