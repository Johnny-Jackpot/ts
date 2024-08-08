interface Animal {
  live(): void
}

interface Dog extends Animal {
  woof(): void
}

type Example1 = Dog extends Animal ? number : string
type Example2 = RegExp extends Animal ? number : string

interface IdLabel {
  id: number
}

interface NameLabel {
  name: string
}

function createLabel(id: number): IdLabel
function createLabel(name: string): NameLabel
function createLabel(nameOrId: string | number): IdLabel | NameLabel
function createLabel(nameOrId: string | number): IdLabel | NameLabel {
  return typeof nameOrId === 'string' ? {name: nameOrId} : {id: nameOrId}
}

type NameOrId<T extends number | string> = T extends number ? IdLabel : NameLabel

function createLabelG<T extends number | string>(nameOrId: T): NameOrId<T> {
  return (typeof nameOrId === 'number' ? {id: nameOrId} : {name: nameOrId}) as NameOrId<T>
}

const a = createLabelG<number>(42)
const b = createLabelG<string>('foo')

