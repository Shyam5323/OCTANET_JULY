let likebtn = document.querySelector("#likebtn");
let dislikebtn = document.querySelector("#dislikebtn");
let input = document.querySelector(".total_up");

likebtn.addEventListener('click' , ()=>{
    input.value = parseInt(input.value) + 1;
    Event.preventDefault();
    input.style.color = "#FF4500";
})
dislikebtn.addEventListener('click' , ()=>{
    input.value = parseInt(input.value) - 1;
    Event.preventDefault();
})