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