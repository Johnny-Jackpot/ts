interface IUserAge {
    age: number
    getAge(): number
}

interface IUser extends IUserAge {
    name: string
    email: string
}

type TypePerson = {
    age: number
    getAge(): number
}

type TypeUser = {
    name: string
    email: string
} & TypePerson

const user: IUser = {
    name: 'John',
    email: 'email@example.com',
    age: 26,
    getAge(): number {
        return this.age
    }
}

const user2: TypeUser = {
    name: 'John',
    email: 'example2@example.com',
    age: 25,
    getAge(): number {
        return this.age
    }
}

console.log(user.getAge())
console.log(user2.getAge())