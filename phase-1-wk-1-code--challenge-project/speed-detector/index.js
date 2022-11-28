const points = document.getElementById('points')
const inputEl = document.getElementById('input')
const btnEl = document.getElementById('btn')


btnEl.addEventListener('click', ()=>{
    
    if(inputEl.value == ''){
        return
    }
    
    else if(inputEl.value <=70){
        points.style.color = 'green'
    return points.textContent = 'Ok'
    }


    
    else if(inputEl.value > 70){
        const speedBal = (inputEl.value - 70)/5

        if(speedBal >= 12){
            alert('License suspended')
            inputEl.setAttribute('readonly', 'readonly')
        }
        points.style.color = 'red'
        return points.textContent = speedBal
    }
})