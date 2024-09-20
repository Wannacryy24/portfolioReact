import React, { useContext } from 'react'
import Image from '../MiniComponent/Image'
import './Aside.css'
import { ButtonContext } from '../../ButtonContext'
export default function Aside() {
    const { activeComponent , setActiveComponent } = useContext(ButtonContext);
    console.log(activeComponent);

    const handleClickbtn = (e) => {
        var selectedComponent = e.currentTarget.getAttribute('data-value');
        setActiveComponent(selectedComponent);
    }

  return (
    <aside>
        <div className='top-aside-Div'>
            
            <div className={activeComponent === 'home' ? 'copy-div-active' :'copy-div'} onClick={handleClickbtn} data-value='home'>
                <Image src={'/copy.svg'}/>
            </div>


            <div className={activeComponent === 'about' ? 'fragmented-div-active' : 'fragmented-div'} onClick={handleClickbtn} data-value='about'>
                <Image src={'/element.svg'}/>
            </div>
            

            <div className={activeComponent === 'project' ? 'pen-div-active' : 'pen-div'} onClick={handleClickbtn} data-value='project'>
                <Image src={'/pencil.svg'}/>
            </div>
            

            <div className={activeComponent === 'contact' ?'mail-div-active':'mail-div'} onClick={handleClickbtn} data-value='contact'>
                <Image src={'/mail.svg'}/>
            </div>

            <div className={activeComponent === 'github' ? 'github-div-active' :'github-div'} onClick={handleClickbtn} data-value='github'>
                <Image src={'/github.svg'}/>
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
