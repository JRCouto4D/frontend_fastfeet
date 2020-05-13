/* eslint-disable no-nested-ternary */
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { toast } from 'react-toastify';

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
import history from '~/services/history';

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

  const handleDelete = useCallback(
    async (id) => {
      try {
        await api.delete(`deliverymen/${id}`);
        loadDeliverymen(search, page);
        toast.success('Entregador deletado com sucesso!');
        history.push('/deliverymen');
      } catch (err) {
        toast.error('Erro ao tentar deletar o entregador');
        history.push('/deliverymen');
      }
    },
    [search, page]
  );

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
                    : `https://ui-avatars.com/api/?color=A28FD0&background=F4EFFC&bold=true&format=svg&size=120&rounded=true&name=${deliveryman.name}`
                }
                alt={deliveryman.name}
              />
            </div>
            <span>{deliveryman.name}</span>
            <span>{deliveryman.email}</span>
            <div className="actions">
              <Actions>
                <div>
                  <button
                    onClick={() =>
                      history.push('/deliverymen/form', { deliveryman })
                    }
                    type="button"
                  >
                    <MdCreate color="#4D85EE" size={16} />
                    <span>Editar</span>
                  </button>
                </div>

                <div>
                  <button
                    onClick={() => handleDelete(deliveryman.id)}
                    type="button"
                  >
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

    [deliverymen, handleDelete]
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

          <button
            onClick={() => history.push('/deliverymen/form')}
            type="button"
          >
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
