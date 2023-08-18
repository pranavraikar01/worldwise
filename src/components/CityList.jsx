import Spinner from "./Spinner";
import styles from "./CityList.module.css";
import CityItem from "./CityItem";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";
// import PropTypes from "prop-types";
function CityList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}
// CityList.propTypes = {
//   cities: PropTypes.shape({
//     cities: PropTypes.string.isRequired,
//     map: PropTypes.string.isRequired,
//     length: PropTypes.string.isRequired,
//     message: PropTypes.string.isRequired,
//   }).isRequired,
//   isLoading: PropTypes.shape({
//     isLoading: PropTypes.string.isRequired,
//   }).isRequired,
// };
export default CityList;
