const weatherform = document.querySelector(".weatherform");
const cityinput = document.querySelector(".cityinput");
const card = document.querySelector(".outmost");
const apikey = "0994a675c79e721f7106bf0a9a86e8a8";

weatherform.addEventListener("submit", async (event) => {
  event.preventDefault();

  const city = cityinput.value;

  if (city) {
    try {
      const weatherdata = await getweatherdata(city);
      displayweatherinfo(weatherdata);
    } catch (error) {
      console.error(error);
      displayerror(error);
    }
  } else {
    displayerror("Please enter a city");
  }
});

async function getweatherdata(city) {
  const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

  const response = await fetch(apiurl);

  if (!response.ok) {
    throw new Error("could not fetch weather data");
  }

  return await response.json();
}

function displayweatherinfo(data) {
  const {
    name: city,
    main: { temp, humidity },
    weather: [{ description, id }],
  } = data;

  card.textContent = "";
  card.style.display = "flex";

  const citydisplay = document.createElement("h1");
  const tempdisplay = document.createElement("p");
  const humiditydisplay = document.createElement("p");
  const descdisplay = document.createElement("p");

  citydisplay.textContent = city;
  tempdisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`;
  humiditydisplay.textContent = `Humidity: ${humidity}%`;
  descdisplay.textContent = description;

  citydisplay.classList.add("cardas");
  tempdisplay.classList.add("card");
  humiditydisplay.classList.add("card");
  descdisplay.classList.add("desc");

  card.appendChild(citydisplay);
  card.appendChild(tempdisplay);
  card.appendChild(humiditydisplay);
  card.appendChild(descdisplay);
}

function getweatheremoji(weatherid) {}

function displayerror(message) {
  const errordisplay = document.createElement("p");
  errordisplay.textContent = message;
  errordisplay.classList.add("error");

  card.textContent = "";
  card.style.display = "flex";
  card.appendChild(errordisplay);
}
