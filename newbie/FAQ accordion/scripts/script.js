const buttons = document.querySelectorAll("button");

buttons.forEach((button)=>{
    button.addEventListener("click", (event)=>{
        const targetItem = event.target.closest(".question-item");
        const questionState = targetItem.classList.toggle("close");
        button.setAttribute('aria-expanded', !(questionState));
    });
});