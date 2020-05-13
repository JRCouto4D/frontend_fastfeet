/* eslint-disable no-alert */
/* eslint-disable no-nested-ternary */
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import {
  MdFastRewind,
  MdFastForward,
  MdVisibility,
  MdDeleteForever,
} from 'react-icons/md';
import { FaSpinner } from 'react-icons/fa';
import { setModalTrue } from '~/store/module/modal/actions';

import Actions from '~/components/Actions';
import Modal from '~/components/Modal/Problems';

import api from '~/services/api';

import { Container, Navigation, TableProblems, Loading } from './styles';

export default function Problems() {
  const [problems, setProblems] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [prePage, setPrePage] = useState(0);
  const [loading, setLoading] = useState(false);

  const { modal, delivery } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const handleVisibleModal = useCallback(
    (d) => {
      dispatch(setModalTrue({ delivery: d }));
    },
    [dispatch]
  );

  async function loadProlems(pag) {
    setLoading(true);

    const response = await api.get('delivery/problems', {
      params: {
        page: pag,
      },
    });

    console.tron.log(response.data);

    setProblems(response.data.problems);
    setTotal(response.data.total);
    setPrePage(Math.ceil(response.data.total / 5));
    setLoading(false);
  }

  useEffect(() => {
    loadProlems(page);
  }, [page]);

  function nextPage() {
    setPrePage(Math.ceil(total / 5));
    setPage(page < prePage ? page + 1 : page);

    loadProlems(page);
  }

  function prevPage() {
    setPage(page >= 2 ? page - 1 : page);

    loadProlems(page);
  }

  async function handleCanceledDelivery(id) {
    const del = window.confirm(
      'Tem certeza de que deseja cancelar essa encomenda?'
    );

    if (del) {
      try {
        await api.delete(`/problem/${id}/cancel-delivery`);
        toast.success('Encomenda cancelada com sucesso!');
      } catch (error) {
        toast.error(`Não foi possível cancelar encomenda - ${error}`);
      }
    }
  }

  const memoList = useMemo(
    () => (
      <TableProblems>
        <li className="header">
          <strong>Encomenda</strong>
          <strong>Problema</strong>
          <strong>Ações</strong>
        </li>

        {problems.map((problem) => (
          <li key={problem.id}>
            <span>{`#${problem.delivery.id}`}</span>
            <span>
              {problem.description.length > 110
                ? `${problem.description.substr(0, 110)}...`
                : problem.description}
            </span>
            <div className="actions">
              <Actions>
                <div>
                  <button
                    onClick={() => handleVisibleModal(problem)}
                    type="button"
                  >
                    <MdVisibility color="#7d40e7" size={16} />
                    <span>Visializar</span>
                  </button>
                </div>

                <div>
                  <button
                    onClick={() => {
                      handleCanceledDelivery(problem.id);
                    }}
                    type="button"
                  >
                    <MdDeleteForever color="#DE3B3B" size={16} />
                    <span>Cancelar encomenda</span>
                  </button>
                </div>
              </Actions>
            </div>
          </li>
        ))}
      </TableProblems>
    ),

    [problems, handleVisibleModal]
  );

  return (
    <Container>
      <header>
        <strong>Problemas na entrega</strong>
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
          <FaSpinner size={30} color="#444" />
        </Loading>
      ) : problems.length === 0 ? (
        <h1>Não há problemas nas entregas registrados no sistema</h1>
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
