// Search buttom

var searchButton = document.querySelector('.form1')


// City Buttons
var Aus_Button = document.querySelector('.austin')
var Chi_Button = document.querySelector('.chicago')
var NY_Button = document.querySelector('.newyork')
var ORL_Button = document.querySelector('.orlando')
var SF_Button = document.querySelector('.sanfrancisco')
var Sea_Button = document.querySelector('.seattle')
var Den_Button = document.querySelector('.denver')
var ATL_Button = document.querySelector('.atlanta')


// user input
var inputValue = document.querySelector('.inputValue')

//  CurrentDate
let current_date = document.querySelector('.date')

// First Fetch (CurrentWeather API)
let cityname = document.querySelector('#city')
var temp = document.querySelector('#main-temp')
var wind = document.querySelector('#main-wind')
var humidity = document.querySelector('#main-humidity')

// 2nd Fetch (OneCall API)
var uv_index = document.querySelector('#uv-index')
let uv_index_color = document.getElementById('#uvIndexColor')

// Forecast 
    // Card1
    var card1_date = document.querySelector('.card1-date')
    var card1_temp = document.querySelector('.card1-temp')
    var card1_wind = document.querySelector('.card1-wind')
    var card1_humidity = document.querySelector('.card1-humidity')

    // Card2
    var card2_date = document.querySelector('.card2-date')
    var card2_temp = document.querySelector('.card2-temp')
    var card2_wind = document.querySelector('.card2-wind')
    var card2_humidity = document.querySelector('.card2-humidity')

    // Card 3 
    var card3_date = document.querySelector('.card3-date')
    var card3_temp = document.querySelector('.card3-temp')
    var card3_wind = document.querySelector('.card3-wind')
    var card3_humidity = document.querySelector('.card3-humidity')

    // Card 4 
    var card4_date = document.querySelector('.card4-date')
    var card4_temp = document.querySelector('.card4-temp')
    var card4_wind = document.querySelector('.card4-wind')
    var card4_humidity = document.querySelector('.card4-humidity')

    // Card 5

    var card5_date = document.querySelector('.card5-date')
    var card5_temp = document.querySelector('.card5-temp')
    var card5_wind = document.querySelector('.card5-wind')
    var card5_humidity = document.querySelector('.card5-humidity')


// Coordinates

let lat = {};
let lon = {};




// Submit button

searchButton.addEventListener('submit', function(e) {
    e.preventDefault()
    fetch('//api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=8e04b40f20b6603b082aa92e3bc63978&units=imperial')

    .then(response => response.json())
    .then(data => {

        lat = data['coord']['lat'];
        lon = data['coord']['lon'];
        let citynameValue = data['name'];
        var tempValue = data['main']['temp']
        var humidityValue = data['main']['humidity']
        var windValue = data['wind']['speed']
    


        cityname.innerHTML = citynameValue;
        temp.innerHTML = tempValue;
        humidity.innerHTML = humidityValue;
        wind.innerHTML = windValue;

        console.log(data)
        // console.log(window.moment(day.dt*1000).format('ddd'))


        return fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&exclude=hourly,minutely&appid=8e04b40f20b6603b082aa92e3bc63978&units=imperial')

    })



    .then(response => response.json())
    .then(data => {

        let uv_index_Value = data['current']['uvi']
        let current_date_Value = moment(data['current']['dt'] * 1000).format('L')
        
     
        card1_date_Value = moment(data['daily'][0]['dt'] * 1000).format('dddd')
        card1_temp_Value = data['daily'][0]['temp']['day']
        card1_wind_Value = data['daily'][0]['wind_speed']
        card1_humidity_Value = data['daily'][0]['humidity']

        card2_date_Value =  moment(data['daily'][1]['dt'] * 1000).format('dddd')
        card2_temp_Value = data['daily'][1]['temp']['day']
        card2_wind_Value = data['daily'][1]['wind_speed']
        card2_humidity_Value = data['daily'][1]['humidity']


        card3_date_Value = moment(data['daily'][2]['dt'] * 1000).format('dddd')
        card3_temp_Value = data['daily'][2]['temp']['day']
        card3_wind_Value = data['daily'][2]['wind_speed']
        card3_humidity_Value = data['daily'][2]['humidity']


        card4_date_Value = moment(data['daily'][3]['dt'] * 1000).format('dddd')
        card4_temp_Value = data['daily'][3]['temp']['day']
        card4_wind_Value = data['daily'][3]['wind_speed']
        card4_humidity_Value = data['daily'][3]['humidity']


        card5_date_Value = moment(data['daily'][4]['dt'] * 1000).format('dddd')
        card5_temp_Value = data['daily'][4]['temp']['day']
        card5_wind_Value = data['daily'][4]['wind_speed']
        card5_humidity_Value = data['daily'][4]['humidity']



      
    

        

        // if (uv_index_Value > )
        current_date.innerHTML = current_date_Value;

        
        card1_date.innerHTML = card1_date_Value;    
        card1_temp.innerHTML = card1_temp_Value;
        card1_wind.innerHTML = card1_wind_Value;
        card1_humidity.innerHTML = card1_humidity_Value;

        card2_date.innerHTML = card2_date_Value;
        card2_temp.innerHTML = card2_temp_Value;
        card2_wind.innerHTML = card2_wind_Value;
        card2_humidity.innerHTML = card2_humidity_Value;


        card3_date.innerHTML = card3_date_Value;
        card3_temp.innerHTML = card3_temp_Value;
        card3_wind.innerHTML = card3_wind_Value;
        card3_humidity.innerHTML = card3_humidity_Value;

        card4_date.innerHTML = card4_date_Value;
        card4_temp.innerHTML = card4_temp_Value;
        card4_wind.innerHTML = card4_wind_Value;
        card4_humidity.innerHTML = card4_humidity_Value;
        
        card5_date.innerHTML = card5_date_Value;
        card5_temp.innerHTML = card5_temp_Value;
        card5_wind.innerHTML = card5_wind_Value;
        card5_humidity.innerHTML = card5_humidity_Value;

        console.log(data['current']['uvi'])
        console.log(data['daily'][0]['temp']['day'])
        console.log(current_date_Value)
        console.log(card1_date_Value)
        console.log(data)

        
        uv_index.innerHTML = uv_index_Value;
        if (uv_index_Value <= 3.0) {
            uv_index.style.backgroundColor = 'green'; uv_index.style.color = 'white';
        } else if (uv_index_Value <= 7.0 && uv_index_Value > 3.0) {
            uv_index.style.backgroundColor = 'yellow'; uv_index.style.color = 'black';
        } else if (uv_index_Value <= 10.0 && uv_index_Value > 7.0) {
            uv_index.style.backgroundColor = 'red'; uv_index.style.color = 'black';
        } else {
            uv_index.style.backgroundColor = 'purple'; uv_index.style.color = 'white';
        }   //display uv color
        //  // uv_index_color.display = 'block'
        
     
     
        
        




        
    })

})


