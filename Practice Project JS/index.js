var numberOfDrums= document.querySelectorAll(".drum").length;
console.log(numberOfDrums);
for(var i=0;i<numberOfDrums;i++){
    console.log(i);
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        
        clickAnimation(this.innerHTML);
        playSound(this.innerHTML);
        
        
    });
    
    
}


document.addEventListener("keypress",function(event){
    
    playSound(event.key);
    clickAnimation(event.key);
});
function playSound(key){
    
    switch(key){
            
        case "w":
            var wsound= new Audio('sounds/tom-1.mp3');
            wsound.play();
        break;
            
        case "a":
            var asound= new Audio('sounds/tom-2.mp3');
            asound.play();
        break;
            
        case "s":
            var ssound= new Audio('sounds/tom-3.mp3');
            ssound.play();
        break;
            
        case "d":
            var dsound= new Audio('sounds/tom-4.mp3');
            dsound.play();
        break;
            
        case "j":
            var jsound= new Audio('sounds/snare.mp3');
            jsound.play();
        break;
            
        case "k":
            var ksound= new Audio('sounds/crash.mp3');
            ksound.play();
        break;
            
        case "l":
            var lsound= new Audio('sounds/kick-bass.mp3');
            lsound.play();
        break;
        
        default: console.log(key) ;
            
            
            
    }
    
    };

function clickAnimation(keypressed){
    
    var selectedBtn= document.querySelector("."+ keypressed);
    
    selectedBtn.classList.add("pressed");
    
    setTimeout(function(){
        selectedBtn.classList.remove("pressed");
        
    },100);
    
    console.log(selectedBtn.classList);
    
}