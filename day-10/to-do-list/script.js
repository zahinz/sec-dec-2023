// get the input value, console.log when the button is clicked

// let inputDOM = document.querySelector("#todo");
// let buttonDOM = document.querySelector("#add");
let formDOM = document.querySelector("#todoForm");
let orderedListDOM = document.querySelector("#todoList");

// get the value of an input
// 1. onChange event listener
// function inputChanged(event) {
//   console.log(event.target.value);
// }

// 2. input DOM value
// function buttonClicked() {
//   let inputValue = inputDOM.value;
//   console.dir(inputValue);
// }
// buttonDOM.addEventListener("click", buttonClicked);

// 3. form submit event
function formSubmitted(event) {
  // IMPORTANT: prevent the default behaviour of the form which is to refresh the page
  event.preventDefault();
  // 3a. get the input value
  // let value = event.target[0].value;
  // console.log(value);

  // 3b. get form data - ADVANCED
  let formData = new FormData(event.target);
  // get the value of the input based on the name attribute
  let value = formData.get("todo");
  console.log(value);

  // 3c. create a new list item
  let newListItem = document.createElement("li");
  // insert the value of the input inside the list item
  newListItem.innerText = value;
  // create a new checkbox
  let newCheckbox = document.createElement("input");
  // set the type attribute of the checkbox to checkbox
  newCheckbox.setAttribute("type", "checkbox");
  // append the checkbox to the list item
  newListItem.appendChild(newCheckbox);
  // append the list item to the ordered list
  orderedListDOM.appendChild(newListItem);
}
formDOM.addEventListener("submit", formSubmitted);

// TASK FOR ASSESSEMENT
// ideas for the to do list
// - clear the input after the form is submitted
// - prevent empty values from being added to the list
// - add a delete button to each list item
