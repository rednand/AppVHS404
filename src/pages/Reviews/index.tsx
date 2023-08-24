import React, { useEffect, useState } from 'react';
import Footer from '../../componentes/Footer';
import ReviewMain from '../../componentes/ReviewMain';
import { Back, MainReview } from './styles';

const Review = () => {
  return (
    <Back>
      <ReviewMain />
      <Footer />
    </Back>
  );
};

export default Review;
