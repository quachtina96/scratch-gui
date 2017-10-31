import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import styles from './icon-button.css';

const IconButton = ({
    img,
    className,
    title,
    onClick
}) => (
    <div
        className={classNames(styles.container, className)}
        onClick={onClick}
        role="button"
    >
        <img
            className={styles.icon}
            src={img}
        />
        <div className={styles.title}>
            {title}
        </div>
    </div>
);

IconButton.propTypes = {
    className: PropTypes.string,
    img: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    title: PropTypes.node.isRequired
};

export default IconButton;
