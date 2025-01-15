import { ReactElement } from "react";
import Image from "next/image";
import { DoctorModel } from "@/models/doctor.model";
import { showBadge } from "@/assets/functions/showBadge";
import { Location } from "@/assets/svg/location";
import { Star } from "@/assets/svg/star";
import { Registered } from "@/assets/svg/registered";
import styles from "./singleDoctor.module.css";

type ItemProps = {
  list: DoctorModel[];
};

export default function Item({ list }: ItemProps): ReactElement {
  return (
    <>
      {list.length ? (
        list.map((li) => (
          <div className={styles.itemWrapper} key={li.id}>
            <div className={styles.item}>
              <div className={styles.info}>
                <div className={styles.avatarWrapper}>
                  <Image
                    src={`https://cdn.paziresh24.com${li.image}`}
                    alt=""
                    className={styles.avatar}
                    width={150}
                    height={150}
                  />
                  <div className={styles.badge}>
                    <Registered />
                  </div>
                </div>
                <div className={styles.descWrapper}>
                  <div>{li.name} </div>
                  <div className={styles.brief}>{li.brief} </div>
                  <div className={styles.comment}>
                    <Star />
                    <span>{li.averageRating.toFixed(2)}</span>
                    <span>
                      (<span>{li.totalVotes}</span> نظر)
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.address}>
                <Location />
                <div>
                  <span>{li.address} </span>
                </div>
              </div>
              <div className={styles.wrapperTags}>
                {li.badges
                  ? li.badges.map((badge, _i) => (
                    <div key={_i} className={styles.trait}>
                      {showBadge(badge)}
                      <span> {badge}</span>
                    </div>
                  ))
                  : null}
              </div>
              <button className={styles.turn}>گرفتن نوبت</button>
            </div>
          </div>
        ))
      ) : (
        <div className={styles.emptyList}>
          <h3>متاسفانه هیچ دکتری با تخصص موردنظر یافت نشد.</h3>
        </div>
      )}
    </>
  );
}
