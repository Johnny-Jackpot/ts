type TypeIsNumber<T> = T extends number ? 'yes' : 'no'
type Type1 = TypeIsNumber<number>
type Type2 = TypeIsNumber<string>

const foo: Type1 = 'yes'
const bar: Type2 = 'no'

type TypeBrand = 'bmw' | 'mclaren' | 'mercedes'
type TypePrice = '$100000' | '$400000' | '$50000'

type TypeCar = `${TypeBrand} ${TypePrice}`
const car1: TypeCar = 'bmw $400000'