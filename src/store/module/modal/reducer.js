import produce from 'immer';

const INITIAL_STATE = {
  modal: false,
};

export default function modal(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@modal/SET_MODAL_TRUE': {
        draft.modal = true;
        break;
      }

      case '@modal/SET_MODAL_FALSE': {
        draft.modal = false;
        break;
      }

      default:
    }
  });
}