// City Buttons

ATL_Button.addEventListener('click', function() {
    fetch('//api.openweathermap.org/data/2.5/weather?q=atlanta&appid=8e04b40f20b6603b082aa92e3bc63978&units=imperial')

    .then(response => response.json()) 
    .then(data => {

        lat = data['coord']['lat'];
        lon = data['coord']['lon'];
        let citynameValue = data['name'];
        var tempValue = data['main']['temp']
        var humidityValue = data['main']['humidity']
        var windValue = data['wind']['speed']
    


        cityname.innerHTML = citynameValue;
        temp.innerHTML = tempValue;
        humidity.innerHTML = humidityValue;
        wind.innerHTML = windValue;
       
        
        console.log(data)
        // console.log(window.moment(day.dt*1000).format('ddd'))


        return fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&exclude=hourly,minutely&appid=8e04b40f20b6603b082aa92e3bc63978&units=imperial')
    })

    .then(response => response.json())
    .then(data => {

        let uv_index_Value = data['current']['uvi']
        let current_date_Value = moment(data['current']['dt'] * 1000).format('L')
        
        card1_date_Value = moment(data['daily'][0]['dt'] * 1000).format('dddd')
        card1_temp_Value = data['daily'][0]['temp']['day']
        card1_wind_Value = data['daily'][0]['wind_speed']
        card1_humidity_Value = data['daily'][0]['humidity']

        card2_date_Value =  moment(data['daily'][1]['dt'] * 1000).format('dddd')
        card2_temp_Value = data['daily'][1]['temp']['day']
        card2_wind_Value = data['daily'][1]['wind_speed']
        card2_humidity_Value = data['daily'][1]['humidity']


        card3_date_Value = moment(data['daily'][2]['dt'] * 1000).format('dddd')
        card3_temp_Value = data['daily'][2]['temp']['day']
        card3_wind_Value = data['daily'][2]['wind_speed']
        card3_humidity_Value = data['daily'][2]['humidity']


        card4_date_Value = moment(data['daily'][3]['dt'] * 1000).format('dddd')
        card4_temp_Value = data['daily'][3]['temp']['day']
        card4_wind_Value = data['daily'][3]['wind_speed']
        card4_humidity_Value = data['daily'][3]['humidity']


        card5_date_Value = moment(data['daily'][4]['dt'] * 1000).format('dddd')
        card5_temp_Value = data['daily'][4]['temp']['day']
        card5_wind_Value = data['daily'][4]['wind_speed']
        card5_humidity_Value = data['daily'][4]['humidity']



        // if (uv_index_Value > )
        current_date.innerHTML = current_date_Value;

        card1_date.innerHTML = card1_date_Value;    
        card1_temp.innerHTML = card1_temp_Value;
        card1_wind.innerHTML = card1_wind_Value;
        card1_humidity.innerHTML = card1_humidity_Value;

        card2_date.innerHTML = card2_date_Value;
        card2_temp.innerHTML = card2_temp_Value;
        card2_wind.innerHTML = card2_wind_Value;
        card2_humidity.innerHTML = card2_humidity_Value;


        card3_date.innerHTML = card3_date_Value;
        card3_temp.innerHTML = card3_temp_Value;
        card3_wind.innerHTML = card3_wind_Value;
        card3_humidity.innerHTML = card3_humidity_Value;

        card4_date.innerHTML = card4_date_Value;
        card4_temp.innerHTML = card4_temp_Value;
        card4_wind.innerHTML = card4_wind_Value;
        card4_humidity.innerHTML = card4_humidity_Value;
        
        card5_date.innerHTML = card5_date_Value;
        card5_temp.innerHTML = card5_temp_Value;
        card5_wind.innerHTML = card5_wind_Value;
        card5_humidity.innerHTML = card5_humidity_Value;
        
                
        uv_index.innerHTML = uv_index_Value;
        if (uv_index_Value <= 3.0) {
            uv_index.style.backgroundColor = 'green'; uv_index.style.color = 'white';
        } else if (uv_index_Value <= 7.0 && uv_index_Value > 3.0) {
            uv_index.style.backgroundColor = 'yellow'; uv_index.style.color = 'black';
        } else if (uv_index_Value <= 10.0 && uv_index_Value > 7.0) {
            uv_index.style.backgroundColor = 'red'; uv_index.style.color = 'black';
        } else {
            uv_index.style.backgroundColor = 'purple'; uv_index.style.color = 'white';
        }   //display uv color
         // uv_index_color.display = 'block' 
        
        
        


        console.log(data['current']['uvi'])
        console.log(data['daily'][0]['temp']['day'])
        console.log(card1_date_Value)
        console.log(data)



        
    })



})

