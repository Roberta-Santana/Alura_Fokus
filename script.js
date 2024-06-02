const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBT = document.querySelector('.app__card-button--longo');
const botoes = document.querySelectorAll(".app__card-button");
const musicaFocoInput = document.querySelector('#alternar-musica');
const musica = new Audio('/sons/luna-rise-part-one.mp3');
musica.loop = true;
const btTexto = document.querySelector('#start-pause span');
const btImg = document.querySelector('.app__card-primary-butto-icon');

const telaTempo = document.querySelector('#timer')//getElementById('timer');
const imagem = document.querySelector('.app__image')//getElementsByClassName('app__image');
const texto = document.querySelector('.app__title'); 
//não sei pq, getbyClassName não funcionou no innerHTML
const somPause = new Audio('/sons/pause.mp3');
const somComecar = new Audio('/sons/play.wav');
const somFinal = new Audio('/sons/beep.mp3');

const startButton = document.querySelector('.app__card-primary-button')//getElementById('start-pause');
const focoTempo = 1500;
const curtoTempo = 300;
const longoTempo = 900;

let tempoDecorridoEmSegundos=1500;
let intervaloId= null;

function alterarContexto(contexto){
    botoes.forEach(function (contexto){
        contexto.classList.remove('active');
    })
    html.setAttribute('data-contexto', contexto);
    imagem.setAttribute('src', `./imagens/${contexto}.png`);
    switch (contexto) {
    case "foco":
        //tempoDecorridoEmSegundos = focoTempo;
            texto.innerHTML= `Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>`
            break;
    case "descanso-curto":
        //tempoDecorridoEmSegundos = curtoTempo;
           texto.innerHTML = `Que tal dar uma respirada<br>
                <strong class="app__title-strong">Faça uma pausa.</strong>`
            break;
    case 'descanso-longo':
        //tempoDecorridoEmSegundos=longoTempo;
            texto.innerHTML= `Hora de voltar a superfície<br>
                <strong class="app__title-strong">Faça uma pausa longa.</strong>`
            break;    
        default:
            break;
    }
    mostraTempo();
}

focoBt.addEventListener('click', ()=>{
    tempoDecorridoEmSegundos = focoTempo;
    alterarContexto('foco');
    focoBt.classList.add('active');
})

curtoBt.addEventListener('click',()=>{
    tempoDecorridoEmSegundos = curtoTempo;
    alterarContexto('descanso-curto');
    curtoBt.classList.add('active');
})

longoBT.addEventListener('click', ()=>{
    tempoDecorridoEmSegundos=longoTempo;
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

const contagemRegressiva = ()=>{ //arow function
    //inicar();
    if(tempoDecorridoEmSegundos<=0){
        //somFinal.play();
        alert('Tempo finalizado!');
        zerar();
        return        
    }
    tempoDecorridoEmSegundos --;
    mostraTempo();
}

startButton.addEventListener('click', inicar)

function inicar(){
    if(intervaloId){
        somPause.play();
        btImg.setAttribute('src', './imagens/play_arrow.png');
        zerar();
        console.log(intervaloId);
    return
    }
    somComecar.play();
    btImg.setAttribute('src', './imagens/pause.png');
    intervaloId=setInterval(contagemRegressiva,1000);
    btTexto.textContent='Pausar';
    console.log(intervaloId);
}

function zerar(){
    clearInterval(intervaloId);
    btTexto.textContent='Vamos lá!';
    intervaloId=null;
}

function mostraTempo(){
    const tempo = new Date(tempoDecorridoEmSegundos*1000);
    const tempoFormatado = tempo.toLocaleTimeString('pt-Br', {minute:'2-digit', second:'2-digit'});
    telaTempo.innerHTML = `${tempoFormatado}`
    console.log(tempoFormatado);
}
mostraTempo();