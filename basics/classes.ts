class Car {
    name: string
    price: number

    constructor(name: string, price: number) {
        this.name = name
        this.price = price
    }

    getInfo(): string {
        return `${this.name} - ${this.getPrice()}`
    }

    private getPrice(): number {
        return this.price;
    }

    protected getName(): string {
        return this.name
    }
}

const bmw = new Car('BMW', 100000)
bmw.getInfo()

class Bus extends Car {
    constructor(name: string, price: number) {
        super(name, price)
    }

    getInfo(): string {
        console.log('get info for bus')
        return super.getInfo();
    }
}