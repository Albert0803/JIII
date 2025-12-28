import React from 'react';
import { AppStatus } from '../types';

interface HUDProps {
  status: AppStatus;
  isProcessing?: boolean;
}

const HUD: React.FC<HUDProps> = ({ status, isProcessing }) => {
  const isSpeaking = status === AppStatus.SPEAKING;
  const isListening = status === AppStatus.LISTENING;

  return (
    <div className="relative w-[500px] h-[500px] flex items-center justify-center pointer-events-none select-none">
      {/* Anneaux Rotatifs Complexes */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Anneau externe de données */}
        <div className="absolute w-[100%] h-[100%] animate-rotate-ccw opacity-10 border-[0.5px] border-dashed border-cyan-400 rounded-full" />
        <div className="absolute w-[95%] h-[95%] animate-rotate-cw opacity-20 border-[1px] border-cyan-500/20 rounded-full" />
        
        {/* Anneau de segments */}
        <div className="absolute w-[80%] h-[80%] animate-rotate-cw-fast opacity-40">
           <svg viewBox="0 0 100 100" className="w-full h-full">
             <circle cx="50" cy="50" r="48" fill="none" stroke="#00e5ff" strokeWidth="0.5" strokeDasharray="1 15" />
           </svg>
        </div>

        {/* Coeur énergétique */}
        <div className={`absolute w-[60%] h-[60%] rounded-full border border-cyan-500/10 transition-all duration-1000 ${isSpeaking ? 'bg-cyan-500/5 scale-105 shadow-[0_0_60px_rgba(0,229,255,0.1)]' : 'bg-transparent scale-100'}`} />
      </div>

      {/* SVG Central J.A.R.V.I.S. Reactor */}
      <svg viewBox="0 0 100 100" className={`absolute inset-0 w-full h-full drop-shadow-[0_0_20px_rgba(0,229,255,0.5)] transition-transform duration-500 ${isSpeaking ? 'scale-110' : 'scale-100'}`}>
        {/* Background glow */}
        <defs>
          <radialGradient id="jarvisGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00e5ff" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#00e5ff" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="30" fill="url(#jarvisGradient)" className={isSpeaking ? 'animate-pulse' : ''} />

        {/* Animated Rings */}
        <g className="animate-rotate-cw origin-center">
          <circle cx="50" cy="50" r="42" fill="none" stroke="#00e5ff" strokeWidth="0.8" strokeDasharray="20 10" strokeOpacity="0.8" />
          <circle cx="50" cy="50" r="42" fill="none" stroke="#00e5ff" strokeWidth="2" strokeDasharray="2 28" strokeLinecap="round" />
        </g>

        <g className="animate-rotate-ccw origin-center" style={{ animationDuration: '15s' }}>
          <circle cx="50" cy="50" r="38" fill="none" stroke="#00e5ff" strokeWidth="0.5" strokeDasharray="5 5" strokeOpacity="0.4" />
          <path d="M 50 12 A 38 38 0 0 1 88 50" fill="none" stroke="#00e5ff" strokeWidth="2" strokeOpacity="0.6" />
        </g>

        {isProcessing && (
          <g className="animate-rotate-cw-fast origin-center">
             <circle cx="50" cy="50" r="46" fill="none" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="2 12" strokeOpacity="0.9" />
          </g>
        )}
      </svg>

      {/* Audio Wave Visualizer */}
      <div className={`absolute z-10 flex items-center justify-center gap-[4px] h-16 w-48 transition-opacity duration-500 ${isSpeaking ? 'opacity-100' : 'opacity-0'}`}>
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className="w-[3px] bg-cyan-400 rounded-full animate-bar shadow-[0_0_8px_#00e5ff]" 
            style={{ 
              animationDelay: `${i * 0.04}s`,
              height: `${10 + Math.random() * 40}%`
            }} 
          />
        ))}
      </div>

      {/* JARVIS Logo & Status Text */}
      <div className="z-20 flex flex-col items-center justify-center animate-float">
        <div className={`relative transition-all duration-700 flex items-center justify-center ${isSpeaking ? 'scale-110' : 'scale-100'}`}>
          {/* Main Logo Triangle/Circle hybrid */}
          <div className="relative">
             <div className="absolute -inset-8 bg-cyan-500/10 blur-xl rounded-full animate-pulse"></div>
             <h1 className="text-cyan-400 font-black text-6xl tracking-tighter leading-none italic select-none drop-shadow-[0_0_15px_rgba(0,229,255,0.8)]">
               J.A.R.V.I.S.
             </h1>
          </div>
        </div>

        <div className="mt-8 h-10 flex flex-col items-center justify-center font-mono">
          {isProcessing ? (
            <div className="flex flex-col items-center group">
              <span className="text-[9px] text-yellow-400 font-bold tracking-[0.5em] animate-pulse">SYSTEM_PROCESSING...</span>
              <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent mt-2 shadow-[0_0_10px_#fbbf24]"></div>
            </div>
          ) : (
            <div className="flex flex-col items-center space-y-1">
              {isSpeaking && (
                <>
                  <span className="text-[8px] text-cyan-400 font-bold tracking-[0.6em] animate-pulse">UPLINK_TRANSMITTING</span>
                  <div className="flex gap-1">
                    <div className="w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
                    <div className="w-1 h-1 bg-cyan-400 rounded-full animate-ping [animation-delay:0.2s]"></div>
                    <div className="w-1 h-1 bg-cyan-400 rounded-full animate-ping [animation-delay:0.4s]"></div>
                  </div>
                </>
              )}
              {isListening && (
                <>
                  <span className="text-[8px] text-orange-400 font-bold tracking-[0.6em] animate-pulse">VOCAL_INPUT_READY</span>
                  <div className="w-16 h-[1px] bg-orange-400/40"></div>
                </>
              )}
              {status === AppStatus.IDLE && (
                <span className="text-[8px] text-cyan-800 font-bold tracking-[0.6em]">STANDBY_MODE</span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden rounded-full border border-cyan-500/20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[0.5px] h-full bg-cyan-400" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[0.5px] bg-cyan-400" />
        {[...Array(10)].map((_, i) => (
          <div key={i} className="absolute border border-cyan-400/20 rounded-full" style={{ width: `${i * 10}%`, height: `${i * 10}%`, top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
        ))}
      </div>
    </div>
  );
};

export default HUD;