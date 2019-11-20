//HEADER
function search(){
if (document.querySelector('input').style.display == 'flex'){
    document.querySelector('input').style.display = 'none';
    document.querySelector('.interaction__box').style.border = 'none'
    
 }

 else{
    document.querySelector('input').style.display = 'flex';
    document.querySelector('.interaction__box').style.border = 'solid 2px white';
 }

}
//FIM DA HEADER

// SLIDE 1
function clicardireita1(){
   document.querySelector('.block__series').style.display = 'none'
   document.querySelector('.block__series--slide').style.display = 'flex'
}

function clicaresquerda1(){
   document.querySelector('.block__series--slide').style.display = 'none'
   document.querySelector('.block__series').style.display = 'flex'
}
//FIM SLIDE 1

// SLIDE 2
function clicardireita2(){
   document.querySelector('.block__movies').style.display = 'none'
   document.querySelector('.block__movies--slide').style.display = 'flex'
}

function clicaresquerda2(){
   document.querySelector('.block__movies--slide').style.display = 'none'
   document.querySelector('.block__movies').style.display = 'flex'
}
//FIM SLIDE 2

//SLIDE 3
function clicardireita3(){
   document.querySelector('.block__recently').style.display = 'none'
   document.querySelector('.block__recently--slide').style.display = 'flex'
}

function clicaresquerda3(){
   document.querySelector('.block__recently--slide').style.display = 'none'
   document.querySelector('.block__recently').style.display = 'flex'
}
//FIM SLIDE 3

//SLIDE 4
function clicardireita4(){
   document.querySelector('.block__mylist').style.display = 'none'
   document.querySelector('.block__mylist--slide').style.display = 'flex'
}

function clicaresquerda4(){
   document.querySelector('.block__mylist--slide').style.display = 'none'
   document.querySelector('.block__mylist').style.display = 'flex'
}
//FIM SLIDE 4
