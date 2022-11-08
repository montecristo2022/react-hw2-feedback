import styles from '../Feedback/Feedback.module.css'


const Section = ({title, children }) => {
    return (
        <section>
    <h3 className={styles.mainFeedbackText}>
        {title}
      </h3>
      {children}
      </section>)
}

export default Section