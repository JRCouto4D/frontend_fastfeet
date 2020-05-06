import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import {
  MdDeleteForever,
  MdVisibility,
  MdCreate,
  MdMoreHoriz,
} from 'react-icons/md';

import { setModalTrue } from '~/store/module/modal/actions';

import { Container, Badge, KeyBoard, ActionsList } from '../styles';

export default function OrdersActions({ deliveries }) {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);

  function visibleModal(delivery) {
    dispatch(setModalTrue(delivery));
  }

  function handleActionsVisible() {
    setVisible(!visible);
  }

  function close() {
    setVisible(false);
  }

  return (
    <>
      <Container>
        <Badge onClick={handleActionsVisible}>
          <MdMoreHoriz size={20} color="#C6C6C6" />
        </Badge>

        <ActionsList onClick={close} visible={visible}>
          <KeyBoard color="#C6C6C6" visible={visible} />
          <div>
            <button
              onClick={() => {
                visibleModal(deliveries);
              }}
              type="button"
            >
              <MdVisibility size={20} color="#8E5BE8" />
              <span>Vizualizar</span>
            </button>

            <button type="button">
              <MdCreate size={20} color="#4D85EE" />
              <span>Editar</span>
            </button>

            <button type="button">
              <MdDeleteForever size={20} color="#DE3B3B" />
              <span>Excluir</span>
            </button>
          </div>
        </ActionsList>
      </Container>
    </>
  );
}

OrdersActions.propsTypes = {
  deliveries: PropTypes.shape().isRequired,
};
