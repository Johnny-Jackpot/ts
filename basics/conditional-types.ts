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

type MessageOf<T extends {message: unknown}> = T['message']
interface Email {
  message: string
}

type EmailMessageContent = MessageOf<Email>

type MessageOfOrNever<T> = T extends {message: unknown} ? T['message'] : never
type EmailMessageContentOrNever = MessageOfOrNever<Email>
type DogMessageContentOrNever = MessageOfOrNever<Dog>

type Flatten<T> = T extends any[] ? T[number] : T
const strArr: string[] = ['foo']
type Str = Flatten<typeof strArr>
type Str2 = Flatten<typeof strArr[0]>
type Num = Flatten<number>

type AnotherFlatten<T> = T extends Array<infer Item> ? Item : T

type GetReturnType<Type> = Type extends (...args: any[]) => infer Return ? Return : never
type N1 = GetReturnType<() => number>
type S1 = GetReturnType<() => string>
type N2 = GetReturnType<typeof createLabelG<number>>

type R1 = ReturnType<typeof createLabel>

type ToArray<Type> = Type extends any ? Type[] : never

type StrArrOrNumArr = ToArray<string | number>
const x: StrArrOrNumArr = ['foo']

type ToArrayNonDist<T> = [T] extends [any] ? T[] : never
type ArrOfStrOrNum = ToArrayNonDist<string | number>
const y: ArrOfStrOrNum = ['foo', 2]