Den_Button.addEventListener('click', function() {
    fetch('//api.openweathermap.org/data/2.5/weather?q=denver&appid=8e04b40f20b6603b082aa92e3bc63978&units=imperial')

    .then(response => response.json()) 
    .then(data => {

        lat = data['coord']['lat'];
        lon = data['coord']['lon'];
        let citynameValue = data['name'];
        var tempValue = data['main']['temp']
        var humidityValue = data['main']['humidity']
        var windValue = data['wind']['speed']
    


        cityname.innerHTML = citynameValue;
        temp.innerHTML = tempValue;
        humidity.innerHTML = humidityValue;
        wind.innerHTML = windValue;
       
        
        console.log(data)
        // console.log(window.moment(day.dt*1000).format('ddd'))


        return fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&exclude=hourly,minutely&appid=8e04b40f20b6603b082aa92e3bc63978&units=imperial')
    })

    .then(response => response.json())
    .then(data => {

        let uv_index_Value = data['current']['uvi']
        let current_date_Value = moment(data['current']['dt'] * 1000).format('L')
        
        card1_date_Value = moment(data['daily'][0]['dt'] * 1000).format('dddd')
        card1_temp_Value = data['daily'][0]['temp']['day']
        card1_wind_Value = data['daily'][0]['wind_speed']
        card1_humidity_Value = data['daily'][0]['humidity']

        card2_date_Value =  moment(data['daily'][1]['dt'] * 1000).format('dddd')
        card2_temp_Value = data['daily'][1]['temp']['day']
        card2_wind_Value = data['daily'][1]['wind_speed']
        card2_humidity_Value = data['daily'][1]['humidity']


        card3_date_Value = moment(data['daily'][2]['dt'] * 1000).format('dddd')
        card3_temp_Value = data['daily'][2]['temp']['day']
        card3_wind_Value = data['daily'][2]['wind_speed']
        card3_humidity_Value = data['daily'][2]['humidity']


        card4_date_Value = moment(data['daily'][3]['dt'] * 1000).format('dddd')
        card4_temp_Value = data['daily'][3]['temp']['day']
        card4_wind_Value = data['daily'][3]['wind_speed']
        card4_humidity_Value = data['daily'][3]['humidity']


        card5_date_Value = moment(data['daily'][4]['dt'] * 1000).format('dddd')
        card5_temp_Value = data['daily'][4]['temp']['day']
        card5_wind_Value = data['daily'][4]['wind_speed']
        card5_humidity_Value = data['daily'][4]['humidity']



        // if (uv_index_Value > )
        current_date.innerHTML = current_date_Value;

        card1_date.innerHTML = card1_date_Value;    
        card1_temp.innerHTML = card1_temp_Value;
        card1_wind.innerHTML = card1_wind_Value;
        card1_humidity.innerHTML = card1_humidity_Value;

        card2_date.innerHTML = card2_date_Value;
        card2_temp.innerHTML = card2_temp_Value;
        card2_wind.innerHTML = card2_wind_Value;
        card2_humidity.innerHTML = card2_humidity_Value;


        card3_date.innerHTML = card3_date_Value;
        card3_temp.innerHTML = card3_temp_Value;
        card3_wind.innerHTML = card3_wind_Value;
        card3_humidity.innerHTML = card3_humidity_Value;

        card4_date.innerHTML = card4_date_Value;
        card4_temp.innerHTML = card4_temp_Value;
        card4_wind.innerHTML = card4_wind_Value;
        card4_humidity.innerHTML = card4_humidity_Value;
        
        card5_date.innerHTML = card5_date_Value;
        card5_temp.innerHTML = card5_temp_Value;
        card5_wind.innerHTML = card5_wind_Value;
        card5_humidity.innerHTML = card5_humidity_Value;
        
                
        uv_index.innerHTML = uv_index_Value;
        if (uv_index_Value <= 3.0) {
            uv_index.style.backgroundColor = 'green'; uv_index.style.color = 'white';
        } else if (uv_index_Value <= 7.0 && uv_index_Value > 3.0) {
            uv_index.style.backgroundColor = 'yellow'; uv_index.style.color = 'black';
        } else if (uv_index_Value <= 10.0 && uv_index_Value > 7.0) {
            uv_index.style.backgroundColor = 'red'; uv_index.style.color = 'black';
        } else {
            uv_index.style.backgroundColor = 'purple'; uv_index.style.color = 'white';
        }   //display uv color
         // uv_index_color.display = 'block'
        
        


        console.log(data['current']['uvi'])
        console.log(data['daily'][0]['temp']['day'])
        console.log(card1_date_Value)
        console.log(data)


        
    })



})

