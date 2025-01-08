import {
  createContext,
  useState,
  PropsWithChildren,
  ReactElement,
  useCallback,
} from "react";
import { FiltersType } from "@/app/search/types/filters.type";

type ContextValue = {
  filters: FiltersType;
  changeFilter: <TKey extends keyof FiltersType>(
    key: TKey,
    value: FiltersType[TKey],
  ) => void;
  removeFilter: <TKey extends keyof FiltersType>(
    key: TKey,
    value: FiltersType[TKey],
  ) => void;
  clearAll: () => void;
};

export const FiltersContext = createContext<ContextValue>({
  filters: {},
  changeFilter: () => {},
  removeFilter: () => {},
  clearAll: () => {},
});

export default function FiltersProvider({
  children,
}: PropsWithChildren): ReactElement {
  const [filters, setFilters] = useState<FiltersType>({});

  const changeFilter = useCallback(
    <TKey extends keyof FiltersType>(
      key: TKey,
      value: FiltersType[TKey],
    ): void => {
      setFilters((prev) => ({ ...prev, [key]: value }));
    },
    [],
  );

  const removeFilter = useCallback(
    <TKey extends keyof FiltersType>(key: TKey): void => {
      setFilters((prev) => {
        const updatedFilters = { ...prev };
        delete updatedFilters[key];
        return updatedFilters;
      });
    },
    [],
  );

  const clearAll = useCallback((): void => {
    setFilters({});
  }, []);
  return (
    <FiltersContext.Provider
      value={{ filters, changeFilter, removeFilter, clearAll }}
    >
      {children}
    </FiltersContext.Provider>
  );
}
