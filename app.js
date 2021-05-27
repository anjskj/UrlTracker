let myLeads = []
const inputEl = document.getElementById('input-el')
const ulEl = document.getElementById('ul-el')

const inputBtn = document.getElementById('input-btn')
inputBtn.addEventListener('click', saveLead)

function saveLead() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLead()
}

function renderLead() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
        <li>
            <a target="_blank" href="http://${myLeads[i]}">
                ${myLeads[i]}
            </a>
        </li>
        `
        // //alt
        // const li = document.createElement('li')
        // li.textContent = myLeads[i]
        // ulEl.append(li)
    }
    ulEl.innerHTML = listItems
}
