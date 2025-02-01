import { ReactElement } from "react";
import { notFound } from "next/navigation";
import { doctors } from "@/models/doctors";
import DoctorInfo from "../components/info/DoctorInfo";
import DoctorContact from "../components/contact/DoctorContact";
import DoctorAbout from "../components/about/DoctorAbout";
import styles from "./page.module.css";
import OnlineVisit from "../components/online-visit/OnlineVisit";
import SummaryComment from "../components/summary-comments/SummaryComment";
import Comment from "../components/comment/Comment";

type Props = {
  params: { id: string };
};

export default function page({ params }: Props): ReactElement {
  const doctor = doctors.find((dr) => dr.id === params.id);

  if (!doctor) {
    notFound();
  }

  return (
    <div className={styles.pageContent}>
      <div className={styles.column}>
        <DoctorInfo doctor={doctor} />
        <SummaryComment doctor={doctor} />
        <div className={styles.wrapperComments}>
          <h4>نظرات در مورد دکتر {doctor.name}</h4>
          {doctor?.comments.map((comment, i) => (
            <div key={i}>
              <Comment doctor={doctor} comment={comment} />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.column}>
        <OnlineVisit doctor={doctor} />
        <DoctorContact doctor={doctor} />
        <DoctorAbout doctor={doctor} />
      </div>
    </div>
  );
}
