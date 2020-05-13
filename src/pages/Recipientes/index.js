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

import api from '~/services/api';
import history from '~/services/history';

import Actions from '~/components/Actions';

import {
  Container,
  SearchInput,
  Navigation,
  TableDeliveryman,
  Loading,
} from './styles';

export default function Recipientes() {
  const [recipients, setRecipients] = useState([]);
  const [page, setPage] = useState(1);
  const [prePage, setPrePage] = useState(0);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  async function loadRecipients(query, pag) {
    setLoading(true);

    const response = await api.get('/recipients', {
      params: {
        search: query,
        page: pag,
      },
    });

    setRecipients(response.data.recipients);
    setTotal(response.data.total);
    setPrePage(Math.ceil(response.data.total / 5));
    setLoading(false);
  }

  const handleDelete = useCallback(
    async (id) => {
      try {
        await api.delete(`recipients/${id}`);
        toast.success('Destinatário deletado com sucesso!!');
        loadRecipients(search, page);
      } catch (err) {
        toast.error('Erro ao tentar deletar o destinatário');
        loadRecipients(search, page);
      }
    },
    [search, page]
  );

  useEffect(() => {
    loadRecipients(search, page);
  }, [search, page]);

  function nextPage() {
    setPrePage(Math.ceil(total / 5));
    setPage(page < prePage ? page + 1 : page);

    loadRecipients(search, page);
  }

  function prevPage() {
    setPage(page >= 2 ? page - 1 : page);

    loadRecipients(search, page);
  }

  const memoList = useMemo(
    () => (
      <TableDeliveryman>
        <li className="header">
          <strong>ID</strong>
          <strong>Nome</strong>
          <strong>Endereço</strong>
          <strong>Ações</strong>
        </li>

        {recipients.map((recipient) => (
          <li key={recipient.id}>
            <span>{`#${recipient.id}`}</span>
            <span>{recipient.name}</span>
            <span>
              {`${recipient.street}, ${recipient.number}, ${recipient.city} - ${recipient.state}`}
            </span>

            <div className="actions">
              <Actions>
                <div>
                  <button
                    onClick={() =>
                      history.push('/recipients/form', { recipient })
                    }
                    type="button"
                  >
                    <MdCreate color="#4D85EE" size={16} />
                    <span>Editar</span>
                  </button>
                </div>

                <div>
                  <button
                    onClick={() => handleDelete(recipient.id)}
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

    [recipients, handleDelete]
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
            onClick={() => history.push('/recipients/form')}
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

      {loading ? (
        <Loading>
          <FaSpinner size={14} color="#444" />
        </Loading>
      ) : recipients.length === 0 ? (
        <h1>Não há destinatários cadastrados no sistema</h1>
      ) : (
        memoList
      )}
    </Container>
  );
}
