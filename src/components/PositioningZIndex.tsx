import React, { useState } from 'react';
import { Z_INDEX_SCALE, POSITIONS, OVERFLOWS } from '../data';
import { Layers, Copy, Check } from 'lucide-react';

export default function PositioningZIndex() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [activeZIndex, setActiveZIndex] = useState<string>('z-20');

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(text);
    setTimeout(() => setCopiedKey(null), 1500);
  };

  return (
    <section id="positioning-zindex" className="scroll-mt-24 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <Layers className="h-5 w-5 text-indigo-400" />
          <h2 className="text-lg font-bold text-white">۱۸ تا ۲۰. مدیریت لایه‌ها، موقعیت و سرریز (Z-Index, Position & Overflow)</h2>
        </div>
        <span className="text-xs text-slate-400 shrink-0">بررسی ویژگی‌های چیدمان سه‌بعدی و شناورسازی</span>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Z-Index scale - Section 18 */}
        <div className="glass-panel rounded-2xl p-5 space-y-4 flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-bold text-indigo-400">۱۸. ارتفاع لایه‌گذاری (Z-Index)</h3>
            <p className="text-[11px] text-slate-400 leading-5 mt-1.5">
              ترتیب قرارگیری سه بعدی المان‌ها روی هم. با کلیک بر روی هر دکمه، ارتفاع کارت زرد رنگ را تغییر دهید.
            </p>
          </div>

          {/* Interactive Stack Visualizer */}
          <div className="relative h-44 bg-slate-950/40 rounded-xl p-4 flex items-center justify-center overflow-hidden">
            {/* Base Red Card (Z-10) */}
            <div className="absolute top-10 left-10 h-20 w-32 rounded-lg bg-rose-500/80 border border-rose-400 shadow-xl flex items-center justify-center text-[10px] font-bold text-white z-10 select-none">
              کارت قرمز (z-10)
            </div>

            {/* Interactive Yellow Card (Dynamic Z-Index) */}
            <div 
              className={`absolute top-14 left-16 h-20 w-32 rounded-lg bg-amber-500 border border-amber-400 shadow-2xl flex flex-col items-center justify-center text-[10px] font-bold text-slate-950 transition-all select-none`}
              style={{ 
                zIndex: activeZIndex === 'z-auto' ? 'auto' : parseInt(activeZIndex.replace('z-', '')) 
              }}
            >
              <span>کارت زرد (تعاملی)</span>
              <span className="font-mono text-[9px] mt-1 bg-white/40 px-1 rounded font-bold">{activeZIndex}</span>
            </div>

            {/* Base Blue Card (Z-30) */}
            <div className="absolute top-18 left-22 h-20 w-32 rounded-lg bg-cyan-500/80 border border-cyan-400 shadow-xl flex items-center justify-center text-[10px] font-bold text-slate-950 z-30 select-none">
              کارت آبی (z-30)
            </div>
          </div>

          {/* Selection Scale grid */}
          <div className="grid grid-cols-4 gap-1">
            {Z_INDEX_SCALE.map((z) => {
              const isActive = activeZIndex === z.name;
              return (
                <button
                  key={z.name}
                  onClick={() => setActiveZIndex(z.name)}
                  className={`rounded p-1 font-mono text-[10px] text-center border transition-all ${
                    isActive ? 'bg-indigo-500 text-white font-bold border-indigo-400' : 'bg-slate-950/20 border-white/5 text-slate-400 hover:text-white'
                  }`}
                  title={z.desc}
                >
                  {z.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Positions - Section 19 */}
        <div className="glass-panel rounded-2xl p-5 space-y-4">
          <h3 className="text-sm font-bold text-indigo-400">۱۹. روش‌های موقعیت‌دهی (Position)</h3>
          
          <div className="space-y-3">
            {POSITIONS.map((pos) => {
              const isCopied = copiedKey === pos.name;
              return (
                <div key={pos.name} className="p-3 rounded-xl bg-slate-950/20 border border-white/5 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-cyan-400 bg-cyan-500/10 rounded px-2 py-0.5">
                      {pos.name}
                    </span>
                    <button onClick={() => handleCopy(pos.name)} className="text-slate-500 hover:text-white">
                      {isCopied ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
                    </button>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-5">{pos.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Overflow - Section 20 */}
        <div className="glass-panel rounded-2xl p-5 space-y-4">
          <h3 className="text-sm font-bold text-indigo-400">۲۰. کنترل سرریز محتوا (Overflow)</h3>
          
          <div className="space-y-3">
            {OVERFLOWS.map((over) => {
              const isCopied = copiedKey === over.name;
              return (
                <div key={over.name} className="p-3 rounded-xl bg-slate-950/20 border border-white/5 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-emerald-400 bg-emerald-500/10 rounded px-2 py-0.5">
                      {over.name}
                    </span>
                    <button onClick={() => handleCopy(over.name)} className="text-slate-500 hover:text-white">
                      {isCopied ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
                    </button>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-5">{over.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