Sea_Button.addEventListener('click', function() {
    fetch('//api.openweathermap.org/data/2.5/weather?q=seattle&appid=8e04b40f20b6603b082aa92e3bc63978&units=imperial')

    .then(response => response.json()) 
    .then(data => {

        lat = data['coord']['lat'];
        lon = data['coord']['lon'];
        let citynameValue = data['name'];
        var tempValue = data['main']['temp']
        var humidityValue = data['main']['humidity']
        var windValue = data['wind']['speed']
    


        cityname.innerHTML = citynameValue;
        temp.innerHTML = tempValue;
        humidity.innerHTML = humidityValue;
        wind.innerHTML = windValue;
       
        
        console.log(data)
        // console.log(window.moment(day.dt*1000).format('ddd'))


        return fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&exclude=hourly,minutely&appid=8e04b40f20b6603b082aa92e3bc63978&units=imperial')
    })

    .then(response => response.json())
    .then(data => {

        let uv_index_Value = data['current']['uvi']
        let current_date_Value = moment(data['current']['dt'] * 1000).format('L')
        
        card1_date_Value = moment(data['daily'][0]['dt'] * 1000).format('dddd')
        card1_temp_Value = data['daily'][0]['temp']['day']
        card1_wind_Value = data['daily'][0]['wind_speed']
        card1_humidity_Value = data['daily'][0]['humidity']

        card2_date_Value =  moment(data['daily'][1]['dt'] * 1000).format('dddd')
        card2_temp_Value = data['daily'][1]['temp']['day']
        card2_wind_Value = data['daily'][1]['wind_speed']
        card2_humidity_Value = data['daily'][1]['humidity']


        card3_date_Value = moment(data['daily'][2]['dt'] * 1000).format('dddd')
        card3_temp_Value = data['daily'][2]['temp']['day']
        card3_wind_Value = data['daily'][2]['wind_speed']
        card3_humidity_Value = data['daily'][2]['humidity']


        card4_date_Value = moment(data['daily'][3]['dt'] * 1000).format('dddd')
        card4_temp_Value = data['daily'][3]['temp']['day']
        card4_wind_Value = data['daily'][3]['wind_speed']
        card4_humidity_Value = data['daily'][3]['humidity']


        card5_date_Value = moment(data['daily'][4]['dt'] * 1000).format('dddd')
        card5_temp_Value = data['daily'][4]['temp']['day']
        card5_wind_Value = data['daily'][4]['wind_speed']
        card5_humidity_Value = data['daily'][4]['humidity']




        // if (uv_index_Value > )
        current_date.innerHTML = current_date_Value;

        card1_date.innerHTML = card1_date_Value;    
        card1_temp.innerHTML = card1_temp_Value;
        card1_wind.innerHTML = card1_wind_Value;
        card1_humidity.innerHTML = card1_humidity_Value;

        card2_date.innerHTML = card2_date_Value;
        card2_temp.innerHTML = card2_temp_Value;
        card2_wind.innerHTML = card2_wind_Value;
        card2_humidity.innerHTML = card2_humidity_Value;


        card3_date.innerHTML = card3_date_Value;
        card3_temp.innerHTML = card3_temp_Value;
        card3_wind.innerHTML = card3_wind_Value;
        card3_humidity.innerHTML = card3_humidity_Value;

        card4_date.innerHTML = card4_date_Value;
        card4_temp.innerHTML = card4_temp_Value;
        card4_wind.innerHTML = card4_wind_Value;
        card4_humidity.innerHTML = card4_humidity_Value;
        
        card5_date.innerHTML = card5_date_Value;
        card5_temp.innerHTML = card5_temp_Value;
        card5_wind.innerHTML = card5_wind_Value;
        card5_humidity.innerHTML = card5_humidity_Value;
        
        
        
        
        uv_index.innerHTML = uv_index_Value;
        if (uv_index_Value <= 3.0) {
            uv_index.style.backgroundColor = 'green'; uv_index.style.color = 'white';
        } else if (uv_index_Value <= 7.0 && uv_index_Value > 3.0) {
            uv_index.style.backgroundColor = 'yellow'; uv_index.style.color = 'black';
        } else if (uv_index_Value <= 10.0 && uv_index_Value > 7.0) {
            uv_index.style.backgroundColor = 'red'; uv_index.style.color = 'black';
        } else {
            uv_index.style.backgroundColor = 'purple'; uv_index.style.color = 'white';
        }   //display uv color
         // uv_index_color.display = 'block'
        

        console.log(data['current']['uvi'])
        console.log(data['daily'][0]['temp']['day'])
        console.log(card1_date_Value)
        console.log(data)




        
    })



})


