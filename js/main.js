const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input'); // searchEl 안에서 input Tag 찾음

searchEl.addEventListener('click', function(){    
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus',function(){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder','통합검색');
});
searchInputEl.addEventListener('blur',function(){
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder','');
});
