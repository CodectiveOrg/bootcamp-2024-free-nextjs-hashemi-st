
import styles from "./filter.module.css";


export default function Filter() {

    return (
        <div className={styles.filterWrapper}>
            <div className={styles.selectfilterWrapper}>
                <div className={styles.wrapper}>
                    <span>فیلترها</span>
                    <span className={styles.delete}>حذف همه</span>
                </div>
                <div className={styles.labels}>
                    <div className={styles.label}>
                        <div>قلب</div><span>X</span>
                    </div>
                    <div className={styles.label}>
                        <div>تهران</div><span>X</span>
                    </div>
                    <div className={styles.label}>
                        <div>مرد</div><span>X</span>
                    </div>

                </div>
            </div>

            <div className={styles.wrapperExpert}>
                <div className={styles.titleExpert}>تخصص :</div>
                <div className={styles.experts}>
                    <label>
                        <input type="checkbox" value="heart" />
                        قلب
                    </label>
                    <label>
                        <input type="checkbox" value="brain" />
                        مغز
                    </label>
                    <label>
                        <input type="checkbox" value="ear" />
                        گوش
                    </label>
                    <label>
                        <input type="checkbox" value="eye" />
                        چشم
                    </label>
                    <label>
                        <input type="checkbox" value="kedney" />
                        کلیه
                    </label>
                    <label>
                        <input type="checkbox" value="internal" />
                        داخلی
                    </label>
                    <label>
                        <input type="checkbox" value="skin" />
                        پوست
                    </label>
                    <label>
                        <input type="checkbox" value="spychology" />
                        روانپزشکی
                    </label>
                    <label>
                        <input type="checkbox" value="ortopedy" />
                        ارتوپدی
                    </label>
                </div>
            </div>

            <div className={styles.wrapperCity}>
                <div>انتخاب شهر </div>
                <select className={styles.city}>
                    <option></option>
                    <option>البرز</option>
                    <option>اراک</option>
                    <option>تهران</option>
                    <option>تبریز</option>
                </select>
            </div>

            <div className={styles.wrapperGender}>
                <div>جنسیت :</div>
                <div className={styles.radio}>
                    <label>
                        <input type="radio" name="gender" value="man" />
                        مرد
                    </label>
                    <label>
                        <input type="radio" name="gender" value="woman" />
                        زن
                    </label>
                </div>
            </div>

            <div className={styles.wrapperPoints}>
                <div>امتیاز</div>
                <div className={styles.radio}>
                    <label>
                        <input type="radio" name="point" value="upper4" />
                        بالای 4
                    </label>
                    <label>
                        <input type="radio" name="point" value="3to4" />
                        3 تا 4
                    </label>
                    <label>
                        <input type="radio" name="point" value="under3" />
                        زیر 3
                    </label>
                </div>
            </div>
            <div className={styles.wrapperOther}>
                <div>سایر</div>
                <div className={styles.radio}>
                    <label>
                        <input type="checkbox" name="trait" value="nice" />
                        خوش برخورد
                    </label>
                    <label>
                        <input type="checkbox" name="trait" value="soon" />
                        کمترین معطلی
                    </label>
                </div>
            </div>
        </div>
    )
}