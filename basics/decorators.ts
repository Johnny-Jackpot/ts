function LogClass(constructor: Function, ctx: ClassDecoratorContext) {
    // console.log(constructor.name)
    // console.log(ctx)
}

function LogMethod(target: Object, ...rest: any) {
    console.log(target)
    console.log(typeof rest)
}

@LogClass
class Plane {
    constructor(protected id: number) {}

    @LogMethod
    getId(): number {
        return this.id
    }
}

const plane = new Plane(1)
const id = plane.getId()