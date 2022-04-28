// Check Button Press
let drumButtons = document.querySelectorAll('.drum').length;

for (let i = 0; i < drumButtons; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', function () {
        let buttonHTML = this.innerHTML;
        
        makeSound(buttonHTML);

        buttonAnimation(buttonHTML);
    })
}

// Check Keyboard press
document.addEventListener('keydown', function(e) {
    makeSound(e.key);

    buttonAnimation(e.key);
})


let makeSound = function(key) {
    switch (key) {
        case 'a':
            let snare = new Audio('./sounds/snare.mp3');
            snare.play()
            break;
        case 's':
            let tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play()
            break;
        case 'd':
            let tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play()
            break;
        case 'f':
            let tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play()
            break;
        case 'j':
            let tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play()
            break;
        case 'k':
            let bass = new Audio('./sounds/kick-bass.mp3');
            bass.play()
            break;
        case 'l':
            let crash = new Audio('./sounds/crash.mp3');
            crash.play()
            break;
        default: 
            console.log(key)
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey)
    activeButton.classList.add('pressed');
    setTimeout(function() {
        activeButton.classList.remove('pressed');
    }, 100)
    
}
