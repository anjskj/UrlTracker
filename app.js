let myUrls = []

let oldUrls = []
const inputEl = document.getElementById('input-el')
const ulEl = document.getElementById('ul-el')

const storedUrls = JSON.parse(localStorage.getItem("myUrls"));
if (storedUrls) {
    myUrls = storedUrls
    renderUrls(myUrls)
}
function renderUrls(urls) {
    let listItems = ""
    for (let i = 0; i < urls.length; i++) {
        listItems += `
        <li>
            <a target="_blank" href="${urls[i]}">
                ${urls[i]}
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

const inputBtn = document.getElementById('input-btn')
inputBtn.addEventListener('click', saveInput)
const deleteBtn = document.getElementById('delete-btn')
deleteBtn.addEventListener('dblclick', deleteAll)
const tabBtn = document.getElementById('tab-btn')
tabBtn.addEventListener('click', saveTab)


function saveInput() {
    myUrls.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myUrls", JSON.stringify(myUrls))
    renderUrls(myUrls)
}

function deleteAll() {
    localStorage.clear()
    myUrls = []
    renderUrls(myUrls)
}

function saveTab() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myUrls.push(tabs[0].url)
        localStorage.setItem("myUrls", JSON.stringify(myUrls))
        renderUrls(myUrls)
    })
}
