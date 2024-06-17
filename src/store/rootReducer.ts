import { combineReducers } from '@reduxjs/toolkit';
import languageReducer from './slices/language/languageSlice';
import reviewsReducer from './slices/reviews/reviewsSlice';

const rootReducer = combineReducers({
    language: languageReducer,
    reviews: reviewsReducer,
});

export default rootReducer;