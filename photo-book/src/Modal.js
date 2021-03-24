import React from 'react'
import "./Modal.scss"
function Modal({src,show}) {
  
    const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <img src={src}/>
      </section>
    </div>
  );
  
}

export default Modal