SF_Button.addEventListener('click', function() {
    fetch('//api.openweathermap.org/data/2.5/weather?q=san francisco&appid=8e04b40f20b6603b082aa92e3bc63978&units=imperial')

    .then(response => response.json()) 
    .then(data => {

        lat = data['coord']['lat'];
        lon = data['coord']['lon'];
        let citynameValue = data['name'];
        var tempValue = data['main']['temp']
        var humidityValue = data['main']['humidity']
        var windValue = data['wind']['speed']
    


        cityname.innerHTML = citynameValue;
        temp.innerHTML = tempValue;
        humidity.innerHTML = humidityValue;
        wind.innerHTML = windValue;
       
        
        console.log(data)
        // console.log(window.moment(day.dt*1000).format('ddd'))


        return fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&exclude=hourly,minutely&appid=8e04b40f20b6603b082aa92e3bc63978&units=imperial')
    })

    .then(response => response.json())
    .then(data => {

        let uv_index_Value = data['current']['uvi']
        let current_date_Value = moment(data['current']['dt'] * 1000).format('L')

        card1_date_Value = moment(data['daily'][0]['dt'] * 1000).format('dddd')
        card1_temp_Value = data['daily'][0]['temp']['day']
        card1_wind_Value = data['daily'][0]['wind_speed']
        card1_humidity_Value = data['daily'][0]['humidity']

        card2_date_Value =  moment(data['daily'][1]['dt'] * 1000).format('dddd')
        card2_temp_Value = data['daily'][1]['temp']['day']
        card2_wind_Value = data['daily'][1]['wind_speed']
        card2_humidity_Value = data['daily'][1]['humidity']


        card3_date_Value = moment(data['daily'][2]['dt'] * 1000).format('dddd')
        card3_temp_Value = data['daily'][2]['temp']['day']
        card3_wind_Value = data['daily'][2]['wind_speed']
        card3_humidity_Value = data['daily'][2]['humidity']


        card4_date_Value = moment(data['daily'][3]['dt'] * 1000).format('dddd')
        card4_temp_Value = data['daily'][3]['temp']['day']
        card4_wind_Value = data['daily'][3]['wind_speed']
        card4_humidity_Value = data['daily'][3]['humidity']


        card5_date_Value = moment(data['daily'][4]['dt'] * 1000).format('dddd')
        card5_temp_Value = data['daily'][4]['temp']['day']
        card5_wind_Value = data['daily'][4]['wind_speed']
        card5_humidity_Value = data['daily'][4]['humidity']



     

        // if (uv_index_Value > )
        current_date.innerHTML = current_date_Value;

        card1_date.innerHTML = card1_date_Value;    
        card1_temp.innerHTML = card1_temp_Value;
        card1_wind.innerHTML = card1_wind_Value;
        card1_humidity.innerHTML = card1_humidity_Value;

        card2_date.innerHTML = card2_date_Value;
        card2_temp.innerHTML = card2_temp_Value;
        card2_wind.innerHTML = card2_wind_Value;
        card2_humidity.innerHTML = card2_humidity_Value;


        card3_date.innerHTML = card3_date_Value;
        card3_temp.innerHTML = card3_temp_Value;
        card3_wind.innerHTML = card3_wind_Value;
        card3_humidity.innerHTML = card3_humidity_Value;

        card4_date.innerHTML = card4_date_Value;
        card4_temp.innerHTML = card4_temp_Value;
        card4_wind.innerHTML = card4_wind_Value;
        card4_humidity.innerHTML = card4_humidity_Value;
        
        card5_date.innerHTML = card5_date_Value;
        card5_temp.innerHTML = card5_temp_Value;
        card5_wind.innerHTML = card5_wind_Value;
        card5_humidity.innerHTML = card5_humidity_Value;
        
           
        uv_index.innerHTML = uv_index_Value;
        if (uv_index_Value <= 3.0) {
            uv_index.style.backgroundColor = 'green'; uv_index.style.color = 'white';
        } else if (uv_index_Value <= 7.0 && uv_index_Value > 3.0) {
            uv_index.style.backgroundColor = 'yellow'; uv_index.style.color = 'black';
        } else if (uv_index_Value <= 10.0 && uv_index_Value > 7.0) {
            uv_index.style.backgroundColor = 'red'; uv_index.style.color = 'black';
        } else {
            uv_index.style.backgroundColor = 'purple'; uv_index.style.color = 'white';
        }   //display uv color
         // uv_index_color.display = 'block'
        
        


        console.log(data['current']['uvi'])
        console.log(data['daily'][0]['temp']['day'])
        console.log(card1_date_Value)
        console.log(data)




        
    })



})


