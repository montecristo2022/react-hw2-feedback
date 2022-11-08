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

  plusGood = () => {
    this.setState(oldState => ({
      good: oldState.good + 1,
    }));
  };

  plusNeutral = () => {
    this.setState(oldState => ({
      neutral: oldState.neutral + 1,
    }));
  };

  plusBad = () => {
    this.setState(oldState => ({
      bad: oldState.bad + 1,
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
    return (
      <div>
        <Section title={'Пожалуйста, оставьте ваш отзыв +_+'}>

        <FeedbackOptions
          plusGood={this.plusGood}
          plusNeutral={this.plusNeutral}
          plusBad={this.plusBad}
        />
</Section>

{this.totalFeedback() ?       <div>
          <Section title={'Статистика отзывов пользователей 👇'} >

          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.totalFeedback()}
            positive={this.persentOfPositive()}
          />
          </Section>
        </div> : <Notifications message={'Станьте первым, кто проголосует'}/>}

  
      </div>
    );
  }
}
