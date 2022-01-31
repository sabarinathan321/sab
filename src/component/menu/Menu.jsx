import './menu.scss'
import {Person, Email} from '@material-ui/icons';

export default function Menu({openMenu, setMenuOpen}) {
    return (
        <div className={'menu '  + (openMenu && 'active')}>
            <ul>
                <li onClick={() => {setMenuOpen(false)}}>
                    <a href="#intro">HOME</a>
                </li>
                <li onClick={() => {setMenuOpen(false)}}>
                    <a href="#experience">EXPERIENCE</a>
                </li>
                <li onClick={() => {setMenuOpen(false)}}>
                    <a href="#certification">CERTIFICATION</a>
                </li>
                <li onClick={() => {setMenuOpen(false)}}>
                    <a href="#projects">PROJECTS</a>
                </li>
                {/* <li onClick={() => {setMenuOpen(false)}}>
                    <a href="#contact">CONTACT</a>
                </li> */}
            </ul>
            <div className='personalDetails'>
                <div className="itemContainer">
                    <Person className='icon'/>
                    <span>+91 9655062728</span>
                </div>
                <div className="itemContainer">
                    <Email className='icon'/>
                    <span>sabarinathan.a23@gmail.com</span>
                </div>
            </div>
        </div>
    )
}
