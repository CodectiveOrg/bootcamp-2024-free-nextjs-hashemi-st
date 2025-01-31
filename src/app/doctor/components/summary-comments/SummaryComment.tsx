import { DoctorModel } from "@/models/doctor.model";
import Card from "@/components/Card/Card";
import Rating from "../Rating/Rating";
import ProgressBar from "../progressBar/progressBar";

import styles from "./SummaryComment.module.css";

type Props = {
    doctor: DoctorModel
}

export default function SummaryComment({ doctor }: Props) {
    return (
        <Card>
        <h4>خلاصه نظرات در مورد دکتر {doctor.name}</h4>
        <Rating doctor={doctor}/>
        
        <div className={styles.label}>
            برخورد مناسب پزشک
            <ProgressBar progress={85} color="var(--color-primary-lighter)" />
        </div>
        <div className={styles.label}>
            توضیحات پزشک هنگام ویزیت
            <ProgressBar progress={66} color="var(--color-primary-lighter)" />
        </div>
        <div className={styles.label}>
            مهارت و تخصص پزشک
            <ProgressBar progress={72} color="var(--color-primary-lighter)" /> 
        </div>
    </Card>
    )
}