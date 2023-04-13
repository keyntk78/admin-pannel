import React from 'react'

const Badge = (props) => {
  let type = `${props.type}`

  return (
    <span
      className={`rounded-[15px] px-[12px] py-[6px] text-white shadow-main dark:shadow-box-shadow-dark`}
      style={{ backgroundColor: type }}
    >
      {props.content}
    </span>
  )
}

export default Badge
