enum EnumRoles {
    Admin,
    Guest,
    User,
}

const enum EnumColor {
    black,
    pink,
    green
}

interface IUser {
    role: EnumRoles,
    color: EnumColor,
}

const user: IUser = {
    role: EnumRoles.Admin,
    color: EnumColor.black
}

const user2: IUser = {
    role: EnumRoles.Guest,
    color: EnumColor.green
}

const user3: IUser = {
    role: EnumRoles.User,
    color: EnumColor.pink,
}

console.log(EnumRoles)
console.log(EnumRoles[EnumRoles.Admin])
