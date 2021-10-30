import { Fragment } from 'react';
import reactDom from 'react-dom';
import classes from './Modal.module.css';

const BackDrop = props => <div className = {classes.backdrop} onClick = {props.onClick} >

</div>

const ModalOverlay = props => {
    return <div className = {classes.modal}>
        <div className = {classes.content}> {props.children}</div>
    </div>
}

const Modal = props => {

    const portalElement = document.getElementById('overlays')

    return (
        <Fragment>
            {reactDom.createPortal (<BackDrop onClick = {props.onClick}/>, portalElement)}
            {reactDom.createPortal (<ModalOverlay> {props.children}</ModalOverlay>, portalElement)}
        </Fragment>
    )
}

export default Modal;