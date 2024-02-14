import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import css from "./Modal.module.css";
import closeIcon from "../../images/close-icon.svg";

const modalRoot = document.querySelector("#root-modal");

const Modal = ({ onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Escape") {
        onClose(false);
      }
    };

    const handleClose = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClose);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.addEventListener("mousedown", handleClose);
    };
  }, [onClose]);

  return createPortal(
    <div css={css.backdrop}>
      <div
        ref={modalRef}
        className={css.modal}
        onClick={(event) => event.stopPropagation()}
      >
        <button className={css.btnClose} onClick={() => onClose(false)}>
          <img src={closeIcon} width={24} alt="Close" />
        </button>
        <div className={css.content}>Test</div>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
