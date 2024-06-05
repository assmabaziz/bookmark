//========================================= Global Variables =================================
var siteName = document.getElementById("siteName");
var siteUrl = document.getElementById("siteUrl");
var bookList = [];

if (localStorage.getItem("bookList") != null) {
  bookList = JSON.parse(localStorage.getItem("bookList"));
  displayBook(bookList);
}
//========================================= Function To Add New Element =================================

function addBook() {
  var bookMark = {
    bookMarkName: siteName.value,
    websiteUrl: siteUrl.value,
  };
  if (siteName.value === "" || siteUrl.value === "") {
    console.log("Enter A valid Vlaue ya wasmek");
    // showMessage()

  } else {
    // console.log(bookList);
    bookList.push(bookMark);
    localStorage.setItem("bookList", JSON.stringify(bookList));
    clearForm();
    displayBook();
    changeBtn();
  }
}

//========================================= Functions to show and hide message =================================
/*
function hideMessage() {
    message.classList.add("d-none")
}
function showMessage() {
    message.classList.remove("d-none")

}
*/
//========================================= Function To Display Added Element =================================
function displayBook() {
  var newItem = " ";
  for (var i = 0; i < bookList.length; i++) {
    newItem += `
    <tr >
        <td class="p-2">
            ${i + 1} </td>
        <td class="p-2">${bookList[i].bookMarkName}</td>
        <td class="p-2">
            <a href="${bookList[i].websiteUrl}" target="_blank" class="btn btn-success">
                <i class="fa-solid fa-eye text-white"></i>
                Visit
            </a></td>
        <td class="p-2"><button onclick="deleteBook(${i})" class="btn btn-danger">
            <i class="fa-solid fa-trash-can"></i>
            Delete
        </button></td>
    </tr>
        `;
  }
  document.getElementById("addedBook").innerHTML = newItem;
}
//========================================= Function To Clear Form =================================
function clearForm() {
  siteName.value = null;
  siteUrl.value = null;
}
//========================================= Function To Delete Item =================================

function deleteBook(index) {
  bookList.splice(index, 1);
  localStorage.setItem("bookList", JSON.stringify(bookList));
  displayBook(bookList);
//   console.log(bookList);
}
