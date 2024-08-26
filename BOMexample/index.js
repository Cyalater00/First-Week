let availH = window.screen.availHeight;
let availW = window.screen.availWidth;
let myWindow;
function newWindow() {
  myWindow = window.open(
    "https://perscholas.org/",
    "perscholas",
    `width=${availW * 0.75}, height=${availH * 0.75}, left=${
      availW * 0.125
    }, top=${availH * 0.125}, resizable=yes, scrollbars=yes, location=yes`
  );
  myWindow.focus();
}
// Note that the close() method can only
// affect windows created by the open() method.
// You cannot close the current browsing window
// using this method, for example.
function closeWindow() {
  myWindow.close();
}
// A sneak peek at event handling!
// This will be covered in depth during a future lesson.
document.getElementById("openWindowBtn").addEventListener("click", newWindow);
document
  .getElementById("closeWindowBtn")
  .addEventListener("click", closeWindow);
const app1 = document.getElementById("app1");
const uaData = window.navigator.userAgent;
// Let's use some DOM manipulation to
// create a new structure for holding
// the userAgent data:
const list = (app1
  .appendChild(document.createElement("ul"))
  .appendChild(document.createElement("li")).textContent = uaData);
console.log(window.location);
console.log(window.screen);
