const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBT = document.querySelector('.app__card-button--longo');
const botoes = document.querySelectorAll(".app__card-button");
const musicaFocoInput = document.querySelector('#alternar-musica');
const musica = new Audio('/sons/luna-rise-part-one.mp3');
musica.loop = true;


const telaTempo = document.querySelector('#timer')//getElementById('timer');
const imagem = document.querySelector('.app__image')//getElementsByClassName('app__image');
const texto = document.querySelector('.app__title'); 
//não sei pq, getbyClassName não funcionou no innerHTML

const startButton = document.querySelector('.app__card-primary-button')//getElementById('start-pause');
const focoTempo = 1500;
const curtoTempo = 300;
const longoTempo = 900;

function alterarContexto(contexto){
    botoes.forEach(function (contexto){
        contexto.classList.remove('active');
    })
    html.setAttribute('data-contexto', contexto);
    imagem.setAttribute('src', `./imagens/${contexto}.png`);
    switch (contexto) {
    case "foco":
            texto.innerHTML= `Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>`
            break;
    case "descanso-curto":
           texto.innerHTML = `Que tal dar uma respirada<br>
                <strong class="app__title-strong">Faça uma pausa.</strong>`
            break;
    case 'descanso-longo':
            texto.innerHTML= `Hora de voltar a superfície<br>
                <strong class="app__title-strong">Faça uma pausa longa.</strong>`
            break;    
        default:
            break;
    }
}

focoBt.addEventListener('click', ()=>{
    alterarContexto('foco');
    focoBt.classList.add('active');
})

curtoBt.addEventListener('click',()=>{
    alterarContexto('descanso-curto');
    curtoBt.classList.add('active');
})

longoBT.addEventListener('click', ()=>{
    alterarContexto('descanso-longo');
    longoBT.classList.add('active');
})

musicaFocoInput.addEventListener('change', ()=>{
    if(musica.paused){
        musica.play();
    } else{
        musica.pause();
    }
})