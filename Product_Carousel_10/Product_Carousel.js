// Species 
function filterSpeciesTab(species) {

  // Hide all elements with class="citrusHills__tabcontent_wrapper" by default */
  var i, citrusHills__tabcontent_wrapper, citrusHills__speciesTablinks;
  citrusHills__tabcontent_wrapper = document.getElementsByClassName(
    "citrusHills__tabcontent_wrapper"
  );
  for (i = 0; i < citrusHills__tabcontent_wrapper.length; i++) {
    citrusHills__tabcontent_wrapper[i].style.display = "none";
  }

  // Show the specific tab content
  document.getElementById(species).style.display = "block";
  console.log(species)
  if (species === 'citrusHills__species-dog') {
    filterDogProducts("citrusHills-puppy_Dog-product");
  } 
  else {
    filterProducts("citrusHills-kitten_Cat-product");
  }
}


document.getElementById("defaultOpen").click();

// Add active class to the current button (highlight it)
document.addEventListener("DOMContentLoaded", function () {
  // for dog active class filter
  var dogBtnContainer = document.getElementById("citrusHills__speciesTabBtn");
  var dogBtns = dogBtnContainer.getElementsByClassName(
    "citrusHills__speciesTab_item"
  );
  addActiveClass(dogBtns, "citrusHills__species_active_tab");
});
function addActiveClass(element, activeClass) {
  for (var i = 0; i < element.length; i++) {
    element[i].addEventListener("click", function () {
      var current = document.getElementsByClassName(activeClass);
      current[0].className = current[0].className.replace(
        " " + activeClass,
        ""
      );
      this.className += " " + activeClass;
    });
  }
} //for active tab switcher




/**----------------------
   * product scroller js ---
   --------------------------*/
// tab Carousel js
// initialize product scroller Dog
advanceArrowsDog("citrusHills-puppy_Dog-product");
function advanceArrowsDog(idx) {
  var splideElement = "#" + idx;
  var splideDefaultOptions = {
    arrows: true,
    type: "slide",
    start: 0,
    focus: 0,
    pagination: false,
    rewindSpeed: 500,
    speed: 500,
    pauseOnHover: true,
    perPage: 6,
    perMove: 1,
    gap: 20,
    omitEnd: true,
    breakpoints: {
      375: {
        perPage: 1,
      },
      576: {
        perPage: 1,
      },
      991: {
        perPage: 3,
      },
      992: {
        perPage: 3,
      },
      1024: {
        perPage: 4,
      },
      1200: {
        perPage: 6,
      },
      1440: {
        perPage: 6,
      },
    },
  };

  new Splide(splideElement, splideDefaultOptions).mount();
}

/* ************************************************************************************** */
//for tab sweater & loader added
document.addEventListener("DOMContentLoaded", function () {
  filterDogProducts("citrusHills-puppy_Dog-product");
});
// for dog filter function
function filterDogProducts(c) {
  var x, i;
  x = document.getElementsByClassName("citrusHills__dogProduct");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "citrusDogTabShow");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], " citrusDogTabShow");
  }
  advanceArrowsDog(c);
}
function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
document.addEventListener("DOMContentLoaded", function () {
  // for dog active class filter
  var dogBtnContainer = document.getElementById("citrusHillsTabIdDog");
  var dogBtns = dogBtnContainer.getElementsByClassName(
    "citrusHills__dog_tab_item"
  );
  addActiveClass(dogBtns, "citrusHills__active_tab_dog");
});
function addActiveClass(element, activeClass) {
  for (var i = 0; i < element.length; i++) {
    element[i].addEventListener("click", function () {
      var current = document.getElementsByClassName(activeClass);
      current[0].className = current[0].className.replace(
        " " + activeClass,
        ""
      );
      this.className += " " + activeClass;
    });
  }
} //for Dog best seller tab switcher








/**----------------------
   * product scroller js ---
   --------------------------*/
// tab Carousel js
// initialize product scroller Cat
advanceArrows("citrusHills-kitten_Cat-product");
function advanceArrows(idx) {
  var splideElement = "#" + idx;
  var splideDefaultOptions = {
    arrows: true,
    type: "slide",
    start: 0,
    focus: 0,
    pagination: false,
    rewindSpeed: 500,
    speed: 500,
    pauseOnHover: true,
    perPage: 6,
    perMove: 1,
    gap: 20,
    omitEnd: true,
    breakpoints: {
      375: {
        perPage: 1,
      },
      576: {
        perPage: 1,
      },
      991: {
        perPage: 3,
      },
      992: {
        perPage: 3,
      },
      1024: {
        perPage: 4,
      },
      1200: {
        perPage: 6,
      },
      1440: {
        perPage: 6,
      },
    },
  };

  new Splide(splideElement, splideDefaultOptions).mount();
}

/* ************************************************************************************** */
//for tab sweater & loader added
document.addEventListener("DOMContentLoaded", function () {
  filterProducts("citrusHills-kitten_Cat-product");
});
// for dog filter function
function filterProducts(c) {
  var x, i;
  x = document.getElementsByClassName("citrusHills__Product");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "citrusTabShow");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], " citrusTabShow");
  }
  advanceArrows(c);
}
function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
document.addEventListener("DOMContentLoaded", function () {
  // for dog active class filter
  var dogBtnContainer = document.getElementById("citrusHillsTabId");
  var dogBtns = dogBtnContainer.getElementsByClassName("citrusHills__tab_item");
  addActiveClass(dogBtns, "citrusHills__active_tab");
});
function addActiveClass(element, activeClass) {
  for (var i = 0; i < element.length; i++) {
    element[i].addEventListener("click", function () {
      var current = document.getElementsByClassName(activeClass);
      current[0].className = current[0].className.replace(
        " " + activeClass,
        ""
      );
      this.className += " " + activeClass;
    });
  }
} //for Dog best seller tab switcher
