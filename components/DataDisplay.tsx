import React from 'react';
import { DisplayedContent } from '../types';

interface DataDisplayProps {
  data: DisplayedContent | null;
  onClose: () => void;
}

const DataDisplay: React.FC<DataDisplayProps> = ({ data, onClose }) => {
  if (!data) return null;

  return (
    <div className="fixed left-8 top-1/4 w-[420px] max-h-[65vh] bg-[#00151a]/60 backdrop-blur-2xl border-l-4 border-cyan-500 rounded-r-xl shadow-[0_0_50px_rgba(0,229,255,0.15)] overflow-hidden flex flex-col z-[150] animate-in fade-in slide-in-from-left-8 duration-500">
      {/* Scanning effect line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-cyan-400/50 shadow-[0_0_15px_#00e5ff] animate-[scanning_4s_linear_infinite] opacity-30 z-10 pointer-events-none"></div>

      <div className="bg-cyan-900/30 border-b border-cyan-500/30 p-4 flex justify-between items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="flex items-center gap-3 relative z-10">
          <div className="relative">
            <div className="w-3 h-3 bg-cyan-400 rounded-sm rotate-45 animate-pulse"></div>
            <div className="absolute inset-0 w-3 h-3 bg-cyan-400/50 rounded-sm rotate-45 animate-ping"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-mono font-black text-cyan-400 uppercase tracking-[0.2em]">{data.title}</span>
            <span className="text-[7px] font-mono text-cyan-500/60 uppercase">Dossier_Analytique_v4.0</span>
          </div>
        </div>
        <button 
          onClick={onClose} 
          className="w-8 h-8 rounded-full flex items-center justify-center text-cyan-500/60 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all border border-transparent hover:border-cyan-500/20"
        >
          <i className="fas fa-times text-sm"></i>
        </button>
      </div>
      
      <div className="p-6 overflow-y-auto font-mono text-[11px] text-cyan-50 leading-relaxed custom-scrollbar relative">
        <div className="absolute top-0 right-0 p-2 opacity-10 select-none pointer-events-none">
          <i className="fas fa-microchip text-4xl text-cyan-400"></i>
        </div>
        
        {data.type === 'code' || data.type === 'correction' ? (
          <div className="relative group">
            <div className="absolute -left-2 top-0 bottom-0 w-[1px] bg-cyan-500/30"></div>
            <pre className="whitespace-pre-wrap bg-black/60 p-4 rounded-lg border border-cyan-500/20 font-mono text-cyan-300 shadow-inner">
              <div className="flex justify-between items-center mb-2 pb-1 border-b border-cyan-500/10 text-[9px] text-cyan-500/50 uppercase">
                <span>Format: {data.type}</span>
                <i className="fas fa-terminal"></i>
              </div>
              <code>{data.content}</code>
            </pre>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="whitespace-pre-wrap text-justify drop-shadow-[0_0_1px_rgba(255,255,255,0.2)]">
              {data.content}
            </p>
            <div className="flex gap-2 pt-4 opacity-50">
               <div className="h-[1px] flex-1 bg-gradient-to-r from-cyan-500 to-transparent"></div>
               <div className="w-1 h-1 bg-cyan-500 rounded-full"></div>
            </div>
          </div>
        )}
      </div>

      <div className="bg-cyan-900/20 p-3 flex justify-between items-center border-t border-cyan-500/20">
        <div className="text-[8px] text-cyan-500/60 font-mono italic tracking-widest flex items-center gap-2">
          <i className="fas fa-shield-halved text-[10px]"></i>
          PROTOCOLE_STARK_SÉCURISÉ
        </div>
        <div className="flex gap-1">
          <div className="w-4 h-1 bg-cyan-500/40 rounded-full"></div>
          <div className="w-2 h-1 bg-cyan-500/20 rounded-full"></div>
        </div>
      </div>
      
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(0, 229, 255, 0.05); }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(0, 229, 255, 0.2); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(0, 229, 255, 0.4); }
      `}</style>
    </div>
  );
};

export default DataDisplay;