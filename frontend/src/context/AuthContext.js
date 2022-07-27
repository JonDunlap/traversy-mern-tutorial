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
        ...(initialState.isError = false),
        ...(initialState.isSuccess = false),
        ...(initialState.isLoading = false),
        ...(initialState.message = ''),
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
