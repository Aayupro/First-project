for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",C);
    function C(){
        var B=this.innerHTML;
        makesound(B);
    }
}

document.addEventListener("keypress",function(event){
    makesound(event.key);
});


function makesound(key){
    switch(key){
        case "w":
            var tom1= new Audio("sounds/tom-1.mp3");
            tom1.play();
        case "a":
            var tom2= new Audio("sounds/tom-2.mp3");
            tom2.play();
        case "s":
            var tom3= new Audio("sounds/tom-3.mp3");
            tom3.play();
        case "d":
            var tom4= new Audio("sounds/tom-4.mp3");
            tom4.play();
        case "j":
            var tom5= new Audio("sounds/snare.mp3");
            tom5.play();
        case "k":
            var tom6= new Audio("sounds/kick.mp3");
            tom6.play();
        case "l":
            var tom7= new Audio("sounds/crash.mp3");
            tom7.play();
    }
}