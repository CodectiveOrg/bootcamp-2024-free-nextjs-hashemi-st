import { DoctorModel, Comments } from "@/models/doctor.model";
import Image from "next/image";
import { Plasmic } from "@/assets/svg/Plasmic";
import styles from "./Comment.module.css";

type Props = {
  doctor: DoctorModel;
  comment: Comments;
};

export default function Comment({ doctor, comment }: Props) {
  return (
    <div className={styles.commentList}>
      <div className={styles.wrapperInfo}>
        <div className={styles.flexItem}>
          <Image
            src={comment.image}
            alt="avatar"
            width={45}
            height={45}
            className={styles.avatar}
          />
          <div style={{ lineHeight: 2 }}>
            <div className={styles.tags}>
              <span>{comment.user}</span>
              <span
                className={styles.label}
                style={{ background: "var(--color-star)" }}
              >
                {comment.visited ? "ویزیت شده" : "کاربر عادی"}
              </span>
            </div>
            <div className={styles.tags}>
              <span>{comment.date}</span>
              <div>|</div>
              <span>مطب {doctor.name}</span>
            </div>
          </div>
        </div>
        <div className={styles.point}>{comment.point}</div>
      </div>

      <div className={styles.comment}>{comment.comment}</div>

      <div className={styles.answer}>
        <div className={styles.wrapperInfo}>
          <div className={styles.flexItem}>
            <Image
              src={`https://cdn.paziresh24.com${doctor.image}`}
              alt="avatar"
              width={45}
              height={45}
              className={styles.avatar}
            />
            <div className={styles.tags}>
              <span>{doctor.name}</span>
              <span
                className={styles.label}
                style={{ background: "var(--color-success)" }}
              >
                درمانگر{" "}
              </span>
            </div>
          </div>
          <Plasmic />
        </div>
        <div className={styles.comment}>{comment.answer}</div>
      </div>
    </div>
  );
}