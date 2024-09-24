import React from 'react'
import LiComponent from '../MiniComponent/LiComponent'
import Image from '../MiniComponent/Image'
import './Header.css'
export default function Header() {
  const handleCloseWindow = () => {
    window.close();
};
  return (
    <header>
        <div className='left-Header-Div'>
            <Image src={'/vscode.svg'} className={'vsCode-Image'} alt={'sorry'}/>
            <LiComponent props={['File','Edit','View','Go','Run','Terminal','Help']}/>
        </div>     
        <div className='middle-Header-Div'>
            <p>Mayank Verma - Visual Studio Code</p>
        </div>     
        <div className='right-Header-Div'>
            <div  className='yellow'></div>
            <div className='green'></div>
            <div 
                    className='red' 
                    onClick={handleCloseWindow} 
                    style={{ cursor: 'pointer' }}
                ></div>
        </div>     
    </header>
  )
}
