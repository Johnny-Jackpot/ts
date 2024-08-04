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