var changeImage = document.querySelector('.changeImage__image');
var ChangeInput = document.querySelector('.changeImage__input');

function Change () {
    var index = ChangeInput.value;
    var link1 = 'https://source.unsplash.com/100x100';
    var link2 = 'https://source.unsplash.com/320x320';
    changeImage.setAttribute('src', link + index);
    console.log("vegeta")
    
}
Change();
ChangeInput.addEventListener('input', Change);
