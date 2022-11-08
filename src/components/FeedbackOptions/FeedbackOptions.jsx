import React from "react";
import styles from '../Feedback/Feedback.module.css'

const FeedbackOptions = ({plusGood, plusNeutral, plusBad}) => {
   return <ul className={styles.buttonList}>
          <button className={styles.button} onClick={plusGood}>
            Хорошо
          </button>
          <button className={styles.button} onClick={plusNeutral}>
            Нормально
          </button>
          <button className={styles.button} onClick={plusBad}>
            Ужасно
          </button>
        </ul>
}

export default FeedbackOptions