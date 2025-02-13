import { DoctorModel } from "@/models/doctor.model";
import Card from "@/components/Card/Card";
import styles from "./DoctorContact.module.css";
type Props = {
  doctor: DoctorModel;
};
export default function DoctorContact({ doctor }: Props) {
  return (
    <Card>
      <h4 className={styles.title}>اطلاعات تماس دکتر {doctor.name}</h4>
      <div className={styles.contact}>
        <div className={styles.backColor}>
          <div>آدرس:</div>
          <div className={styles.address}>{doctor.address}</div>
        </div>
        <div className={styles.backColor}>
          <div>تلفن:</div>
          <div className={styles.phone}>{doctor.phone}</div>
        </div>
      </div>
    </Card>
  );
}
