import React from 'react';
import { CONTAINER_SPECS } from '../data';
import { Eye, HelpCircle } from 'lucide-react';

interface ContainerVisualizerProps {
  currentWidth: number;
  currentBreakpoint: string;
}

export default function ContainerVisualizer({ currentWidth, currentBreakpoint }: ContainerVisualizerProps) {
  // Calculate simulated specs based on simulated currentWidth
  const currentSpec = CONTAINER_SPECS.find(spec => {
    if (spec.bp === 'sm' && currentWidth >= 640 && currentWidth < 768) return true;
    if (spec.bp === 'md' && currentWidth >= 768 && currentWidth < 1024) return true;
    if (spec.bp === 'lg' && currentWidth >= 1024 && currentWidth < 1280) return true;
    if (spec.bp === 'xl' && currentWidth >= 1280 && currentWidth < 1536) return true;
    if (spec.bp === '2xl' && currentWidth >= 1536) return true;
    return false;
  }) || { bp: 'base', width: '100%', padding: '16px (1rem)', cols: 4, gutter: '16px (1rem)' };

  // Calculate container width
  let containerMaxWidth = currentWidth;
  if (currentWidth >= 1536) containerMaxWidth = 1536;
  else if (currentWidth >= 1280) containerMaxWidth = 1280;
  else if (currentWidth >= 1024) containerMaxWidth = 1024;
  else if (currentWidth >= 768) containerMaxWidth = 768;
  else if (currentWidth >= 640) containerMaxWidth = 640;
  else containerMaxWidth = currentWidth;

  const paddingVal = currentWidth >= 1536 ? 48 : currentWidth >= 1280 ? 40 : currentWidth >= 1024 ? 32 : currentWidth >= 768 ? 32 : currentWidth >= 640 ? 24 : 16;
  const contentWidth = containerMaxWidth - (paddingVal * 2);
  const outerMargin = Math.max((currentWidth - containerMaxWidth) / 2, 0);

  return (
    <section id="container" className="scroll-mt-24 space-y-6">
      <div className="flex items-center justify-between border-b border-zinc-800/60 pb-4">
        <div className="flex items-center gap-2">
          <Eye className="h-5 w-5 text-cyan-400" />
          <h2 className="text-lg font-bold text-white">۲. کانتینر رسمی و رفتارهای ریسپانسیو (Container)</h2>
        </div>
        <span className="badge rounded-xl px-2.5 py-1 text-[11px] bg-cyan-500/10 text-cyan-300 border-cyan-500/20">رسمی</span>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        {/* Specifications List */}
        <div className="glass-panel rounded-2xl p-5 space-y-4">
          <h3 className="text-xs font-bold text-zinc-400 tracking-wider">مشخصات فنی کانتینر تیل‌وند</h3>
          <div className="space-y-3">
            {CONTAINER_SPECS.map((spec) => {
              const isActive = spec.bp === currentSpec.bp;
              return (
                <div 
                  key={spec.bp} 
                  className={`flex items-center justify-between p-3 rounded-xl transition-all border ${
                    isActive 
                      ? 'bg-cyan-500/15 border-cyan-500/50 text-cyan-200' 
                      : 'bg-zinc-950/40 border-zinc-800/60 text-zinc-400'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className={`flex h-6 w-6 items-center justify-center rounded-lg text-xs font-bold ${
                      isActive ? 'bg-cyan-500 text-zinc-950 font-bold' : 'bg-zinc-900 text-zinc-500'
                    }`}>
                      {spec.bp}
                    </span>
                    <span className="text-xs font-semibold">عرض کانتینر: {spec.width}</span>
                  </div>
                  <div className="text-right text-[10px] space-y-0.5 opacity-85">
                    <div>پدینگ: {spec.padding}</div>
                    <div>ستون‌ها: {spec.cols} ستون</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Live Metrics Display */}
        <div className="xl:col-span-2 glass-panel rounded-2xl p-5 flex flex-col justify-between space-y-4">
          <div>
            <h3 className="text-xs font-bold text-zinc-400 tracking-wider">اندازه‌گیری زنده کانتینر (Viewport: {Math.round(currentWidth)}px)</h3>
            <p className="mt-2 text-xs text-zinc-400 leading-6">
              در تیل‌وند، کانتینر به صورت پیش‌فرض کل عرض را می‌گیرد مگر اینکه از مدلاسیون‌های پاسخ‌گو استفاده شود. به فواصل بیرونی زرد (Margin) و فواصل داخلی قرمز (Padding) دقت کنید.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-zinc-950/60 border border-zinc-800/60 rounded-xl p-3 text-center">
              <span className="text-[10px] text-zinc-400 block">حداکثر عرض کانتینر</span>
              <span className="text-sm font-bold text-emerald-400 block mt-1">{containerMaxWidth}px</span>
            </div>
            <div className="bg-zinc-950/60 border border-zinc-800/60 rounded-xl p-3 text-center">
              <span className="text-[10px] text-zinc-400 block">عرض خالص محتوا</span>
              <span className="text-sm font-bold text-cyan-400 block mt-1">{contentWidth > 0 ? contentWidth : 0}px</span>
            </div>
            <div className="bg-zinc-950/60 border border-zinc-800/60 rounded-xl p-3 text-center">
              <span className="text-[10px] text-zinc-400 block">حاشیه بیرونی (Margin)</span>
              <span className="text-sm font-bold text-amber-400 block mt-1">{Math.round(outerMargin)}px</span>
            </div>
            <div className="bg-zinc-950/60 border border-zinc-800/60 rounded-xl p-3 text-center">
              <span className="text-[10px] text-zinc-400 block">پدینگ داخلی (Padding)</span>
              <span className="text-sm font-bold text-rose-400 block mt-1">{paddingVal}px</span>
            </div>
          </div>
        </div>
      </div>

      {/* Embedded visual board matching user's exact draft requirement */}
      <div className="glass-panel rounded-2xl p-4 overflow-hidden relative min-h-[220px]">
        <div className="absolute top-2 right-2 text-[10px] text-zinc-500 font-mono">LIVE LAYOUT DIAGRAM</div>
        
        {/* Left Margin Visualization */}
        <div 
          className="absolute top-0 bottom-0 bg-amber-500/10 border-l border-dashed border-amber-500/30 flex items-center justify-center text-[10px] text-amber-500"
          style={{ right: 0, width: `${(outerMargin / currentWidth) * 100}%` }}
        >
          {outerMargin > 30 && <span>مارجین {Math.round(outerMargin)}px</span>}
        </div>

        {/* Right Margin Visualization */}
        <div 
          className="absolute top-0 bottom-0 bg-amber-500/10 border-r border-dashed border-amber-500/30 flex items-center justify-center text-[10px] text-amber-500"
          style={{ left: 0, width: `${(outerMargin / currentWidth) * 100}%` }}
        >
          {outerMargin > 30 && <span>مارجین {Math.round(outerMargin)}px</span>}
        </div>

        {/* Central Container Space */}
        <div 
          className="absolute top-0 bottom-0 bg-white/[0.02] border-x-2 border-emerald-500"
          style={{ 
            right: `${(outerMargin / currentWidth) * 100}%`, 
            left: `${(outerMargin / currentWidth) * 100}%` 
          }}
        >
          {/* Left Padding Shade */}
          <div 
            className="absolute top-0 bottom-0 bg-rose-500/10 border-l border-dashed border-rose-500/30 flex items-center justify-center text-[9px] text-rose-400"
            style={{ right: 0, width: `${(paddingVal / containerMaxWidth) * 100}%` }}
          >
            {paddingVal > 20 && <span>{paddingVal}px</span>}
          </div>

          {/* Right Padding Shade */}
          <div 
            className="absolute top-0 bottom-0 bg-rose-500/10 border-r border-dashed border-rose-500/30 flex items-center justify-center text-[9px] text-rose-400"
            style={{ left: 0, width: `${(paddingVal / containerMaxWidth) * 100}%` }}
          >
            {paddingVal > 20 && <span>{paddingVal}px</span>}
          </div>

          {/* Clean Columns Grid */}
          <div 
            className="absolute top-10 bottom-10 left-0 right-0 grid gap-3 px-1"
            style={{ 
              gridTemplateColumns: `repeat(${currentSpec.cols}, minmax(0, 1fr))`,
              marginRight: `${(paddingVal / containerMaxWidth) * 100}%`,
              marginLeft: `${(paddingVal / containerMaxWidth) * 100}%`
            }}
          >
            {Array.from({ length: currentSpec.cols }).map((_, i) => (
              <div key={i} className="rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-[10px] text-cyan-300 font-bold">
                C{i + 1}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
