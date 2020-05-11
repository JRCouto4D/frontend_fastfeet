import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import PropTypes from 'prop-types';

import { MdClear } from 'react-icons/md';

import { setModalFalse } from '~/store/module/modal/actions';

import { Container, Content, InfoDelivery, BoxSignature } from '../styles';

export default function DeliveryModal() {
  const { delivery } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  function closeModal() {
    dispatch(setModalFalse());
  }

  function dataFormatted(data) {
    const newData = format(
      parseISO(data),
      "d'/'MM'/'yyyy' às 'H' hs e 'm' min",
      {
        locale: pt,
      }
    );

    return newData;
  }

  return delivery ? (
    <Container>
      <button onClick={closeModal} type="button">
        <MdClear size={40} color="#fff" />
      </button>

      <Content>
        <h1>Inpormações da encomenda</h1>
        <InfoDelivery>
          <div>
            <strong>Produto</strong>
            <p>{delivery.delivery.product}</p>
          </div>
          <div>
            <strong>Endereço de entrega</strong>
            <p>
              {delivery.delivery.recipient.street},{' '}
              {delivery.delivery.recipient.number} <br />
              {delivery.delivery.recipient.city} -{' '}
              {delivery.delivery.recipient.state} <br />
              {delivery.delivery.recipient.zip_code}
            </p>
          </div>
        </InfoDelivery>
        <hr />
        <strong>Datas</strong>
        <p>
          <b>Retirada:</b>{' '}
          {delivery.delivery.start_date
            ? dataFormatted(delivery.delivery.start_date)
            : 'Ainda pendente'}{' '}
          <br />
          <b>Entregue:</b>{' '}
          {delivery.delivery.end_date
            ? dataFormatted(delivery.delivery.end_date)
            : 'Ainda pendente'}{' '}
        </p>
        <hr />
        <strong>Assinatura do destinatário</strong>
        <BoxSignature>
          <img
            src={
              delivery.delivery.signature
                ? delivery.delivery.signature.url
                : 'https://img.freepik.com/fotos-gratis/icone-de-sinal-de-aviso-triangulo-amarelo-isolado_53876-71267.jpg?size=626&ext=jpg'
            }
            alt={delivery.delivery.recipient.name}
          />
        </BoxSignature>
      </Content>
    </Container>
  ) : (
    <h1>Not Modal</h1>
  );
}

DeliveryModal.proTypes = {
  delivery: PropTypes.shape().isRequired,
};

DeliveryModal.defaultProps = {
  delivery: null,
};
