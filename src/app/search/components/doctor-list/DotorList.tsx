import { useContext } from "react";
import { DoctorsContext } from "@/app/search/providers/doctors/doctors.provider";
import Doctor from "../doctor/Doctor";

import styles from "./DoctorList.module.css";

export default function DoctorList() {

  const { filteredDoctors } = useContext(DoctorsContext);

  if (filteredDoctors.length === 0) {

    return (
      <div className={styles.emptyList}>
        <h3>متاسفانه دکتری یافت نشد.</h3>
      </div>
    );
  }

  return (
    <div className={styles.list}>

      {filteredDoctors.map((doctor) => (
        <div key={doctor.id}>
          <Doctor doctor={doctor} />
        </div>
      ))}

    </div>
  );
}
