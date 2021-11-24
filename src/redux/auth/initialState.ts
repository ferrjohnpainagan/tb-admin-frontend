interface StateType {
  isSignedIn: boolean;
  adminName?: string;
  token?: any;
  loginExp?: any;
}

export const initialState: StateType = {
  isSignedIn: false,
  adminName: "Tita Baker",
  token: null,
  loginExp: null,
};
