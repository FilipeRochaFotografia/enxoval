import React from 'react';
import { ScreenContainer } from './ScreenContainer';
import { config } from '../constants/quizData';
import { CheckCircle2, RotateCcw } from 'lucide-react';
import { useQuiz } from '../store/QuizContext';

export function FinalCtaScreen() {
  const { dispatch } = useQuiz();

  return (
    <ScreenContainer className="text-center">
      <div className="w-20 h-20 bg-[#DFF1EA] rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm">
        <span className="text-4xl">💗</span>
      </div>
      
      <h1 className="text-2xl font-semibold text-[#4A4A4A] mb-6">
        Você não precisa fazer isso sozinha
      </h1>
      
      <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 mb-8 shadow-sm border border-white/50">
        <p className="text-[15px] text-[#6B6B6B] leading-relaxed mb-4">
          Existe um caminho mais leve para montar o enxoval, sem desperdício, sem culpa e sem ansiedade.
        </p>
        <p className="text-[15px] text-[#6B6B6B] leading-relaxed font-medium">
          Com o método certo, você economiza, se organiza e vive essa fase com mais paz.
        </p>
      </div>

      <a 
        href={config.finalCtaLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full bg-[#F6C1CC] text-[#4A4A4A] font-semibold py-4 px-6 rounded-full shadow-md hover:bg-[#f3b0be] hover:shadow-lg transition-all active:scale-95 mb-6"
      >
        Quero acessar agora
      </a>
      
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs text-[#6B6B6B]/80 mb-8">
        <span className="flex items-center gap-1"><CheckCircle2 size={12} className="text-[#DFF1EA]" /> Acesso imediato</span>
        <span className="flex items-center gap-1"><CheckCircle2 size={12} className="text-[#DFF1EA]" /> Conteúdo prático</span>
        <span className="flex items-center gap-1"><CheckCircle2 size={12} className="text-[#DFF1EA]" /> Sem complicação</span>
      </div>

      <button
        onClick={() => dispatch({ type: 'RESET' })}
        className="flex items-center justify-center gap-2 text-sm text-[#6B6B6B] hover:text-[#4A4A4A] transition-colors mx-auto"
      >
        <RotateCcw size={16} />
        Refazer o teste
      </button>
    </ScreenContainer>
  );
}
