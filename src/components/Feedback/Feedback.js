import React, { Component } from 'react';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Section from 'components/Section/Section';
import Notifications from 'components/Notifications/Notificatins';

export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  plusOneFeedback = state => {
    console.log(state);
    this.setState(oldState => ({
      [state]: oldState[state] + 1,
    }));
  };

  totalFeedback = () => {
    let { good, neutral, bad } = this.state;

    return good + neutral + bad;
  };

  persentOfPositive = () => {
    const { good, neutral, bad } = this.state;

    return Number.parseInt((100 / (bad + neutral + good)) * good);
  };

  render() {
    const options = Object.keys(this.state);
    return (
      <div>
        <Section title={'Пожалуйста, оставьте ваш отзыв +_+'}>
          <FeedbackOptions
            plusOneFeedback={this.plusOneFeedback}
            options={options}
          />
        </Section>

        {this.totalFeedback() ? (
          <div>
            <Section title={'Статистика отзывов пользователей 👇'}>
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.totalFeedback()}
                positive={this.persentOfPositive()}
              />
            </Section>
          </div>
        ) : (
          <Notifications message={'Стань первым хотя бы где-то, проголосуй!'} />
        )}
      </div>
    );
  }
}
