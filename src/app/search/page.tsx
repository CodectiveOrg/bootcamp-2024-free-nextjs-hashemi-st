"use client";
import DoctorList from "./components/doctor-list/doctorList";
import Filter from "./components/filter/filter";
import FiltersProvider from "./providers/filters/filters.providers";
import DoctorsProvider from "./providers/doctors/doctors.provider";
import styles from "./page.module.css";
import { doctors } from "@/models/doctors";
import { ReactElement } from "react";
import { FiltersType } from "./types/filters.type";

type SearchParams = { [key: string]: string | string[] | undefined };
type Pprops = {
  searchParams: Promise<SearchParams>;
};

export default async function search({
  searchParams,
}: Pprops): Promise<ReactElement> {
  const defaultFilters = generateDefaultFilters(await searchParams);
  return (
    <FiltersProvider defaultFilters={defaultFilters}>
      <DoctorsProvider doctors={doctors}>
        <div className={styles.page}>
          <div className={styles.filters}>
            <Filter />
          </div>
          <div className={styles.content}>
            <DoctorList />
          </div>
        </div>
      </DoctorsProvider>
    </FiltersProvider>
  );
}
const generateDefaultFilters = (searchParams: SearchParams): FiltersType => {
  const { query, expertise, gender, degree } = searchParams;
  return {
    query: normalizeFilter(query),
    expertise: normalizeFilter(expertise),
    gender: normalizeFilter(gender),
    degree: normalizeFilter(degree),
  };
};
const normalizeFilter = (
  value: string | string[] | undefined,
): string | undefined => {
  if (Array.isArray(value)) {
    return value[0];
  }
  return value;
};
