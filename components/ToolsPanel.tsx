
import React from 'react';
import { TimerData } from '../types';

interface ToolsPanelProps {
  timers: TimerData[];
  onScreenShare: () => void;
  onFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isSharing: boolean;
}

const ToolsPanel: React.FC<ToolsPanelProps> = ({ timers, onScreenShare, onFileUpload, isSharing }) => {
  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-[200]">
      <div className="bg-cyan-950/30 backdrop-blur-lg p-3 rounded-2xl border border-cyan-500/20 flex flex-col gap-4 shadow-2xl">
        <button 
          onClick={onScreenShare}
          className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${isSharing ? 'bg-red-500/20 text-red-400 border-red-500/50 animate-pulse' : 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20 hover:bg-cyan-400 hover:text-black'}`}
          title="Partage d'écran"
        >
          <i className={`fas ${isSharing ? 'fa-stop' : 'fa-desktop'}`}></i>
        </button>
        
        <label className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center cursor-pointer border border-cyan-500/20 hover:bg-cyan-400 hover:text-black transition-all">
          <i className="fas fa-file-arrow-up"></i>
          <input 
            type="file" 
            className="hidden" 
            onChange={onFileUpload} 
            accept="image/*,application/pdf,.docx,.pptx"
          />
        </label>
      </div>

      {timers.length > 0 && (
        <div className="bg-cyan-950/40 p-3 rounded-xl border border-cyan-500/20 w-48 animate-in fade-in slide-in-from-right-4">
          <h3 className="text-[10px] text-cyan-400 font-bold uppercase mb-2">Processus Actifs</h3>
          {timers.map(t => (
            <div key={t.id} className="flex justify-between text-xs font-mono text-cyan-300">
              <span>{t.label}</span>
              <span>{Math.floor(t.remaining / 60)}:{(t.remaining % 60).toString().padStart(2, '0')}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ToolsPanel;
