import React, { useState } from 'react';
import { WIDTH_UTILITIES, MAX_WIDTH_UTILITIES, HEIGHT_UTILITIES } from '../data';
import { Layout, Copy, Check } from 'lucide-react';

export default function LayoutUtilities() {
  const [activeTab, setActiveTab] = useState<'width' | 'max-width' | 'height'>('width');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(text);
    setTimeout(() => setCopiedKey(null), 1500);
  };

  return (
    <section id="layout-utils" className="scroll-mt-24 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <Layout className="h-5 w-5 text-indigo-400" />
          <h2 className="text-lg font-bold text-white">۱۲ تا ۱۴. ابزار اندازه‌گیری و چیدمان (Sizing Utilities)</h2>
        </div>

        {/* Action Tabs */}
        <div className="flex items-center gap-1 bg-slate-950/60 border border-white/5 rounded-xl p-1 max-w-full overflow-x-auto shrink-0">
          <button
            onClick={() => setActiveTab('width')}
            className={`rounded-lg px-3 py-1 text-xs font-semibold transition-all ${
              activeTab === 'width' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            عرض (Width)
          </button>
          <button
            onClick={() => setActiveTab('max-width')}
            className={`rounded-lg px-3 py-1 text-xs font-semibold transition-all ${
              activeTab === 'max-width' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            حداکثر عرض (Max Width)
          </button>
          <button
            onClick={() => setActiveTab('height')}
            className={`rounded-lg px-3 py-1 text-xs font-semibold transition-all ${
              activeTab === 'height' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            ارتفاع (Height)
          </button>
        </div>
      </div>

      {/* Width Utilities Tab */}
      {activeTab === 'width' && (
        <div className="glass-panel rounded-2xl p-6 space-y-4">
          <h3 className="text-sm font-bold text-indigo-400">۱۲. کلاس‌های پرکاربرد عرض (Width Utilities)</h3>
          
          <div className="space-y-4">
            {WIDTH_UTILITIES.map((w) => {
              const isCopied = copiedKey === w.name;
              return (
                <div 
                  key={w.name}
                  className="p-4 rounded-xl bg-slate-950/20 border border-white/5 hover:bg-white/[0.02] transition-all flex flex-col xl:flex-row items-stretch xl:items-center justify-between gap-4"
                >
                  <div className="w-full xl:w-80 shrink-0 space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-cyan-400 bg-cyan-500/10 rounded px-2 py-0.5">
                        {w.name}
                      </span>
                      <button onClick={() => handleCopy(w.name)} className="text-slate-500 hover:text-white">
                        {isCopied ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
                      </button>
                    </div>
                    <div className="text-xs text-slate-400 font-mono">
                      CSS: <span className="text-indigo-300">{w.val}</span>
                    </div>
                    <div className="text-[11px] text-slate-500">{w.desc}</div>
                  </div>

                  {/* Horizontal preview element */}
                  <div className="flex-1 bg-slate-950/40 rounded-xl p-3 flex items-center min-h-[50px]">
                    <div 
                      className={`bg-gradient-to-r from-cyan-500 to-indigo-600 h-6 rounded-md flex items-center justify-center text-[10px] font-bold text-slate-950 px-2 transition-all duration-300 truncate`}
                      style={{ width: w.name === 'w-auto' || w.name === 'w-fit' || w.name === 'w-max' || w.name === 'w-min' ? '120px' : w.name === 'w-screen' ? '70%' : '100%' }}
                    >
                      {w.name}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Max Width Utilities Tab */}
      {activeTab === 'max-width' && (
        <div className="glass-panel rounded-2xl p-6 space-y-4">
          <h3 className="text-sm font-bold text-indigo-400">۱۳. حداکثر عرض مجاز (Max-Width Scales)</h3>
          
          <div className="space-y-4">
            {MAX_WIDTH_UTILITIES.map((mw) => {
              const isCopied = copiedKey === mw.name;
              return (
                <div 
                  key={mw.name}
                  className="p-4 rounded-xl bg-slate-950/20 border border-white/5 hover:bg-white/[0.02] transition-all flex flex-col xl:flex-row items-stretch xl:items-center justify-between gap-4"
                >
                  <div className="w-full xl:w-80 shrink-0 space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-indigo-400 bg-indigo-500/10 rounded px-2 py-0.5">
                        {mw.name}
                      </span>
                      <button onClick={() => handleCopy(mw.name)} className="text-slate-500 hover:text-white">
                        {isCopied ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
                      </button>
                    </div>
                    <div className="text-xs text-slate-400 font-mono">
                      مقدار: <span className="text-indigo-300">{mw.val}</span>
                    </div>
                    <div className="text-[11px] text-slate-500">{mw.desc}</div>
                  </div>

                  {/* Horizontal container showing max width visually */}
                  <div className="flex-1 bg-slate-950/40 rounded-xl p-3">
                    <div className="w-full bg-slate-900 border border-white/5 rounded-lg h-6 overflow-hidden flex items-center">
                      <div 
                        className="bg-gradient-to-r from-indigo-500 to-purple-600 h-full flex items-center justify-center text-[10px] text-white font-bold px-2 rounded-r"
                        style={{ 
                          width: mw.name === 'max-w-xs' ? '25%' 
                            : mw.name === 'max-w-sm' ? '30%' 
                            : mw.name === 'max-w-md' ? '35%' 
                            : mw.name === 'max-w-lg' ? '40%' 
                            : mw.name === 'max-w-xl' ? '45%' 
                            : mw.name === 'max-w-2xl' ? '55%' 
                            : mw.name === 'max-w-3xl' ? '65%' 
                            : mw.name === 'max-w-4xl' ? '75%' 
                            : mw.name === 'max-w-5xl' ? '80%' 
                            : mw.name === 'max-w-6xl' ? '85%' 
                            : mw.name === 'max-w-7xl' ? '92%' 
                            : '100%' 
                        }}
                      >
                        {mw.name}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Height Utilities Tab */}
      {activeTab === 'height' && (
        <div className="glass-panel rounded-2xl p-6 space-y-4">
          <h3 className="text-sm font-bold text-indigo-400">۱۴. ابزارهای سنجش ارتفاع (Height Utilities)</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {HEIGHT_UTILITIES.map((h) => {
              const isCopied = copiedKey === h.name;
              return (
                <div 
                  key={h.name}
                  className="p-4 rounded-xl bg-slate-950/20 border border-white/5 hover:border-white/10 transition-all flex items-center justify-between"
                >
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-emerald-400 bg-emerald-500/10 rounded px-2 py-0.5">
                        {h.name}
                      </span>
                      <button onClick={() => handleCopy(h.name)} className="text-slate-500 hover:text-white">
                        {isCopied ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
                      </button>
                    </div>
                    <div className="text-xs text-slate-400 font-mono">
                      CSS: <span className="text-indigo-300">{h.val}</span>
                    </div>
                    <div className="text-[11px] text-slate-500 leading-5">{h.desc}</div>
                  </div>

                  {/* Vertical mini height bar preview */}
                  <div className="h-20 w-8 bg-slate-950 rounded-lg p-0.5 flex flex-col justify-end overflow-hidden shrink-0 border border-white/5">
                    <div 
                      className="bg-gradient-to-t from-emerald-500 to-teal-400 w-full rounded"
                      style={{ height: h.name === 'max-h-screen' ? '65%' : h.name === 'min-h-screen' ? '85%' : '100%' }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
