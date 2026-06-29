import React, { useState } from 'react';
import { TYPOGRAPHY_SCALE, FONT_WEIGHTS, LETTER_SPACING, LINE_HEIGHTS } from '../data';
import { Type, Copy, Check, Sparkles } from 'lucide-react';

export default function TypographySection() {
  const [activeTab, setActiveTab] = useState<'sizes' | 'weights' | 'spacing' | 'heights'>('sizes');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(text);
    setTimeout(() => setCopiedKey(null), 1500);
  };

  return (
    <section id="typography" className="scroll-mt-24 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-800/60 pb-4">
        <div className="flex items-center gap-2">
          <Type className="h-5 w-5 text-cyan-400" />
          <h2 className="text-lg font-bold text-white">۴ تا ۷. ابزارهای تایپوگرافی (Typography System)</h2>
        </div>
        
        {/* Sub-tabs selectors */}
        <div className="flex items-center gap-1 bg-zinc-950 border border-zinc-800/80 rounded-xl p-1 max-w-full overflow-x-auto shrink-0">
          <button
            onClick={() => setActiveTab('sizes')}
            className={`rounded-lg px-3 py-1 text-xs font-semibold transition-all ${
              activeTab === 'sizes' ? 'bg-cyan-500 text-zinc-950 font-bold shadow-lg shadow-cyan-500/10' : 'text-zinc-400 hover:text-white'
            }`}
          >
            اندازه (Sizes)
          </button>
          <button
            onClick={() => setActiveTab('weights')}
            className={`rounded-lg px-3 py-1 text-xs font-semibold transition-all ${
              activeTab === 'weights' ? 'bg-cyan-500 text-zinc-950 font-bold shadow-lg shadow-cyan-500/10' : 'text-zinc-400 hover:text-white'
            }`}
          >
            ضخامت (Weights)
          </button>
          <button
            onClick={() => setActiveTab('spacing')}
            className={`rounded-lg px-3 py-1 text-xs font-semibold transition-all ${
              activeTab === 'spacing' ? 'bg-cyan-500 text-zinc-950 font-bold shadow-lg shadow-cyan-500/10' : 'text-zinc-400 hover:text-white'
            }`}
          >
            فاصله‌حروف (Tracking)
          </button>
          <button
            onClick={() => setActiveTab('heights')}
            className={`rounded-lg px-3 py-1 text-xs font-semibold transition-all ${
              activeTab === 'heights' ? 'bg-cyan-500 text-zinc-950 font-bold shadow-lg shadow-cyan-500/10' : 'text-zinc-400 hover:text-white'
            }`}
          >
            ارتفاع‌خط (Leading)
          </button>
        </div>
      </div>

      {/* Font Size tab */}
      {activeTab === 'sizes' && (
        <div className="glass-panel rounded-2xl p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-cyan-400">۴. اندازه فونت تیل‌وند (Font Sizes)</h3>
            <span className="text-[11px] text-zinc-500">مبنای رِم (rem) متناسب با اندازه ۱۶پیکسل روت</span>
          </div>
          
          <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
            {TYPOGRAPHY_SCALE.map((typo) => {
              const isCopied = copiedKey === typo.name;
              return (
                <div 
                  key={typo.name}
                  className="group relative p-4 rounded-xl hover:bg-zinc-850/30 border border-transparent hover:border-zinc-800/60 transition-all flex flex-col md:flex-row justify-between gap-4"
                >
                  <div className="space-y-1.5 w-64 shrink-0">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-cyan-400 bg-cyan-500/10 rounded px-2 py-0.5">
                        {typo.name}
                      </span>
                      <button
                        onClick={() => handleCopy(typo.name)}
                        className="text-zinc-500 hover:text-white transition-colors"
                        title="کپی کلاس"
                      >
                        {isCopied ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                      </button>
                    </div>
                    <div className="text-xs text-zinc-400">
                      پیکسل: <strong className="text-white">{typo.px}px</strong> / اندازه: <span className="font-mono">{typo.size}</span>
                    </div>
                    <div className="text-[10px] text-zinc-500">
                      ارتفاع خط پیش‌فرض: {typo.lh}
                    </div>
                  </div>

                  <div className="flex-1 overflow-hidden">
                    <p 
                      className="text-right truncate font-medium text-zinc-100"
                      style={{ fontSize: typo.size }}
                    >
                      {typo.preview}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Font Weight tab */}
      {activeTab === 'weights' && (
        <div className="glass-panel rounded-2xl p-6 space-y-4">
          <h3 className="text-sm font-bold text-cyan-400 mb-4">۵. ضخامت فونت‌ها (Font Weights)</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {FONT_WEIGHTS.map((fw) => {
              const isCopied = copiedKey === fw.name;
              return (
                <div 
                  key={fw.name}
                  className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800/60 hover:border-zinc-700/80 hover:bg-zinc-950/80 transition-all flex items-center justify-between"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-cyan-400 bg-cyan-500/10 rounded px-2 py-0.5">
                        {fw.name}
                      </span>
                      <button
                        onClick={() => handleCopy(fw.name)}
                        className="text-zinc-500 hover:text-white transition-colors"
                      >
                        {isCopied ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
                      </button>
                    </div>
                    <div className="text-[11px] text-zinc-400">
                      مقدار عددی: <strong className="text-white font-mono">{fw.weight}</strong>
                    </div>
                  </div>

                  <div className="text-left font-sans">
                    <span 
                      className="text-base text-zinc-100"
                      style={{ fontWeight: fw.weight }}
                    >
                      {fw.text}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Letter Spacing tab */}
      {activeTab === 'spacing' && (
        <div className="glass-panel rounded-2xl p-6 space-y-4">
          <h3 className="text-sm font-bold text-cyan-400 mb-4">۶. فاصله بین حروف (Letter Spacing)</h3>
          
          <div className="space-y-4">
            {LETTER_SPACING.map((ls) => {
              const isCopied = copiedKey === ls.name;
              return (
                <div 
                  key={ls.name}
                  className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800/60 hover:bg-zinc-950/80 hover:border-zinc-700/80 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="w-full sm:w-64 shrink-0 space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-cyan-400 bg-cyan-500/10 rounded px-2 py-0.5">
                        {ls.name}
                      </span>
                      <button onClick={() => handleCopy(ls.name)} className="text-zinc-500 hover:text-white">
                        {isCopied ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
                      </button>
                    </div>
                    <div className="text-[11px] text-zinc-400">
                      مقدار ام (em): <strong className="text-white font-mono">{ls.val}</strong>
                    </div>
                    <div className="text-[10px] text-zinc-500">{ls.desc}</div>
                  </div>

                  <div className="flex-1 text-left">
                    <span 
                      className="text-base text-white tracking-widest font-mono font-medium block uppercase"
                      style={{ letterSpacing: ls.val }}
                    >
                      TAILWIND SYSTEM
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Line Heights tab */}
      {activeTab === 'heights' && (
        <div className="glass-panel rounded-2xl p-6 space-y-4">
          <h3 className="text-sm font-bold text-cyan-400 mb-4">۷. ارتفاع خطوط (Line Heights)</h3>
          
          <div className="space-y-4">
            {LINE_HEIGHTS.map((lh) => {
              const isCopied = copiedKey === lh.name;
              return (
                <div 
                  key={lh.name}
                  className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800/60 hover:bg-zinc-950/80 hover:border-zinc-700/80 transition-all flex flex-col xl:flex-row justify-between gap-4"
                >
                  <div className="w-full xl:w-80 shrink-0 space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-emerald-400 bg-emerald-500/10 rounded px-2 py-0.5">
                        {lh.name}
                      </span>
                      <button onClick={() => handleCopy(lh.name)} className="text-zinc-500 hover:text-white">
                        {isCopied ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
                      </button>
                    </div>
                    <div className="text-xs text-zinc-400">
                      ضریب ارتفاع: <strong className="text-white font-mono">{lh.val}</strong>
                    </div>
                    <div className="text-[11px] text-zinc-500 leading-5">{lh.desc}</div>
                  </div>

                  <div className="flex-1 bg-zinc-950/60 p-3 rounded-lg border border-zinc-800/40">
                    <p 
                      className="text-xs text-zinc-200"
                      style={{ lineHeight: lh.val }}
                    >
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز است.
                    </p>
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
