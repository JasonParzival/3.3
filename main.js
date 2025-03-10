async function process() {
    let r = await fetch("/data.json");
    let data = await r.json();
    
    let mappedData = data.map(item => {
        return item['Насколько курс был полезен?'];
    })

    let uniqueValues = [...new Set(mappedData)]

    let select = document.querySelector("#selectPoleznost");

    uniqueValues.forEach(item => {
        let option = document.createElement("option"); 

        option.value = item; 
        option.text = item;

        select.add(option) 
    })

    //----------------------

    mappedData = data.map(item => {
        return item['Насколько доволен форматом обучения?'];
    })

    uniqueValues = [...new Set(mappedData)]

    select = document.querySelector("#selectDovolnost");

    uniqueValues.forEach(item => {
        let option = document.createElement("option"); 

        option.value = item; 
        option.text = item;

        select.add(option) 
    })

    //----------------------------

    mappedData = data.map(item => {
        return item['Отметь, в какой мере ты удовлетворен курсом?'];
    })

    uniqueValues = [...new Set(mappedData)]

    select = document.querySelector("#selectUdovletvoronost");

    uniqueValues.forEach(item => {
        let option = document.createElement("option"); 

        option.value = item; 
        option.text = item;

        select.add(option) 
    })
}

async function processFilter() {
    let r = await fetch("/data.json");
    let data = await r.json();
    console.log(data);

    let filteredData = data.filter(item => item["Насколько курс был полезен?"] == "Полезный")
    console.log(filteredData);
}

async function fillListPoleznost() {
    let r = await fetch("/data.json");
    let data = await r.json();

    let container = document.querySelector("#elements-container > tbody");

    let selectPoleznost = document.querySelector("#selectPoleznost");

    let filteredData = data.filter(item => {
        // чтобы не получалось сильно длинных строчек, я перепишу анонимную функцию через return
        return selectPoleznost.value == 'не важно' || item['Насколько курс был полезен?'] == selectPoleznost.value
    })

    container.replaceChildren()

    filteredData.forEach(item => {
        container.insertAdjacentHTML("beforeend", `
        <tr>
            <td>${item['ID']}</td>
            <td>${item['Насколько курс был полезен?']}</td>
            <td>${item['Насколько доволен форматом обучения?']}</td>
            <td>${item['Отметь, в какой мере ты удовлетворен курсом?']}</td>
        </tr>
        `);
    })
}

async function onSelectPoleznostChanged() {
    let selectPoleznost = document.querySelector("#selectDovolnost")
    console.log(selectPoleznost.value)
    fillList()
}

async function fillListDovolnost() {
    let r = await fetch("/data.json");
    let data = await r.json();

    let container = document.querySelector("#elements-container > tbody");

    let selectDovolnost = document.querySelector("#selectDovolnost");

    let filteredData = data.filter(item => {
        // чтобы не получалось сильно длинных строчек, я перепишу анонимную функцию через return
        return selectDovolnost.value == 'не важно' || item['Насколько курс был полезен?'] == selectDovolnost.value
    })

    container.replaceChildren()

    filteredData.forEach(item => {
        container.insertAdjacentHTML("beforeend", `
        <tr>
            <td>${item['ID']}</td>
            <td>${item['Насколько курс был полезен?']}</td>
            <td>${item['Насколько доволен форматом обучения?']}</td>
            <td>${item['Отметь, в какой мере ты удовлетворен курсом?']}</td>
        </tr>
        `);
    })
}

async function onSelectDovolnostChanged() {
    let selectDovolnost = document.querySelector("#selectDovolnost")
    console.log(selectDovolnost.value)
    fillList()
}

async function fillListUdovletvoronost() {
    let r = await fetch("/data.json");
    let data = await r.json();

    let container = document.querySelector("#elements-container > tbody");

    let selectUdovletvoronost = document.querySelector("#selectUdovletvoronost");

    let filteredData = data.filter(item => {
        // чтобы не получалось сильно длинных строчек, я перепишу анонимную функцию через return
        return selectUdovletvoronost.value == 'не важно' || item['Насколько курс был полезен?'] == selectUdovletvoronost.value
    })

    container.replaceChildren()

    filteredData.forEach(item => {
        container.insertAdjacentHTML("beforeend", `
        <tr>
            <td>${item['ID']}</td>
            <td>${item['Насколько курс был полезен?']}</td>
            <td>${item['Насколько доволен форматом обучения?']}</td>
            <td>${item['Отметь, в какой мере ты удовлетворен курсом?']}</td>
        </tr>
        `);
    })
}

async function onSelectUdovletvoronostChanged() {
    let selectUdovletvoronost = document.querySelector("#selectUdovletvoronost")
    console.log(selectUdovletvoronost.value)
    fillList()
}

process()
processFilter()
fillListPoleznost()
fillListDovolnost()
fillListUdovletvoronost()