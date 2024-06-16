import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LanguageState {
    currentLanguage: 'en' | 'ru';
}

const initialState: LanguageState = {
    currentLanguage: 'ru',
};

const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
      setLanguage(state, action: PayloadAction<'en' | 'ru'>) {
        state.currentLanguage = action.payload;
      }
    },
});
  
  export const { setLanguage } = languageSlice.actions;
  export default languageSlice.reducer;