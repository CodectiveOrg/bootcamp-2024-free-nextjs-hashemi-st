import { DoctorModel } from "@/models/doctor.model";
import styles from './Rating.module.css';

type Props = {
    doctor: DoctorModel
}

export default function Rating({ doctor }: Props) {
    return (

<div className={styles.wrapperRate}>
<span className={styles.rate}>{doctor.averageRating} از  5</span>
<span>رضایت</span>
<span>{doctor.totalVotes} نظر</span>
</div>
    )
}