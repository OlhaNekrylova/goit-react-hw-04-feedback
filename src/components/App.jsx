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

  const handleFeedback = ({ target }) => {
    const { feedback } = target.dataset;
      switch (feedback) {
        case 'good': 
          setGood(prevGood => prevGood + 1);
        break;

        case 'neutral':
          setNeutral(prevNeutral => prevNeutral + 1);
          break;

        case 'bad': 
          setBad(prevBad => prevBad + 1);
          break;

        default:
          break;
      }
    };  

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  
  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
      return good ? Math.round((good / total) * 100) : 0; 
  };

  return (
      <>
        <Section 
          title={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys({ good, neutral, bad })}
            onLeaveFeedback={handleFeedback}
          />
        </Section>
        <Section 
          title={'Statistics'}>
        {countTotalFeedback() ? 
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
          : <Notification message="There is no feedback" />
        }
        </Section>
      </>
    );
  };
