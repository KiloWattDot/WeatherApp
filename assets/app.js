
var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
let cityname = document.querySelector('.name')
var desc = document.querySelector('.desc')
var temp = document.querySelector('.temp')
let uv_index = document.querySelector('.uv-index')
 

let lat = {};
let lon = {};

// let location;

button.addEventListener('click', function() {
    fetch('//api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=8e04b40f20b6603b082aa92e3bc63978&units=imperial')

    .then(response => response.json()) 
    .then(data => {

        
        lat = data['coord']['lat'];
        lon = data['coord']['lon'];
        let nameValue = data['name'];
        var tempValue = data['main']['temp']
        var descValue = data['weather'][0]['description']


        cityname.innerHTML = nameValue;
        temp.innerHTML = tempValue;
        desc.innerHTML = descValue;
        console.log(data)
        console.log('Latitude:' + lat)
        console.log('Longitude:' + lon)

        
        return fetch( 'https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&exclude=hourly,minutely&appid=8e04b40f20b6603b082aa92e3bc63978')

    })

    .then(response => response.json()) 
    .then(data => {

       
        let uv_index_Value = data['current']['uvi']

        // let nameValue = data['name'];
        // var tempValue = data['main']['temp']
        // var descValue = data['weather'][0]['description']

        uv_index.innerHTML = uv_index_Value;

    

        console.log(data['current']['uvi'])
        console.log(data)
        // cityname.innerHTML = nameValue;
        // temp.innerHTML = tempValue;
        // desc.innerHTML = descValue;
        


    })

    .catch(err => alert("wrong city name!"))
})

