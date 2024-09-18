import React from 'react'
import Aside from './Component/Aside/Aside'
import './Layout.css'
import Explorer from './Component/Explorer/Explorer'
import TabNav from './TabNav'
export default function LayoutMainDiv() {
  return (
    <div className='layout-Main-Div'>
        <Aside/>
        <Explorer/>
        <TabNav/>
    </div>
  )
}