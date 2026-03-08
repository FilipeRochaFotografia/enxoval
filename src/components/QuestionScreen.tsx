import React, { useState } from 'react';
import { useQuiz } from '../store/QuizContext';
import { ScreenContainer } from './ScreenContainer';
import { ProgressBar } from './ProgressBar';
import { OptionButton } from './OptionButton';
import { questions, feedbacks } from '../constants/quizData';
import { ArrowLeft } from 'lucide-react';

export function QuestionScreen() {
  const { state, dispatch } = useQuiz();
  const question = questions[state.currentQuestionIndex];
  const isLastQuestion = state.currentQuestionIndex === questions.length - 1;
  const [isAnimating, setIsAnimating] = useState(false);

  const handleOptionClick = (optionId: string) => {
    if (isAnimating) return;
    
    dispatch({ 
      type: 'ANSWER_QUESTION', 
      questionId: question.id, 
      optionId
    });

    setIsAnimating(true);
    
    setTimeout(() => {
      setIsAnimating(false);
      
      if (isLastQuestion) {
        dispatch({ type: 'NEXT_SCREEN', screen: 'analyzing' });
      } else {
        dispatch({ type: 'NEXT_QUESTION' });
      }
    }, 400); // Small delay to show selection
  };

  const handleBack = () => {
    if (state.currentQuestionIndex === 0) {
      dispatch({ type: 'NEXT_SCREEN', screen: 'welcome' });
    } else {
      dispatch({ type: 'PREV_QUESTION' });
    }
  };

  return (
    <ScreenContainer className="justify-start pt-12">
      <div className="w-full flex items-center mb-6">
        <button 
          onClick={handleBack}
          className="p-2 -ml-2 text-[#6B6B6B] hover:text-[#4A4A4A] transition-colors rounded-full hover:bg-white/50"
          aria-label="Voltar"
        >
          <ArrowLeft size={20} />
        </button>
        <span className="mx-auto text-sm font-medium text-[#6B6B6B] pr-6">
          Pergunta {state.currentQuestionIndex + 1} de {questions.length}
        </span>
      </div>

      <ProgressBar current={state.currentQuestionIndex + 1} total={questions.length} />

      {question.image && (
        <div className="w-full aspect-video rounded-2xl overflow-hidden mb-6 shadow-sm">
          <img 
            src={question.image} 
            alt="Ilustração da pergunta" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      )}

      <h2 className="text-xl font-semibold text-[#4A4A4A] mb-2 leading-snug">
        {question.text}
      </h2>
      
      <p className="text-xs text-[#6B6B6B]/70 mb-8">
        Não existe resposta certa ou errada. Apenas a sua.
      </p>

      <div className="w-full space-y-3">
        {question.options.map((option) => (
          <OptionButton
            key={option.id}
            label={option.label}
            selected={state.answers[question.id] === option.id}
            onClick={() => handleOptionClick(option.id)}
          />
        ))}
      </div>
    </ScreenContainer>
  );
}
