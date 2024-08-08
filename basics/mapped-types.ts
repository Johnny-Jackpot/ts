type OnlyBoolAndNumbers = {
  [key: string]: boolean | number
}

const x: OnlyBoolAndNumbers = {
  foo: true,
  bar: 1,
}

type OptionsFlags<T> = {
  [Prop in keyof T]: boolean
}

type Features = {
  darkMode: () => void
  newUserProfile: () => void
}

type FeatureOptions = OptionsFlags<Features>
const y: FeatureOptions = {
  darkMode: true,
  newUserProfile: false
}

type CreateMutable<T> = {
  -readonly [Prop in keyof T]: T[Prop]
}

type LockedAccount = {
  readonly id: string
  readonly name: string
}

type UnlockerAccount = CreateMutable<LockedAccount>

type Concrete<T> = {
  [Prop in keyof T]-?: T[Prop]
}

type MaybeUser = {
  id: string
  name?: string
  age?: number
}

type User = Concrete<MaybeUser>

type Getters<T> = {
  [P in keyof T as `get${Capitalize<string & P>}`]: () => T[P]
}

type LazyUser = Getters<User>

type NewUser = Omit<User, 'id'>

type EventConfig<Events extends {kind: string}> = {
  [E in Events as E['kind']]: (event: E) => void
}

type SquareEvent = {kind: 'square', x: number, y: number}
type CircleEvent = {kind: 'circle', radius: number}

type Config = EventConfig<SquareEvent | CircleEvent>
