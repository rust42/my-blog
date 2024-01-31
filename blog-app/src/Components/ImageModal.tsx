import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

type Props = { imageUrl: string, modalTitle?: string }
const ImageModal =  (props: Props) => {
    const { imageUrl, modalTitle } = props

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <img src={imageUrl} className="img-fluid mt-3 mb-3 rounded card blog-image" alt="" onClick={handleShow} style={{ cursor: modalTitle !== undefined ? 'pointer' : 'auto' }} />

            {modalTitle && <Modal show={show} onHide={handleClose} size="lg" dialogClassName="modal-90w" aria-labelledby="example-custom-modal-styling-title" centered>
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">{modalTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ maxHeight: 'calc(100vh - 210px)', overflowY: 'auto' }}>
                    <img src={imageUrl} alt="" style={{ width: '100%', height: 'auto' }} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>}

            <style>
                {`
          .modal-90w {
            max-width: 100%!important;
            width: 100%!important;
            margin: 0;
          }
          .modal-content {
            height: calc(100vh - 1rem);
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          .modal-body {
            flex: 1 1 auto;
            padding: 1rem;
          }
        `}
            </style>
        </>
    );
};

export default ImageModal;
