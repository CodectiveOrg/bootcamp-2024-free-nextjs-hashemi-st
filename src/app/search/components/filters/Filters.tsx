import { useContext } from "react";
import { FiltersContext } from "@/app/search/providers/filters/filters.providers";
import SelectedFilters from "@/app/search/components/selected-filters/SelectedFilters";
import { FiltersType } from "@/app/search/types/filters.type";
import FilterCity from "./components/filter-city/FilterCity";
import InputFilter from "./components/input-filter/InputFilter";
import { expertises } from "@/models/expertises";
import styles from "./Filters.module.css";

export default function Filter() {
  const { filters, dispatchFilters } = useContext(FiltersContext);

  const handleFilterChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>,
    key: keyof FiltersType,
  ) => {
    const value = event.target.value;
    dispatchFilters({ type: "updated_filter", key, value });
  };

  return (
    <div className={styles.filterWrapper}>
      <SelectedFilters />

      <div className={styles.wrapperExpert}>
        <InputFilter
          title="تخصص"
          filter={filters.expertise}
          handleFilterChange={handleFilterChange}
          options={expertises}
          type="checkbox"
          name="expertise"
          filterKey="expertise"
        />
      </div>

      <FilterCity filters={filters} handleFilterChange={handleFilterChange} />

      <div className={styles.wrapperGender}>
        <InputFilter
          filter={filters.gender}
          handleFilterChange={handleFilterChange}
          options={["مرد", "زن"]}
          type="radio"
          name="gender"
          filterKey="gender"
          title="جنسیت"
        />
      </div>

      <div className={styles.wrapperPoints}>
        <InputFilter
          filter={filters.rating}
          handleFilterChange={handleFilterChange}
          options={["امتیاز بالای 4", "امتیاز زیر 4"]}
          type="radio"
          name="point"
          filterKey="rating"
          title="امتیاز"
        />
      </div>

      <div className={styles.wrapperOther}>
        <InputFilter
          filter={filters.badges}
          handleFilterChange={handleFilterChange}
          options={["خوش برخورد", "کمترین معطلی"]}
          type="checkbox"
          name="trait"
          filterKey="badges"
          title="سایر"
        />
      </div>
    </div>
  );
}
