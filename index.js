for (var i = 0; i<7; i++){
document.querySelectorAll("button")[i].addEventListener("click",Clickhandler);}

function Clickhandler(){
    
    eventhandler(this.innerHTML);
    
    buttonanimation(this.innerHTML);
}

document.addEventListener("keypress", function (event){
    eventhandler(event.key);
    buttonanimation(event.key);
});

function eventhandler(a){
    switch(a){
        case "w":
            var tom_1 = new Audio("tom-1.mp3");
            tom_1.play(); break;
        case "a":
            var tom_2 = new Audio("tom-2.mp3");
            tom_2.play(); break;
        case "s":
            var tom_3 = new Audio("tom-3.mp3");
            tom_3.play(); break;
        case "d":
            var tom_4 = new Audio("tom-4.mp3");
            tom_4.play(); break;
        case "j":
            var kick = new Audio("kick-bass.mp3");
            kick.play(); break;
        case "k":
            var snare = new Audio("snare.mp3");
            snare.play(); break;
        case "l":
            var crash = new Audio("crash.mp3");
            crash.play(); break;
    }

}

function buttonanimation(currentkey){
    var activation_button = document.querySelector("." + currentkey);

    activation_button.classList.add("pressed");
    setTimeout(function() {
        activation_button.classList.remove("pressed");
    },200);
}