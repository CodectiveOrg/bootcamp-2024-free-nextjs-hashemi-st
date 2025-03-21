"use client";

import {
  createContext,
  PropsWithChildren,
  ReactElement,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import { DoctorModel } from "@/models/doctor.model";

import { FiltersContext } from "@/app/search/providers/filters/filters.providers";

type ContextValue = {
  filteredDoctors: DoctorModel[];
};

export const DoctorsContext = createContext<ContextValue>({
  filteredDoctors: [],
});

type Props = PropsWithChildren & {
  doctors: DoctorModel[];
};

export default function DoctorsProvider({
  children,
  doctors,
}: Props): ReactElement {
  const { filters } = useContext(FiltersContext);

  const [filteredDoctors, setFilteredDoctors] = useState<DoctorModel[]>([]);

  const isVisible = useCallback(
    (doctor: DoctorModel): boolean => {
      return (
        doesDoctorInclude(doctor, filters.query) &&
        doesInclude(doctor.expertise, filters.expertise) &&
        doesInclude(doctor.gender, filters.gender, true) &&
        doesInclude(doctor.degree, filters.degree) &&
        doesInclude(doctor.city, filters.city) &&
        doesSomeInclude(doctor.badges, filters.badges) &&
        doesIncludeRating(doctor.averageRating, filters.rating)
      );
    },
    [filters],
  );

  useEffect(() => {
    setFilteredDoctors(doctors.filter(isVisible));
  }, [isVisible, doctors]);

  return (
    <DoctorsContext.Provider value={{ filteredDoctors }}>
      {children}
    </DoctorsContext.Provider>
  );
}

function doesDoctorInclude(doctor: DoctorModel, query?: string): boolean {
  if (!query) {
    return true;
  }

  return doesSomeInclude([doctor.name, doctor.brief, doctor.address], query);
}

function doesSomeInclude(items: string[], query?: string): boolean {
  if (!query) {
    return true;
  }

  return items.some((item) => doesInclude(item, query));
}

function doesInclude(
  item: string,
  query?: string,
  exact: boolean = false,
): boolean {
  if (!query) {
    return true;
  }
  if (query === "همه شهرها") {
    return true;
  }

  if (exact) {
    return item.toLowerCase() === query.toLowerCase();
  }

  return item.toLowerCase().includes(query.toLowerCase());
}

function doesIncludeRating(value: number, query?: string): boolean {
  if (query === "امتیاز بالای 4") {
    return value >= 4;
  }
  if (query === "امتیاز زیر 4") {
    return value < 4;
  }
  return true;
}
