type TypeAddress = {
    city: string,
    country: string,
}

function getAddress(city: string): TypeAddress {
    return {
        city,
        country: 'USA'
    }
}

const getAddressObject = (city: string): TypeAddress => {
    return {
        city,
        country: 'USA',
    }
}

type TypeAddressFunction = (city: string) => TypeAddress

const getAddressObjectFunc: TypeAddressFunction = (city) => {
    return {
        city,
        country: 'USA',
    }
}

const getNumbers = (...numbers: number[]) => {
    return numbers
}

function getCar(name: string): string
function getCar(name: string, price: number): string
function getCar(name: string, price?: number): string {
    return price ? `Name: ${name}, price: ${price}` : `Name: ${name}`
}

const car1 = getCar('BMW')
const car2 = getCar('BMW', 100000)
//const car3 = getCar('BMW', 100000, true)