ORL_Button.addEventListener('click', function() {
    fetch('//api.openweathermap.org/data/2.5/weather?q=orlando&appid=8e04b40f20b6603b082aa92e3bc63978&units=imperial')

    .then(response => response.json()) 
    .then(data => {

        lat = data['coord']['lat'];
        lon = data['coord']['lon'];
        let citynameValue = data['name'];
        var tempValue = data['main']['temp']
        var humidityValue = data['main']['humidity']
        var windValue = data['wind']['speed']
    


        cityname.innerHTML = citynameValue;
        temp.innerHTML = tempValue;
        humidity.innerHTML = humidityValue;
        wind.innerHTML = windValue;
       
        
        console.log(data)
        // console.log(window.moment(day.dt*1000).format('ddd'))


        return fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&exclude=hourly,minutely&appid=8e04b40f20b6603b082aa92e3bc63978&units=imperial')
    })

    .then(response => response.json())
    .then(data => {

        let uv_index_Value = data['current']['uvi']
          let current_date_Value = moment(data['current']['dt'] * 1000).format('L')

        card1_date_Value = moment(data['daily'][0]['dt'] * 1000).format('dddd')
        card1_temp_Value = data['daily'][0]['temp']['day']
        card1_wind_Value = data['daily'][0]['wind_speed']
        card1_humidity_Value = data['daily'][0]['humidity']

        card2_date_Value =  moment(data['daily'][1]['dt'] * 1000).format('dddd')
        card2_temp_Value = data['daily'][1]['temp']['day']
        card2_wind_Value = data['daily'][1]['wind_speed']
        card2_humidity_Value = data['daily'][1]['humidity']


        card3_date_Value = moment(data['daily'][2]['dt'] * 1000).format('dddd')
        card3_temp_Value = data['daily'][2]['temp']['day']
        card3_wind_Value = data['daily'][2]['wind_speed']
        card3_humidity_Value = data['daily'][2]['humidity']


        card4_date_Value = moment(data['daily'][3]['dt'] * 1000).format('dddd')
        card4_temp_Value = data['daily'][3]['temp']['day']
        card4_wind_Value = data['daily'][3]['wind_speed']
        card4_humidity_Value = data['daily'][3]['humidity']


        card5_date_Value = moment(data['daily'][4]['dt'] * 1000).format('dddd')
        card5_temp_Value = data['daily'][4]['temp']['day']
        card5_wind_Value = data['daily'][4]['wind_speed']
        card5_humidity_Value = data['daily'][4]['humidity']




        // if (uv_index_Value > )
        current_date.innerHTML = current_date_Value;

        card1_date.innerHTML = card1_date_Value;    
        card1_temp.innerHTML = card1_temp_Value;
        card1_wind.innerHTML = card1_wind_Value;
        card1_humidity.innerHTML = card1_humidity_Value;

        card2_date.innerHTML = card2_date_Value;
        card2_temp.innerHTML = card2_temp_Value;
        card2_wind.innerHTML = card2_wind_Value;
        card2_humidity.innerHTML = card2_humidity_Value;


        card3_date.innerHTML = card3_date_Value;
        card3_temp.innerHTML = card3_temp_Value;
        card3_wind.innerHTML = card3_wind_Value;
        card3_humidity.innerHTML = card3_humidity_Value;

        card4_date.innerHTML = card4_date_Value;
        card4_temp.innerHTML = card4_temp_Value;
        card4_wind.innerHTML = card4_wind_Value;
        card4_humidity.innerHTML = card4_humidity_Value;
        
        card5_date.innerHTML = card5_date_Value;
        card5_temp.innerHTML = card5_temp_Value;
        card5_wind.innerHTML = card5_wind_Value;
        card5_humidity.innerHTML = card5_humidity_Value;
        
        
           
        uv_index.innerHTML = uv_index_Value;
        if (uv_index_Value <= 3.0) {
            uv_index.style.backgroundColor = 'green'; uv_index.style.color = 'white';
        } else if (uv_index_Value <= 7.0 && uv_index_Value > 3.0) {
            uv_index.style.backgroundColor = 'yellow'; uv_index.style.color = 'black';
        } else if (uv_index_Value <= 10.0 && uv_index_Value > 7.0) {
            uv_index.style.backgroundColor = 'red'; uv_index.style.color = 'black';
        } else {
            uv_index.style.backgroundColor = 'purple'; uv_index.style.color = 'white';
        }   //display uv color
         // uv_index_color.display = 'block'
        


        console.log(data['current']['uvi'])
        console.log(data['daily'][0]['temp']['day'])
        console.log(card1_date_Value)
        console.log(data)



        
    })



})

NY_Button.addEventListener('click', function() {
    fetch('//api.openweathermap.org/data/2.5/weather?q=new york&appid=8e04b40f20b6603b082aa92e3bc63978&units=imperial')

    .then(response => response.json()) 
    .then(data => {

        lat = data['coord']['lat'];
        lon = data['coord']['lon'];
        let citynameValue = data['name'];
        var tempValue = data['main']['temp']
        var humidityValue = data['main']['humidity']
        var windValue = data['wind']['speed']
    


        cityname.innerHTML = citynameValue;
        temp.innerHTML = tempValue;
        humidity.innerHTML = humidityValue;
        wind.innerHTML = windValue;
       
        
        console.log(data)
        // console.log(window.moment(day.dt*1000).format('ddd'))


        return fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&exclude=hourly,minutely&appid=8e04b40f20b6603b082aa92e3bc63978&units=imperial')
    })

    .then(response => response.json())
    .then(data => {

        let uv_index_Value = data['current']['uvi']
        let current_date_Value = moment(data['current']['dt'] * 1000).format('L')
        
        card1_date_Value = moment(data['daily'][0]['dt'] * 1000).format('dddd')
        card1_temp_Value = data['daily'][0]['temp']['day']
        card1_wind_Value = data['daily'][0]['wind_speed']
        card1_humidity_Value = data['daily'][0]['humidity']

        card2_date_Value =  moment(data['daily'][1]['dt'] * 1000).format('dddd')
        card2_temp_Value = data['daily'][1]['temp']['day']
        card2_wind_Value = data['daily'][1]['wind_speed']
        card2_humidity_Value = data['daily'][1]['humidity']


        card3_date_Value = moment(data['daily'][2]['dt'] * 1000).format('dddd')
        card3_temp_Value = data['daily'][2]['temp']['day']
        card3_wind_Value = data['daily'][2]['wind_speed']
        card3_humidity_Value = data['daily'][2]['humidity']


        card4_date_Value = moment(data['daily'][3]['dt'] * 1000).format('dddd')
        card4_temp_Value = data['daily'][3]['temp']['day']
        card4_wind_Value = data['daily'][3]['wind_speed']
        card4_humidity_Value = data['daily'][3]['humidity']


        card5_date_Value = moment(data['daily'][4]['dt'] * 1000).format('dddd')
        card5_temp_Value = data['daily'][4]['temp']['day']
        card5_wind_Value = data['daily'][4]['wind_speed']
        card5_humidity_Value = data['daily'][4]['humidity']



      

        // if (uv_index_Value > )
        current_date.innerHTML = current_date_Value;

        card1_date.innerHTML = card1_date_Value;    
        card1_temp.innerHTML = card1_temp_Value;
        card1_wind.innerHTML = card1_wind_Value;
        card1_humidity.innerHTML = card1_humidity_Value;

        card2_date.innerHTML = card2_date_Value;
        card2_temp.innerHTML = card2_temp_Value;
        card2_wind.innerHTML = card2_wind_Value;
        card2_humidity.innerHTML = card2_humidity_Value;


        card3_date.innerHTML = card3_date_Value;
        card3_temp.innerHTML = card3_temp_Value;
        card3_wind.innerHTML = card3_wind_Value;
        card3_humidity.innerHTML = card3_humidity_Value;

        card4_date.innerHTML = card4_date_Value;
        card4_temp.innerHTML = card4_temp_Value;
        card4_wind.innerHTML = card4_wind_Value;
        card4_humidity.innerHTML = card4_humidity_Value;
        
        card5_date.innerHTML = card5_date_Value;
        card5_temp.innerHTML = card5_temp_Value;
        card5_wind.innerHTML = card5_wind_Value;
        card5_humidity.innerHTML = card5_humidity_Value;
        
        
           
        uv_index.innerHTML = uv_index_Value;
        if (uv_index_Value <= 3.0) {
            uv_index.style.backgroundColor = 'green'; uv_index.style.color = 'white';
        } else if (uv_index_Value <= 7.0 && uv_index_Value > 3.0) {
            uv_index.style.backgroundColor = 'yellow'; uv_index.style.color = 'black';
        } else if (uv_index_Value <= 10.0 && uv_index_Value > 7.0) {
            uv_index.style.backgroundColor = 'red'; uv_index.style.color = 'black';
        } else {
            uv_index.style.backgroundColor = 'purple'; uv_index.style.color = 'white';
        }   //display uv color
         // uv_index_color.display = 'block'
        


        console.log(data['current']['uvi'])
        console.log(data['daily'][0]['temp']['day'])
        console.log(card1_date_Value)
        console.log(data)




        
    })



})

