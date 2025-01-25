import { useContext, useMemo } from "react";
import { FiltersContext } from "../../providers/filters/filters.providers";
import { FiltersType } from "../../types/filters.type";
import styles from "./Selected.module.css";

export default function Selected() {
  const { filters, dispatchFilters } = useContext(FiltersContext);

  const isEmpty = useMemo(() => {
    return (
      !filters.rating &&
      !filters.expertise &&
      !filters.gender &&
      !filters.degree &&
      !filters.city &&
      !filters.badges
    );
  }, [filters]);

  const removeAllButtonClickHandler = (): void => {
    dispatchFilters({ type: "removed_all" });
  };

  const filterClickHandler = (key: keyof FiltersType): void => {
    dispatchFilters({ type: "removed_filter", key });
  };

  if (isEmpty) {
    return null;
  }

  return (
    <div className={styles.selectedFilters}>
      <div className={styles.wrapper}>
        <span>فیلترها</span>
        <button type="button" onClick={removeAllButtonClickHandler}>
          حذف همه
        </button>
      </div>

      <ul className={styles.filters}>
        {filters.rating && (
          <li
            className={styles.labelFilter}
            onClick={() => filterClickHandler("rating")}
          >
            {filters.rating}
          </li>
        )}
        {filters.city && (
          <li
            className={styles.labelFilter}
            onClick={() => filterClickHandler("city")}
          >
            {filters.city}
          </li>
        )}
        {filters.badges && (
          <li
            className={styles.labelFilter}
            onClick={() => filterClickHandler("badges")}
          >
            {filters.badges}
          </li>
        )}
        {filters.expertise && (
          <li
            className={styles.labelFilter}
            onClick={() => filterClickHandler("expertise")}
          >
            {filters.expertise}
          </li>
        )}
        {filters.gender && (
          <li
            className={styles.labelFilter}
            onClick={() => filterClickHandler("gender")}
          >
            {filters.gender}
          </li>
        )}
        {filters.degree && (
          <li
            className={styles.labelFilter}
            onClick={() => filterClickHandler("degree")}
          >
            {filters.degree}
          </li>
        )}
      </ul>
    </div>
  );
}
