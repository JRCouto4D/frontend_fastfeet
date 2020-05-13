import React, { useState, useEffect } from 'react';
import Proptypes from 'prop-types';
import { toast } from 'react-toastify';

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
      const { delivery } = location.state;
      setSelectedDeliveryman(
        delivery.deliveryman ? delivery.deliveryman.id : 0
      );
      setSelectedRecipient(delivery.recipient ? delivery.recipient.id : 0);
      setDeliverymanValue(
        delivery.deliveryman
          ? {
              id: delivery.deliveryman.id,
              name: delivery.deliveryman.name,
            }
          : null
      );
      setRecipientValue(
        delivery.recipient
          ? {
              id: delivery.recipient.id,
              name: delivery.recipient.name,
            }
          : null
      );
    }
  }, [location]);

  async function loadDeliveryman() {
    const response = await api.get('deliverymen', {
      params: {
        search: '',
      },
    });
    return response.data.deliverymen;
  }

  async function loadRecipients() {
    const response = await api.get('recipients', {
      params: {
        search: '',
      },
    });

    return response.data.recipients;
  }

  async function handleSubmit(data) {
    if (selectedRecipient === 0) {
      toast.error('Antes de continuar, informe o destinatário');
      return;
    }

    if (selectedDeliveryman === 0) {
      toast.error('Antes de continuar, informe o entregador');
      return;
    }

    if (data.product === '') {
      toast.error('Antes de continuar, informe o produto');
      return;
    }

    if (location.state) {
      console.tron.log(selectedRecipient);
      try {
        await api.put(`deliveries/${location.state.delivery.id}`, {
          product: data.product,
          deliveryman_id: selectedDeliveryman,
          recipient_id: selectedRecipient,
        });
        toast.success('Encomanda editada com sucesso!');
        history.push('/deliveries');
      } catch (error) {
        toast.error(`Erro ao tentar editar encomenda - ${error}`);
        history.push('/deliveries');
      }
    } else {
      try {
        await api.post('deliveries', {
          product: data.product,
          deliveryman_id: selectedDeliveryman,
          recipient_id: selectedRecipient,
        });
        toast.success('Encomenda salva com sucesso!');
        history.push('/deliveries');
      } catch (err) {
        toast.error('Erro ao tentar salvar encomenda.');
      }
    }
  }

  return (
    <Container>
      <Form
        onSubmit={handleSubmit}
        initialData={location.state && location.state.delivery}
      >
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
          <BoxSelect>
            <InputBlock>
              <strong>Destinatário</strong>
              <div>
                <Select
                  defaultOptions
                  onSelectResetsInput
                  onBlurResetsInput={false}
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
                  onSelectResetsInput
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
                  placeholder="Ex: Tênis Nike Air Max"
                />
              </div>
            </InputBlock>
          </div>
        </Content>
      </Form>
    </Container>
  );
}
DeliveriesForm.propTypes = {
  location: Proptypes.shape(),
};

DeliveriesForm.defaultProps = {
  location: null,
};