Chi_Button.addEventListener('click', function() {
    fetch('//api.openweathermap.org/data/2.5/weather?q=chicago&appid=8e04b40f20b6603b082aa92e3bc63978&units=imperial')

    .then(response => response.json()) 
    .then(data => {

        lat = data['coord']['lat'];
        lon = data['coord']['lon'];
        let citynameValue = data['name'];
        var tempValue = data['main']['temp']
        var humidityValue = data['main']['humidity']
        var windValue = data['wind']['speed']
    


        cityname.innerHTML = citynameValue;
        temp.innerHTML = tempValue;
        humidity.innerHTML = humidityValue;
        wind.innerHTML = windValue;
       
        
        console.log(data)
        // console.log(window.moment(day.dt*1000).format('ddd'))


        return fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&exclude=hourly,minutely&appid=8e04b40f20b6603b082aa92e3bc63978&units=imperial')
    })

    .then(response => response.json())
    .then(data => {

        let uv_index_Value = data['current']['uvi']
        let current_date_Value = moment(data['current']['dt'] * 1000).format('L')
        
        card1_date_Value = moment(data['daily'][0]['dt'] * 1000).format('dddd')
        card1_temp_Value = data['daily'][0]['temp']['day']
        card1_wind_Value = data['daily'][0]['wind_speed']
        card1_humidity_Value = data['daily'][0]['humidity']

        card2_date_Value =  moment(data['daily'][1]['dt'] * 1000).format('dddd')
        card2_temp_Value = data['daily'][1]['temp']['day']
        card2_wind_Value = data['daily'][1]['wind_speed']
        card2_humidity_Value = data['daily'][1]['humidity']


        card3_date_Value = moment(data['daily'][2]['dt'] * 1000).format('dddd')
        card3_temp_Value = data['daily'][2]['temp']['day']
        card3_wind_Value = data['daily'][2]['wind_speed']
        card3_humidity_Value = data['daily'][2]['humidity']


        card4_date_Value = moment(data['daily'][3]['dt'] * 1000).format('dddd')
        card4_temp_Value = data['daily'][3]['temp']['day']
        card4_wind_Value = data['daily'][3]['wind_speed']
        card4_humidity_Value = data['daily'][3]['humidity']


        card5_date_Value = moment(data['daily'][4]['dt'] * 1000).format('dddd')
        card5_temp_Value = data['daily'][4]['temp']['day']
        card5_wind_Value = data['daily'][4]['wind_speed']
        card5_humidity_Value = data['daily'][4]['humidity']



        

        // if (uv_index_Value > )
        current_date.innerHTML = current_date_Value;

        card1_date.innerHTML = card1_date_Value;    
        card1_temp.innerHTML = card1_temp_Value;
        card1_wind.innerHTML = card1_wind_Value;
        card1_humidity.innerHTML = card1_humidity_Value;

        card2_date.innerHTML = card2_date_Value;
        card2_temp.innerHTML = card2_temp_Value;
        card2_wind.innerHTML = card2_wind_Value;
        card2_humidity.innerHTML = card2_humidity_Value;


        card3_date.innerHTML = card3_date_Value;
        card3_temp.innerHTML = card3_temp_Value;
        card3_wind.innerHTML = card3_wind_Value;
        card3_humidity.innerHTML = card3_humidity_Value;

        card4_date.innerHTML = card4_date_Value;
        card4_temp.innerHTML = card4_temp_Value;
        card4_wind.innerHTML = card4_wind_Value;
        card4_humidity.innerHTML = card4_humidity_Value;
        
        card5_date.innerHTML = card5_date_Value;
        card5_temp.innerHTML = card5_temp_Value;
        card5_wind.innerHTML = card5_wind_Value;
        card5_humidity.innerHTML = card5_humidity_Value;
        
           
        uv_index.innerHTML = uv_index_Value;
        if (uv_index_Value <= 3.0) {
            uv_index.style.backgroundColor = 'green'; uv_index.style.color = 'white';
        } else if (uv_index_Value <= 7.0 && uv_index_Value > 3.0) {
            uv_index.style.backgroundColor = 'yellow'; uv_index.style.color = 'black';
        } else if (uv_index_Value <= 10.0 && uv_index_Value > 7.0) {
            uv_index.style.backgroundColor = 'red'; uv_index.style.color = 'black';
        } else {
            uv_index.style.backgroundColor = 'purple'; uv_index.style.color = 'white';
        }   //display uv color
         // uv_index_color.display = 'block'
        
        
        


        console.log(data['current']['uvi'])
        console.log(data['daily'][0]['temp']['day'])
        console.log(card1_date_Value)
        console.log(data)



        
    })



})

