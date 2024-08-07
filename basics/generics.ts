function entity<T>(args: T): T {
    return args
}

entity<number>(1)
entity<string>('string')
entity<boolean>(true)

class Channel<T> {
    private name: T

    constructor(name: T) {
        this.name = name
    }

    getName(): T {
        return this.name
    }
}

const channel1 = new Channel<string>('string')
channel1.getName()

const channel2 = new Channel<number>(1)
channel2.getName()

const entity2 = <T>(arg: T): T => arg

interface IPair<K, V> {
    key: K,
    value: V
}

const pair1: IPair<string, number> = {
    key: 'string',
    value: 1
}

const pair2: IPair<string, boolean> = {
    key: 'string',
    value: true
}

type TypeLength = {
    length: number
}

function getLength<T extends TypeLength>(arg: T): number {
    return arg.length
}

getLength('string')
getLength([1,2,3])

function identity<Type>(arg: Type): Type {
    return arg;
}
identity.x = 'test'

let myIdentity: { <Type>(arg: Type): Type, x: string } = identity;

interface GenericIdFn {
    <Type>(arg: Type): Type
}
let myIdentity2: GenericIdFn = identity

interface GenericIdentityFn<Type> {
    (arg: Type): Type
}

let myIdentity3: GenericIdentityFn<number> = identity
console.log(myIdentity3(23))

interface Lengthwise {
    length: number
}

function loggingIdentity<Type extends  Lengthwise>(arg: Type): Type {
    console.log(arg.length)
    return arg
}

const foo = loggingIdentity<string>('bar')
console.log(foo)
const bar = loggingIdentity({length: 25, value: 7})
console.log(bar)

function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
    return obj[key]
}

let obj = {a: 1, b: 2, c: 3, d: 4}
getProperty(obj, 'a')
getProperty(obj, 'd')

function create<Type>(c: {new (): Type}): Type {
    //do something
    return new c()
}

class Smth {}

const smth = create(Smth)
console.log(smth)

class BeeKeeper {
    hasMask: boolean = true
}

class ZooKeeper {
    nameTag: string = 'Mike'
}

class Animal {
    numLegs: number = 4
}

class Bee extends Animal {
    numLegs = 6
    keeper: BeeKeeper = new BeeKeeper()
}

class Lion extends Animal {
    keeper: ZooKeeper = new ZooKeeper()
}

function createInstance<A extends Animal>(c: new () => A): A {
    console.log(c)
    return new c()
}

console.log(createInstance(Lion).keeper.nameTag)
console.log(createInstance(Bee).keeper.hasMask)
