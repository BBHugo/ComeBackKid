document.querySelector('h1').addEventListener('click', getACuteDogPhoto)

function getACuteDogPhoto(){
    const fetchImg = fetch('https://dog.ceo/api/breeds/image/random')
    const testJson = fetchImg.then(response => response.json())
    document.querySelector('h2').innerText = Math.ceil(Math.random() * 10)
    document.querySelector('img').src= testJson
}