Aus_Button.addEventListener('click', function() {
    fetch('//api.openweathermap.org/data/2.5/weather?q=austin&appid=8e04b40f20b6603b082aa92e3bc63978&units=imperial')

    .then(response => response.json()) 
    .then(data => {

        lat = data['coord']['lat'];
        lon = data['coord']['lon'];
        let citynameValue = data['name'];
        var tempValue = data['main']['temp']
        var humidityValue = data['main']['humidity']
        var windValue = data['wind']['speed']
    


        cityname.innerHTML = citynameValue;
        temp.innerHTML = tempValue;
        humidity.innerHTML = humidityValue;
        wind.innerHTML = windValue;
       
        
        console.log(data)
        // console.log(window.moment(day.dt*1000).format('ddd'))


        return fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&exclude=hourly,minutely&appid=8e04b40f20b6603b082aa92e3bc63978&units=imperial')
    })

    .then(response => response.json())
    .then(data => {

        let uv_index_Value = data['current']['uvi']
        let current_date_Value = moment(data['current']['dt'] * 1000).format('L')
        
        card1_date_Value = moment(data['daily'][0]['dt'] * 1000).format('dddd')
        card1_temp_Value = data['daily'][0]['temp']['day']
        card1_wind_Value = data['daily'][0]['wind_speed']
        card1_humidity_Value = data['daily'][0]['humidity']

        card2_date_Value =  moment(data['daily'][1]['dt'] * 1000).format('dddd')
        card2_temp_Value = data['daily'][1]['temp']['day']
        card2_wind_Value = data['daily'][1]['wind_speed']
        card2_humidity_Value = data['daily'][1]['humidity']


        card3_date_Value = moment(data['daily'][2]['dt'] * 1000).format('dddd')
        card3_temp_Value = data['daily'][2]['temp']['day']
        card3_wind_Value = data['daily'][2]['wind_speed']
        card3_humidity_Value = data['daily'][2]['humidity']


        card4_date_Value = moment(data['daily'][3]['dt'] * 1000).format('dddd')
        card4_temp_Value = data['daily'][3]['temp']['day']
        card4_wind_Value = data['daily'][3]['wind_speed']
        card4_humidity_Value = data['daily'][3]['humidity']


        card5_date_Value = moment(data['daily'][4]['dt'] * 1000).format('dddd')
        card5_temp_Value = data['daily'][4]['temp']['day']
        card5_wind_Value = data['daily'][4]['wind_speed']
        card5_humidity_Value = data['daily'][4]['humidity']



        

        // if (uv_index_Value > )
        current_date.innerHTML = current_date_Value;

        card1_date.innerHTML = card1_date_Value;    
        card1_temp.innerHTML = card1_temp_Value;
        card1_wind.innerHTML = card1_wind_Value;
        card1_humidity.innerHTML = card1_humidity_Value;

        card2_date.innerHTML = card2_date_Value;
        card2_temp.innerHTML = card2_temp_Value;
        card2_wind.innerHTML = card2_wind_Value;
        card2_humidity.innerHTML = card2_humidity_Value;


        card3_date.innerHTML = card3_date_Value;
        card3_temp.innerHTML = card3_temp_Value;
        card3_wind.innerHTML = card3_wind_Value;
        card3_humidity.innerHTML = card3_humidity_Value;

        card4_date.innerHTML = card4_date_Value;
        card4_temp.innerHTML = card4_temp_Value;
        card4_wind.innerHTML = card4_wind_Value;
        card4_humidity.innerHTML = card4_humidity_Value;
        
        card5_date.innerHTML = card5_date_Value;
        card5_temp.innerHTML = card5_temp_Value;
        card5_wind.innerHTML = card5_wind_Value;
        card5_humidity.innerHTML = card5_humidity_Value;
        
           
        uv_index.innerHTML = uv_index_Value;
        if (uv_index_Value <= 3.0) {
            uv_index.style.backgroundColor = 'green'; uv_index.style.color = 'white';
        } else if (uv_index_Value <= 7.0 && uv_index_Value > 3.0) {
            uv_index.style.backgroundColor = 'yellow'; uv_index.style.color = 'black';
        } else if (uv_index_Value <= 10.0 && uv_index_Value > 7.0) {
            uv_index.style.backgroundColor = 'red'; uv_index.style.color = 'black';
        } else {
            uv_index.style.backgroundColor = 'purple'; uv_index.style.color = 'white';
        }   //display uv color
         // uv_index_color.display = 'block'
        
        
        


        console.log(data['current']['uvi'])
        console.log(data['daily'][0]['temp']['day'])
        console.log(card1_date_Value)
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

// function getWeather() {
//     fetch('//api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=8e04b40f20b6603b082aa92e3bc63978&units=imperial')

//     .then(response => response.json()) 
//     .then(data => console.log(data))
    

//     .catch(err => alert('Wrong city name!'))
// }
