let buttonElem = document.getElementById("button")
let phraseElem = document.getElementById("phrase")
let authorElem = document.getElementById("author")

function getWholeNumber(min, max) {
    // without the max number in the result
    return Math.floor(Math.random() * (max - min) + min);
}


function changePhrase() {
    let randomPhrase = getWholeNumber(0, phrases.length);
    phraseElem.innerText=`"${phrases[randomPhrase].text}"`;
    authorElem.innerText = phrases[randomPhrase].author;
}

changePhrase()

buttonElem.addEventListener("click",changePhrase)