function encrypt() {
    let inputText = document.getElementById("inputText").value;
    if (/[^a-z\s]/.test(inputText)) {
        alert("Solo se permiten letras minúsculas y espacios.");
        return;
    }
    let outputText = inputText.replace(/e/g, "enter")
                              .replace(/i/g, "imes")
                              .replace(/a/g, "ai")
                              .replace(/o/g, "ober")
                              .replace(/u/g, "ufat");
    document.getElementById("outputText").value = outputText;
    addToHistory(inputText, outputText);
}

function decrypt() {
    let inputText = document.getElementById("inputText").value;
    if (/[^a-z\s]/.test(inputText)) {
        alert("Solo se permiten letras minúsculas y espacios.");
        return;
    }
    let outputText = inputText.replace(/enter/g, "e")
                              .replace(/imes/g, "i")
                              .replace(/ai/g, "a")
                              .replace(/ober/g, "o")
                              .replace(/ufat/g, "u");
    document.getElementById("outputText").value = outputText;
    addToHistory(inputText, outputText);
}

function copyText() {
    let outputText = document.getElementById("outputText");
    outputText.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}

function addToHistory(input, output) {
    let historyList = document.getElementById("historyList");
    let listItem = document.createElement("li");
    listItem.textContent = `Original: ${input} - Encriptado: ${output}`;
    historyList.appendChild(listItem);
}
function encrypt() {
    let inputText = document.getElementById("inputText").value;
    if (/[^a-z\s]/.test(inputText)) {
        alert("Solo se permiten letras minúsculas y espacios.");
        return;
    }
    let outputText = inputText.replace(/e/g, "enter")
                              .replace(/i/g, "imes")
                              .replace(/a/g, "ai")
                              .replace(/o/g, "ober")
                              .replace(/u/g, "ufat");
    document.getElementById("outputText").value = outputText;
    addToHistory(inputText, outputText);
    updateImage('encriptado');
}

function decrypt() {
    let inputText = document.getElementById("inputText").value;
    if (/[^a-z\s]/.test(inputText)) {
        alert("Solo se permiten letras minúsculas y espacios.");
        return;
    }
    let outputText = inputText.replace(/enter/g, "e")
                              .replace(/imes/g, "i")
                              .replace(/ai/g, "a")
                              .replace(/ober/g, "o")
                              .replace(/ufat/g, "u");
    document.getElementById("outputText").value = outputText;
    addToHistory(inputText, outputText);
    updateImage('desencriptado');
}

function copyText() {
    let outputText = document.getElementById("outputText");
    outputText.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}

function addToHistory(input, output) {
    let historyList = document.getElementById("historyList");
    let listItem = document.createElement("li");
    listItem.textContent = `Original: ${input} - Encriptado: ${output}`;
    historyList.appendChild(listItem);
}

function updateImage(status) {
    let statusImage = document.getElementById("statusImage");
    switch(status) {
        case 'encriptado':
            statusImage.src = "assets/encriptado.png";
            break;
        case 'desencriptado':
            statusImage.src = "assets/desencriptado.png";
            break;
        default:
            statusImage.src = "assets/noencriptado.png";
    }
}

// Inicializar la imagen al cargar la página
window.onload = function() {
    updateImage('noencriptado');
};