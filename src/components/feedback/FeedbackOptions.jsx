import React from 'react';
import PropTypes from 'prop-types';

import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback }) => (
    <section className={css.sectionBtn}>
        <button type="button" className={css.btn} onClick={onLeaveFeedback[0]}>Good</button>
        <button type="button" className={css.btn} onClick={onLeaveFeedback[2]}>Neutral</button>
        <button type="button" className={css.btn} onClick={onLeaveFeedback[1]}>Bad</button>
    </section>
)

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.arrayOf( PropTypes.func),
    options: PropTypes.func,
}