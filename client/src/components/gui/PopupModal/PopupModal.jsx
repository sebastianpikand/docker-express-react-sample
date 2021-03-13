import React from 'react';
import { connect } from 'react-redux';

import { togglePopupModal } from '../../../store/actions';

import {
  popupModalWrapper,
  popupModalWrapper__modal,
  popupModalWrapper__modal__contentWrapper__closeButton,
  popupModalWrapper__modal__contentWrapper,
  popupModalWrapper__modal__contentWrapper__title,
} from './_popupModal.module.scss';

export const PopupModal = ({ title, children, togglePopupModal }) => {
  return (
    <div className={popupModalWrapper}>
      <div className={popupModalWrapper__modal}>
        <div className={popupModalWrapper__modal__contentWrapper}>
          <p className={popupModalWrapper__modal__contentWrapper__title}>{title}</p>
          <div onClick={() => togglePopupModal()} className={popupModalWrapper__modal__contentWrapper__closeButton}>
            <span className="icon-close"></span>
          </div>
        </div>
        <div className={popupModalWrapper__modal__contentWrapper}>{children}</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  togglePopupModal: () => dispatch(togglePopupModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PopupModal);
