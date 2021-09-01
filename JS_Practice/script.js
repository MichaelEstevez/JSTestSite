const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const counterEl = document.getElementById('counter')
const ulElement = document.getElementById('list-items')
let counter = 0 

function incrementCounter() {
    const addToCount = document.getElementById('counter')
    counter++
    addToCount.innerText = counter
}

function resetCount() {
    const reset = document.getElementById('counter')
    counter = 0 
    reset.innerText = counter 
}

btn1.addEventListener('click', incrementCounter)
btn2.addEventListener('click', resetCount)

// THIS IS FOR THE SECOND SECTION 
const btn3 = document.querySelector('#btn3')
const btn4 = document.querySelector('#btn4')
counter2 = 0

function addToList() {
    counter2++

    //create an element 
    const li = document.createElement('li')
    li.setAttribute('data-counter', counter2)
    li.innerHTML = '<b>Item </b>' + counter2 

    //append that element 
    ulElement.appendChild(li)
} 

function removeFromList() {

    //grabbing specific element in the list 
    const li = ulElement.querySelector('[data-counter="'+counter2+'"]')
    li.remove()
    counter2--
    counter2El.innerText = counter2

}

btn3.addEventListener('click', addToList)
btn4.addEventListener('click', removeFromList)