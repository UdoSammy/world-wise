/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import CityItem from "./CityItem";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import CountryItem from "./CountryItem";
import { useCities } from "../contexts/CitiesContext";


function CountryList() {

  const {cities, isLoading} = useCities()
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return <Message message="Add your city by clicking on a city in the map" />;

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <ul className={styles.CountryList}>
      {countries.map((country) => (
        <CountryItem country={country}  />
      ))}
    </ul>
  );
}

export default CountryList;
