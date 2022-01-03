
var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
let cityname = document.querySelector('.name')
var desc = document.querySelector('.desc')
var temp = document.querySelector('.temp')
let uv_index = document.querySelector('.uv-index')
let uv_index_color = document.getElementById('#uvIndexColor')
 

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
        
            if (uv_index_Value <= 3.0) {
                uv_index.style.backgroundColor = 'green'; uv_index.style.color = 'white';
            } else if (uv_index_Value <= 7.0 && uv_index_Value > 3.0) {
                uv_index.style.backgroundColor = 'yellow'; uv_index.style.color = 'black';
            } else if (uv_index_Value <= 10.0 && uv_index_Value > 7.0) {
                uv_index.style.backgroundColor = 'red'; uv_index.style.color = 'black';
            } else {
                uv_index.style.backgroundColor = 'purple'; uv_index.style.color = 'white';
            }
        
          //display uv color
          uv_index_color.display = 'block';
         
        })

    

        // console.log(data['current']['uvi'])
        
        // cityname.innerHTML = nameValue;
        // temp.innerHTML = tempValue;
        // desc.innerHTML = descValue;
        
        .catch(err => alert("wrong city name!"))

    })






