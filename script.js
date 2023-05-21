const panles =document.querySelectorAll('.panel');
function open(){
    this.classList.toggle('open');
}
function openActive(e){
    console.log(e.propertyName);
    if(e.propertyName.includes('flex')){

        this.classList.toggle('open-active');
    }}
panles.forEach(panel=>panel.addEventListener('click',open));
panles.forEach(panel=>panel.addEventListener('transitionend',openActive));