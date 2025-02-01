"use client"
import { ReactElement } from "react";
import { notFound } from "next/navigation";
import { doctors } from "@/models/doctors";
import {CommentsProvider} from "@/app/search/providers/comments/comments.provider"
import DoctorInfo from "../components/info/DoctorInfo";
import DoctorContact from "../components/contact/DoctorContact";
import DoctorAbout from "../components/about/DoctorAbout";
import OnlineVisit from "../components/online-visit/OnlineVisit";
import SummaryComment from "../components/summary-comments/SummaryComment";
import CommentList from "../components/comment/comment-list/commentList";
import styles from "./page.module.css";

type Props = {
  params: { id: string };
};

export default function page({ params }: Props): ReactElement {

  const doctor = doctors.find((dr) => dr.id === params.id);
  const comments = doctor && doctor.comments ? doctor.comments : []

  if (!doctor) {
    notFound();
  }

  return (
    <CommentsProvider comments={comments}>
    <div className={styles.pageContent}>
      <div className={styles.column}>
        <DoctorInfo doctor={doctor} />
        <SummaryComment doctor={doctor} />
        <CommentList doctor={doctor}/>
      </div>
      <div className={styles.column}>
        <OnlineVisit doctor={doctor} />
        <DoctorContact doctor={doctor} />
        <DoctorAbout doctor={doctor} />
      </div>
    </div>
    </CommentsProvider>
  );
}
