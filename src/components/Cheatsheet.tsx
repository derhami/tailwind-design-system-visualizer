import React, { useState } from 'react';
import { CHEATSHEETS } from '../data';
import { Copy, Check, Info, Map, Sparkles } from 'lucide-react';

interface CheatsheetProps {
  currentBreakpoint: string;
  currentWidth: number;
}

export default function Cheatsheet({ currentBreakpoint, currentWidth }: CheatsheetProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (code: string, index: number) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1500);
  };

  // Section 22: Calculated Design Tokens
  let containerWidth = '100%';
  if (currentWidth >= 1536) containerWidth = '1536px';
  else if (currentWidth >= 1280) containerWidth = '1280px';
  else if (currentWidth >= 1024) containerWidth = '1024px';
  else if (currentWidth >= 768) containerWidth = '768px';
  else if (currentWidth >= 640) containerWidth = '640px';

  const paddingVal = currentWidth >= 1536 ? '48px (3rem)' : currentWidth >= 1280 ? '40px (2.5rem)' : currentWidth >= 1024 ? '32px (2rem)' : currentWidth >= 768 ? '32px (2rem)' : currentWidth >= 640 ? '24px (1.5rem)' : '16px (1rem)';
  const marginVal = currentWidth >= 1536 ? `${(currentWidth - 1536) / 2}px` : currentWidth >= 1280 ? `${(currentWidth - 1280) / 2}px` : currentWidth >= 1024 ? `${(currentWidth - 1024) / 2}px` : currentWidth >= 768 ? `${(currentWidth - 768) / 2}px` : currentWidth >= 640 ? `${(currentWidth - 640) / 2}px` : '0px';
  const columnsVal = currentWidth >= 1024 ? '12 ستون' : currentWidth >= 768 ? '8 ستون' : currentWidth >= 640 ? '6 ستون' : '4 ستون';
  const gapVal = currentWidth >= 1536 ? '32px (2rem)' : currentWidth >= 1280 ? '24px (1.5rem)' : currentWidth >= 1024 ? '24px (1.5rem)' : currentWidth >= 768 ? '20px (1.25rem)' : currentWidth >= 640 ? '20px (1.25rem)' : '16px (1rem)';

  return (
    <section id="cheatsheet" className="scroll-mt-24 space-y-6">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        
        {/* Section 21: Common combinations cheatsheet */}
        <div className="xl:col-span-2 glass-panel rounded-2xl p-5 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/5 pb-2">
            <div className="flex items-center gap-2">
              <Info className="h-5 w-5 text-indigo-400" />
              <h3 className="text-sm font-bold text-white">۲۱. تقلب‌نامه الگوهای واکنش‌گرای پرکاربرد (Cheatsheet)</h3>
            </div>
            <span className="text-[10px] text-slate-500 shrink-0">الگوهای استاندارد طراحی مدرن</span>
          </div>

          <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
            {CHEATSHEETS.map((item, index) => {
              const isCopied = copiedIndex === index;
              return (
                <div 
                  key={index}
                  className="p-4 rounded-xl bg-slate-950/20 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1 flex-1">
                    <span className="text-xs font-bold text-slate-300 block">{item.title}</span>
                    <p className="text-[11px] text-slate-400 leading-5">{item.explanation}</p>
                    
                    {/* Live Preview block */}
                    <div className="mt-3 p-3 rounded bg-slate-950/40 border border-white/5 text-xs">
                      <span className="text-[10px] text-slate-500 block mb-1">پیش‌نمایش زنده:</span>
                      
                      {item.title === 'پدینگ واکنش‌گرا' && (
                        <div className="bg-indigo-500/10 border border-indigo-500/20 rounded inline-block text-[11px] text-indigo-300 py-1" style={{ paddingLeft: currentWidth >= 768 ? '2rem' : '1rem', paddingRight: currentWidth >= 768 ? '2rem' : '1rem' }}>
                          اندازه پدینگ متغیر است
                        </div>
                      )}

                      {item.title === 'اندازه فونت واکنش‌گرا' && (
                        <div className="text-white font-bold" style={{ fontSize: currentWidth >= 768 ? '1.875rem' : '1.125rem' }}>
                          متن من واکنش‌گراست
                        </div>
                      )}

                      {item.title === 'گرید ستونی واکنش‌گرا' && (
                        <div className="grid gap-2" style={{ gridTemplateColumns: currentWidth >= 1024 ? 'repeat(4, minmax(0, 1fr))' : currentWidth >= 768 ? 'repeat(2, minmax(0, 1fr))' : '1fr' }}>
                          <div className="bg-slate-900 border border-white/5 p-1 text-center rounded text-[10px]">C1</div>
                          <div className="bg-slate-900 border border-white/5 p-1 text-center rounded text-[10px]">C2</div>
                          {(currentWidth >= 768) && <div className="bg-slate-900 border border-white/5 p-1 text-center rounded text-[10px]">C3</div>}
                          {(currentWidth >= 1024) && <div className="bg-slate-900 border border-white/5 p-1 text-center rounded text-[10px]">C4</div>}
                        </div>
                      )}

                      {item.title === 'نمایش انتخابی کامپوننت' && (
                        <div className="text-[11px]">
                          {currentWidth >= 1024 ? (
                            <span className="text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/20 rounded px-2 py-0.5">در دسکتاپ نمایش داده می‌شود (بلاک است)</span>
                          ) : (
                            <span className="text-rose-400 font-bold bg-rose-500/10 border border-rose-500/20 rounded px-2 py-0.5">در موبایل مخفی است (hidden)</span>
                          )}
                        </div>
                      )}

                      {item.title === 'فلکس واکنش‌گرا' && (
                        <div className={`flex gap-2 ${currentWidth >= 768 ? 'flex-row' : 'flex-col'}`}>
                          <div className="bg-slate-900 border border-white/5 px-2 py-1 rounded text-[10px]">المان اول</div>
                          <div className="bg-slate-900 border border-white/5 px-2 py-1 rounded text-[10px]">المان دوم</div>
                        </div>
                      )}

                      {item.title === 'فاصله پویا بین المان‌ها' && (
                        <div className="flex bg-slate-900/40 p-1.5 rounded" style={{ gap: currentWidth >= 768 ? '2rem' : '1rem' }}>
                          <div className="bg-slate-800 h-6 w-12 rounded"></div>
                          <div className="bg-slate-800 h-6 w-12 rounded"></div>
                        </div>
                      )}

                      {item.title === 'کارت پرمیوم برجسته' && (
                        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-3 shadow-xl hover:shadow-2xl transition-all duration-300">
                          <span className="text-white text-[10px] font-bold">کارت لوکس آزمایشی</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="shrink-0 flex items-center justify-end">
                    <button 
                      onClick={() => handleCopy(item.code, index)}
                      className="flex items-center gap-1.5 rounded-lg bg-slate-950 border border-white/5 hover:border-white/15 px-3 py-1.5 text-xs text-indigo-300 font-mono"
                    >
                      {isCopied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                      <span>{item.code}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 22: Design Tokens */}
        <div id="design-tokens" className="glass-panel rounded-2xl p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 border-b border-white/5 pb-2 mb-4">
              <Map className="h-5 w-5 text-indigo-400" />
              <h3 className="text-sm font-bold text-white">۲۲. توکن‌های کلی طراحی سیستم (Tokens)</h3>
            </div>
            <p className="text-[11px] text-slate-400 leading-5">
              مقادیر کلی و مشخصات استخراج شده از عرض نمایشی و شبیه‌سازی شده که در پروژه‌ها به کار می‌روند.
            </p>
          </div>

          <div className="space-y-3 mt-4 flex-1 flex flex-col justify-center">
            {[
              { label: 'نقطه شکست اکتیو', val: currentBreakpoint, color: 'text-indigo-400 uppercase' },
              { label: 'عرض مانیتور (Viewport)', val: `${Math.round(currentWidth)}px`, color: 'text-white' },
              { label: 'عرض محفظه (Container)', val: containerWidth, color: 'text-emerald-400' },
              { label: 'فاصله داخلی کانتینر', val: paddingVal, color: 'text-rose-400' },
              { label: 'مارجین‌های کناری', val: marginVal, color: 'text-amber-400' },
              { label: 'تعداد ستون‌های گرید', val: columnsVal, color: 'text-white' },
              { label: 'فاصله مابین (Gutter)', val: gapVal, color: 'text-cyan-400' },
              { label: 'مقیاس فاصله‌گذاری', val: '۳۴ مقدار استاندارد', color: 'text-slate-400' },
              { label: 'مقیاس تایپوگرافی', val: '۱۳ سایز پیش‌فرض رِم', color: 'text-slate-400' }
            ].map((token, i) => (
              <div key={i} className="flex items-center justify-between p-2 rounded bg-slate-950/30 border border-white/[0.02]">
                <span className="text-[11px] text-slate-400">{token.label}</span>
                <span className={`text-xs font-bold font-mono ${token.color}`}>{token.val}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
