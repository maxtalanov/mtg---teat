import { Component } from 'react';
import Pagination from '../Pagination/Pagination';
import './Main.css';
import ReviewsList from '../ReviewList/ReviewList';

class Main extends Component {
  render() {
    return (
      <main className="main">
        <ReviewsList />
        <Pagination />
      </main>
    );
  }
}

export default Main;
