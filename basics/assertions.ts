const inputElement = document.querySelector(".some-selector");
const value = (inputElement as HTMLInputElement).value;
const value2 = (<HTMLInputElement>inputElement).value;

const getLength = (text: string | null) => {
  return text!.length;
};

getLength(null);
getLength("test");
