/* eslint-disable no-cond-assign */
import React, { useState } from 'react';
import { MdMoreHoriz } from 'react-icons/md';
import PropTypes from 'prop-types';

import { Container, ActionList } from './styles';

export default function Actions({ children }) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  function topPos(ref) {
    let valor = ref.offsetTop;
    while ((ref = ref.offsetParent) != null) valor += ref.offsetTop;
    return valor;
  }

  function leftPos(ref) {
    let valor = ref.offsetLeft;
    while ((ref = ref.offsetParent) != null) valor += ref.offsetLeft;
    return valor;
  }

  function handleVisible(e) {
    setVisible(!visible);
    const y = topPos(e.nativeEvent.clientY);
    const x = leftPos(e.nativeEvent.clientX);
    setCoords({
      x,
      y,
    });
  }

  function close() {
    setVisible(false);
  }

  return (
    <Container>
      <button id="more" type="button" onClick={(e) => handleVisible(e)}>
        <MdMoreHoriz color="#C6C6C6" size={20} />
      </button>
      <div>
        <ActionList onClick={close} visible={visible} coords={coords}>
          {children}
        </ActionList>
      </div>
    </Container>
  );
}

Actions.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

Actions.defaultProps = {
  children: null,
};
