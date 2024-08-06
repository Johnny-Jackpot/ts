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