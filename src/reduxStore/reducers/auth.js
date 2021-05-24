const initialState = {
  loading: false,
  success: false,
  error: false,
  message: "",
  isLoggedIn: false,
  token: null,
  //user: InitialValues,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
