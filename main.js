const translate = document.querySelector('.translate').addEventListener('click', () => {
  let areaOfText = document.querySelector('.area-of-text').value;
  // areaOfText.indexOf(' ')
  let index = 0;
  const whiteSpaceArray = [];

  while ((index = areaOfText.indexOf(' ', index+1)) > 0){
    whiteSpaceArray.push(index);
  }

  changeSigns(areaOfText, whiteSpaceArray)

})
function replaceWhiteSpace() {
  min = Math.ceil(1);
  max = Math.floor(3);
  max2 = Math.floor(9);

  return `&#128${Math.floor(Math.random() * (max - min + 1)) + min}${Math.floor(Math.random() * (max2 - min + 1)) + min}${Math.floor(Math.random() * (max2 - min + 1)) + min}`;
}

function replaceAt(s, ilosc, c) {
  const arr = [...s]; 
  for (let i=0; i<arr.length; i++) {
    arr[ilosc[i]] = replaceWhiteSpace();    
  }
      
  let completlyNewArray = arr.join('') ; 
  const result = document.querySelector('.result').innerHTML =  completlyNewArray;
}

function changeSigns(areaOfText, whiteSpaceArray){
  replaceAt(areaOfText, whiteSpaceArray, '!')
}


