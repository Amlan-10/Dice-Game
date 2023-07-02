var NoOfButtons=document.querySelectorAll(".drum").length;
for(var i=0;i<NoOfButtons;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var button=this.innerHTML;
        makeSound(button);
    });
}
  
    document.addEventListener("keypress",function(event){
        makeSound(event.key);
    });
function makeSound(key){

    switch(key ){
        case 'w':
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play()
            this.style.color="white";
            break;
        case 'a':
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play()
            this.style.color="white";
            break;
        case 's':
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play()
            this.style.color="white";
            break;
        case 'd':
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play()
            this.style.color="white";
            break;
        case 'j':
            var audio=new Audio("sounds/snare.mp3");
            audio.play()
            this.style.color="white";
            break;
        case 'k':
            var audio=new Audio("sounds/crash.mp3");
            audio.play()
            this.style.color="white";
            break;

        case 'l':
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play()
            this.style.color="white";
            break;
        default:console.log(button)

        
    }
}
