import Image from "next/image";
import { DoctorModel } from "@/models/doctor.model";
import { Experience } from "@/assets/svg/experience";
import Card from "@/components/Card/Card";
import { Save } from "@/assets/svg/Save";
import { Share } from "@/assets/svg/Share";
import { Report } from "@/assets/svg/Report";
import styles from "./DoctorInfo.module.css";

type Props = {
  doctor: DoctorModel;
};

export default function DoctorInfo({ doctor }: Props) {
  return (
    <Card>
      <div className={styles.info}>
        <div className={styles.avatarWrapper}>
          <Image
            src={`https://cdn.paziresh24.com${doctor.image}`}
            alt=""
            className={styles.avatar}
            width={150}
            height={150}
          />
        </div>
        <div>
          <div>{doctor.name}</div>
          <div className={styles.experience}>
            <Experience />
            {doctor.experience} سال تجربه
          </div>
          <div> شماره نظام پزشکی : {doctor.code} </div>
        </div>
      </div>
      <div className={styles.brief}>تخصص : {doctor.brief}</div>

      <div className={styles.icones}>
        <Save />
        <div> ذخیره</div>
        <Share />
        <div> اشتراک گذاری</div>
        <Report />
        <div> گزارش</div>
      </div>
    </Card>
  );
}
