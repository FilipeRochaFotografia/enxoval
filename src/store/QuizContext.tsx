import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { Profile } from '../constants/quizData';

type Screen = 'cover' | 'welcome' | 'question' | 'feedback' | 'analyzing' | 'result' | 'final';

interface State {
  currentScreen: Screen;
  currentQuestionIndex: number;
  answers: Record<number, string>;
  resultProfile: Profile | null;
}

type Action =
  | { type: 'START_QUIZ' }
  | { type: 'NEXT_SCREEN'; screen: Screen }
  | { type: 'ANSWER_QUESTION'; questionId: number; optionId: string }
  | { type: 'NEXT_QUESTION' }
  | { type: 'PREV_QUESTION' }
  | { type: 'SET_RESULT'; profile: Profile }
  | { type: 'RESET' };

const initialState: State = {
  currentScreen: 'cover',
  currentQuestionIndex: 0,
  answers: {},
  resultProfile: null,
};

const QuizContext = createContext<{ state: State; dispatch: React.Dispatch<Action> } | undefined>(undefined);

function quizReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'START_QUIZ':
      return { ...state, currentScreen: 'welcome' };
    case 'NEXT_SCREEN':
      return { ...state, currentScreen: action.screen };
    case 'ANSWER_QUESTION':
      return {
        ...state,
        answers: { ...state.answers, [action.questionId]: action.optionId },
      };
    case 'NEXT_QUESTION':
      return { ...state, currentQuestionIndex: state.currentQuestionIndex + 1 };
    case 'PREV_QUESTION':
      return {
        ...state,
        currentQuestionIndex: Math.max(0, state.currentQuestionIndex - 1),
      };
    case 'SET_RESULT':
      return { ...state, resultProfile: action.profile, currentScreen: 'result' };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

export function QuizProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(quizReducer, initialState, (initial) => {
    try {
      const saved = localStorage.getItem('quizState');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error("Failed to load state", e);
    }
    return initial;
  });

  useEffect(() => {
    localStorage.setItem('quizState', JSON.stringify(state));
  }, [state]);

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  const context = useContext(QuizContext);
  if (!context) throw new Error('useQuiz must be used within QuizProvider');
  return context;
}
