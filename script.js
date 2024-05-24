const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBT = document.querySelector('.app__card-button--longo');

const telaTempo = document.querySelector('#timer')//getElementById('timer');
const imagem = document.querySelector('.app__image')//getElementsByClassName('app__image');
const texto = document.getElementsByClassName('app__title');

const startButton = document.querySelector('.app__card-primary-button')//getElementById('start-pause');
const focoTempo = 1500;
const curtoTempo = 300;
const longoTempo = 900;

focoBt.addEventListener('click', ()=>{
    html.setAttribute('data-contexto', 'foco');
    imagem.setAttribute('src','/imagens/foco.png');
})

curtoBt.addEventListener('click',()=>{
    html.setAttribute('data-contexto', 'descanso-curto');
    imagem.setAttribute('src','/imagens/descanso-curto.png');
})

longoBT.addEventListener('click', ()=>{
    html.setAttribute('data-contexto', 'descanso-longo');
    imagem.setAttribute('src','/imagens/descanso-longo.png')
})

