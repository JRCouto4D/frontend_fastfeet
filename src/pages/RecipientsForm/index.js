import React from 'react';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';

import { MdChevronLeft, MdCheck } from 'react-icons/md';

import history from '~/services/history';
import api from '~/services/api';

import { Container, Content, BoxForm, InputBlock } from './styles';

export default function RecipientsForm({ location }) {
  console.tron.log(location);

  const schema = Yup.object().shape({
    name: Yup.string().required(() =>
      toast.error('O nome do destinatário é obrigatório.')
    ),
    street: Yup.string().required(() =>
      toast.error('A campo rua é obrigatório.')
    ),
    number: Yup.string().required(() =>
      toast.error('O campo numero é obrigatório.')
    ),
    neighborhood: Yup.string().required(() =>
      toast.error('O campo bairro é obrigatório.')
    ),
    complement: Yup.string(),
    city: Yup.string().required(() =>
      toast.error('O campo cidade é obrigatório.')
    ),
    state: Yup.string().required(() =>
      toast.error('O campo estado é obrigatório.')
    ),
    zip_code: Yup.string().required(() =>
      toast.error('O campo cep é obrigatório.')
    ),
  });

  async function handleSubmit(data) {
    if (location.state) {
      try {
        const { recipient } = location.state;

        await api.put(`recipients/${recipient.id}`, {
          name: data.name,
          street: data.street,
          number: data.number,
          neighborhood: data.neighborhood,
          complement: data.complement,
          city: data.city,
          state: data.state,
          zip_code: data.zip_code,
        });

        toast.success('Dados do destinatário editados com sucesso!');
        history.push('/recipients');
      } catch (err) {
        toast.error('Erro ao tentat editar dados do detinatário');
        history.push('/recipients');
      }
    } else {
      await api.post('recipients', {
        name: data.name,
        street: data.street,
        number: data.number,
        neighborhood: data.neighborhood,
        complement: data.complement,
        city: data.city,
        state: data.state,
        zip_code: data.zip_code,
      });

      toast.success('destinatário salvo com sucesso!');
      history.push('/recipients');
    }
  }

  return (
    <Container>
      <Form
        schema={schema}
        initialData={location.state && location.state.recipient}
        onSubmit={handleSubmit}
      >
        <header>
          <strong>
            {location.state
              ? 'Edição de destinatários'
              : 'Cadastro de destinatátios'}
          </strong>
          <div>
            <button
              className="backButton"
              type="button"
              onClick={() => history.push('/recipients')}
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
          <BoxForm>
            <div className="name">
              <InputBlock>
                <strong>Nome</strong>
                <Input
                  id="name"
                  name="name"
                  placeholder="Ludwing van Beethoven"
                  autoComplete="off"
                  autoCapitalize="off"
                />
              </InputBlock>
            </div>

            <div className="street">
              <InputBlock>
                <strong>Rua</strong>
                <Input
                  id="street"
                  name="street"
                  placeholder="Ex: Rua Beethoven"
                  autoComplete="off"
                  autoCapitalize="off"
                />
              </InputBlock>
            </div>

            <div className="number">
              <InputBlock>
                <strong>Número</strong>
                <Input
                  id="number"
                  name="number"
                  placeholder="Ex: 1250"
                  autoComplete="off"
                  autoCapitalize="off"
                />
              </InputBlock>
            </div>

            <div className="neighborhood">
              <InputBlock>
                <strong>Bairro</strong>
                <Input
                  id="neighborhood"
                  name="neighborhood"
                  placeholder="Ex: Bairro Beethoven"
                  autoComplete="off"
                  autoCapitalize="off"
                />
              </InputBlock>
            </div>

            <div className="complement">
              <InputBlock>
                <strong>Complemento</strong>
                <Input
                  id="complement"
                  name="complement"
                  placeholder="Ex: Terrio"
                  autoComplete="off"
                  autoCapitalize="off"
                />
              </InputBlock>
            </div>

            <div className="city">
              <InputBlock>
                <strong>Cidade</strong>
                <Input
                  id="city"
                  name="city"
                  placeholder="Diadema"
                  autoComplete="off"
                  autoCapitalize="off"
                />
              </InputBlock>
            </div>

            <div className="state">
              <InputBlock>
                <strong>Estado</strong>
                <Input
                  id="state"
                  name="state"
                  placeholder="São Paulo"
                  autoComplete="off"
                  autoCapitalize="off"
                />
              </InputBlock>
            </div>

            <div className="zipcode">
              <InputBlock>
                <strong>Cep</strong>
                <Input
                  id="zip_code"
                  name="zip_code"
                  placeholder="Apenas numeros"
                  autoComplete="off"
                  autoCapitalize="off"
                />
              </InputBlock>
            </div>
          </BoxForm>
        </Content>
      </Form>
    </Container>
  );
}

RecipientsForm.propTypes = {
  location: PropTypes.shape(),
};

RecipientsForm.defaultProps = {
  location: null,
};
