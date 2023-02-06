import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({
    good, 
    neutral, 
    bad,
    total, 
    positivePercentage
}) => (
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

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;