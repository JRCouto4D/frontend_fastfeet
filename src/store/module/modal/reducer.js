import produce from 'immer';

const INITIAL_STATE = {
  modal: false,
  delivery: null,
};

export default function modal(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@modal/SET_MODAL_TRUE': {
        draft.modal = true;
        draft.delivery = action.payload.delivery;
        break;
      }

      case '@modal/SET_MODAL_FALSE': {
        draft.modal = false;
        draft.delivery = null;
        break;
      }

      default:
    }
  });
}
