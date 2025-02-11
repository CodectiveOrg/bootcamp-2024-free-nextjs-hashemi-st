import { cities } from "@/models/cities";
import { FiltersType } from "@/app/search/types/filters.type";
import styles from "./FilterCity.module.css";

type Props = {
  filters: FiltersType;
  handleFilterChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>,
    key: keyof FiltersType,
  ) => void;
};
export default function FilterCity({ filters, handleFilterChange }: Props) {
  return (
    <div className={styles.wrapperCity}>
      <h4>انتخاب شهر </h4>
      <select
        value={filters.city}
        onChange={(event) => handleFilterChange(event, "city")}
        className={styles.city}
      >
        <option value=""></option>
        {cities.map((city, i) => (
          <option value={city} key={i}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
}
