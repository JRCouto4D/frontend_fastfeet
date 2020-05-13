/* eslint-disable no-nested-ternary */
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  MdSearch,
  MdAdd,
  MdDeleteForever,
  MdVisibility,
  MdCreate,
  MdFastForward,
  MdFastRewind,
} from 'react-icons/md';

import { FaSpinner } from 'react-icons/fa';
import { setModalTrue } from '~/store/module/modal/actions';
import history from '~/services/history';

import api from '~/services/api';

import Actions from '~/components/Actions';
import Modal from '~/components/Modal/Delivery';

import {
  Container,
  SearchInput,
  BoxActions,
  Loading,
  Navigation,
} from './styles';

function Deliveries() {
  const [deliveries, setDeliveries] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [prePage, setPrePage] = useState(0);
  const [loadig, setLoading] = useState(false);

  const dispatch = useDispatch();

  const { modal, delivery } = useSelector((state) => state.modal);

  const handleVisibleModal = useCallback(
    (d) => {
      dispatch(setModalTrue({ delivery: d }));
    },
    [dispatch]
  );

  async function loadOrders(query, pg) {
    setLoading(true);

    const response = await api.get(`deliveries`, {
      params: {
        search: query,
        page: pg,
      },
    });

    setDeliveries(response.data.delivery);
    await setTotal(response.data.total);
    setPrePage(Math.ceil(response.data.total / 5));
    setLoading(false);
  }

  useEffect(() => {
    loadOrders(search, page);
  }, [search, page]);

  function showStatus(deliv) {
    let status;
    if (deliv.canceled_at !== null) {
      return (
        <div
          style={{
            background: '#FAB0B0',
            borderRadius: 50,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: 110,
            height: 27,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              background: '#DE3B3B',
              borderRadius: 50,
            }}
          />
          <strong
            style={{
              fontSize: 14,
              color: '#DE3B3B',
              marginLeft: 5,
            }}
          >
            CANCELADA
          </strong>
        </div>
      );
    }

    if (deliv.canceled_at === null && deliv.start_date === null) {
      return (
        <div
          style={{
            background: '#F0F0DF',
            border: 1,
            borderColor: '#DFF0DF',
            borderRadius: 50,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: 110,
            height: 27,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              background: '#C1BC35',
              borderRadius: 50,
            }}
          />
          <strong
            style={{
              fontSize: 14,
              color: '#C1BC35',
              marginLeft: 5,
            }}
          >
            PENDENTE
          </strong>
        </div>
      );
    }

    if (deliv.start_date !== null && deliv.end_date === null) {
      return (
        <div
          style={{
            background: '#BAD2FF',
            border: 1,
            borderColor: '#DFF0DF',
            borderRadius: 50,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: 110,
            height: 27,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              background: '#4D85EE',
              borderRadius: 50,
            }}
          />
          <strong
            style={{
              fontSize: 14,
              color: '#4D85EE',
              marginLeft: 5,
            }}
          >
            RETIRADA
          </strong>
        </div>
      );
    }

    if (deliv.end_date !== null) {
      return (
        <div
          style={{
            background: '#DFF0DF',
            border: 1,
            borderColor: '#DFF0DF',
            borderRadius: 50,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: 110,
            height: 27,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              background: '#2CA42B',
              borderRadius: 50,
            }}
          />
          <strong
            style={{
              fontSize: 14,
              color: '#2CA42B',
              marginLeft: 5,
            }}
          >
            ENTREGUE
          </strong>
        </div>
      );
    }

    return status;
  }

  const memoList = useMemo(
    () => (
      <ul>
        <li className="header">
          <strong>ID</strong>
          <strong>Destinátario</strong>
          <strong>Entregadares</strong>
          <strong>Cidade</strong>
          <strong>Estado</strong>
          <strong>Status</strong>
          <strong>Ações</strong>
        </li>
        {deliveries.map((deliv) => (
          <li key={deliv.id}>
            <span>{`#${deliv.id}`}</span>
            {deliv.recipient ? (
              <span>{deliv.recipient.name}</span>
            ) : (
              <p>
                <b>DELETADO</b>
              </p>
            )}

            <div className="avatar">
              <img
                src={
                  deliv.deliveryman
                    ? deliv.deliveryman.avatar
                      ? deliv.deliveryman.avatar.url
                      : `https://ui-avatars.com/api/?color=A28FD0&background=F4EFFC&bold=true&format=svg&size=120&rounded=true&name=${deliv.deliveryman.name}`
                    : 'https://images.vexels.com/media/users/3/143555/isolated/preview/af8dbc9112fe8ee9328539534b5a6548-ponto-de-interroga----o-3d-vermelho-e-amarelo-by-vexels.png'
                }
                alt={deliv.deliveryman ? deliv.deliveryman.name : ''}
              />
              <span>
                {deliv.deliveryman ? deliv.deliveryman.name : 'DELETADO'}
              </span>
            </div>
            <span>
              {deliv.recipient ? (
                deliv.recipient.city
              ) : (
                <img
                  src="https://images.vexels.com/media/users/3/143555/isolated/preview/af8dbc9112fe8ee9328539534b5a6548-ponto-de-interroga----o-3d-vermelho-e-amarelo-by-vexels.png"
                  alt=""
                  style={{
                    width: 35,
                    height: 35,
                    margin: 'auto',
                  }}
                />
              )}
            </span>
            <span>
              {deliv.recipient ? (
                deliv.recipient.state
              ) : (
                <img
                  src="https://images.vexels.com/media/users/3/143555/isolated/preview/af8dbc9112fe8ee9328539534b5a6548-ponto-de-interroga----o-3d-vermelho-e-amarelo-by-vexels.png"
                  alt=""
                  style={{
                    width: 35,
                    height: 35,
                    margin: 'auto',
                  }}
                />
              )}
            </span>
            <span>{showStatus(deliv)}</span>
            <div className="actions">
              <Actions>
                <BoxActions>
                  <button
                    onClick={() => handleVisibleModal(deliv)}
                    type="button"
                  >
                    <MdVisibility color="#7d40e7" size={16} />
                    <span>Visializar</span>
                  </button>
                </BoxActions>

                <BoxActions>
                  <button
                    onClick={() => {
                      history.push('/deliveries/form', { delivery: deliv });
                    }}
                    type="button"
                    disabled={deliv.start_date !== null}
                  >
                    <MdCreate color="#4D85EE" size={16} />
                    <span>Editar</span>
                  </button>
                </BoxActions>

                <BoxActions>
                  <button type="button">
                    <MdDeleteForever color="#DE3B3B" size={16} />
                    <span>Deletar</span>
                  </button>
                </BoxActions>
              </Actions>
            </div>
          </li>
        ))}
      </ul>
    ),

    [deliveries, handleVisibleModal]
  );

  function nextPage() {
    setPrePage(Math.ceil(total / 5));
    setPage(page < prePage ? page + 1 : page);

    loadOrders(search, page);
  }

  function prevPage() {
    setPage(page >= 2 ? page - 1 : page);

    loadOrders(search, page);
  }

  return (
    <Container>
      <header>
        <strong>Gerenciando encomendas</strong>
        <div>
          <SearchInput>
            <MdSearch color="#999" />
            <input
              type="text"
              placeholder="Buscar por encomendas"
              autoCapitalize="none"
              onChange={(e) => setSearch(e.target.value)}
            />
          </SearchInput>
          <button
            onClick={() => history.push('/deliveries/form')}
            type="button"
          >
            <MdAdd size={25} color="#fff" />
            CADASTRAR
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
      ) : deliveries.length === 0 ? (
        <h1>Nenhuma encomenda no sistema</h1>
      ) : (
        memoList
      )}

      <div
        style={{
          display: `${modal ? 'block' : 'none'}`,
        }}
      >
        <Modal delivery={delivery} />
      </div>
    </Container>
  );
}

export default Deliveries;
