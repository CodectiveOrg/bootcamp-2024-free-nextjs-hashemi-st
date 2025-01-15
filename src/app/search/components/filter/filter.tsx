import { useContext } from "react";
import { FiltersContext } from "@/app/search/providers/filters/filters.providers";
import SelectedFilters from "../selected-filters/selectedFilters";
import { expertises } from "@/models/expertises";
import { cities } from "@/models/cities";
import styles from "./filter.module.css";

export default function Filter() {
  const { filters, dispatchFilters } = useContext(FiltersContext);

  const expertiseClickHandler = (value: string): void => {
    dispatchFilters({ type: "updated_filter", key: "expertise", value });
  };

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    dispatchFilters({ type: "updated_filter", key: "city", value });

  };

  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    dispatchFilters({ type: "updated_filter", key: "gender", value });
  };

  const handleBadgesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    dispatchFilters({ type: "updated_filter", key: "badges", value });
  };

  const handleRateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    dispatchFilters({ type: "updated_filter", key: "rating", value });
  };

  return (
    <div className={styles.filterWrapper}>    
      <SelectedFilters />    
      <ul className={styles.wrapperExpert}>
        <div className={styles.title}> تخصص مورد نظرتان را انتخاب کنید: </div>
        {expertises.map((x) => (
          <li key={x}>
            <label className={styles.labels}>
              <input
                type="checkbox"
                name="expertise"
                value={x}
                checked={filters.expertise === x}
                onChange={() => expertiseClickHandler(x)}
              />
              {x}
            </label>
          </li>
        ))}
      </ul>

      <div className={styles.wrapperCity}>
        <div>انتخاب شهر </div>
        <select
          value={filters.city}
          onChange={handleCityChange}
          className={styles.city}
        >
          {cities.map((city,_i) => (
            <option value={city} key={_i}>{city}</option>
          ))}
        </select>
      </div>

      <div className={styles.wrapperGender}>
        <div>جنسیت :</div>
        <div className={styles.radio}>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={filters.gender === "male"}
              onChange={handleGenderChange}
            />
            مرد
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={filters.gender === "female"}
              onChange={handleGenderChange}
            />
            زن
          </label>
        </div>
      </div>

      <div className={styles.wrapperPoints}>
        <div>امتیاز</div>
        <div className={styles.radio}>
          <label>
            <input
              type="radio"
              name="point"
              value="امتیاز بالای 4"
            checked={filters.rating === "امتیاز بالای 4"}
            onChange={handleRateChange}
            />
            بالای 4
          </label>
          <label>
            <input
              type="radio"
              name="point"
              value="امتیاز زیر 4"
            checked={filters.rating === "امتیاز زیر 4"}
             onChange={handleRateChange}
            />
            زیر 4
          </label>
        </div>
      </div>
      <div className={styles.wrapperOther}>
        <div>سایر</div>
        <div className={styles.radio}>
          <label>
            <input
              type="checkbox"
              name="trait"
              value="خوش برخورد"
              checked={filters.badges?.includes("خوش برخورد") || false}
              onChange={handleBadgesChange}
            />
            خوش برخورد
          </label>
          <label>
            <input
              type="checkbox"
              name="trait"
              value="کمترین معطلی"
              checked={filters.badges?.includes("کمترین معطلی") || false}
              onChange={handleBadgesChange}
            />
            کمترین معطلی
          </label>
        </div>
      </div>
    </div>
  );
}
