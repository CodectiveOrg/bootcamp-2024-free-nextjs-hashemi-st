import { DoctorModel } from "@/models/doctor.model";
import { Circle } from "@/assets/svg/Circle";
import { Whatsapp } from "@/assets/svg/Whatsapp";
import { Telegram } from "@/assets/svg/Telegram";
import Card from "@/components/Card/Card";
import styles from "./OnlineVisit.module.css";
type Props = {
  doctor: DoctorModel;
};
export default function OnlineVisit({ doctor }: Props) {
  return (
    <Card>
      <div className={styles.visit}>
        <div className={styles.row}>
          <div className={styles.wrapper}>
            <Circle />
            <span>همین الان آنلاین ویزیت شوید</span>
          </div>
          <div>130 هزار تومان</div>
        </div>
        <div className={styles.row}>
          <div>ویزیت آنلاین در پیام رسان:</div>
          <div className={styles.chat}>
            <Whatsapp /> <span>واتساپ</span>
            <Telegram />
            <span>تلگرام</span>
          </div>
        </div>

        <div>
          تضمین بازپرداخت مبلغ ویزیت در صورت نارضایتی تا ۳ روز می‌توانید هر
          سوالی دارید از پزشک بپرسید
        </div>
      </div>
      <button className={styles.viButton}>
        شروع ویزیت با دکتر {doctor.name}
      </button>
    </Card>
  );
}
