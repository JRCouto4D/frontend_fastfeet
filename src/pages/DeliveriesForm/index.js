import React, { useState, useEffect } from 'react';
import Proptypes from 'prop-types';

import { Form, Input } from '@rocketseat/unform';

import { MdChevronLeft, MdCheck } from 'react-icons/md';

import api from '~/services/api';
import history from '~/services/history';

import { Container, Content, BoxSelect, Select, InputBlock } from './styles';

export default function DeliveriesForm({ location }) {
  const [deliverymanValue, setDeliverymanValue] = useState(null);
  const [recipientValue, setRecipientValue] = useState(null);
  const [selectedDeliveryman, setSelectedDeliveryman] = useState(0);
  const [selectedRecipient, setSelectedRecipient] = useState(0);

  useEffect(() => {
    if (location.state) {
      setSelectedDeliveryman(location.state.delivery.deliveryman.id);
      setSelectedRecipient(location.state.delivery.recipient.id);
      setDeliverymanValue({
        id: location.state.delivery.deliveryman.id,
        name: location.state.delivery.deliveryman.name,
      });
      setRecipientValue({
        id: location.state.delivery.recipient.id,
        name: location.state.delivery.recipient.name,
      });
    }
  }, [location]);

  async function loadDeliveryman() {
    const response = await api.get('deliverymen', {
      params: {
        search: '',
      },
    });
    return response.data;
  }

  async function loadRecipients() {
    const response = await api.get('recipients', {
      params: {
        search: '',
      },
    });

    return response.data;
  }

  return (
    <Container>
      <header>
        <strong>
          {location.state ? 'Edição de encomendas' : 'Cadastro de encomendas'}
        </strong>
        <div>
          <button
            className="backButton"
            type="button"
            onClick={() => history.push('/deliveries')}
          >
            <MdChevronLeft color="#fff" size={20} />
            <span>VOLTAR</span>
          </button>
          <button type="submit" onClick={() => {}}>
            <MdCheck color="#fff" size={20} />
            <span>SALVAR</span>
          </button>
        </div>
      </header>

      <Content>
        <Form>
          <BoxSelect>
            <InputBlock>
              <strong>Destinatário</strong>
              <div>
                <Select
                  defaultOptions
                  value={recipientValue}
                  loadOptions={loadRecipients}
                  getOptionValue={(op) => op.id}
                  getOptionLabel={(op) => op.name}
                  onChange={(value) => {
                    setSelectedRecipient(value.id);
                    setRecipientValue({
                      id: value.id,
                      name: value.name,
                    });
                  }}
                />
              </div>
            </InputBlock>

            <InputBlock>
              <strong>Entregador</strong>
              <div>
                <Select
                  defaultOptions
                  value={deliverymanValue}
                  loadOptions={loadDeliveryman}
                  getOptionValue={(op) => op.id}
                  getOptionLabel={(op) => op.name}
                  onChange={(value) => {
                    setSelectedDeliveryman(value.id);
                    setDeliverymanValue({
                      id: value.id,
                      name: value.name,
                    });
                  }}
                />
              </div>
            </InputBlock>
          </BoxSelect>
          <div style={{ marginTop: 15 }}>
            <InputBlock>
              <strong>Nome do produto</strong>
              <div>
                <Input
                  type="text"
                  id="product"
                  name="product"
                  value={
                    location.state ? location.state.delivery.product : null
                  }
                  placeholder="Ex: Tênis Nike Air Max"
                />
              </div>
            </InputBlock>
          </div>
        </Form>
      </Content>
    </Container>
  );
}
DeliveriesForm.propTypes = {
  location: Proptypes.shape(),
};

DeliveriesForm.defaultProps = {
  location: null,
};
