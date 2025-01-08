import { useContext, useState } from 'react';
import { FiltersContext } from '@/app/search/providers/filters.providers';
import styles from "./filter.module.css";

export default function Filter() {

    const { filters, changeFilter } = useContext(FiltersContext);

    const handleSpecialtyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { checked, value } = event.target;

        const currentSpecialties = filters.specialty || [];
        if (checked) {
            changeFilter("specialty", [value]);
        } else {
            changeFilter(
                "specialty",
                currentSpecialties.filter((specialty) => specialty !== value)
            );
        }
    };

    return (
        <div className={styles.filterWrapper}>
            <div className={styles.selectfilterWrapper}>
                <div className={styles.wrapper}>
                    <span>فیلترها</span>
                    <span className={styles.delete}>حذف همه</span>
                </div>
                <div className={styles.labels}>
                    <div className={styles.label}>
                        <span>قلب</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="15" height="15">
                            <path d="M4 4L20 20M4 20L20 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                        </svg>
                    </div>
                    <div className={styles.label}>
                        <span>تهران</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="15" height="15">
                            <path d="M4 4L20 20M4 20L20 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                        </svg>                    </div>
                    <div className={styles.label}>
                        <span>مرد</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="15" height="15">
                            <path d="M4 4L20 20M4 20L20 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className={styles.wrapperExpert}>
                <div className={styles.titleExpert}>تخصص :</div>
                <div className={styles.experts}>
                    <label>
                        <input
                            type="checkbox"
                            value="قلب"
                            checked={filters.specialty?.includes("قلب") || false}
                            onChange={handleSpecialtyChange}
                        />
                        قلب و عروق
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="مغز و اعصاب"
                            checked={filters.specialty?.includes("مغز و اعصاب") || false}
                            onChange={handleSpecialtyChange}
                        />
                        مغز و اعصاب
                    </label>
                    <label>
                        <input 
                        type="checkbox"
                            value=" گفتاردرمانی "
                            checked={filters.specialty?.includes("گفتاردرمانی") || false}
                            onChange={handleSpecialtyChange}
                        />
                        گفتاردرمانی
                    </label>
                    <label>
                        <input 
                        type="checkbox"
                        value= "چشم پزشکی"
                        checked={filters.specialty?.includes("چشم پزشکی") || false}
                        onChange={handleSpecialtyChange}
                          />
                        چشم پزشکی
                    </label>
                    <label>
                        <input 
                        type="checkbox"
                         value="کودکان،اطفال و نوزادان"
                         checked={filters.specialty?.includes("کودکان،اطفال و نوزادان") || false}
                         onChange={handleSpecialtyChange}
                          />
                        کودکان،اطفال و نوزادان
                    </label>
                    <label>
                        <input 
                        type="checkbox"
                         value="جراحی عمومی"
                         checked={filters.specialty?.includes("جراحی عمومی") || false}
                         onChange={handleSpecialtyChange}
                          />
                        جراحی عمومی
                    </label>
                    <label>
                        <input 
                        type="checkbox"
                         value="جراحی پلاستیک و زیبایی"
                         checked={filters.specialty?.includes("جراحی پلاستیک و زیبایی") || false}
                         onChange={handleSpecialtyChange}
                          />
                        جراحی پلاستیک و زیبایی
                    </label>
                    <label>
                        <input 
                        type="checkbox"
                         value="علوم تغذیه"
                         checked={filters.specialty?.includes("علوم تغذیه") || false}
                         onChange={handleSpecialtyChange}
                          />
                        علوم تغذیه
                    </label>
                    <label>
                        <input 
                        type="checkbox"
                         value="ارتوپدی"
                         checked={filters.specialty?.includes("ارتوپدی") || false}
                         onChange={handleSpecialtyChange}
                          />
                        ارتوپدی
                    </label>
                    <label>
                        <input 
                        type="checkbox"
                         value="گوارش"
                         checked={filters.specialty?.includes("گوارش") || false}
                         onChange={handleSpecialtyChange}
                          />
                        گوارش
                    </label>
                    <label>
                        <input 
                        type="checkbox"
                         value="زنان و زایمان"
                         checked={filters.specialty?.includes("زنان و زایمان") || false}
                         onChange={handleSpecialtyChange}
                          />
                        زنان و زایمان
                    </label>
                    <label>
                        <input 
                        type="checkbox"
                         value="بیماریهای عفونی"
                         checked={filters.specialty?.includes("بیماریهای عفونی") || false}
                         onChange={handleSpecialtyChange}
                          />
                        بیماریهای عفونی
                    </label>
                    <label>
                        <input 
                        type="checkbox"
                         value="ارولوژی"
                         checked={filters.specialty?.includes("ارولوژی") || false}
                         onChange={handleSpecialtyChange}
                          />
                        ارولوژی
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