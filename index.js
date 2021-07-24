const input = document.querySelector('.input')
const button = document.querySelector('.btn')
let cityName = document.querySelector('.cityName')
let weatherDescription = document.querySelector('.weatherDes')
let temperature = document.querySelector('.temperature')
let pics = document.querySelectorAll('img')
let picDefault = document.querySelector('.sunny')
picDefault.style.display = 'block'

button.addEventListener('click',()=>{
   $.get(`http://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=1ad8fa60f2122f524186b8d1d1ba94ad&units=metric`,(response)=>{
        cityName.innerHTML = response.sys.country;
        weatherDescription.innerHTML = response.weather[0].main;   
        temperature.innerHTML = Math.round(response.main.temp)+'C';
            for(let i = 0; i<pics.length;i++){
                if(response.weather[0].main==='Clouds'){
                    putPic(2)
                }
                else if(response.weather[0].main==='Rain'){
                    putPic(1)
                }
                else if(response.weather[0].main==='Clear'){
                putPic(0)
                }
            }
   });
})

function putPic (index){
    picDefault.style.display = 'none';
    ////// Clean all pictures
        for(let e of pics){
            e.style.display = 'none';
        }
    pics[index].style.display = 'block';
    
}