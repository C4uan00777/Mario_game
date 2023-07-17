const mario = document.querySelector('.Mario');
const pipe = document.querySelector('.pipe');






const jump = () =>{
    mario.classList.add('jump'); 

   setTimeout(()=>{
    mario.classList.remove('jump');
   }, 500 ); 
}

const Loop = setInterval(()=>{

   
    

    const pipePosicao = pipe.offsetLeft;
    const marioPosicao = +window.getComputedStyle(mario).bottom.replace('px','');

    if(pipePosicao <= 130 && pipePosicao > 0 && marioPosicao < 90){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosicao}px`;
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosicao}px`;

        mario.src = './images/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clearInterval(Loop);
    }

}, 10)



document.addEventListener('keydown', jump);



  