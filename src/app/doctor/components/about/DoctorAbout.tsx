import { DoctorModel } from "@/models/doctor.model";
import Card from "@/components/Card/Card";
import styles from "./DoctorAbout.module.css";

type Props = {
  doctor: DoctorModel;
};

export default function DoctorAbout({ doctor }: Props) {
  return (
    <Card>
      <div className={styles.title}>
        درباره من
        <br />
        خلاصه ای از خدمات قابل ارائه توسط دکتر {doctor.name}
      </div>
      <div className={styles.about}>
        من {doctor.name}، متخصص {doctor.brief} با کد نظام پزشکی {doctor.code}{" "}
        هستم.
        <p>
        هدف من ارائه خدمات درمانی باکیفیت و کمک به بیماران برای دستیابی به سلامتی و بهبود کیفیت زندگی آن‌ها است.
        </p>
         با بیش از {doctor.experience} سال
        تجربه کاری و فعالیت در حوزه {doctor.expertise}، تلاش می‌کنم تا با
        استفاده از دانش روز دنیا و ابزارهای پیشرفته پزشکی، بهترین خدمات ممکن را
        به مراجعین خود ارائه دهم.
<p>
من به اهمیت ارتباط مؤثر با بیماران معتقدم و تمام تلاش خود را می‌کنم تا شرایط پزشکی و راه‌حل‌های درمانی را به زبان ساده و قابل درک توضیح دهم.
  </p>        
         اگر به دنبال تشخیص دقیق و درمان مؤثر هستید،
        خوشحال می‌شوم که شما را در مسیر سلامتی همراهی کنم.
      </div>
    </Card>
  );
}
