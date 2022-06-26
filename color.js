/*
orange: FF5733;
red: C70039;
purple/red: 900C3F;
purple: 511845;
*/

const arrayOfColors = ['#FF5733', '#C70039', '#511845', '#900C3F', '#cc3f21', '#f25c3d', '#de0744', '#c7063d', '#691f59', '#4d1841']



const shapeOfWAves = document.querySelectorAll('use');
const buttonColor = document.querySelector('button');
const navigation = document.querySelector('.navigation');

window.addEventListener('DOMContentLoaded', () => {
    const min = 0;
    const max = 10;
    //background: linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c);
    navigation.style.background = `linear-gradient(0.25turn, ${arrayOfColors[Math.floor(Math.random() * (max - min)) + min]}, ${arrayOfColors[Math.floor(Math.random() * (max - min)) + min]}, ${arrayOfColors[Math.floor(Math.random() * (max - min)) + min]})`;
    document.body.style.backgroundColor = arrayOfColors[Math.floor(Math.random() * (max - min)) + min];

    buttonColor.style.backgroundColor = arrayOfColors[Math.floor(Math.random() * (max - min)) + min];
    for (let i=0; i<shapeOfWAves.length; i++){
        shapeOfWAves[i].style.fill = arrayOfColors[Math.floor(Math.random() * (max - min)) + min];
    }
})

