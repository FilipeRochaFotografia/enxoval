import React, { useEffect } from 'react';
import { useQuiz } from '../store/QuizContext';
import { ScreenContainer } from './ScreenContainer';
import { questions, Profile } from '../constants/quizData';
import { motion } from 'motion/react';

export function AnalyzingScreen() {
  const { state, dispatch } = useQuiz();

  useEffect(() => {
    // Calculate results
    const calculateResult = () => {
      const scores: Record<Profile, number> = { P1: 0, P2: 0, P3: 0, P4: 0 };
      
      questions.forEach(q => {
        const answerId = state.answers[q.id];
        if (answerId) {
          const option = q.options.find(o => o.id === answerId);
          if (option && option.weights) {
            Object.entries(option.weights).forEach(([profile, weight]) => {
              scores[profile as Profile] += weight as number;
            });
          }
        }
      });

      // Find max score
      let maxScore = -1;
      let topProfile: Profile = 'P1';

      // Tie-breaker priority: P1 > P4 > P2 > P3
      const priority: Profile[] = ['P1', 'P4', 'P2', 'P3'];

      priority.forEach(p => {
        if (scores[p] > maxScore) {
          maxScore = scores[p];
          topProfile = p;
        }
      });

      return topProfile;
    };

    const timer = setTimeout(() => {
      const result = calculateResult();
      dispatch({ type: 'SET_RESULT', profile: result });
    }, 3000);

    return () => clearTimeout(timer);
  }, [state.answers, dispatch]);

  return (
    <ScreenContainer className="text-center">
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="text-6xl mb-8"
      >
        ✨
      </motion.div>
      
      <h2 className="text-2xl font-semibold text-[#4A4A4A] mb-4">
        Estamos analisando suas respostas
      </h2>
      
      <p className="text-[15px] text-[#6B6B6B] leading-relaxed max-w-xs mx-auto">
        Em poucos segundos, você vai descobrir seu perfil e como tornar essa fase mais leve.
      </p>
      
      <p className="mt-8 font-medium text-[#F6C1CC] text-lg">
        Respire, esse momento é seu 💗
      </p>
    </ScreenContainer>
  );
}
