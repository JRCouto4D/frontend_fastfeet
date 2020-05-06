import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'fastfeet_web',
      storage,
      whitelist: ['auth', 'user', 'modal'],
    },
    reducers
  );

  return persistedReducer;
};
