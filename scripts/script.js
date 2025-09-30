// JavaScript Document
console.log("hi");

const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

const menu_cat = document.getElementById("menu-category");
const menu_ing = document.getElementById("menu-ingredient");
const menu_malibu = document.getElementById("menu-malibu");
const menu_seasons = document.getElementById("menu-seasons");
const menu_taste = document.getElementById("menu-taste");

const but_cat = document.getElementById("but_cat");
const but_ing = document.getElementById("but_ing");
const but_mal = document.getElementById("but_mal");
const but_sea = document.getElementById("but_sea");
const but_tas = document.getElementById("but_tas");

const slider = document.getElementById("fontsize");
const valueDisplay = document.getElementById("fontsize-value");

slider.addEventListener("input", () => {
  const size = slider.value + "px";
  document.documentElement.style.fontSize = size; 
  valueDisplay.textContent = size;

  localStorage.setItem("fontSize", slider.value);
});


window.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("fontSize");
  if (saved) {
    document.documentElement.style.fontSize = saved + "px";
    slider.value = saved;
    valueDisplay.textContent = saved + "px";
  }
});

// bron van chatgpt voor t maken van lettertype groote slider: https://chatgpt.com/share/68dba8f8-c8d4-8001-bb8b-833c95f9f636 


toggle.addEventListener("click", () => {
  menu.classList.toggle("show");
});

function hide_all() {
    menu_cat.classList.add("hidden");
    menu_ing.classList.add("hidden");
    menu_malibu.classList.add("hidden");
    menu_seasons.classList.add("hidden");
    menu_taste.classList.add("hidden");

}

function show_cat() {
    if (menu_cat.classList.contains("hidden")===false) {
        hide_all();
    } else {
        hide_all();
        menu_cat.classList.remove("hidden");
    }
}

function show_ing() {
    if (menu_ing.classList.contains("hidden")===false) {
        hide_all();
    } else {
        hide_all();
        menu_ing.classList.remove("hidden");
    }
}

function show_malibu() {
    if (menu_malibu.classList.contains("hidden")===false) {
        hide_all();
    } else {
        hide_all();
        menu_malibu.classList.remove("hidden");
    }
}

function show_seasons() {
    if (menu_seasons.classList.contains("hidden")===false) {
        hide_all();
    } else {
        hide_all();
        menu_seasons.classList.remove("hidden");
    }
}

function show_taste() {
    if (menu_taste.classList.contains("hidden")===false) {
        hide_all();
    } else {    
        hide_all();
        menu_taste.classList.remove("hidden");
    }
}


hide_all();

but_cat.addEventListener("click",show_cat); 
but_ing.addEventListener("click",show_ing); 
but_mal.addEventListener("click",show_malibu); 
but_sea.addEventListener("click",show_seasons); 
but_tas.addEventListener("click",show_taste); 


