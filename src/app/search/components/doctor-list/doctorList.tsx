import { useContext } from 'react';
import { FiltersContext } from '@/app/search/providers/filters.providers';
import { doctors } from '@/models/doctors';
import SingleDoctor from "../single-doctor/singleDoctor";
import styles from "./doctorList.module.css";

export default function DoctorList() {
    
    const { filters } = useContext(FiltersContext);

    const filteredList = doctors.filter((doctor) => {

        const isFilterActive =
            filters.specialty?.length ||
            filters.rate ||
            filters.trait?.length;

        if (!isFilterActive) {
            return true;
        }

        if (Boolean(filters.city?.length)) {
            const matchesCity = doctor.city.trim().toLowerCase().includes(filters.city!.trim().toLowerCase());
            if (!matchesCity) return false;
        }   

        if (filters.specialty?.length) {
            const matchesSpecialty = filters.specialty.some((specialty) =>
                doctor.brief.toLowerCase().includes(specialty.toLowerCase())
            );
            if (!matchesSpecialty) return false;
        }

        return true;
    });
    return (
        <div className={styles.list}>
            <SingleDoctor list={filteredList} />
        </div>
    )
}  