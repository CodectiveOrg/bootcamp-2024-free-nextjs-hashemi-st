import { useContext } from "react";
import { FiltersContext } from "@/app/search/providers/filters/filters.providers";
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
  return (
    <div className={styles.filterWrapper}>
      <div className={styles.selectfilterWrapper}>

      </div>

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
          {cities.map(city => (
            <option value={city}>{city}</option>
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
            // onChange={handleGenderChange}
            />
            مرد
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={filters.gender === "female"}
            // onChange={handleGenderChange}
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
              value="upper4"
            // checked={selectedRate === "upper4"}
            // onChange={handleRateChange}
            />
            بالای 4
          </label>
          <label>
            <input
              type="radio"
              name="point"
              value="under4"
            // checked={selectedRate === "under4"}
            // onChange={handleRateChange}
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
            // checked={filters.trait?.includes("خوش برخورد") || false}
            // onChange={handleTraitChange}
            />
            خوش برخورد
          </label>
          <label>
            <input
              type="checkbox"
              name="trait"
              value="کمترین معطلی"
            // checked={filters.trait?.includes("کمترین معطلی") || false}
            // onChange={handleTraitChange}
            />
            کمترین معطلی
          </label>
        </div>
      </div>
    </div>
  );
}
