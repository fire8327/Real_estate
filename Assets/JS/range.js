/*jshint esnext: true */
window.onload = function(){
    slideOne();
    slideTwo();
    slideOne2();
    slideTwo2();
    slideOne3();
    slideTwo3();
    slideOne4();
    slideTwo4();
};

let first = document.getElementById("slider-1");
let second = document.getElementById("slider-2");
let min = document.getElementById("range-1");
let max = document.getElementById("range-2");
let first2 = document.getElementById("slider2-1");
let second2 = document.getElementById("slider2-2");
let min2 = document.getElementById("range2-1");
let max2 = document.getElementById("range2-2");
let first3 = document.getElementById("slider3-1");
let second3 = document.getElementById("slider3-2");
let min3 = document.getElementById("range3-1");
let max3 = document.getElementById("range3-2");
let first4 = document.getElementById("slider4-1");
let second4 = document.getElementById("slider4-2");
let min4 = document.getElementById("range4-1");
let max4 = document.getElementById("range4-2");
let minGap = 0;

function slideOne(){
    if(parseInt(second.value) - parseInt(first.value) <= minGap){
        first.value = parseInt(second.value) - minGap;
    }
    min.textContent = first.value;
    min.dataset.from = first.value;
    fillColor();    
}
function slideOne2(){
    if(parseInt(second2.value) - parseInt(first2.value) <= minGap){
        first2.value = parseInt(second2.value) - minGap;
    }
    min2.textContent = first2.value;
    min2.dataset.from = first2.value;
    fillColor();    
}
function slideOne3(){
    if(parseInt(second3.value) - parseInt(first3.value) <= minGap){
        first3.value = parseInt(second3.value) - minGap;
    }
    min3.textContent = first3.value;
    min3.dataset.from = first3.value;
    fillColor();    
}
function slideOne4(){
    if(parseInt(second4.value) - parseInt(first4.value) <= minGap){
        first4.value = parseInt(second4.value) - minGap;
    }
    min4.textContent = first4.value;
    min4.dataset.from = first4.value;
    fillColor();    
}

function slideTwo(){
    if(parseInt(second.value) - parseInt(first.value) <= minGap){
        second.value = parseInt(first.value) + minGap;
    }
    max.textContent = second.value;
    max.dataset.before = second.value;
    fillColor();
}
function slideTwo2(){
    if(parseInt(second2.value) - parseInt(first2.value) <= minGap){
        second2.value = parseInt(first2.value) + minGap;
    }
    max2.textContent = second2.value;
    max2.dataset.before = second2.value;
    fillColor();
}
function slideTwo3(){
    if(parseInt(second3.value) - parseInt(first3.value) <= minGap){
        second3.value = parseInt(first3.value) + minGap;
    }
    max3.textContent = second3.value;
    max3.dataset.before = second3.value;
    fillColor();
}
function slideTwo4(){
    if(parseInt(second4.value) - parseInt(first4.value) <= minGap){
        second4.value = parseInt(first4.value) + minGap;
    }
    max4.textContent = second4.value;
    max4.dataset.before = second4.value;
    fillColor();
}