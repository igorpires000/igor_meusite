
const sonic = document.querySelector('.sonic');
const robot = document.querySelector('.robotnik');

function jump(){
    
    sonic.classList.add('jump')
    setTimeout(() =>{
        sonic.classList.remove('jump')
    }, 500)    
}


const loop = setInterval(() => {
        const robotPosition = robot.offsetLeft;
        const sonicPosition = +window.getComputedStyle(sonic).bottom.replace("px", "");
        const death = new Audio('./audio/game-over-song.mp3')
        
        if(robotPosition <= 130 && robotPosition > 0 && sonicPosition < 130){
            robot.style.animation = 'none'
            robot.style.left = `${robotPosition}px`
            
            sonic.style.animation = 'none'
            sonic.style.bottom = `${sonicPosition}px`

            sonic.src = './images/sonic-game-over.png';
            sonic.style.width = '150px'

            death.play()
            clearInterval(loop);
        }
    }, 10)

document.addEventListener('keyup', jump)