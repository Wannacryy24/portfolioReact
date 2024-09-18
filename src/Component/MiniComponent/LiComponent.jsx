import React from 'react'

export default function LiComponent({props}) {
    // console.log(props);
    const ulClassName = `list-container item-count-${props.length}`;
  return (
        <ul className={ulClassName}>
        {
            props.map((item,index) => 
                <li key={item} className={`${item.toLowerCase()}-li-${index}`}>{item}</li>
            )
        }
        </ul> 
  )
}