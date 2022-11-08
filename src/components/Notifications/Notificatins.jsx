import styles from '../Feedback/Feedback.module.css'

const Notifications = ({message}) => {
return (<p className={styles.mainFeedbackText}>{message}</p>)
}

export default Notifications