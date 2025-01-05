import styles from './page.module.css'
import DoctorList from './components/doctor-list/doctorList'
import Filter from './components/filter/filter'
export default function search() {
    return (
        <div className={styles.page}>
            <div className={styles.filters}>
                <Filter />
            </div>
            <DoctorList />
        </div>
    )
}