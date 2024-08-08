function printId(id: number | string) {
  console.log(id);
}

printId(1);
printId("523434");
//printId({id: 123})

function printId2(id: number | string) {
  //error
  //console.log(id.toUpperCase())
}
