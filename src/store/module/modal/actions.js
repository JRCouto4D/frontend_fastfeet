export function setModalTrue(delivery) {
  return {
    type: '@modal/SET_MODAL_TRUE',
    payload: { delivery },
  };
}

export function setModalFalse() {
  return {
    type: '@modal/SET_MODAL_FALSE',
  };
}
