// uncomment the variables and assign a DOM element to each variable using the document.getElementById selector
const myHeader = document.getElementById("myHeader");
const button = document.getElementById("background-color-btn");
const input = document.getElementById("background-color-input");
button.addEventListener("click", () => {
  // get the "value" from the input field (look into the value property)
  //https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement
  // assign the backgroundColor value to the header's backgroundColor property,
  //to access the backgroundColor property, don't forget to access `myHeader.style` first.
  const inputValue = input.value;
  myHeader.style.backgroundColor = inputValue;
});
