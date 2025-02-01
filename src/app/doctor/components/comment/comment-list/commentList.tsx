"use client";
import styles from "./CommentList.module.css";
import { useComment } from "@/app/search/providers/comments/comments.provider";
import { DoctorModel } from "@/models/doctor.model";
import Comment from "../comment/Comment";

type Props = {
  doctor: DoctorModel;
};

export default function CommentList({ doctor }: Props) {
  const {
    filterVisitedStatus,
    setFilterVisitedStatus,
    searchValue,
    setSearchValue,
    sortOrder,
    setSortOrder,
    filteredComments,
  } = useComment();

  function isComment() {
    if (filteredComments.length === 0) {
      return <div className={styles.isEmpty}>موردی یافت نشد!</div>;
    } else {
      return filteredComments.map((comment, i) => (
        <div key={i}>
          <Comment doctor={doctor} comment={comment} />
        </div>
      ));
    }
  }

  return (
    <div className={styles.wrapperComments}>
      <h4>نظرات در مورد دکتر {doctor.name}</h4>

      <div className={styles.filters}>
        <select
          onChange={(e) => {
            const value = e.target.value;
            if (value === "all") setFilterVisitedStatus(null);
            else if (value === "visited") setFilterVisitedStatus(true);
            else setFilterVisitedStatus(false);
          }}
          value={
            filterVisitedStatus === null
              ? "all"
              : filterVisitedStatus
                ? "visited"
                : "user"
          }
        >
          <option value="all">همه نظرات</option>
          <option value="visited">ویزیت شده</option>
          <option value="user">کاربر عادی</option>
        </select>

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}
        >
          <option value="asc">امتیاز صعودی</option>
          <option value="desc">امتیاز نزولی</option>
        </select>
      </div>

      <div className={styles.searchBox}>
        <input
          title="جستجو در نظرات"
          type="text"
          placeholder="جستجو در نظرات..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      {isComment()}
    </div>
  );
}
