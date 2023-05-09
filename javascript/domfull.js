/* function getTitle() {
  let title = document.getElementById("title"); // bunu console.log yaptigimizda  bu cikar   <h1 id="title">This is my Title</h1>
  console.log(title.innerHTML);
  console.log(title.nodeName); //H1
}
getTitle();
 */

/* document.addEventListener("click", function () {
  alert();
});
Bu sekilde sayfaninnher tarafina bastigimizda alet cikar fakat assagidaki gibi yaparsak yani submut e atarsak
 */

let button = document.getElementById("submit-text-btn");

/* function helloWorld() {
  console.log("helloWorld");
} */

function getInputAndUpdate(inputElement) {
  // console.log(inputElement.value);
  const text = inputElement.value;
  inputElement.value = "";
  //return text;
  alert(text);
}

button.addEventListener("click", function () {
  //helloWorld();
  // alert();
  const inputElement = document.querySelector("input");
  return getInputAndUpdate(inputElement);
});

// simdi ise click e assaign yaptik
