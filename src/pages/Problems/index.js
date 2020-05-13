/* eslint-disable no-nested-ternary */
import React, { useState, useEffect, useMemo } from 'react';

import {
  MdFastRewind,
  MdFastForward,
  MdVisibility,
  MdDeleteForever,
} from 'react-icons/md';
import { FaSpinner } from 'react-icons/fa';

import Actions from '~/components/Actions';

import api from '~/services/api';

import { Container, Navigation, TableProblems, Loading } from './styles';

export default function Problems() {
  const [problems, setProblems] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [prePage, setPrePage] = useState(0);
  const [loading, setLoading] = useState(false);

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
                  <button onClick={() => {}} type="button">
                    <MdVisibility color="#7d40e7" size={16} />
                    <span>Visializar</span>
                  </button>
                </div>

                <div>
                  <button onClick={() => {}} type="button">
                    <MdDeleteForever color="#DE3B3B" size={16} />
                    <span>Deletar</span>
                  </button>
                </div>
              </Actions>
            </div>
          </li>
        ))}
      </TableProblems>
    ),

    [problems]
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
    </Container>
  );
}
