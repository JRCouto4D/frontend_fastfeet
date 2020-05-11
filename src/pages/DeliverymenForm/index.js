import React from 'react';

import Proptypes from 'prop-types';

import { Form, Input } from '@rocketseat/unform';

import { MdChevronLeft, MdCheck } from 'react-icons/md';

import history from '~/services/history';

import AvatarInput from './AvatarInput';

import { Container, Content, InputBlock } from './styles';

export default function DeliverymenForm({ location }) {
  return (
    <Container>
      <Form initialData={location.state && location.state.delivery}>
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
              <span>VOLTAR</span>
            </button>
            <button type="submit" onClick={() => {}}>
              <MdCheck color="#fff" size={20} />
              <span>SALVAR</span>
            </button>
          </div>
        </header>

        <Content>
          <AvatarInput name="avatar_id" />

          <div>
            <InputBlock>
              <strong>Nome</strong>
              <div>
                <Input name="name" id="name" type="text" />
              </div>
            </InputBlock>

            <InputBlock>
              <strong>Email</strong>
              <div>
                <Input
                  name="email"
                  id="email"
                  type="text"
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
