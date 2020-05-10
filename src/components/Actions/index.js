import React, { useState } from 'react';
import { MdMoreHoriz } from 'react-icons/md';
import PropTypes from 'prop-types';

import { Container, ActionList, KeyBoard } from './styles';

export default function Actions({ children }) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  function handleVisible(e) {
    setVisible(!visible);
    setCoords({
      x: e.nativeEvent.clientX,
      y: e.nativeEvent.clientY,
    });
  }

  function close() {
    setVisible(false);
  }

  return (
    <Container>
      <button type="button" onClick={(e) => handleVisible(e)}>
        <MdMoreHoriz color="#C6C6C6" size={20} />
      </button>
      <div>
        <KeyBoard size={20} visible={visible} coords={coords} />
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
