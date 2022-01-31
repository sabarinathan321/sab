import './certificationModal.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap'

export function CertificationModal({state, item, setState}) {
    return (
    <>
      <Modal
        show={state}
        onHide = {() => { setState(false) }}
        dialogClassName="cssModel"
        backdrop="static"
        animation={false}
        size ='lg'
        contentClassName = 'cssModelContent'
        centered
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {item.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <img src={item.src} alt="" className='modelImg'/>
        </Modal.Body>
      </Modal>
    </>
    )
}
