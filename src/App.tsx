import React from 'react';
import { QuizProvider, useQuiz } from './store/QuizContext';
import { CoverScreen } from './components/CoverScreen';
import { WelcomeScreen } from './components/WelcomeScreen';
import { QuestionScreen } from './components/QuestionScreen';
import { MicroFeedbackScreen } from './components/MicroFeedbackScreen';
import { AnalyzingScreen } from './components/AnalyzingScreen';
import { ResultScreen } from './components/ResultScreen';
import { FinalCtaScreen } from './components/FinalCtaScreen';
import { AnimatePresence } from 'motion/react';

function QuizRouter() {
  const { state } = useQuiz();

  return (
    <AnimatePresence mode="wait">
      {state.currentScreen === 'cover' && <CoverScreen key="cover" />}
      {state.currentScreen === 'welcome' && <WelcomeScreen key="welcome" />}
      {state.currentScreen === 'question' && <QuestionScreen key={`question-${state.currentQuestionIndex}`} />}
      {state.currentScreen === 'feedback' && <MicroFeedbackScreen key={`feedback-${state.currentQuestionIndex}`} />}
      {state.currentScreen === 'analyzing' && <AnalyzingScreen key="analyzing" />}
      {state.currentScreen === 'result' && <ResultScreen key="result" />}
      {state.currentScreen === 'final' && <FinalCtaScreen key="final" />}
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <QuizProvider>
      <div className="min-h-screen bg-[#FFF6ED] font-sans selection:bg-[#F6C1CC] selection:text-[#4A4A4A] overflow-x-hidden">
        <QuizRouter />
      </div>
    </QuizProvider>
  );
}
