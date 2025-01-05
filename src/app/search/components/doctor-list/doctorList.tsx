import { doctors } from '@/models/doctors';
import SingleDoctor from "../single-doctor/singleDoctor";
import styles from "./doctorList.module.css";

export default function DoctorList() {
    return (
        <div className={styles.list}>
            <SingleDoctor list={doctors} />
        </div>
    )
}  