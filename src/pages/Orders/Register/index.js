import React from 'react';
import { MdDone, MdKeyboardArrowLeft } from 'react-icons/md';

import { Form, Input } from '@rocketseat/unform';

import { Container, Content, InputBlock, BoxSelect, Select } from './styles';

export default function OrdersRegister() {
  return (
    <Container>
      <Form>
        <header>
          <h1>Cadastro de encomendas</h1>
          <div>
            <button className="leftButton" type="button">
              <MdKeyboardArrowLeft size={20} color="#fff" />
              <span>VOLTAR</span>
            </button>

            <button type="button">
              <MdDone size={20} color="#fff" />
              <span>SALVAR</span>
            </button>
          </div>
        </header>

        <Content>
          <BoxSelect>
            <InputBlock>
              <strong>Destinatário</strong>
              <Select />
            </InputBlock>

            <InputBlock>
              <strong>Entregador</strong>
              <Select />
            </InputBlock>
          </BoxSelect>
          <div style={{ marginTop: 15 }}>
            <InputBlock>
              <strong>Nome do produto</strong>
              <Input
                id="product"
                name="product"
                type="text"
                placeholder="Ex: Tenis Nike Air Max"
              />
            </InputBlock>
          </div>
        </Content>
      </Form>
    </Container>
  );
}
