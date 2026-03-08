import React, { useEffect } from 'react';
import { useQuiz } from '../store/QuizContext';
import { ScreenContainer } from './ScreenContainer';
import { questions, feedbacks } from '../constants/quizData';

export function MicroFeedbackScreen() {
  const { state, dispatch } = useQuiz();
  const questionId = questions[state.currentQuestionIndex].id;
  const feedback = feedbacks[questionId];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (state.currentQuestionIndex === questions.length - 1) {
        dispatch({ type: 'NEXT_SCREEN', screen: 'analyzing' });
      } else {
        dispatch({ type: 'NEXT_QUESTION' });
        dispatch({ type: 'NEXT_SCREEN', screen: 'question' });
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, [dispatch, state.currentQuestionIndex]);

  if (!feedback) return null;

  return (
    <ScreenContainer className="text-center">
      <div className="bg-white/60 backdrop-blur-md p-8 rounded-3xl shadow-sm border border-white/50 transform transition-all">
        <h2 className="text-2xl font-semibold text-[#4A4A4A] mb-3">
          {feedback.text}
        </h2>
        <p className="text-[#6B6B6B]">
          {feedback.subtext}
        </p>
      </div>
    </ScreenContainer>
  );
}
