import { useContext } from "react";
import { FiltersContext } from "@/app/search/providers/filters/filters.providers";
import { expertises } from "@/models/expertises";
import styles from "./filter.module.css";

export default function Filter() {
  const { filters, dispatchFilters } = useContext(FiltersContext);

  const expertiseClickHandler = (value: string): void => {
    dispatchFilters({ type: "updated_filter", key: "expertise", value });
  };

  return (
    <div className={styles.filterWrapper}>
      <div className={styles.selectfilterWrapper}>

      </div>

      <ul className={styles.wrapperExpert}>
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
          // value={selectedCity}
          // onChange={handleCityChange}
          className={styles.city}
        >
          <option></option>
          <option value="اردبیل">اردبیل</option>
          <option value="اصفهان">اصفهان</option>
          <option value="بابل">بابل</option>
          <option value="بندرعباس">بندرعباس</option>
          <option value="تهران">تهران</option>
          <option value="خرم آباد">خرم آباد</option>
          <option value="جهرم">جهرم</option>
          <option value="کاشان">کاشان</option>
          <option value="کرمانشاه">کرمانشاه</option>
          <option value="قائن">قائن</option>
          <option value="سمنان">سمنان</option>
          <option value="شیراز">شیراز</option>
          <option value="مشهد">مشهد</option>
          <option value="نیشابور">نیشابور</option>
          <option value="همدان">همدان</option>
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
