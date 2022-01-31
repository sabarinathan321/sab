import './projects.scss';
import { projects } from '../../data';

export default function Projects({openMenu}) {
    return (
        <div className= {'project ' + (openMenu && 'active') } id='projects'>
            <h1>PROJECTS</h1>
            <div className="container">
                {projects.map((item) => {
                    return <div className="card">
                        <div className="top">
                            {/* <img src="assests/right-arrow.png" alt="" className="left" /> */}
                            <img src={item.img} alt="" className="middle" />
                            {/* <img src={item.icon} alt="" className="right" /> */}
                        </div>
                        <div className="center">
                        {item.desc}
                        </div>
                        <div className="bottom">
                            <h5>{item.name}</h5>
                            <h6>{item.title}</h6>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}
