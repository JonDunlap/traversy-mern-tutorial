import { createContext, useReducer } from 'react';

export const AuthContext = createContext();

// Get user from local storage
const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

const authReducer = (state, action) => {
  switch (action.type) {
    case 'RESET':
      return {
        ...(state.isError = false),
        ...(state.isSuccess = false),
        ...(state.isLoading = false),
        ...(state.message = ''),
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
