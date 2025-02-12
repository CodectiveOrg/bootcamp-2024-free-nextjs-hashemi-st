import { useState, useEffect } from "react";

import { cities } from "@/models/cities";
import { FiltersType } from "@/app/search/types/filters.type";
import { Dropdown } from "./Dropdown";

import styles from "./FilterCity.module.css";

type Props = {
  filters: FiltersType;
  handleFilterChange: (
    event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>,
    key: keyof FiltersType
  ) => void;
};

export default function FilterCity({ filters, handleFilterChange }: Props) {

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(filters.city || "");

  useEffect(() => {
    if (!filters.city) {
      setSelected("همه شهرها");
    } else {
      setSelected(filters.city);
    }
  }, [filters.city]);

  const handleCitySelect = (city: string) => {
    setSelected(city);
    handleFilterChange({ target: { value: city } } as React.ChangeEvent<HTMLSelectElement>, "city");
    setIsOpen(false);
  };

  return (
    <div className={styles.wrapperCity}>
      <h4>انتخاب شهر </h4>
      <div className={styles.dropdownContainer}>
        <button
          className={`${styles.dropdownButton} ${isOpen ? styles.open : ""}`}
          onClick={() => {
            setIsOpen(!isOpen)
          }}
        >
          {selected || "همه شهرها"}
          <Dropdown />
        </button>

        {isOpen && (
          <div className={styles.dropdownMenu}>
            <div
              className={styles.dropdownItem}
              onClick={() => handleCitySelect("همه شهرها")}
            >
              همه شهرها
            </div>
            {cities.map((city, i) => (
              <div
                key={i}
                className={styles.dropdownItem}
                onClick={() => handleCitySelect(city)}
              >
                {city}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}