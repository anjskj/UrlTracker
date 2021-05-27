let myUrls = []

const inputEl = document.getElementById('input-el')
const ulEl = document.getElementById('ul-el')

const inputBtn = document.getElementById('input-btn')
inputBtn.addEventListener('click', saveUrl)

function saveUrl() {
    myUrls.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myUrls", JSON.stringify(myUrls))

    renderUrl()
    var storedUrls = JSON.parse(localStorage.getItem("myUrls"));
    console.log(localStorage.getItem("myUrls"))
}



function renderUrl() {
    let listItems = ""
    for (let i = 0; i < myUrls.length; i++) {
        listItems += `
        <li>
            <a target="_blank" href="${myUrls[i]}">
                ${myUrls[i]}
            </a>
        </li>
        `
        // //alt
        // const li = document.createElement('li')
        // li.textContent = myUrls[i]
        // ulEl.append(li)
    }
    ulEl.innerHTML = listItems
}
