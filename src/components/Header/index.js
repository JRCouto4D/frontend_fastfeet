import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { signOut } from '~/store/module/auth/actions';

import { Container, Content, Profile } from './styles';
import logo from '~/assets/fastfeet-logo.png';

export default function Header() {
  const profile = useSelector((state) => state.user.profile);
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <div>
          <img src={logo} alt="fastfeet" />

          <nav>
            <Link to="/deliveries">ENCOMENDAS</Link>
            <Link to="/deliverymen">ENTREGADORES</Link>
            <Link to="/recipients">DESTINATÁRIOS</Link>
            <Link to="/problems">PROBLEMAS</Link>
          </nav>
        </div>

        <Profile>
          <div>
            <strong>{profile.name}</strong>
            <button type="button" onClick={handleSignOut}>
              sair do sistema
            </button>
          </div>
        </Profile>
      </Content>
    </Container>
  );
}
