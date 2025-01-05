import { ReactElement } from "react";
import { DoctorModel } from "@/models/doctor.model";
import styles from "./singleDoctor.module.css";

type ItemProps = {
    list: DoctorModel[]
}
const showBadge = (badge: string) => {
    switch (badge) {
        case "خوش برخورد":
            return <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 24 24" height="1em" role="img">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM3.75 12a8.25 8.25 0 1116.5 0 8.25 8.25 0 01-16.5 0zm4.85 2.55a.75.75 0 00-1.2.9 5.742 5.742 0 004.6 2.3 5.742 5.742 0 004.6-2.3.75.75 0 10-1.2-.9 4.243 4.243 0 01-3.4 1.7 4.243 4.243 0 01-3.4-1.7zM10 10a1 1 0 11-2 0 1 1 0 012 0zm5 1a1 1 0 100-2 1 1 0 000 2z" fill="currentColor">
                </path>
            </svg>
        case "کمترین معطلی":
            return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="1em" role="img">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM3.75 12a8.25 8.25 0 1116.5 0 8.25 8.25 0 01-16.5 0zm9-4a.75.75 0 00-1.5 0v4c0 .25.125.485.334.624l3 2a.75.75 0 10.832-1.248l-2.666-1.777V8z" fill="currentColor">
                </path>
            </svg>

        default:
            return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="1em" role="img">
                <path d="M8 2v3m8-3v3M3.5 9.09h17m.5-.59V17c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round">
                </path>
                <path d="M15.695 13.7h.009m-.009 3h.009m-3.709-3h.01m-.01 3h.01m-3.711-3h.01m-.01 3h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                </path>
            </svg>
    }

}
export default function Item({ list }: ItemProps): ReactElement {
    return (
        <>
            {list.map(li => (
                <div className={styles.itemWrapper} key={li.id}>
                    <div className={styles.item}>
                        <div className={styles.info}>
                            <div className={styles.avatarWrapper}>
                                <img src={`https://cdn.paziresh24.com${li.image}`} alt="" className={styles.avatar} width={150} height={150} />
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 25" height="1em"
                                    className={styles.badge} role="img">
                                    <path d="M11.448 2.366c.621-.533.932-.799 1.302-.799s.68.266 1.302.799l1.636 1.403c.278.238.417.357.585.419.168.062.35.062.717.062h1.76c.943 0 1.414 0 1.707.293.293.293.293.764.293 1.707v1.76c0 .366 0 .55.062.717.062.168.181.307.42.585l1.402 1.636c.533.621.799.932.799 1.302s-.266.68-.799 1.302l-1.402 1.636c-.239.278-.358.417-.42.585-.062.168-.062.35-.062.717v1.76c0 .943 0 1.414-.293 1.707-.293.293-.764.293-1.707.293h-1.76c-.366 0-.55 0-.717.062-.168.062-.307.181-.585.42l-1.636 1.402c-.621.533-.932.799-1.302.799s-.68-.266-1.302-.799l-1.636-1.402c-.278-.239-.417-.358-.585-.42-.168-.062-.35-.062-.717-.062H6.716c-.943 0-1.414 0-1.707-.293-.293-.293-.293-.764-.293-1.707v-1.767c0-.362 0-.544-.061-.71-.061-.167-.179-.306-.413-.582l-1.396-1.648c-.524-.617-.785-.926-.785-1.293 0-.367.261-.675.785-1.293L4.242 9.31c.234-.277.352-.416.413-.582.06-.167.06-.349.06-.711V6.25c0-.943 0-1.414.294-1.707.293-.293.764-.293 1.707-.293H8.51c.366 0 .55 0 .717-.062.168-.062.307-.181.585-.42l1.636-1.402z" fill="#3861fb">
                                    </path>
                                    <path d="M9.75 12.25l2 2 5-5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    </path>
                                </svg>
                            </div>
                            <div className={styles.descWrapper}>
                                <div className={styles.title}>{li.name} </div>
                                <div className={styles.expert}>{li.brief}   </div>
                                <div className={styles.comment}>
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 47.94 47.94" height="1em" className="plasmic-default__svg plasmic_all__wY2Hq PlasmicProductCard_svg___4KelP__E0thA" role="img">
                                        <path d="M26.285 2.486l5.407 10.956a2.58 2.58 0 001.944 1.412l12.091 1.757c2.118.308 2.963 2.91 1.431 4.403l-8.749 8.528a2.582 2.582 0 00-.742 2.285l2.065 12.042c.362 2.109-1.852 3.717-3.746 2.722l-10.814-5.685a2.585 2.585 0 00-2.403 0l-10.814 5.685c-1.894.996-4.108-.613-3.746-2.722l2.065-12.042a2.582 2.582 0 00-.742-2.285L.783 21.014c-1.532-1.494-.687-4.096 1.431-4.403l12.091-1.757a2.58 2.58 0 001.944-1.412l5.407-10.956c.946-1.919 3.682-1.919 4.629 0z" fill="currentColor"></path></svg>
                                    <span className="">{li.averageRating.toFixed(2)}</span>
                                    <span className="">
                                        (<span>{li.totalVotes}</span> نظر)
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.address}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="1em" className="" role="img">
                                <path d="M12 13.43a3.12 3.12 0 100-6.24 3.12 3.12 0 000 6.24z" stroke="currentColor" strokeWidth="1.5">
                                </path>
                                <path d="M3.62 8.49c1.97-8.66 14.8-8.65 16.76.01 1.15 5.08-2.01 9.38-4.78 12.04a5.193 5.193 0 01-7.21 0c-2.76-2.66-5.92-6.97-4.77-12.05z" stroke="currentColor" strokeWidth="1.5">
                                </path>
                            </svg>
                            <div className="">
                                <span className="">{li.address} </span>
                            </div>
                        </div>
                        <div className={styles.wrapperTags}>
                            {li.badges ?
                                li.badges.map(badge => (
                                    <div className={styles.trait}>
                                        {showBadge(badge)}
                                       <span> {badge}</span>
                                    </div>)) : null}
                        </div>
                        <button className={styles.turn}>گرفتن نوبت</button>
                    </div>
                </div>
            ))}
        </>
    )
} 