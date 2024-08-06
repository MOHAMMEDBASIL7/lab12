function toggleHighlight(){
    const element = document.getElementsByClassName('text');
    for(let i = 0; i<element.length;i++){
        element[i].classList.toggle('highlight');
    }
}