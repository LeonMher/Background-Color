const button = document.querySelector('.btn');
const body = document.querySelector('body')

button.addEventListener('click', function(){


    
        
    function randNum(){

        let randNumber = Math.floor(Math.random() * 10)
               
        return randNumber
    }

    let randNum1 = randNum()
    let randNum2 = randNum()
    let randNum3 = randNum()
    let randNum4 = randNum()
    let randNum5 = randNum()
    let randNum6 = randNum()
    body.style.backgroundColor = '#' + randNum1 + randNum2 + randNum3 + randNum4 + randNum5 + randNum6


    let mainDiv = document.querySelector('.mainContent')
    let newEl = document.createElement('h1')
    newEl.textContent = "#" + randNum1 + randNum2 + randNum3 + randNum4 + randNum5 + randNum6
    mainDiv.appendChild(newEl)

})



