
/**----------------------
   * product scroller js ---
   --------------------------*/
// tab Carousel js
// initialize product scroller
advanceHealth__longevityArrows("brandName-health__longevity-product");
function advanceHealth__longevityArrows(idx) {
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
    filterHealth__longevityProducts("brandName-health__longevity-product");
});
// for dog filter function
function filterHealth__longevityProducts(c) {
    var x, i;
    x = document.getElementsByClassName("citrusX__healthLogvity__product");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        RemoveClass(x[i], "citrusTabShow");
        if (x[i].className.indexOf(c) > -1) AddClass(x[i], " citrusTabShow");
    }
    advanceHealth__longevityArrows(c);
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

