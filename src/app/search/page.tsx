import styles from './page.module.css'
import DoctorList from './components/doctor-list/doctorList'

export default function search() {
    return (
        <div className={styles.page}>
            <div className={styles.filters}>
                SideBar
            </div>
            <DoctorList />
        </div>
    )
}