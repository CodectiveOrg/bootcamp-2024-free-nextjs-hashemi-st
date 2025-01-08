'use client'
import DoctorList from './components/doctor-list/doctorList'
import Filter from './components/filter/filter';
import FiltersProvider from './providers/filters.providers';
import styles from './page.module.css'

export default function search() {
    return (
        <FiltersProvider>
        <div className={styles.page}>
            <div className={styles.filters}>
                <Filter />
            </div>
            <div className={styles.content}>
                <DoctorList />
            </div>
        </div>
        </FiltersProvider>
    )
}