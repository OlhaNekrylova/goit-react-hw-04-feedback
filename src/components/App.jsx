import React from 'react';
import { useState } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export default function App () {
  const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [total, setTotal] = useState(0);
    const [positivePercentage] = useState(0); 

  countTotalFeedback = () => {
    const {good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  
  countPositiveFeedbackPercentage = () => {
    let total = this.countTotalFeedback();
    const {good} = this.state;
    return good ? Math.round((good / total) * 100) : 0; 
  };

  handleFeedback = ({target}) => {
    const { feedback } = target.dataset;
      this.setState(prevState => {
      return { [feedback] : prevState[feedback] + 1};
  });
  };
    
  render () {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Section 
          title={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section 
          title={'Statistics'}>
        {total ? 
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
          : <Notification message="There is no feedback" />
        }
        </Section>
      </>
    );
  };
};