import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { WiDayCloudy } from "react-icons/wi";
import { TiWeatherCloudy } from "react-icons/ti";
import { WiCloudy } from "react-icons/wi";
import { WiRainWind } from "react-icons/wi";
import { WiThunderstorm } from "react-icons/wi";
function App() {
  const [searchValue, setsearchValue] = useState("noida");
  const [tempInfo, setTempInfo] = useState({});
  const getWeatherInfo = async () => {

    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=fe8663ed4433f91747b047b1c3f9f2e1`;

      let res = await fetch(url);
      let data = await res.json();
      // setTempInfo(data);
      // console.log(data, "data");

     
      const { temp, humidity, pressure } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const newWeatherInfo = {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
      };
      
      let sec = sunset;
      let date = new Date(sec * 1000);
      let timeStr = `${date.getHours()}:${date.getMinutes()}`;

       setTempInfo(newWeatherInfo);
      console.log(newWeatherInfo, 'nwi')
    } catch (error) {
      console.log(error);
    }
  };

    useEffect(() => {
    getWeatherInfo();
  }, [searchValue]);
  return (
    <div>
      <div className="h-screen w-full">
        <div className="bgImage">
          <img
            src="https://images.unsplash.com/photo-1623276311673-e5eb91921078?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
            className="h-full w-full object-cover fixed lg:absolute brightness-50"
          />
          {tempInfo?.weathermood === "Clouds" && (
            <img
              src="https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              className="h-full w-full object-cover fixed lg:absolute brightness-50"
            />
          )}

          {tempInfo?.weathermood === "Rain" && (
            <img
              src=" https://images.unsplash.com/photo-1530743373890-f3c506b0b5b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1235&q=80"
              className="h-full w-full object-cover fixed lg:absolute brightness-50"
            />
          )}

          {tempInfo?.weathermood === "Clear" && (
            <img
              src="  https://images.unsplash.com/photo-1529126894674-8dd7cb884766?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              className="h-full w-full object-cover fixed lg:absolute brightness-40"
            />
          )}

          {tempInfo?.weathermood === "Thunderstorm" && (
            <img
              src="https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
              className="h-full w-full object-cover fixed lg:absolute brightness-40"
            />
          )}
        </div>
        <div className=" centerdiv relative flex flex-wrap  h-full w-full bg-blue-00">
          <div className="firstpart pb-32 h-full w-full lg:w-3/5 bg-blue-00 flex flex-col justify-end">
            <div className="flex justify-center space-x-8">
              <div className=" font-bold text-white text-4xl lg:text-9xl md:text-9xl">
                {tempInfo?.temp}
              </div>
              <div className="place">
                <div className="text-2xl lg:text-5xl text-white">
                  {" "}
                  {tempInfo?.name} , {tempInfo?.country}
                </div>
                <div className=" date font-bold text-white">
                  {new Date().toLocaleDateString()}
                </div>
              </div>
              <div className="">
                {tempInfo?.weathermood === "Haze" && (
                  <WiDayCloudy className="text-4xl  lg:text-8xl md:text-9xl text-white" />
                )}
                {tempInfo?.weathermood === "Clear" && (
                  <TiWeatherCloudy className="text-4xl  lg:text-8xl md:text-9xl text-white" />
                )}

                {tempInfo?.weathermood === "Clouds" && (
                  <WiCloudy className="text-4xl  lg:text-8xl md:text-9xl text-white" />
                )}

                {tempInfo?.weathermood === "Rain" && (
                  <WiRainWind className="text-4xl  lg:text-8xl md:text-9xl text-white" />
                )}

                {tempInfo?.weathermood === "Thunderstorm" && (
                  <WiThunderstorm className="text-4xl  lg:text-8xl md:text-9xl text-white" />
                )}
                <div className="font-bold text-white text-sm md:text-lg">
                  {" "}
                  {tempInfo?.weathermood}
                </div>
              </div>
            </div>
          </div>
          <div className="secondpart bg-red-00 backdrop-blur h-full w-full lg:w-2/5">
            <div className="search flex justify-between bg-green-00">
              <div className="searchbox bg-gray-00">
                <div className="input pl-7 pt-20">
                  <input
                    className="text-lg w-40 lg:w-60 md:w-80  outline-none bg-transparent border-b-2 text-white"
                    placeholder="Search location"
                    id="search"
                    value={searchValue}
                    onChange={(e) => setsearchValue(e.target.value)}
                  />
                </div>
              </div>
              <div className="searchpng bg-orange-400 p-5 lg:p-7 md:p-9">
                <img src="https://img.icons8.com/fluency-systems-regular/48/000000/search--v1.png" />
              </div>
            </div>

            <div className="location border-b-2 space-y-4 p-8 text-white cursor-pointer">
              <div className="text-xl" onClick={(e) => setsearchValue("Delhi")}>
                Delhi
              </div>
              <div
                className="text-xl cursor-pointer"
                onClick={(e) => setsearchValue("Mumbai")}
              >
                Mumbai
              </div>
              <div
                className="text-xl cursor-pointer"
                onClick={(e) => setsearchValue("Siliguri")}
              >
                {" "}
                Siliguri
              </div>
              <div
                className="text-xl cursor-pointer"
                onClick={(e) => setsearchValue("Kolkata")}
              >
                {" "}
                Kolkata
              </div>
            </div>
            <div className="weatherdetails border-b-2 p-8 text-white">
              <div className=" font-bold text-lg">
                Weather Details <span className="text-md opacity-20">(Ashujha)</span>
              </div>
              <div className="space-y-6">
                <div className="cloudymood flex justify-between pt-10">
                  <div className="cloudy text-xl ">Mood</div>
                  <div className="text-xl"> {tempInfo?.weathermood}</div>
                </div>
                <div className="humiditymood flex justify-between">
                  <div className="humidity text-xl">Humidity</div>
                  <div className="text-xl"> {tempInfo?.humidity}%</div>
                </div>
                <div className="windmood flex justify-between">
                  <div className="wind text-xl">Wind</div>
                  <div className="text-xl"> {tempInfo?.speed}</div>
                </div>
                <div className="sunset flex justify-between">
                  <div className="wind text-xl">Sunset</div>
                  <div className="text-xl"> {tempInfo?.sunset}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
