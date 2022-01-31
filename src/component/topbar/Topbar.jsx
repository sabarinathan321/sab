import './topbar.scss';
import {Person, Email} from '@material-ui/icons';

export default function Topbar({openMenu, setMenuOpen}) {
    return (
        <div className= {"topbar " + (openMenu && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className='logo'> SAB </a>
                    <div className="itemContainer">
                        <Person className='icon'/>
                        <span>+91 9655062728</span>
                    </div>
                    <div className="itemContainer">
                        <Email className='icon'/>
                        <span>sabarinathan.a23@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!openMenu)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
