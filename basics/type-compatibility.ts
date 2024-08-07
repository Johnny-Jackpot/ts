import {log} from "node:util";

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

const enum EnumEventType {
  Mouse,
  Keyboard
}

interface Event {
  timestamp: number
}

interface MyMouseEvent extends Event {
  x: number
  y: number
}

interface MyKeyEvent extends Event {
  keyCode: number
}


function listenEvent(eventType: EnumEventType, handler: (e: Event) => void) {
}

listenEvent(EnumEventType.Mouse, (e: MyMouseEvent) => console.log(e.x + '.' + e.y))
listenEvent(EnumEventType.Mouse, (e: Event) =>
    console.log((e as MyMouseEvent).x))
//error
//listenEvent(EnumEventType.Mouse, (e: number) => console.log(e))

enum Status {
  Ready,
  Waiting,
}

enum Color {
  Red,
  Green,
  Blue,
}

let status = Status.Ready
//error
//status = Color.Blue

class Animal {
  feet: number = 0
  constructor(name: string, numFeet: number) {
  }
}

class Size {
  feet: number = 0
  constructor(numFeet: number) {
  }
}

let a: Animal
let b: Size

a = b
b = a

interface Empty<T> {}
let x2: Empty<number>
let y2: Empty<string>

x2 = y2

interface NotEmpty<T> {
  data: T
}

let x3: NotEmpty<number>
let y3: NotEmpty<string>

//error
//x3 = y3
