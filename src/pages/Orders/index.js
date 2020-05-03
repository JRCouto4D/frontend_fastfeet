import React from 'react';
import { MdAdd, MdSearch } from 'react-icons/md';

import { Container, Content, BoxTop } from './styles';

export default function Orders() {
  return (
    <Container>
      <Content>
        <header>
          <h1>Gerenciando encomendas</h1>
          <BoxTop>
            <div>
              <MdSearch color="#999999" />
              <input type="text" placeholder="Buscar por encomendas" />
            </div>

            <button type="button">
              <MdAdd color="#fff" size={25} /> CADASTRAR
            </button>
          </BoxTop>
        </header>
      </Content>
    </Container>
  );
}
