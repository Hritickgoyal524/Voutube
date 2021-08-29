var menuicon = document.querySelector(".menuicon");
var sidebar = document.querySelector(".sidebar");
var cont = document.querySelector(".container");
menuicon.onclick = function() {
    sidebar.classList.toggle("small-sidebar")
    cont.classList.toggle("largecontainer")
}