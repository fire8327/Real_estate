/*jshint esnext: true */
function check() {
    let name = document.getElementById("name");
    let name_span = document.getElementById("name_span");
    let send = document.getElementById("send");
    let name_regs = /^[а-яА-я]/;
    if(name_regs.test(name.value)) {
        name_span.innerHTML = "";
        send.classList.add("bg-figma-yellow","hover:border-figma-black","hover:bg-figma-dyellow");  
        send.classList.remove("cursor-not-allowed");  
        send.disabled=false;       
    } else {
        name_span.innerHTML = "Ошибка! Поле должно быть заполнено и иметь внутри себя только русские буквы";
        send.classList.remove("bg-figma-yellow","hover:border-figma-black","hover:bg-figma-dyellow");  
        send.classList.add("cursor-not-allowed");  
        send.disabled=true;
    }

    let phone = document.getElementById("phone");
    let phone_span = document.getElementById("phone_span");
    let phone_regs = /^[0-9]/;
    if(phone_regs.test(phone.value)) {
        phone_span.innerHTML = "";
        send.classList.add("bg-figma-yellow","hover:border-figma-black","hover:bg-figma-dyellow");  
        send.classList.remove("cursor-not-allowed");  
        send.disabled=false;    
    } else {
        phone_span.innerHTML = "Ошибка! Поле должно быть заполнено и иметь внутри себя только цифры";
        send.classList.remove("bg-figma-yellow","hover:border-figma-black","hover:bg-figma-dyellow");  
        send.classList.add("cursor-not-allowed");  
        send.disabled=true;
    }

    let choice = document.getElementById("choice");
    let choice_span = document.getElementById("choice_span");
    let choice_regs = /^[а-яА-я]/;
    if(choice_regs.test(choice.value)) {
        choice_span.innerHTML = "";
        send.classList.add("bg-figma-yellow","hover:border-figma-black","hover:bg-figma-dyellow");  
        send.classList.remove("cursor-not-allowed");  
        send.disabled=false;    
    } else {
        choice_span.innerHTML = "Ошибка! Поле должно быть заполнено и иметь внутри себя только русские буквы";
        send.classList.remove("bg-figma-yellow","hover:border-figma-black","hover:bg-figma-dyellow");  
        send.classList.add("cursor-not-allowed");  
        send.disabled=true;
    }
}