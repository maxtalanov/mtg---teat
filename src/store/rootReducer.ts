import { combineReducers } from '@reduxjs/toolkit';
import languageReducer from './slices/language/languageSlice';
import reviewsReducer from './slices/reviews/reviewsSlice';
import timeReducer from './slices/time/timeSlice';

const rootReducer = combineReducers({
    language: languageReducer,
    reviews: reviewsReducer,
    time: timeReducer,
});

export default rootReducer;