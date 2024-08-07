interface ICar {
    id: number
    name: string
    price: number
    yearBuilt: number
}

interface ICarCreate extends Omit<ICar, 'id'>{}
interface ICarId extends Pick<ICar, 'id'> {}
interface IOptionalCar extends Partial<ICar> {}
interface IReadonlyCar extends Readonly<ICar> {}
type TypeCarRecord = Record<'name' | 'price', string | number>

interface IBus {
    id?: number
    name?: string
    price?: number
    yearBuilt?: number
}

interface IRequiredBus extends Required<IBus> {}

const newCar: ICarCreate = {
    name: 'BMW',
    price: 100000,
    yearBuilt: 2024,
}

const newCarId: ICarId = {
    id: 2343432432
}

const fantomCar: IOptionalCar = {
    id: 34324,
}

const readonlyCar: IReadonlyCar = {
    id: 342423,
    price: 34323432,
    name: 'BMW',
    yearBuilt: 2024
}

//error
//readonlyCar.id = 234324;

const carRecord1: TypeCarRecord = {
    name: 'string',
    price: '12343243'
}

const carRecord2: TypeCarRecord = {
    name: 24323,
    price: 24342,
}

const bus: IRequiredBus = {
    id: 13123,
    name: 'ISUZU',
    price: 123442432,
    yearBuilt: 2024,
}

type TypeGetName = () => string
type SomeReturn = ReturnType<TypeGetName>

type SomeExtract = Extract<'BMW' | 'Toyota', 'BMW' | 'Mercedes'>
type SomeExclude = Exclude<'BMW' | 'Toyota', 'BMW' | 'Mercedes'>
type TypeNotNull = NonNullable<string | number | null | undefined>
type SomeAwaited = Awaited<Promise<string>>

class C {
    x = 0
    y = 0
}

type T0 = InstanceType<typeof C>

function smth(a: number, b: string): void {}
type T1 = Parameters<typeof smth>
