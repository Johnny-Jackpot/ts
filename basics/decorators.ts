function loggedMethod(
  originalMethod: any,
  context: ClassMethodDecoratorContext,
) {
  const methodName = String(context.name);

  function replacementMethod(this: any, ...args: any[]) {
    console.log(`LOG: Entering method. '${methodName}'`);
    const result = originalMethod.call(this, ...args);
    console.log(`LOG: Exiting method. '${methodName}'`);

    return result;
  }

  return replacementMethod;
}

function bound(originalMethod: Function, context: ClassMethodDecoratorContext) {
  const methodName = context.name;
  if (context.private) {
    throw new Error(
      `bound cannot decorate private properties like ${methodName as string}`,
    );
  }
  context.addInitializer(function (this: any) {
    this[methodName] = this[methodName].bind(this);
  });
}

class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  @loggedMethod
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const p = new Person("Ron");
p.greet();
