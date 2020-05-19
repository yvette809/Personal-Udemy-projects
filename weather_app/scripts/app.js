const cityForm = document.querySelector('form');
const card = document.querySelector('.card')
const details = document.querySelector('.details')
const time = document.querySelector('img-time')
const icon = document.querySelector('icon-img');


const updteUI = () =>{
    const cityDets = data.cityDets;
    const weather = data.weather;
    //update different templates
    details.innerHTML = `<h5 class="my-3">${cityDets.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
      <span>${weather.Temperature.Matric.Value}</span>
      <span>&deg:</span>
      </div>`

      //update night and day images
      const iconsrc = `image/icons/${weather.WeatherIcon}.svg`
      icon.setAttribute('src',iconsrc)
      let timsrc = null;
      if (weather.IsDayTime){
          timesrc = 'img/day.svg';
      }else{
          timesrc = 'img/night.svg';
      }
      time.setAttribute('src', 'timesrc')

      // remove the d-none class if present
      if(card.classList.contains('d-none')){
          card.classList.remove()
      }


}
const updateCity = async (city) =>{
    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.key)
    return{
        cityDets:cityDets,
        weather:weather
    }
}



cityForm.addEventListener('submit', e =>{
    e.preventDefault()
    // get city value
    const city = cityForm.city.value.trim()
    cityForm.reset()
    //update ui with city info
    updateCity(city)
    .then(data => console.log(data))
    .catch(err=> console.log('err'))
})
