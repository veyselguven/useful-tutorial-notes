function getTheHeader() {
  const title = document.getElementById("the-dom");

  console.log("VALUES LOGGED FROM CODEPEN"); //VALUES LOGGED FROM CODEPEN
  console.log(title); //<h2 id="the-dom">The D O M</h2>
  console.log(typeof title); //object
  console.log(title.innerHTML); //The D O M
  console.log(title.nodeName); // H2
  console.log(title.nodeType); //1
  console.log(title.textContent); //The D O M
  console.log(document.getElementById("the-dom").value);
}

getTheHeader();

let veysel = document.getElementById("the-dom");

console.log(veysel.innerText);
