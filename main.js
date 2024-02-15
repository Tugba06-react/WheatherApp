const cityInput = document.querySelector(".inputText");
const btn = document.querySelector(".btn");

//console.log(btn,cityInput)

//btn izleme
btn.addEventListener("click", ()=>{ 

getData(cityInput.value); 

})

function getData(name){

const API = "40289a680940775f0f701a23306c0158"

//base-url
const baseUrl= `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API}&units=metric`
 
console.log(baseUrl)
//fetch url promise döndür
fetch(baseUrl)
.then( res => res.json())
.then (data => {
       const{name, sys:{country}, main:{temp, feels_like,humidity},wind:{speed}, weather:[{description}]} = data
       console.log(name, country, temp, feels_like, description,humidity , speed )

       const city= document.querySelector("#sehir")
       const temperature= document.querySelector("#sicaklik")
       const hum= document.querySelector("#humidity")
       const wind= document.querySelector("#wind")
       const weatherDesc= document.querySelector("#havaDurumu")
       const feels= document.querySelector("#hissedilen")
       console.log(city,temperature,hum,wind,weatherDesc,feels)
        // js'e çekilen elemanları html elemanları yerine yerleştirme
        city.textContent = `${name}, ${country}`
        temperature.innerHTML= `${temp.toFixed(1)}°`
        hum.textContent=`Humidity: ${humidity}%`
        wind.innerHTML=`Wind: ${speed} km/s`
        weatherDesc.textContent = `Wheather: ${description}`
        feels.innerHTML= `Real Feel: ${feels_like}°`
    })
.catch(err => console.log(err))
}

