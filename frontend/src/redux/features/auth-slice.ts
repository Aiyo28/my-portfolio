import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type initialState = {
	value: AuthState;
};

type AuthState = {
	isAuth: boolean;
	username: string;
	uid: string;
	isModerator: boolean;
};

const initialState = {
	value: {
		isAuth: false,
		username: '',
		uid: '',
		isModerator: false,
	},
};

export const auth = createSlice({
	name: 'auth',
	initialState: initialState,
	reducers: {
		logOut: () => {
			return initialState;
		},
		logIn: (state, action: PayloadAction<string>) => {
			return {
				value: {
					isAuth: true,
					username: action.payload,
					uid: '',
					isModerator: false,
				},
			};
		},
	},
});

export const { logIn, logOut } = auth.actions;
export default auth.reducer;
