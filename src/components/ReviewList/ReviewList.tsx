import { Component } from 'react';
import { connect } from 'react-redux';
import ReviewCard from './ReviewCard/ReviewCard';
import { fetchReviews } from '../../store/slices/reviews/reviewsSlice';
import { RootState } from '../../store';
import './ReviewsList.css';

const styleName: string = 'reviews-list';

interface ReviewsListProps {
  reviews: Review[];
  language: string;
  currentPage: number;
  reviewsPerPage: number;
  fetchReviews: (language: string) => void;
}

interface Review {
  id: string;
  name: string;
  review: string;
  date: string;
}

class ReviewsList extends Component<ReviewsListProps> {

  componentDidMount() {
    const { language, fetchReviews } = this.props;
    fetchReviews(language);
  }

  componentDidUpdate(prevProps: ReviewsListProps) {
    const { language, fetchReviews, currentPage } = this.props;

    if (prevProps.language !== language || prevProps.currentPage !== currentPage) {
      fetchReviews(language);
    }
  }

  render() {
    const { reviews } = this.props;

    return (
      <div className={styleName}>
        <h2 className={`${styleName}__title`}>Отзывы пользователей</h2>
        <div className={`${styleName}__list`}>
          {reviews.map((review) => (
            <ReviewCard key={review.id} {...review} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  reviews: state.reviews.reviews,
  language: state.language.currentLanguage,
  currentPage: state.reviews.currentPage,
  reviewsPerPage: state.reviews.reviewsPerPage,
});

const mapDispatchToProps = {
  fetchReviews,
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsList);
