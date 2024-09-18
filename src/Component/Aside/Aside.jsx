import React from 'react'
import Image from '../MiniComponent/Image'
import './Aside.css'
export default function Aside() {
  return (
    <aside>
        <div className='top-aside-Div'>
            <div className='copy-div'>
                <Image src={'/copy.svg'}/>
            </div>
            <div className='github-div'>
                <Image src={'/github.svg'}/>
            </div>
            <div className='fragmented-div'>
                <Image src={'/element.svg'}/>
            </div>
            <div className='pen-div'>
                <Image src={'/pencil.svg'}/>
            </div>
            <div className='mail-div'>
                <Image src={'/mail.svg'}/>
            </div>
        </div>
        <div className='bottom-aside-Div'>
            <div className='user-aside-div'>
                <Image src={'/user.svg'}/>
            </div>
            <div className='setting-aside-div'>
                <Image src={'/setting.svg'}/>
            </div>
        </div>
    </aside>
  )
}
