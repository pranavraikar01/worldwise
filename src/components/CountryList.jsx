import Spinner from "./Spinner";
import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";
// import PropTypes from "prop-types";

function CountryList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);
  console.log(countries);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        // eslint-disable-next-line react/jsx-key
        <CountryItem country={country} />
      ))}
    </ul>
  );
}
// CountryList.propTypes = {
//   cities: PropTypes.shape({
//     cities: PropTypes.string.isRequired,
//     map: PropTypes.string.isRequired,
//     reduce: PropTypes.string.isRequired,
//     length: PropTypes.string.isRequired,
//     message: PropTypes.string.isRequired,
//   }).isRequired,
//   isLoading: PropTypes.shape({
//     isLoading: PropTypes.string.isRequired,
//   }).isRequired,
// };
export default CountryList;
