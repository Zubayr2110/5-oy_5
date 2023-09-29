const main = document.querySelector('.main')
const url = `https://course-api.com/javascript-store-products`
const search = document.getElementById('search')


let texta = document.querySelector('.texta')
let texti = document.querySelector('.texti')
let textm = document.querySelector('.textm')
let textl = document.querySelector('.textl')




function getdata() {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(element => {
            let div = document.createElement('div')
            div.innerHTML = `
                <div class="main_content">
                    <img src="${element.fields.image[0].url}" width="400px" height="250px" style="border: 1px solid cyan;" id="img">
                    <h1>${element.fields.name}</h1> 
                    <p class="price">$ ${element.fields.price}</p>   
                </div>
            `
            main.appendChild(div)
        });
    })
}

getdata()
search.addEventListener('input', (e) => {
    if (e.target.value != '') {
        fetch(`https://course-api.com/javascript-store-products?id=rec43w3ipXvP28vog`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            main.innerHTML = ``
            data.forEach(item => {
                let div = document.createElement('div')
                div.innerHTML = `
                    <div class="main_content">
                        <img src="${item.fields.image[0].url}" width="400px" height="250px" style="border: 1px solid cyan;" id="img">
                        <h1>${item.fields.name}</h1> 
                        <p class="price">$ ${item.fields.price}</p>   
                    </div>
                `
                main.innerHTML = ''
                main.appendChild(div)
            });
        })
    }
})