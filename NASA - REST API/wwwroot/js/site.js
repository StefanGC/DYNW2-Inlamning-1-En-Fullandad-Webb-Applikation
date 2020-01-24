// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
//const flatpickr = require("flatpickr");
//import flatpickr from "flatpickr";

//Variabler
let optionSelect;
let url = "http://localhost:5001/api/Rover/";
var table;

//DOM
let info = document.getElementById("info");
let roverTable = document.getElementById("rovers");
let optId = document.getElementById("optId");
let optNamn = document.getElementById("optNamn");
let optDate = document.getElementById("optDate");

function ShowOption() {
    optionSelect = document.getElementById("optionSelect").value;
    roverTable.style.visibility = "visible";
    optId.style.visibility = "hidden";
    optNamn.style.visibility = "hidden";
    optDate.style.visibility = "hidden";
    optId.style.display = "none";
    optNamn.style.display = "none";
    optDate.style.display = "none";
    switch (parseInt(optionSelect)) {
        case 1:
            showRovers(url);
            info.innerHTML = "";
            break;
        case 2:
            searchById();
            roverTable.innerHTML = "";
            info.innerHTML = "<h4>Välj en giltig id i listrutan</h4>";
            break;
        case 3:
            searchByName();
            roverTable.innerHTML = "";
            info.innerHTML = "<h4>Välj en giltig namn i listrutan</h4>";
            break;
        case 4:
            searchByDate();
            roverTable.innerHTML = "";
            info.innerHTML = "<h4>Välj en datum mellan 2020-01-13 och 2020-01-19</h4>";
            break;
        default:
            break;
    }

}

function preLoad() {
    fetch(url)
        .then(response => response.json())
        .then(function (jsonRovers) {
            table = "<div class=\"table-responsive\">";
            table += "<table class=\"table table-hover text-center\">";
            table += "<tr><th>Rover Id</th><th>Namn</th><th>Datum</th><th>Antal</th><th>Hjul</th><th>Hastighet</th><th>Vikt</th></tr>";

            for (let i = 0; i < jsonRovers.length; i++) {
                table += "<tr><td>" + jsonRovers[i].id + "</td><td>" + jsonRovers[i].name + "</td><td>" + jsonRovers[i].eventDate + "</td><td>" + jsonRovers[i].quantity + "</td><td>" + jsonRovers[i].wheel + "</td><td>" + jsonRovers[i].speed + "</td><td>" + jsonRovers[i].weight + "</td></tr>";
            }
            table += "</table></div>";
        })
        .catch(err => console.log(JSON.stringify(err))); 
}

function showRovers(url) {
    fetch(url)
        .then(response => response.json())
        .then(function (jsonRovers) {
            if (jsonRovers.length > 0 ) {
                table = "<div class=\"table-responsive\">";
            table += "<table class=\"table table-hover text-center\">";
            table += "<tr class=\"text-primary\"><th>Rover Id</th><th>Namn</th><th>Datum</th><th>Antal</th><th>Hjul</th><th>Hastighet</th><th>Vikt</th></tr>";
            
            for (let i = 0; i < jsonRovers.length; i++) {
                table += "<tr><td>" + jsonRovers[i].id + "</td><td>" + jsonRovers[i].name + "</td><td>" + jsonRovers[i].eventDate + "</td><td>" + jsonRovers[i].quantity + "</td><td>" + jsonRovers[i].wheel + "</td><td>" + jsonRovers[i].speed + "</td><td>" + jsonRovers[i].weight + "</td></tr>";
            }
            table += "</table></div>";
            } else
                table = "<h5 class=\"text-danger\">Det finns inga rover att visa, vänligen välj en annan parameter</h5>";
            
            roverTable.innerHTML = table;
        })
        .catch(err => console.log(JSON.stringify(err))); 
}

function searchById() {
    fetch(url+"Rover Type 1")
        .then(response => response.json())
        .then(function (jsonRovers) {
            let idSelect = "<select id=\"idSelect\" class=\"browser-default custom-select\" onchange=\"auxShowRovers1();\">";
            idSelect += "<option value=\"0\" disabled selected>Välj en id</option>"
            for (let i = 0; i < jsonRovers.length; i++) {
                idSelect += "<option value=\"" + jsonRovers[i].id + "\">" + jsonRovers[i].id + "</option>";
            }
            idSelect += "</select>";
            optId.innerHTML = idSelect;
            optId.style.visibility = "visible";
            optId.style.display = "block";
        })
        .catch(err => console.log(JSON.stringify(err))); 
}

function searchByName() {
    fetch(url)
        .then(response => response.json())
        .then(function (jsonRovers) {
            let nameSelect = "<select id=\"nameSelect\" class=\"browser-default custom-select\" onchange=\"auxShowRovers2();\">";
            nameSelect += "<option value=\"0\" disabled selected>Välj en namn</option>"
            var array = [];
            for (let i = 0; i < jsonRovers.length; i++) {
                array.push(jsonRovers[i].name);
            }
            var newArr = Array.from(new Set(array))
            for (let j = 0; j < newArr.length; j++)
                nameSelect += "<option value=\"" + newArr[j] + "\">" + newArr[j] + "</option>";
            
            nameSelect += "</select>";
            optNamn.innerHTML = nameSelect;
            optNamn.style.visibility = "visible";
            optNamn.style.display = "block";
        })
        .catch(err => console.log(JSON.stringify(err)));
}

function searchByDate() {
    optDate.style.visibility = "visible";
    optDate.style.display = "block";
    document.getElementById("picker").flatpickr();
}

function auxShowRovers1() {
    let id = document.getElementById("idSelect").value;
    showRovers(url+id);
}

function auxShowRovers2() {
    let id = document.getElementById("nameSelect").value;
    showRovers(url + id);
}

function auxShowRovers3() {
    let id = document.getElementById("picker").value;
    showRovers(url + id);
}

preLoad();