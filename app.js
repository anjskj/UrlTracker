let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById('input-el')
const ulEl = document.getElementById('ul-el')

const inputBtn = document.getElementById('input-btn')
inputBtn.addEventListener('click', saveLead)


// const viewBtn = document.getElementById('view-btn')
// viewBtn.addEventListener('click', renderLead)

function saveLead() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLead()

}

function renderLead() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `<li>${myLeads[i]}</li>`

        // //alt
        // const li = document.createElement('li')
        // li.textContent = myLeads[i]
        // ulEl.append(li)
    }
    ulEl.innerHTML = listItems
}
