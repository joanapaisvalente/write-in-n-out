const text = document.querySelector(".text");

const textArray = [
    "I'm a Developer.", 
    "I love programming.", 
    "Live, Laugh, Code."
];

let textPosition = 0;
let typedTextArray = textArray[textPosition].split('');

function getRandomTime() {
    return Math.random() * 0.55;
}

function changeTypedTextArray() {
    textPosition === textArray.length - 1 ? textPosition = 0 : textPosition++;
    typedTextArray = textArray[textPosition].split('');
}

function writeText(currentLetter = 0) {
    const time = getRandomTime();
    setTimeout(() => {
        const currentText = text.innerHTML;
        const finalText = currentText + typedTextArray[currentLetter];
        
        text.innerHTML = finalText;

        if (currentLetter + 1 === typedTextArray.length) {
            return deleteText(typedTextArray.length);
        }
        return writeText(++currentLetter);
    }, time * 1000);
}

function deleteText() {
    const time = getRandomTime();
    setTimeout(() => {
        const currentText = text.innerHTML;
        const finalText = currentText.slice(0, -1);

        text.innerHTML = finalText;

        let finalTextLength = finalText.split('').length;

        if (finalTextLength === 0) {
            changeTypedTextArray();
            return writeText(0);
        }
        return deleteText(--finalTextLength);
    }, time * 400);
}

writeText();