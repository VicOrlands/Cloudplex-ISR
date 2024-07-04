import Link from "next/link"
import styles from './button.module.css'
import clsx from "clsx"

export function ButtonLink({ link, title, className }: { link: string, title: string, className?: string }) {
    return (
        <Link href={link} className={clsx(styles.button, className)}>{title}</Link>
    )
}

export function ButtonTranparentLink({ link, title, className }: { link: string, title: string, className?: string }) {
    return (
        <Link href={link} className={clsx(styles.transparentButton, className)}>{title}</Link>
    )
}