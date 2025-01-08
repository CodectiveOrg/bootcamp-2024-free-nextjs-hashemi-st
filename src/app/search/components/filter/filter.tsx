import { useContext, useState } from 'react';
import { FiltersContext } from '@/app/search/providers/filters.providers';
import styles from "./filter.module.css";

export default function Filter() {

    const { filters, changeFilter } = useContext(FiltersContext);

    const [selectedRate, setSelectedRate] = useState<string | null>(filters.rate?.toString() || null);

    const handleSpecialtyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { checked, value } = event.target;

        const currentSpecialties = filters.specialty || [];
        if (checked) {
            changeFilter("specialty", [...currentSpecialties, value]);
        } else {
            changeFilter(
                "specialty",
                currentSpecialties.filter((specialty) => specialty !== value)
            );
        }
    };

    const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        changeFilter("city", value);
    };

    const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        changeFilter("gender", value);
    };

    const handleRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        if (value === "upper4") {
            changeFilter("rate", { min: 4 });   
        }
        if (value === "under4") {
            changeFilter("rate", { max: 4 }); 
        }
        setSelectedRate(value);   
    };

    const handleTraitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = event.target;
        const currentTraits = filters.trait || [];
    
        if (checked) {
            changeFilter("trait", [...currentTraits, value]);
        } else {
            changeFilter(
                "trait",
                currentTraits.filter((trait) => trait !== value)
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
                            name='specialty'
                            value="قلب"
                            checked={filters.specialty?.includes("قلب") || false}
                            onChange={handleSpecialtyChange}
                        />
                        قلب و عروق
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name='specialty'
                            value="گفتار درمانی"
                            checked={filters.specialty?.includes("گفتار درمانی") || false}
                            onChange={handleSpecialtyChange}
                        />
                        گفتار درمانی
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name='specialty'
                            value="چشم پزشکی"
                            checked={filters.specialty?.includes("چشم پزشکی") || false}
                            onChange={handleSpecialtyChange}
                        />
                        چشم پزشکی
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name='specialty'
                            value="کودکان"
                            checked={filters.specialty?.includes("کودکان") || false}
                            onChange={handleSpecialtyChange}
                        />
                        کودکان،اطفال و نوزادان
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name='specialty'
                            value="جراحی عمومی"
                            checked={filters.specialty?.includes("جراحی عمومی") || false}
                            onChange={handleSpecialtyChange}
                        />
                        جراحی عمومی
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name='specialty'
                            value="جراحی پلاستیک و زیبایی"
                            checked={filters.specialty?.includes("جراحی پلاستیک و زیبایی") || false}
                            onChange={handleSpecialtyChange}
                        />
                        جراحی پلاستیک و زیبایی
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name='specialty'
                            value="علوم تغذیه"
                            checked={filters.specialty?.includes("علوم تغذیه") || false}
                            onChange={handleSpecialtyChange}
                        />
                        علوم تغذیه
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name='specialty'
                            value="ارتوپدی"
                            checked={filters.specialty?.includes("ارتوپدی") || false}
                            onChange={handleSpecialtyChange}
                        />
                        ارتوپدی
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name='specialty'
                            value="گوارش"
                            checked={filters.specialty?.includes("گوارش") || false}
                            onChange={handleSpecialtyChange}
                        />
                        گوارش
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name='specialty'
                            value="زنان و زایمان"
                            checked={filters.specialty?.includes("زنان و زایمان") || false}
                            onChange={handleSpecialtyChange}
                        />
                        زنان و زایمان
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name='specialty'
                            value="بیماریهای عفونی"
                            checked={filters.specialty?.includes("بیماریهای عفونی") || false}
                            onChange={handleSpecialtyChange}
                        />
                        بیماریهای عفونی
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name='specialty'
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
                <select onChange={handleCityChange} className={styles.city}>
                    <option></option>
                    <option value="اردبیل">اردبیل</option>
                    <option value="اصفهان">اصفهان</option>
                    <option value="بابل">بابل</option>
                    <option value="بندرعباس">بندرعباس</option>
                    <option value="تهران">تهران</option>
                    <option value="خرم آباد">خرم آباد</option>
                    <option value="جهرم">جهرم</option>
                    <option value="کاشان">کاشان</option>
                    <option value="کرمانشاه">کرمانشاه</option>
                    <option value="قائن">قائن</option>
                    <option value="سمنان">سمنان</option>
                    <option value="شیراز">شیراز</option>
                    <option value="مشهد">مشهد</option>
                    <option value="نیشابور">نیشابور</option>
                    <option value="همدان">همدان</option>
                </select>
            </div>

            <div className={styles.wrapperGender}>
                <div>جنسیت :</div>
                <div className={styles.radio}>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={filters.gender === "male"}
                            onChange={handleGenderChange}
                        />
                        مرد
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={filters.gender === "female"}
                            onChange={handleGenderChange}
                        />
                        زن
                    </label>
                </div>
            </div>

            <div className={styles.wrapperPoints}>
                <div>امتیاز</div>
                <div className={styles.radio}>
                    <label>
                        <input
                            type="radio"
                            name="point"
                            value="upper4"
                            checked={selectedRate === "upper4"}
                            onChange={handleRateChange}
                        />
                        بالای 4
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="point"
                            value="under4"
                            checked={selectedRate === "under4"}
                            onChange={handleRateChange}
                        />
                        زیر 4
                    </label>
                </div>
            </div>
            <div className={styles.wrapperOther}>
                <div>سایر</div>
                <div className={styles.radio}>
                    <label>
                        <input 
                        type="checkbox" 
                        name="trait" 
                        value="خوش برخورد"
                        checked={filters.trait?.includes("خوش برخورد") || false}
                        onChange={handleTraitChange}
                         />
                        خوش برخورد
                    </label>
                    <label>
                        <input 
                        type="checkbox" 
                        name="trait" 
                        value="کمترین معطلی"
                        checked={filters.trait?.includes("کمترین معطلی") || false}
                        onChange={handleTraitChange} 
                        />
                        کمترین معطلی
                    </label>
                </div>
            </div>
        </div>
    )
}