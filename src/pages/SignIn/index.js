import * as Yup from 'yup';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { signInRequest } from '~/store/module/auth/actions';

import { Container } from './styles';

import logo from '~/assets/fastfeet-logo.png';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('* Preencha um email válido')
    .required('* O email é obrigatório'),
  password: Yup.string().required('* A senha é obrigatória.'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  function handleSubimit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <Container>
      <img src={logo} alt="fastfeet" />

      <Form schema={schema} onSubmit={handleSubimit}>
        <strong>SEU EMAIL</strong>
        <Input
          name="email"
          type="email"
          placeholder="exemplo@email.com"
          autoComplete="off"
        />

        <strong>SUA SENHA</strong>
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />

        <button type="submit">
          {loading ? 'Carregando...' : 'Acessar sistema'}
        </button>
      </Form>
    </Container>
  );
}
