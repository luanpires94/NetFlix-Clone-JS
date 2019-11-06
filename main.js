function search(){
if (document.querySelector('input').style.display == 'none'){

    document.querySelector('input').style.display = 'flex';
    document.querySelector('input').style.border = '0.5px solid #FFF'
 }

 else{
    document.querySelector('input').style.display = 'none';
    document.querySelector('input').style.border = 'none'
 }

}