import React from 'react';
import { useQuiz } from '../store/QuizContext';
import { ScreenContainer } from './ScreenContainer';
import { profiles } from '../constants/quizData';

export function ResultScreen() {
  const { state, dispatch } = useQuiz();
  const profile = state.resultProfile ? profiles[state.resultProfile] : null;

  if (!profile) return null;

  return (
    <ScreenContainer className="justify-start pt-10 pb-10">
      <div className="w-full bg-white rounded-3xl p-8 shadow-sm border border-[#CFE8F3]/30 relative overflow-hidden">
        {/* Decorative blob */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#FFF6ED] rounded-full blur-2xl"></div>
        
        <div className="relative z-10">
          <div className="text-sm font-medium text-[#6B6B6B] uppercase tracking-wider mb-2">
            Seu Perfil
          </div>
          <h1 className="text-2xl font-semibold text-[#4A4A4A] mb-6 leading-tight">
            <span className="mr-2">{profile.icon}</span>
            {profile.title}
          </h1>
          
          <div className="space-y-4 text-[15px] text-[#6B6B6B] leading-relaxed mb-8 whitespace-pre-line">
            {profile.text}
          </div>

          <div className="bg-[#FFF6ED]/50 rounded-2xl p-5 mb-8">
            <h3 className="text-sm font-semibold text-[#4A4A4A] mb-4 uppercase tracking-wide">
              Mini Diagnóstico
            </h3>
            <div className="space-y-3">
              {profile.diagnostics.map((diag, i) => (
                <div key={i} className="flex items-center justify-between">
                  <span className="text-sm text-[#6B6B6B]">{diag.label}</span>
                  <div className="flex gap-1">
                    {Array.from({ length: diag.max }).map((_, j) => (
                      <div 
                        key={j} 
                        className={`w-2 h-2 rounded-full ${j < diag.value ? 'bg-[#CFE8F3]' : 'bg-gray-200'}`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={() => dispatch({ type: 'NEXT_SCREEN', screen: 'final' })}
            className="w-full bg-[#4A4A4A] text-white font-medium py-4 px-6 rounded-full shadow-md hover:bg-[#333333] hover:shadow-lg transition-all active:scale-95"
          >
            {profile.cta}
          </button>
        </div>
      </div>
    </ScreenContainer>
  );
}
