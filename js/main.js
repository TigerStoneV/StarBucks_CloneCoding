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

// scroll 될때마다 숫자가 늘어남
const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll',_.throttle(function(){
    console.log(window.scrollY);
    if(window.scrollY > 500){
        // badge 숨기기
        // gsap.to(요소 지속시간 옵션) 많이 씀 js animation library 
        gsap.to(badgeEl, .6 , {
            opacity:0,
            display: 'none'
        })
    }else {
        // badge 나타내기
        gsap.to(badgeEl, .6 , {
            opacity:1,
            display: 'block'
        })
    }
},300));
// _.throttle(함수,시간) 부화 주기. 
// 300 은 0.3s 의미 하는데 0.3초 부하를 줘서 동시에 함수 호출시 충돌 방지

const fadeEls = document.querySelectorAll(".visual .fade-in")
fadeEls.forEach( function (fadeEl,index) {
    gsap.to(fadeEl, .9 , {
        delay: (index + 1) * .7, // 0.7 -> 1.4 -> 2.1 -> 2.7 s
        opacity: 1,
    } );
});




