const input = document.querySelector('input')
const btn = document.querySelector('button')
const dictionary = document.querySelector('.dictionary-app')



async function dictionaryFn(word){

const res = await fetch (`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
.then(res => res.json())

return res[0]

}

btn.addEventListener('click' , fetchandCreateCard)


async function fetchandCreateCard() {

const data = await dictionaryFn(input.value)

console.log(data)

let partOfSpeechArray = []

for(let i=0 ; i<data.meanings.length-1 ; i++) {

    partOfSpeechArray.push(data.meanings[i].partOfSpeech)


}






dictionary.innerHTML = `<div class="card">
<div class="property">
    <span>Word: </span>
    <span>${data.word}</span>
</div>


<div class="property">
    <span>Phonetics: </span>
    <span>${data.phonetic}</span>
</div>

<div class="property">
    <span>
    <audio control src="${data.phonetics[0].audio}"></audio>
 </span>
</div>


<div class="property">
    <span>Definition </span>
    <span>${data.meanings[0].definitions[0].definition}</span>
</div>

<div class="property">
    <span>Example </span>
    <span>${data.meanings[0].definitions[0].definition}</span>
</div>

<div class="property">
    <span>${partOfSpeechArray.map(e => e).join(', ')} </span>
</div>

`

}

dictionaryFn ('chair')
