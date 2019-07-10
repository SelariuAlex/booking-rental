import React from 'react';
import Modal from 'react-responsive-modal';

function BookingModal(props) {
  const { open, closeModal } = props;

  return (
    <Modal
      open={open}
      onClose={closeModal}
      little
      classNames={{ modal: 'booking-modal' }}
    >
      <button type="button" onClick={closeModal} className="btn btn-bwm">
        Cancel
      </button>
    </Modal>
  );
}

export default BookingModal;
