import { useContext } from "react";
import { DoctorsContext } from "@/app/search/providers/doctors/doctors.provider";
import SingleDoctor from "../single-doctor/singleDoctor";
import styles from "./doctorList.module.css";

export default function DoctorList() {
  const { filteredDoctors } = useContext(DoctorsContext);

  return (
    <div className={styles.list}>
      {filteredDoctors.length ? filteredDoctors.map(doctor=>(
        <div key={doctor.id}>
        <SingleDoctor doctor={doctor} />
        </div>
      )): (
        <div className={styles.emptyList}>
          <h3>متاسفانه هیچ دکتری با تخصص موردنظر یافت نشد.</h3>
        </div>
      )}     
    </div>
  );
}
