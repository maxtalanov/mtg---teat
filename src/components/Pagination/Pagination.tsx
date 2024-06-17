import { Component } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../store';
import { setCurrentPage } from '../../store/slices/reviews/reviewsSlice';
import './Pagination.css';

const styleName: string = 'pagination';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}

class Pagination extends Component<PaginationProps> {

  handlePrevious = () => {
    const { currentPage, setCurrentPage } = this.props;
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  handleNext = () => {
    const { currentPage, totalPages, setCurrentPage } = this.props;
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  render() {
    const { currentPage, totalPages } = this.props;

    return (
      <div className={styleName}>
        <button
          className={`${styleName}__btn`}
          onClick={this.handlePrevious}
          disabled={currentPage === 1}
        >
          Назад [{currentPage - 1}]
        </button>
        <span className={`${styleName}__info`}>Страница {currentPage} из {totalPages}</span>
        <button
          className={`${styleName}__btn`}
          onClick={this.handleNext}
          disabled={currentPage === totalPages}
        >
          Далее [{currentPage + 1}]
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  currentPage: state.reviews.currentPage,
  totalPages: Math.ceil(state.reviews.totalReviews.length / state.reviews.reviewsPerPage),
});

const mapDispatchToProps = {
  setCurrentPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
