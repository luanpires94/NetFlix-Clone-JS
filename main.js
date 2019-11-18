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
function clicarslide1(){
   document.querySelector('.block__popular').style.display = 'none'
   document.querySelector('.block__popular--slide').style.display = 'flex'
}

function clicarslide2(){
   document.querySelector('.block__recommended').style.display = 'none'
   document.querySelector('.block__recommended--slide').style.display = 'flex'
}

function clicarslide3(){
   document.querySelector('.block__movies').style.display = 'none'
   document.querySelector('.block__movies--slide').style.display = 'flex'
}