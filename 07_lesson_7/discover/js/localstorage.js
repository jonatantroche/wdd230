const visit = document.querySelector('#visit');

window.addEventListener("load", () => {
    let date = new Date();
    let save = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
    if (localStorage.getItem("lastDate") == null) {
    localStorage.setItem("lastDate", save);
console.log("Last date: " + localStorage.getItem("lastDate"));
} else {
console.log("Last date: " + localStorage.getItem("lastDate"));
}

});