window.addEventListener('load', ()=>{
    const calculateBtn = document.getElementById('calculate')
    const netSalaryInput = document.getElementById('netInput')
    const monthlyPeriod = document.getElementById('monthly')
    const annuallyPeriod = document.getElementById('annually')
    
    
    var grossSalaryDisplay = document.getElementById('grossResult')
    const kraDisplay = document.getElementById('kra')
    const nssfDisplay = document.getElementById('nssf')

    const income = []
    const personalRelief = 28800

    
    
    netSalaryInput.addEventListener('input', ()=>{
        const incomeSalary = netSalaryInput.value
        income.push(incomeSalary)
        return income
    })

    
    
    calculateBtn.addEventListener('click', ()=>{
        if(annuallyPeriod.checked == true && monthlyPeriod.checked == true){
            alert("Both monthly and annually can't be checked")
            return
        }

        
        
        if(monthlyPeriod.checked == true){
            document.getElementById('annually').disabled = true;
            var monthlyIncome = (income.slice(-1))
            var monthlySalary = (monthlyIncome.map(Number) * 12)

            
            
            if(monthlySalary < 288000){
                alert(`${monthlySalary} is not applicable to taxation`)
            }
            
            
            if(monthlySalary < 388000){
                const kraRate = (0.10 * monthlySalary)
                const nssfRate = (0.06 * monthlySalary)
                const grossIncome = (monthlySalary + personalRelief - nssfRate - kraRate)
                grossSalaryDisplay.textContent = grossIncome
                kraDisplay.textContent = kraRate
                nssfDisplay.innerText = nssfRate
            }
            
            
            if(monthlySalary > 388000){
                const kraRate = (0.30 * monthlySalary)
                const nssfRate = (0.06 * monthlySalary)
                const grossIncome = (monthlySalary + personalRelief - nssfRate - kraRate)
                grossSalaryDisplay.textContent = grossIncome
                kraDisplay.textContent = kraRate
                nssfDisplay.innerText = nssfRate
            }
        }
        

        if(annuallyPeriod.checked == true){
            document.getElementById('monthly').disabled = true;
            var anuallyIncome = income.slice(-1)
            var annualySalary = (anuallyIncome.map(Number) * 1)

            
            
            if(annualySalary < 288000){
                alert(`${annualySalary} is not applicable to taxation`)
            }

            
            if(annualySalary > 288000 && annualySalary < 388000){
                const kraRate = (0.10 * annualySalary)
                const nssfRate = (0.06 * annualySalary)
                const grossIncome = (annualySalary + personalRelief - nssfRate - kraRate)
                grossSalaryDisplay.textContent = grossIncome
                kraDisplay.textContent = kraRate
                nssfDisplay.innerText = nssfRate
            }
            
            
            
            if(annualySalary > 388000){
                const kraRate = (0.30 * annualySalary)
                const nssfRate = (0.06 * annualySalary)
                const grossIncome = (annualySalary + personalRelief - nssfRate - kraRate)
                grossSalaryDisplay.textContent = grossIncome
                kraDisplay.textContent = kraRate
                nssfDisplay.innerText = nssfRate
            }
        }
    })
})