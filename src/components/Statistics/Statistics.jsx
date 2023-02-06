// import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export default function Statistics ({good,neutral, bad, total, positivePercentage}) {
      

    return (
        <>
            <ul className={css.statistics}>
                <li className={css.options}>Good: {good}</li>
                <li className={css.options}>Neutral: {neutral}</li>
                <li className={css.options}>Bad: {bad}</li>
                <li className={css.options}>Total: {total}</li>
                <li className={css.options}>Positive feedback: {positivePercentage}%</li>
            </ul>
        </>
    );
};