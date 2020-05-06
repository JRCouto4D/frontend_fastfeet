import React from 'react';
import { useDispatch } from 'react-redux';
import { MdClear } from 'react-icons/md';

import { setModalFalse } from '~/store/module/modal/actions';

import { Container, Content } from '../styles';

function DeliveryModal() {
  const dispatch = useDispatch();

  function setModal() {
    dispatch(setModalFalse());
  }
  return (
    <Container>
      <button onClick={setModal} type="button">
        <MdClear size={40} color="#fff" />
      </button>
      <Content>
        <div>
          <strong>Informações de encomenda</strong>
          <p>Rua Joel Santos, 41</p>
          <p>Itapetinga-BA</p>
          <p>45700-000</p>
          <hr />
          <strong>Datas</strong>
          <p>
            <b>Retirada:</b> 25/01/2020
          </p>
          <p>
            <b>Entrega:</b> 23/02/2020
          </p>
          <hr />
          <strong>Assinatura do destinatário</strong>
          <br />
          <div className="assign">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/7f/Assinatura_Jos%C3%A9_Saramago.png"
              alt="assinatura"
            />
          </div>
        </div>
      </Content>
    </Container>
  );
}

export default DeliveryModal;
