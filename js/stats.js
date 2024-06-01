const list = document.getElementById("list")

function createItem(name,date,price) {
    const div = document.createElement('div')
    div.className = "list-item";

    const html = `<h1>${name}</h1><hr><h1>${date}</h1><hr><div class="row"><h1>${price}</h1><h1>DT</h1></div>`
    div.innerHTML = html
    list.appendChild(div)
}

window.onload = function () {
    console.log("loaded")
    const list = JSON.parse(localStorage.getItem("item-list"))
    for (let index = 0; index < list.length; index++) {
        
        
        const str = list[index].toString()

        const props = str.split(":")
        createItem(props[1],props[2],props[3])
    }
}