import React, { useState, useContext } from 'react';
import { Button } from 'react-bootstrap';

import CustomModal from './CustomModal';
import { AppContext } from '../App';

const CustomModalButton = props => {
    const {
        buttonText,
        dialogClassName,
        children,
        className,
        focusable,
    } = props;

    const [shouldShowModal, setShouldShowModal] = useState(false);
    const { shouldDestroyOnClose } = useContext(AppContext);
  
    const onClickModal = () => {
      setShouldShowModal(true);
    };
  
    const handleModalClose = () => {
      setShouldShowModal(false);
    };

    return (
        <div>
            <Button onClick={onClickModal}>
                {buttonText}
            </Button>

            <CustomModal
                shouldShow={shouldShowModal}
                handleClose={handleModalClose}
                shouldDestroyOnClose={shouldDestroyOnClose}
                dialogClassName={dialogClassName}
                className={className}
                focusable={focusable}
            >
                {children}
            </CustomModal>
        </div>
    )
};

CustomModalButton.defaultProps = {
    focusable: false,
};

export default CustomModalButton
