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

type TypeHandler = (n: Event) => void

function listenEvent(eventType: EnumEventType, handler: TypeHandler) {
}

listenEvent(EnumEventType.Mouse, (e: MyMouseEvent) => console.log(e.x + '.' + e.y))
listenEvent(EnumEventType.Mouse, (e: Event) =>
    console.log((e as MyMouseEvent).x))
//error
//listenEvent(EnumEventType.Mouse, (e: number) => console.log(e))
