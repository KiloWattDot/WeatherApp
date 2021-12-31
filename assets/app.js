var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
let cityname = document.querySelector('.name')
var desc = document.querySelector('.desc')
var temp = document.querySelector('.temp')

button.addEventListener('click', function() {
    fetch('//api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=8e04b40f20b6603b082aa92e3bc63978&units=imperial')

    .then(response => response.json()) 
    .then(data => {
        let nameValue = data['name'];
        var tempValue = data['main']['temp']
        var descValue = data['weather'][0]['description']


        cityname.innerHTML = nameValue;
        temp.innerHTML = tempValue;
        desc.innerHTML = descValue;
        console.log(data)
    })

    .catch(err => alert("wrong city name!"))
})