import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const EvPlugError = forwardRef(
  ({ color = 'currentColor', size = 24 }, ref) => {
    return (
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        color={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 13.1538V21"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M15 8.38452V11.1538C15 12.2583 14.1046 13.1538 13 13.1538H7C5.89543 13.1538 5 12.2583 5 11.1538V8.38452C5 7.27995 5.89543 6.38452 7 6.38452H13C14.1046 6.38452 15 7.27995 15 8.38452Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M13.3334 6.38462V3"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M6.66663 6.38462V3"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M15.1213 21.364L17.2427 19.2427M17.2427 19.2427L19.364 17.1213M17.2427 19.2427L15.1213 17.1213M17.2427 19.2427L19.364 21.364"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </svg>
    );
  }
);

EvPlugError.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

EvPlugError.displayName = 'EvPlugError';

export default EvPlugError;