/* eslint-disable no-alert */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import {
  MdDeleteForever,
  MdVisibility,
  MdCreate,
  MdMoreHoriz,
} from 'react-icons/md';

import histoty from '~/services/history';
import api from '~/services/api';

import { setModalTrue } from '~/store/module/modal/actions';

import { Container, Badge, KeyBoard, ActionsList } from '../styles';

export default function OrdersActions({ deliveries }) {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);

  function setModal(delivery) {
    dispatch(setModalTrue(delivery));
  }

  function handleActionsVisible() {
    setVisible(!visible);
  }

  function close() {
    setVisible(false);
  }

  async function deleteDelivery() {
    const del = window.confirm(
      'Você realmente deseja cancelar esta encomenda?'
    );

    if (del) {
      await api.delete(`deliveries/${deliveries.id}`);
      toast.success('Encomenda cancelada com sucesso');
    }
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
                setModal(deliveries);
              }}
              type="button"
            >
              <MdVisibility size={20} color="#8E5BE8" />
              <span>Vizualizar</span>
            </button>

            <button
              onClick={() => histoty.push('/orders/register', { deliveries })}
              type="button"
            >
              <MdCreate size={20} color="#4D85EE" />
              <span>Editar</span>
            </button>

            <button onClick={deleteDelivery} type="button">
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
