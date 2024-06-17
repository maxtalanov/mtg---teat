import { Component } from 'react';
import './ReviewCard.css'

const styleName: string = 'review-card'

interface ReviewCardProps {
  name: string;
  review: string;
  date: string;
}

class ReviewCard extends Component<ReviewCardProps> {
  render() {
    const { name, review, date } = this.props;

    return (
      <div className={`${styleName}`}>
        <h3 className={`${styleName}__user`}>{name}</h3>
        <p className={`${styleName}__review`}>{review}</p>
        <p className={`${styleName}__date`}>{date}</p>
      </div>
    );
  }
}

export default ReviewCard;