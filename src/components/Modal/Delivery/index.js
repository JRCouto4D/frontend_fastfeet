import React from 'react';
import { useDispatch } from 'react-redux';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import PropTypes from 'prop-types';

import { MdClear } from 'react-icons/md';

import { setModalFalse } from '~/store/module/modal/actions';

import { Container, Content } from '../styles';

export default function DeliveryModal({ delivery }) {
  const data = {
    street: delivery ? delivery.recipient.street : '',
    number: delivery ? delivery.recipient.number : '',
    city: delivery ? delivery.recipient.city : '',
    state: delivery ? delivery.recipient.state : '',
    zip_code: delivery ? delivery.recipient.zip_code : '',
    signature: delivery ? delivery.recipient.signature : '',
  };

  const dispatch = useDispatch();

  function setModal() {
    dispatch(setModalFalse());
  }

  function formatDate(date) {
    const dateFormatted = format(
      parseISO(date),
      "d'/'MM'/'yyyy 'às' H 'hs e 'm' mim'",
      {
        locale: pt,
      }
    );

    return dateFormatted;
  }

  function setDate(date) {
    return date ? formatDate(date) : 'Ainda pendente';
  }

  return (
    <Container>
      <button onClick={setModal} type="button">
        <MdClear size={40} color="#fff" />
      </button>
      <Content>
        <div>
          <strong>Informações de encomenda</strong>
          <p>{`${data.street}, ${data.number}`}</p>
          <p>{`${data.city} - ${data.state}`}</p>
          <p>{data.zip_code}</p>
          <hr />
          <strong>Datas</strong>
          <p>
            <b>Retirada:</b> {delivery ? setDate(delivery.start_date) : ''}
          </p>
          <p>
            <b>Entrega:</b> {delivery ? setDate(delivery.end_date) : ''}
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

DeliveryModal.propTypes = {
  delivery: PropTypes.shape().isRequired,
};
