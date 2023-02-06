import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({options, onLeaveFeedback}) => (
    <div className={css.options}>
        {options.map(option => (
            <button 
                key={option}
                className={css.button}
                type="button" 
                data-feedback={option}
                onClick={onLeaveFeedback}
            >
                {option}
            </button>
        ))}
    </div>
);

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;