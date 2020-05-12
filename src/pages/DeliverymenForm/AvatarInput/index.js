import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import PropTypes from 'prop-types';

import api from '~/services/api';
import noPicture from '~/assets/no-picture.jpg';

import { Container } from './styles';

export default function AvatarInput({ deliverymanName }) {
  const { defaultValue, registerField } = useField('avatar');

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'avatar_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref, registerField]);

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }

  return (
    <Container>
      <label htmlFor="avatar">
        <img
          src={
            preview ||
            (deliverymanName
              ? `https://ui-avatars.com/api/?color=A28FD0&background=F4EFFC&bold=true&format=svg&size=120&rounded=true&name=${deliverymanName}`
              : noPicture)
          }
          alt=""
        />

        <input
          type="file"
          id="avatar"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}

AvatarInput.propTypes = {
  deliverymanName: PropTypes.string,
};

AvatarInput.defaultProps = {
  deliverymanName: null,
};
