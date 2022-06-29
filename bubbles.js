function createBubble(){
    const bubbles = document.querySelector('.bubbles');
    const createElement = document.createElement('span');

    const min = 0;
    const max = 10;
    
    let size = Math.random() * 120;

    const arrayOfColors = ['#FF5733', '#C70039', '#511845', '#900C3F', '#cc3f21', '#f25c3d', '#de0744', '#c7063d', '#691f59', '#4d1841']
    
    createElement.style.width = 20 + size + 'px';
    createElement.style.height = 20 + size + 'px';
    createElement.style.backgroundColor = arrayOfColors[Math.floor(Math.random() * (max - min)) + min]
    createElement.style.left = Math.random() * innerWidth + 'px';
    bubbles.appendChild(createElement);

    setTimeout(() => {
        createElement.remove()
    }, 4000)
}

setInterval(createBubble, 500 )