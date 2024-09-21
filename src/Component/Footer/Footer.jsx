import React from 'react'
import './footer.css'
import Image from '../MiniComponent/Image'
export default function Footer() {
  return (
    <footer>
        <div className='footer-left-div'>
            <div>
            <Image src={'/git_branch.svg'}/>
            <p>main</p>
            </div>
            <div>
                <Image src={'/cross.svg'}/>
                <p>0</p>
            </div>
            <div>
                <Image src={'/warning.svg'}/>
                <p>0</p>
            </div>
        </div>
        <div className='footer-left-div'>
            <div>
                <Image src={'/react-svgrepo-com.svg'}></Image>
                <p className='powered-by-react'>Powered By React</p>
            </div>
            <div>
                <Image src={'/double-tic.svg'}></Image>
                <p>Prettier</p>
            </div>
            <div>
                <Image src={'/bell.svg'}/>
            </div>
        </div>
    </footer>
  )
}
