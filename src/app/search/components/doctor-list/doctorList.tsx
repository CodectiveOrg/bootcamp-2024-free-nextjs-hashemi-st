import { useContext } from "react";
import { DoctorsContext } from "@/app/search/providers/doctors/doctors.provider";
import SingleDoctor from "../single-doctor/singleDoctor";
import styles from "./doctorList.module.css";

export default function DoctorList() {
  const { filteredDoctors } = useContext(DoctorsContext);

  return (
    <div className={styles.list}>
      <SingleDoctor list={filteredDoctors} />
    </div>
  );
}
