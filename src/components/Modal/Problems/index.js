import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { MdClear } from 'react-icons/md';

import { Container, Content } from '../styles';

import { setModalFalse } from '~/store/module/modal/actions';

function Problems() {
  const { delivery } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  console.tron.log(delivery);

  function closeModal() {
    dispatch(setModalFalse());
  }

  return delivery ? (
    <Container>
      <button onClick={closeModal} type="button">
        <MdClear size={40} color="#fff" />
      </button>

      <Content>
        <h1>Vizualizar problemas</h1>

        <p>{delivery.delivery.description}</p>
      </Content>
    </Container>
  ) : (
    <h1>Not Modal</h1>
  );
}

export default Problems;
