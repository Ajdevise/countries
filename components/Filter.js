import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDebounce } from "../hooks/useDebounce";

const Filter = ({ onChange }) => {
  const { value, setValue } = useDebounce(handleDebounce, { interval: 600 });
  const [continent, setContinent] = useState("");

  function handleDebounce(val) {
    onChange({ country: val, continent });
  }

  const handleCountryChange = (evt) => {
    setValue(evt.target.value);
  };

  const handleContinentChange = (evt) => {
    onChange({ country: value, continent: evt.target.value });
    setContinent(evt.target.value);
  };

  return (
    <div className="flex flex-col md:flex-row py-14 justify-between gap-4">
      <div className="w-full relative">
        <FaSearch className="absolute left-4 top-3.5 text-input" />
        <input
          className="bg-elements shadow rounded text-sm text-text py-3 pl-12 w-full max-w-xl"
          type="text"
          placeholder="Search for country..."
          aria-label="search for country"
          value={value}
          onChange={handleCountryChange}
        />
      </div>
      <select
        value={continent}
        aria-label="Filter By Region"
        className="bg-elements shadow rounded text-text w-52 p-3"
        onChange={handleContinentChange}
      >
        <option value="" hidden>
          Filter by Region
        </option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default Filter;
