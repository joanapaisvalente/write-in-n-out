const text = document.querySelector(".text");

const typedText = "I'm a Developer.";

const typedTextArray = typedText.split('');

function getRandomTime() {
    return Math.random() * 0.55;
}

function writeText(currentLetter = 0) {
    const time = getRandomTime();
    setTimeout(() => {
        const currentText = text.innerHTML;
        const finalText = currentText + typedTextArray[currentLetter];
        console.log(finalText)
        
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
            return writeText(0);
        }
        return deleteText(--finalTextLength);
    }, time * 400);
}

writeText();