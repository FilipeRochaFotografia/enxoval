import React from 'react';
import { useQuiz } from '../store/QuizContext';
import { ScreenContainer } from './ScreenContainer';

export function CoverScreen() {
  const { dispatch } = useQuiz();

  return (
    <ScreenContainer className="text-center">
      <div className="mb-8 relative">
        {/* Organic background shape */}
        <div className="absolute inset-0 bg-[#F6C1CC] opacity-20 rounded-full blur-3xl transform scale-150"></div>
        <img 
          src="https://i.ibb.co/xS80TDTq/diferentes-acessorios-para-criancas-conjunto-de-ilustracoes-vetoriais-778687-1241.avif" 
          alt="Acessórios para crianças" 
          className="relative z-10 w-64 h-auto mx-auto drop-shadow-sm"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <h1 className="text-2xl font-semibold text-[#4A4A4A] mb-3">
        💗 Quiz Enxoval Descomplicado
      </h1>
      
      <p className="text-[15px] text-[#6B6B6B] mb-6 leading-relaxed">
        Em poucos minutos, vamos te mostrar como montar o enxoval do seu bebê com mais tranquilidade, economia e segurança.
      </p>
      
      <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 mb-8 shadow-sm border border-white/40">
        <p className="text-sm text-[#6B6B6B] leading-relaxed">
          Sem julgamentos.<br/>
          Sem listas impossíveis.<br/>
          Só o que realmente importa para você e seu bebê.
        </p>
      </div>

      <button 
        onClick={() => dispatch({ type: 'START_QUIZ' })}
        className="w-full bg-[#4A4A4A] text-white font-medium py-4 px-6 rounded-full shadow-md hover:bg-[#333333] hover:shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2"
      >
        <span>👉</span> Começar meu quiz
      </button>
      
      <p className="text-xs text-[#6B6B6B]/70 mt-4">
        Leva menos de 3 minutos.
      </p>
    </ScreenContainer>
  );
}
