/* eslint-disable consistent-return */
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { MdDone, MdKeyboardArrowLeft } from 'react-icons/md';
import PropTypes from 'prop-types';

import { Form, Input } from '@rocketseat/unform';
import api from '~/services/api';
import history from '~/services/history';

import { Container, Content, InputBlock, BoxSelect, Select } from './styles';

export default function OrdersRegister({ location }) {
  const [selectRecipient, setSelectRecipient] = useState(0);
  const [recipientValue, setRecipientValue] = useState(null);
  const [selectDeliveryman, setSelectDeliveryman] = useState(0);
  const [deliverymanValue, setDeliverymanValue] = useState(null);

  useEffect(() => {
    if (location.state) {
      setSelectRecipient(location.state.deliveries.recipient.id);
      setSelectDeliveryman(location.state.deliveries.deliveryman.id);
      setRecipientValue({
        id: location.state.deliveries.recipient.id,
        name: location.state.deliveries.recipient.name,
      });

      setDeliverymanValue({
        id: location.state.deliveries.deliveryman.id,
        name: location.state.deliveries.deliveryman.name,
      });
    }
  }, [location]);

  async function loadRecipients() {
    const response = await api.get('/recipients', {
      params: {
        search: '',
      },
    });

    return response.data;
  }

  async function loadDeliveryman() {
    const response = await api.get('/deliverymen', {
      params: {
        search: '',
      },
    });

    return response.data;
  }

  async function handleSubmit(data) {
    if (selectRecipient === 0) {
      return toast.error('A seleção do destinatário é obrigatória');
    }

    if (selectDeliveryman === 0) {
      return toast.error('A seleção do entregador é obrigatória');
    }

    if (data.product === '') {
      return toast.error('A informação do produto é obrigatória');
    }

    if (location.state) {
      try {
        await api.put(`/deliveries/${location.state.deliveries.id}`, {
          recipient_id: selectRecipient,
          deliveryman_id: selectDeliveryman,
          product: data.product,
        });
        toast.success('Encomenda editada com sucesso');
        history.push('/orders');
      } catch (err) {
        return toast.error('Erro ao tentar registrar encomenda');
      }
    } else {
      try {
        await api.post('/deliveries', {
          recipient_id: selectRecipient,
          deliveryman_id: selectDeliveryman,
          product: data.product,
        });
        toast.success('Encomenda registrada com sucesso');
        history.push('/orders');
      } catch (err) {
        return toast.error('Erro ao tentar registrar encomenda');
      }
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <header>
          <h1>Cadastro de encomendas</h1>
          <div>
            <button
              onClick={() => history.push('/orders')}
              className="leftButton"
              type="button"
            >
              <MdKeyboardArrowLeft size={20} color="#fff" />
              <span>VOLTAR</span>
            </button>

            <button type="submit">
              <MdDone size={20} color="#fff" />
              <span>SALVAR</span>
            </button>
          </div>
        </header>

        <Content>
          <BoxSelect>
            <InputBlock>
              <strong>Destinatário</strong>
              <Select
                defaultOptions
                loadOptions={loadRecipients}
                value={recipientValue}
                getOptionValue={(op) => op.id}
                getOptionLabel={(op) => op.name}
                onChange={(value) => {
                  setSelectRecipient(value.id);
                  setRecipientValue({
                    id: value.id,
                    name: value.name,
                  });
                }}
              />
            </InputBlock>

            <InputBlock>
              <strong>Entregador</strong>
              <Select
                defaultOptions
                loadOptions={loadDeliveryman}
                value={deliverymanValue}
                getOptionValue={(op) => op.id}
                getOptionLabel={(op) => op.name}
                onChange={(value) => {
                  setSelectDeliveryman(value.id);
                  setDeliverymanValue({
                    id: value.id,
                    name: value.name,
                  });
                }}
              />
            </InputBlock>
          </BoxSelect>
          <div style={{ marginTop: 15 }}>
            <InputBlock>
              <strong>Nome do produto</strong>
              <Input
                id="product"
                name="product"
                type="text"
                value={
                  location.state ? location.state.deliveries.product : null
                }
                placeholder="Ex: Tenis Nike Air Max"
              />
            </InputBlock>
          </div>
        </Content>
      </Form>
    </Container>
  );
}

OrdersRegister.propTypes = {
  location: PropTypes.shape(),
};

OrdersRegister.defaultProps = {
  location: null,
};
