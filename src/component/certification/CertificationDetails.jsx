import './certificationDetails.scss'
import { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap'
import { CertificationModal } from '../../modals/certification/CertificationModal';
import React from 'react'

export function CertificationDetails({item}) {
    const [state, setState] = useState(false)
    const [imgDatastate, setimgDataState] = useState({});
    const handleModal = (item) => {
        setimgDataState(item);
        setState(true);
    }

    return (
        <React.Fragment>
            <div className='certificationDetails' onClick={() => {handleModal(item)}}>
                <img src={item.src} alt="" />
                <h2>{item.name}</h2>
            </div>
            {state && <CertificationModal state = {state} item = {imgDatastate} setState = {setState}/>}
        </React.Fragment>
    )
}
