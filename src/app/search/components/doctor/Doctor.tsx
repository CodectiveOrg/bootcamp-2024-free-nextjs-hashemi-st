import { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
import { DoctorModel } from "@/models/doctor.model";
import { showBadge } from "@/assets/functions/showBadge";
import { Location } from "@/assets/svg/location";
import { Star } from "@/assets/svg/star";
import { Registered } from "@/assets/svg/registered";
import styles from "./Doctor.module.css";

type ItemProps = {
  doctor: DoctorModel;
};

export default function Doctor({ doctor }: ItemProps): ReactElement {
  return (
    <div className={styles.item} key={doctor.id}>
      <div className={styles.info}>
        <div className={styles.avatarWrapper}>
          <Image
            src={`https://cdn.paziresh24.com${doctor.image}`}
            alt="avatar"
            className={styles.avatar}
            width={100}
            height={100}
          />
          <div className={styles.badge}>
            <Registered />
          </div>
        </div>
        <div className={styles.descWrapper}>
          <div>{doctor.name} </div>
          <div className={styles.brief}>{doctor.brief} </div>
          <div className={styles.comment}>
            <Star />
            <span>{doctor.averageRating.toFixed(2)}</span>
            <span>
              (<span>{doctor.totalVotes}</span> نظر)
            </span>
          </div>
        </div>
      </div>
      <div className={styles.address}>
        <Location />
        <div>
          <span>{doctor.address} </span>
        </div>
      </div>
      <div className={styles.wrapperTags}>
        {doctor.badges
          ? doctor.badges.map((badge, _i) => (
              <div key={_i} className={styles.trait}>
                {showBadge(badge)}
                <span> {badge}</span>
              </div>
            ))
          : null}
      </div>
      <Link href={`/doctor/${doctor.id}`} className={styles.turn}>گرفتن نوبت</Link>
    </div>
  );
}
