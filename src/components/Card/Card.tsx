import { ReactElement } from 'react'
import styles from './Card.module.css'
type Props = {
    children : React.ReactNode
}
export default function Card({children}:Props):ReactElement {
    return <div className={styles.wrapper}>
        {children}
    </div>
}