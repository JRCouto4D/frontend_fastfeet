import React from 'react';
import * as Yup from 'yup';
import Proptypes from 'prop-types';

import { Input, Form } from '@rocketseat/unform';
import { toast } from 'react-toastify';

import { MdChevronLeft, MdCheck } from 'react-icons/md';
import AvatarInput from './AvatarInput';

import history from '~/services/history';
import api from '~/services/api';

import { Container, Content, InputBlock } from './styles';

export default function DeliverymenForm({ location }) {
  const schema = Yup.object().shape({
    name: Yup.string().required(() =>
      toast.error('* O nome do entregador é obrigatório.')
    ),
    email: Yup.string()
      .email(() => toast.error('* Preencha um email válido.'))
      .required(() => toast.error('* O email do entregador é obrigatório')),
    avatar_id: Yup.number(),
  });

  async function handleSubmit(data) {
    if (location.state) {
      const { deliveryman } = location.state;

      try {
        await api.put(`deliverymen/${deliveryman.id}`, {
          name: data.name,
          email: data.email,
          avatar_id: data.avatar_id,
        });
        toast.success('Entregador editado com sucesso!');
        history.push('/deliverymen');
      } catch (err) {
        toast.error('Erro ao tentar editar entregador.');
        history.push('/deliverymen');
      }
    } else {
      try {
        await api.post('deliverymen', {
          name: data.name,
          email: data.email,
          avatar_id: data.avatar_id,
        });
        toast.success('Entregador salvo com sucesso!');
        history.push('/deliverymen');
      } catch (err) {
        toast.error('Erro ao tentar salvar entregador.');
        history.push('/deliverymen');
      }
    }
  }

  return (
    <Container>
      <Form
        schema={schema}
        onSubmit={handleSubmit}
        initialData={location.state && location.state.deliveryman}
      >
        <header>
          <strong>
            {location.state
              ? 'Edição de entregadores'
              : 'Cadastro de entregadores'}
          </strong>
          <div>
            <button
              className="backButton"
              type="button"
              onClick={() => history.push('/deliverymen')}
            >
              <MdChevronLeft color="#fff" size={20} />
              VOLTAR
            </button>
            <button type="submit" onClick={() => {}}>
              <MdCheck color="#fff" size={20} />
              SALVAR
            </button>
          </div>
        </header>

        <Content>
          <AvatarInput
            name="avatar_id"
            deliverymanName={location.state && location.state.deliveryman.name}
          />

          <div>
            <InputBlock>
              <strong>Nome</strong>
              <div>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Ex: Jhon Doe"
                />
              </div>
            </InputBlock>

            <InputBlock>
              <strong>Email</strong>
              <div>
                <Input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Ex: example@email.com"
                />
              </div>
            </InputBlock>
          </div>
        </Content>
      </Form>
    </Container>
  );
}

DeliverymenForm.propTypes = {
  location: Proptypes.shape(),
};

DeliverymenForm.defaultProps = {
  location: null,
};
