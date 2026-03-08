import React from 'react';
import { useQuiz } from '../store/QuizContext';
import { ScreenContainer } from './ScreenContainer';

export function WelcomeScreen() {
  const { dispatch } = useQuiz();

  return (
    <ScreenContainer className="text-center">
      <div className="w-16 h-16 bg-[#FFF6ED] rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-white">
        <span className="text-2xl">✨</span>
      </div>
      
      <h1 className="text-2xl font-semibold text-[#4A4A4A] mb-6">
        Que bom ter você aqui
      </h1>
      
      <div className="space-y-4 text-[15px] text-[#6B6B6B] leading-relaxed mb-10 text-left bg-white/50 p-6 rounded-3xl shadow-sm border border-white/50">
        <p>
          Montar o enxoval é um momento especial, mas também pode gerar dúvidas, ansiedade e gastos desnecessários.
        </p>
        <p>
          Este quiz foi criado para te ajudar a fazer escolhas mais leves, conscientes e alinhadas com a sua realidade.
        </p>
        <p className="font-medium text-[#4A4A4A]">
          Respire fundo, responda com sinceridade e confie no processo 💗
        </p>
      </div>

      <button 
        onClick={() => dispatch({ type: 'NEXT_SCREEN', screen: 'question' })}
        className="w-full bg-[#F6C1CC] text-[#4A4A4A] font-medium py-4 px-6 rounded-full shadow-sm hover:bg-[#f3b0be] hover:shadow-md transition-all active:scale-95"
      >
        Vamos começar
      </button>
    </ScreenContainer>
  );
}
