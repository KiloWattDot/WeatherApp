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
    .then(data1 => {

        
        lat = data1['coord']['lat'];
        lon = data1['coord']['lon'];
        let nameValue = data1['name'];
        var tempValue = data1['main']['temp']
        var descValue = data1['weather'][0]['description']


        cityname.innerHTML = nameValue;
        temp.innerHTML = tempValue;
        desc.innerHTML = descValue;
        console.log(data1)
        console.log('Latitude:' + lat)
        console.log('Longitude:' + lon)

        
        FetchAll();

       
    })

   
  
})

function FetchAll() {
    fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&exclude=hourly,minutely&appid=8e04b40f20b6603b082aa92e3bc63978')
    // console.log(lat)

    .then(response => response.json()) 
    .then(data => {

       
        let uv_index_Value = data['current']['uvi']

        // let nameValue = data['name'];
        // var tempValue = data['main']['temp']
        // var descValue = data['weather'][0]['description']

        uv_index.innerHTML = uv_index_Value;
        console.log(data['current']['uvi'])
        // cityname.innerHTML = nameValue;
        // temp.innerHTML = tempValue;
        // desc.innerHTML = descValue;
        


    })

    .catch(err => alert("wrong city name!"))
}
