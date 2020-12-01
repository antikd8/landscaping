let blocks = document.getElementsByClassName('contentBox');
for (let i = 0; i < blocks.length; i++) {
    blocks[i].addEventListener('click',function(){
        this.classList.toggle('active')
    })
}