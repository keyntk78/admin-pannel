import React from 'react';

const Badge = (props) => {
  let type = `${props.type}`;

  return (
    <span
      className={`py-[6px] px-[12px] text-white rounded-[15px] dark:shadow-box-shadow-dark shadow-main`}
      style={{ backgroundColor: type }}
    >
      {props.content}
    </span>
  );
};

export default Badge;
