// Seleção de Elementos
const formContainer = document.querySelector("#form-container");
const multiplierInput = document.querySelector("#number");
const frequencyInput = document.querySelector("#multiplicator");
const multiplicationTable = document.querySelector("#multiplication-container");
const multiplicationTitle = document.querySelector("#multiplication-title span")

// Funções
const createTable = (multiplierNumber, frequencyNumber) =>{
    multiplicationTable.innerHTML = "";
    for(i = 1; i <= frequencyNumber; i++) {
        const result = multiplierNumber * i;

        const template = `<div class="row">
        <div class="operation">${multiplierNumber} x ${i} =</div>
        <div class="result">${result}</div>
    </div>`;

    const parser = new DOMParser();

    const htmlTemplate = parser.parseFromString(template, "text/html");

    const row = htmlTemplate.querySelector(".row");

    multiplicationTable.appendChild(row)

    }

    multiplicationTitle.innerHTML = multiplierNumber;

}

// Eventos
formContainer.addEventListener("submit", (e) =>{
    e.preventDefault();

    const multiplierNumber = +multiplierInput.value;
    const frequencyNumber = +frequencyInput.value;

    if (!multiplierNumber || !frequencyNumber) return;

    createTable(multiplierNumber, frequencyNumber);
})