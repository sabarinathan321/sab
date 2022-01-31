import './certification.scss';
import { CertificationHeading } from './CertificationHeading';
import { CertificationDetails } from './CertificationDetails';
import { certificationHeading, certificationDetails } from '../../data';
import { useState } from 'react';

export default function Certification({openMenu}) {
    const [certificationLi, setCertificationLi] = useState('certifications');
    return (
        <div className= { 'certification '+ (openMenu && 'active') } id='certification'>
            <div className="wrapper">
                <h1>CERTIFICATIONS</h1>
                <ul>
                    {
                        certificationHeading.map(item => {
                            return <CertificationHeading key = {item.id} data = {item} certificationLi = {certificationLi} setCertificationLi = {setCertificationLi}/>
                        })
                    }
                </ul>
                <div className="detailsList">
                    { certificationDetails[certificationLi]?.map(item => {
                        return <CertificationDetails item = {item}/>
                    })
                    }   
                </div>
            </div>
        </div>
    )
}
