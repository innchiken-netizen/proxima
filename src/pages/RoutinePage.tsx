import React from 'react';
import { RoutineQuiz } from '../components/quiz/RoutineQuiz';
import { Product } from '../types';

interface RoutinePageProps {
  onQuickView: (product: Product) => void;
}

export const RoutinePage: React.FC<RoutinePageProps> = ({ onQuickView }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
      <RoutineQuiz onProductClick={onQuickView} />
    </div>
  );
};
