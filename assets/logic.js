
class Fetch {
    async getCurrent (input) {
        var APIKey = '8e04b40f20b6603b082aa92e3bc63978';
        city = "chicago";

    }
}

// var APIKey = '8e04b40f20b6603b082aa92e3bc63978';
// var city;


`http://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${APIKey} `

const data = await response.json() ;

console.log(data)