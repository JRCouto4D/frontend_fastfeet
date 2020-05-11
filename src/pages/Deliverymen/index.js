/* eslint-disable no-nested-ternary */
import React, { useState, useEffect, useMemo } from 'react';

import {
  MdSearch,
  MdAdd,
  MdFastRewind,
  MdFastForward,
  MdCreate,
  MdDeleteForever,
} from 'react-icons/md';
import { FaSpinner } from 'react-icons/fa';

import {
  Container,
  SearchInput,
  Navigation,
  TableDeliveryman,
  Loading,
} from './styles';

import Actions from '~/components/Actions';

import api from '~/services/api';

export default function Deliverymen() {
  const [deliverymen, setDeliverymen] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [prePage, setPrePage] = useState(0);
  const [loadig, setLoading] = useState(false);

  async function loadDeliverymen(query, pg) {
    setLoading(true);

    const response = await api.get('/deliverymen', {
      params: {
        search: query,
        page: pg,
      },
    });
    console.tron.log(response.data);

    setDeliverymen(response.data.deliverymen);
    await setTotal(response.data.total);
    setPrePage(Math.ceil(response.data.total / 5));
    setLoading(false);
  }

  useEffect(() => {
    loadDeliverymen(search, page);
  }, [search, page]);

  function nextPage() {
    setPrePage(Math.ceil(total / 5));
    setPage(page < prePage ? page + 1 : page);

    loadDeliverymen(search, page);
  }

  function prevPage() {
    setPage(page >= 2 ? page - 1 : page);

    loadDeliverymen(search, page);
  }

  const memoList = useMemo(
    () => (
      <TableDeliveryman>
        <li className="header">
          <strong>ID</strong>
          <strong>Foto</strong>
          <strong>Nome</strong>
          <strong>Email</strong>
          <strong>Ações</strong>
        </li>

        {deliverymen.map((deliveryman) => (
          <li key={deliveryman.id}>
            <span>{`#${deliveryman.id}`}</span>
            <div className="foto">
              <img
                src={
                  deliveryman.avatar
                    ? deliveryman.avatar.url
                    : 'data:image/png;base64,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'
                }
                alt={deliveryman.name}
              />
            </div>
            <span>{deliveryman.name}</span>
            <span>{deliveryman.email}</span>
            <div className="actions">
              <Actions>
                <div>
                  <button onClick={() => {}} type="button">
                    <MdCreate color="#4D85EE" size={16} />
                    <span>Editar</span>
                  </button>
                </div>

                <div>
                  <button type="button">
                    <MdDeleteForever color="#DE3B3B" size={16} />
                    <span>Deletar</span>
                  </button>
                </div>
              </Actions>
            </div>
          </li>
        ))}
      </TableDeliveryman>
    ),

    [deliverymen]
  );

  return (
    <Container>
      <header>
        <strong>Gerenciando entregadores</strong>
        <div>
          <SearchInput>
            <MdSearch color="#999" />
            <input
              type="text"
              placeholder="Buscar por entregadores"
              autoCapitalize="none"
              onChange={(e) => setSearch(e.target.value)}
            />
          </SearchInput>

          <button type="button">
            <MdAdd size={25} color="#fff" />
            <span>CADASTRAR</span>
          </button>
        </div>
      </header>

      <Navigation>
        <button onClick={prevPage} type="button" disabled={page === 1}>
          <MdFastRewind size={20} color="#fff" />
        </button>

        <button onClick={nextPage} type="button" disabled={page >= prePage}>
          <MdFastForward size={20} color="#fff" />
        </button>
      </Navigation>

      {loadig ? (
        <Loading>
          <FaSpinner size={14} color="#444" />
        </Loading>
      ) : deliverymen.length === 0 ? (
        <h1>Nenhuma encomenda no sistema</h1>
      ) : (
        memoList
      )}
    </Container>
  );
}
