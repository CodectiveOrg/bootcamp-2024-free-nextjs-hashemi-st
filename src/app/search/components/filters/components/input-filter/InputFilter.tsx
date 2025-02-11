import { FiltersType } from "@/app/search/types/filters.type";
import styles from "./InputFilter.module.css";

type Props = {
  filter?: string;
  handleFilterChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>,
    key: keyof FiltersType,
  ) => void;
  options: string[];
  type: string;
  name: string;
  filterKey: keyof FiltersType;
  title: string;
};
export default function FilterBadges({
  filter,
  handleFilterChange,
  options,
  type,
  name,
  filterKey,
  title,
}: Props) {
  return (
    <>
      <h4 className={styles.title}>{title}</h4>
      {options.map((option) => (
        <label key={option} className={styles.filterLabel}>
          <input
            type={type}
            name={name}
            value={option}
            checked={filter?.includes(option) || false}
            onChange={(event) => handleFilterChange(event, filterKey)}
          />
          {option}
        </label>
      ))}
    </>
  );
}
