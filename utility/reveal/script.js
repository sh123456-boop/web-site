window.addEventListener('scroll', function() {
    const revealText = document.querySelector('.reveal-text');
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    // 스크롤이 화면 높이의 절반 이상일 때 텍스트 나타내기
    if (scrollY > windowHeight / 2) {
        revealText.style.opacity = 1;
        revealText.style.transform = 'translateY(0)';
    } else {
        revealText.style.opacity = 0;
        revealText.style.transform = 'translateY(20px)';
    }
});
