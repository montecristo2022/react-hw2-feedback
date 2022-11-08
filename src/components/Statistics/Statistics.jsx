import React from "react";
import styles from '../Feedback/Feedback.module.css'

const Statistics = ({good, neutral, bad, total, positive}) => {
    return   <ul>
    <li className={styles.feedbackText}>
      Хороших отзывов: {good}
    </li>
    <li className={styles.feedbackText}>
      Нейтральных отзывов: {neutral}
    </li>
    <li className={styles.feedbackText}>
      Плохих отзывов: {bad}
    </li>
    <li className={styles.feedbackText}>
      Общее количество отзывов: {total}
    </li>
    <li className={styles.feedbackText}>
      Процент позитивных отзывов:{' '}
      {positive
        ? `${positive} %`
        : 'В данный момент позитивные голоса отсутствуют. Будь первым!'}
    </li>
  </ul>
}

export default Statistics