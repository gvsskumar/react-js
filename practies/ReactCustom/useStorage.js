import { useReducer, useEffect } from "react";

const ACTIONS = {
  GETDATA: "getData",
  SETDATA: "setData"
};
const initialState = {
  data: null
};
function reducer(state, { type, payload }) {
  //console.log(payload.data)
  switch (type) {
    case ACTIONS.GETDATA:
      return { ...state, data: payload };
    case ACTIONS.SETDATA:
      return { ...state, data: payload };
    default:
      return state;
  }
}
function useStorage(keys) {
  // console.log(keys);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const setLocalStorage = localStorage.setItem(keys, "Kumar");
    dispatch({ type: ACTIONS.SETDATA, payload: setLocalStorage });

    const getLocalStorage = localStorage.getItem(keys);
    dispatch({ type: ACTIONS.GETDATA, payload: getLocalStorage });
  }, [keys]);
  return state;
}
export default useStorage;
