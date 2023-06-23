const convertButton = document.querySelector(".convert-button")
const currencySelector = document.querySelector(".currency-select")


const convertValues = async () =>  {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueToConverted = document.querySelector(".currency-value") 
console.log(currencySelector.value)

  
 const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())

 const dolar = data.USDBRL.high
 const euro = data.EURBRL.high
 const bitcoin = data.BTCBRL.high
const libra = 6.07
 


    if(currencySelector.value == "dolar"){
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US",{
            style:"currency",
            currency:"USD"
    
        }).format(inputCurrencyValue / dolar)
    }

    if (currencySelector.value == "euro"){
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE",{
            style:"currency",
            currency:"EUR"
        }).format(inputCurrencyValue / euro)

    }


    if (currencySelector.value == "libra"){
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-gb", {
            style: "currency",
            currency:"GBP"
        }).format(inputCurrencyValue / libra)
        
            }


    if(currencySelector.value == "bitcoin"){
         currencyValueToConverted.innerHTML = new Intl.NumberFormat("BTC", {
          style:"currency",
         currency:"BTC"
             }).format(inputCurrencyValue / bitcoin)  
            }
            
            if(currencySelector.value == "real"){
                currencyValueToConverted.innerHTML = new Intl.NumberFormat("pt-BR",{
                    style:"currency",
                    currency:"BRL"
                }).fotmat(inputCurrencyValue)
            }



   currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style:"currency",
        currency:"BRL"
    }).format(inputCurrencyValue)

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-us", {
        style:"currency", 
        currency:"USD"
    }).format(inputCurrencyValue )

    
    

    





}

function changeCurrency(){
const currencyName = document.getElementById("currency-name")
const currencyImg = document.querySelector(".currency-img")

if(currencySelector.value == "dolar"){
    currencyName.innerHTML = "dolar americano"
    currencyImg.src = "./assets/dolar.png"
}

if (currencySelector.value == "euro"){
currencyName.innerHTML = "Euro"
currencyImg.src = "./assets/euro.png"

}

if (currencySelector.value == "libra"){
    currencyName.innerHTML = "libra"
    currencyImg.src = "./assets/libra.png"
}


if (currencySelector.value == "bitcoin"){
currencyName.innerHTML ="bitcoin"
currencyImg.src = "./assets/bitcoin.png"

}


convertValues()


}




currencySelector.addEventListener("change", changeCurrency )
convertButton.addEventListener("click", convertValues)

