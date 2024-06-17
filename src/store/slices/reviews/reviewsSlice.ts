import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import dataJson from '../../../../db/data.json';

interface LanguageData {
  [key: string]: {
    [key: string]: Review;
  };
}

interface Review {
  id: string;
  name: string;
  review: string;
  date: string;
}

interface ReviewsState {
  reviews: Review[];
  currentPage: number;
  reviewsPerPage: number;
  totalReviews: Review[];
  error: string | null;
}

const data: LanguageData = dataJson as unknown as LanguageData;

const initialState: ReviewsState = {
  reviews: [],
  currentPage: 1,
  reviewsPerPage: 10,
  totalReviews: [], 
  error: null,
};

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    loadReviews(state, action: PayloadAction<{ reviews: Review[] }>) {
      state.totalReviews = action.payload.reviews;
      
      const startIndex = (state.currentPage - 1) * state.reviewsPerPage;
      const endIndex = startIndex + state.reviewsPerPage;
      state.reviews = state.totalReviews.slice(startIndex, endIndex);
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
  
      const startIndex = (state.currentPage - 1) * state.reviewsPerPage;
      const endIndex = startIndex + state.reviewsPerPage;
      state.reviews = state.totalReviews.slice(startIndex, endIndex);
    },
    setReviewsPerPage(state, action: PayloadAction<number>) {
      state.reviewsPerPage = action.payload;
      
      const startIndex = (state.currentPage - 1) * state.reviewsPerPage;
      const endIndex = startIndex + state.reviewsPerPage;
      state.reviews = state.totalReviews.slice(startIndex, endIndex);
    },
    setFetchError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
});

export const fetchReviews = (language: string) => (dispatch: Function) => {
  if (language in data) {
    const reviewsData = data[language];

    const reviewsArray: Review[] = Object.keys(reviewsData).map(key => ({
      id: key,
      name: reviewsData[key].name,
      review: reviewsData[key].review,
      date: reviewsData[key].date,
    }));

    dispatch(reviewsSlice.actions.loadReviews({ reviews: reviewsArray }));
  } else {
    dispatch(reviewsSlice.actions.setFetchError(`Language '${language}' is not found in data.`));
  }
};

export const { loadReviews, setCurrentPage, setReviewsPerPage } = reviewsSlice.actions;
export default reviewsSlice.reducer;
