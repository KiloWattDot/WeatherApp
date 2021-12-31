
var Aus_Button = document.querySelector('.austin')
var Chi_Button = document.querySelector('.chicago')
var NY_Button = document.querySelector('.newyork')
var ORL_Button = document.querySelector('.orlando')
var SF_Button = document.querySelector('.sanfrancisco')
var Sea_Button = document.querySelector('.seattle')
var Den_Button = document.querySelector('.denver')
var ATL_Button = document.querySelector('.atlanta')



var inputValue = document.querySelector('.inputValue')
let cityname = document.querySelector('#city-date')
var temp = document.querySelector('#main-temp')
var wind = document.querySelector('#main-wind')
var humidity = document.querySelector('#main-humidity')
var uv_index = document.querySelector('#uv-index')

function getWeather() {
    fetch('//api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=8e04b40f20b6603b082aa92e3bc63978&units=imperial')

    .then(response => response.json()) 
    .then(data => console.log(data))
    

    .catch(err => alert('Wrong city name!'))
}




ATL_Button.addEventListener('click', function() {
    let lat = 33.740;
    let lon = 84.3380;
    fetch('//api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&exclude=hourly,minutely&appid=8e04b40f20b6603b082aa92e3bc63978')

    .then(response => response.json()) 
    .then(data => {

        
        // let nameValue = data['name'];
        var tempValue = data['current']['temp']
        var humidityValue = data['current']['humidity']
        // var windValue = data['wind']['speed']
        var uvi = data['current']['uvi']


        // cityname.innerHTML = nameValue;
        temp.innerHTML = tempValue;
        humidity.innerHTML = humidityValue;
        // wind.innerHTML = windValue;
        uv_index.innerHTML = uvi;
        console.log(data)
    })



    


})

Den_Button.addEventListener('click', function() {
    fetch('//api.openweathermap.org/data/2.5/weather?q=denver&appid=8e04b40f20b6603b082aa92e3bc63978&units=imperial')

    .then(response => response.json()) 
    .then(data => {

        let nameValue = data['name'];
        var tempValue = data['main']['temp']
        var humidityValue = data['main']['humidity']
        var windValue = data['wind']['speed']
        var descValue = data['weather'][0]['description']


        cityname.innerHTML = nameValue;
        temp.innerHTML = tempValue;
        humidity.innerHTML = humidityValue;
        wind.innerHTML = windValue;
        uv_index.innerHTML = descValue;
        console.log(data)
    })



    


})

Sea_Button.addEventListener('click', function() {
    fetch('//api.openweathermap.org/data/2.5/weather?q=seattle&appid=8e04b40f20b6603b082aa92e3bc63978&units=imperial')

    .then(response => response.json()) 
    .then(data => {

        let nameValue = data['name'];
        var tempValue = data['main']['temp']
        var humidityValue = data['main']['humidity']
        var windValue = data['wind']['speed']
        var descValue = data['weather'][0]['description']


        cityname.innerHTML = nameValue;
        temp.innerHTML = tempValue;
        humidity.innerHTML = humidityValue;
        wind.innerHTML = windValue;
        uv_index.innerHTML = descValue;
        console.log(data)
    })


})


SF_Button.addEventListener('click', function() {
    fetch('//api.openweathermap.org/data/2.5/weather?q=san francisco&appid=8e04b40f20b6603b082aa92e3bc63978&units=imperial')

    .then(response => response.json()) 
    .then(data => {

        let nameValue = data['name'];
        var tempValue = data['main']['temp']
        var humidityValue = data['main']['humidity']
        var windValue = data['wind']['speed']
        var descValue = data['weather'][0]['description']


        cityname.innerHTML = nameValue;
        temp.innerHTML = tempValue;
        humidity.innerHTML = humidityValue;
        wind.innerHTML = windValue;
        uv_index.innerHTML = descValue;
        console.log(data)
    })


    


})


ORL_Button.addEventListener('click', function() {
    fetch('//api.openweathermap.org/data/2.5/weather?q=orlando&appid=8e04b40f20b6603b082aa92e3bc63978&units=imperial')

    .then(response => response.json()) 
    .then(data => {

        let nameValue = data['name'];
        var tempValue = data['main']['temp']
        var humidityValue = data['main']['humidity']
        var windValue = data['wind']['speed']
        var descValue = data['weather'][0]['description']


        cityname.innerHTML = nameValue;
        temp.innerHTML = tempValue;
        humidity.innerHTML = humidityValue;
        wind.innerHTML = windValue;
        uv_index.innerHTML = descValue;
        console.log(data)
    })



    


})

NY_Button.addEventListener('click', function() {
    fetch('//api.openweathermap.org/data/2.5/weather?q=new york&appid=8e04b40f20b6603b082aa92e3bc63978&units=imperial')

    .then(response => response.json()) 
    .then(data => {

        let nameValue = data['name'];
        var tempValue = data['main']['temp']
        var humidityValue = data['main']['humidity']
        var windValue = data['wind']['speed']
        var descValue = data['weather'][0]['description']


        cityname.innerHTML = nameValue;
        temp.innerHTML = tempValue;
        humidity.innerHTML = humidityValue;
        wind.innerHTML = windValue;
        uv_index.innerHTML = descValue;
        console.log(data)
    })



    


})

Chi_Button.addEventListener('click', function() {
    fetch('//api.openweathermap.org/data/2.5/weather?q=chicago&appid=8e04b40f20b6603b082aa92e3bc63978&units=imperial')

    .then(response => response.json()) 
    .then(data => {

        let nameValue = data['name'];
        var tempValue = data['main']['temp']
        var humidityValue = data['main']['humidity']
        var windValue = data['wind']['speed']
        var descValue = data['weather'][0]['description']


        cityname.innerHTML = nameValue;
        temp.innerHTML = tempValue;
        humidity.innerHTML = humidityValue;
        wind.innerHTML = windValue;
        uv_index.innerHTML = descValue;
        console.log(data)
    })



    


})

Aus_Button.addEventListener('click', function() {
    fetch('//api.openweathermap.org/data/2.5/weather?q=austin&appid=8e04b40f20b6603b082aa92e3bc63978&units=imperial')

    .then(response => response.json()) 
    .then(data => {

        let nameValue = data['name'];
        var tempValue = data['main']['temp']
        var humidityValue = data['main']['humidity']
        var windValue = data['wind']['speed']
        var descValue = data['weather'][0]['description']


        cityname.innerHTML = nameValue;
        temp.innerHTML = tempValue;
        humidity.innerHTML = humidityValue;
        wind.innerHTML = windValue;
        uv_index.innerHTML = descValue;
        console.log(data)
    })



    


})




// var search = document.querySelector('form');
// ["click", "keypress"].forEach(ev=>{
//   search.addEventListener(ev, function(e){
//      if(ev=="click"){
//        console.log("click");//clicked
//        getWeather();
//      }
//      if(e.keyCode==13){
//       console.log("click");//enter key pressed
//       getWeather();
//      }
//   });
// });

