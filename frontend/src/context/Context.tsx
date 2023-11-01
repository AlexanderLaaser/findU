import React, { createContext, useReducer, useContext, ReactNode } from "react";

const initialState = {
  isOpen: false,
};

interface AppState {
  isOpen: boolean;
}

export const enum REDUCER_ACTION_TYPE {
  OPEN = "OPEN",
  CLOSE = "CLOSE",
}

type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
};

export const modalReducer = (state: AppState, action: ReducerAction) => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.OPEN:
      return { isOpen: true };
    case REDUCER_ACTION_TYPE.CLOSE:
      return { isOpen: false };
    default:
      return state;
  }
};

const ModalContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<ReducerAction>; // Fügen Sie den Dispatch hinzu
}>({
  state: initialState,
  dispatch: () => {}, // Initialisieren Sie den Dispatch
});

const useModalContext = () => {
  return useContext(ModalContext);
};

const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(modalReducer, initialState);

  return (
    <ModalContext.Provider value={{ state, dispatch }}>
      {children}
    </ModalContext.Provider>
  );
};

export { useModalContext, ModalProvider };
