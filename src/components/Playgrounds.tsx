import React, { useState } from 'react';
import { Code2, Settings, HelpCircle, Check, Copy } from 'lucide-react';

export default function Playgrounds({ currentWidth }: { currentWidth: number }) {
  const [activeTab, setActiveTab] = useState<'flex' | 'grid' | 'responsive'>('flex');
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 1500);
  };

  // --- Flex State ---
  const [flexDirection, setFlexDirection] = useState<'flex-row' | 'flex-row-reverse' | 'flex-col' | 'flex-col-reverse'>('flex-row');
  const [justifyContent, setJustifyContent] = useState<'justify-start' | 'justify-end' | 'justify-center' | 'justify-between' | 'justify-around' | 'justify-evenly'>('justify-start');
  const [alignItems, setAlignItems] = useState<'items-start' | 'items-end' | 'items-center' | 'items-baseline' | 'items-stretch'>('items-center');
  const [flexGap, setFlexGap] = useState<'gap-0' | 'gap-2' | 'gap-4' | 'gap-6' | 'gap-8'>('gap-4');
  
  // Child 1 settings
  const [childGrow, setChildGrow] = useState<'grow' | 'grow-0'>('grow-0');
  const [childShrink, setChildShrink] = useState<'shrink' | 'shrink-0'>('shrink');
  const [childBasis, setChildBasis] = useState<'basis-auto' | 'basis-1/4' | 'basis-1/2'>('basis-auto');

  // --- Grid State ---
  const [gridCols, setGridCols] = useState<number>(4);
  const [gridGap, setGridGap] = useState<'gap-0' | 'gap-2' | 'gap-4' | 'gap-6' | 'gap-8'>('gap-4');
  const [item1ColSpan, setItem1ColSpan] = useState<number>(1);
  const [item1RowSpan, setItem1RowSpan] = useState<number>(1);
  const [gridMode, setGridMode] = useState<'standard' | 'autofit' | 'autofill'>('standard');

  const flexCode = `flex ${flexDirection} ${justifyContent} ${alignItems} ${flexGap}`;
  const flexChild1Code = `${childGrow} ${childShrink} ${childBasis}`;

  const getGridCode = () => {
    if (gridMode === 'autofit') return `grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] ${gridGap}`;
    if (gridMode === 'autofill') return `grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] ${gridGap}`;
    return `grid grid-cols-${gridCols} ${gridGap}`;
  };

  const getGridItem1Code = () => {
    return `col-span-${item1ColSpan} row-span-${item1RowSpan}`;
  };

  return (
    <section id="playgrounds" className="scroll-mt-24 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <Code2 className="h-5 w-5 text-indigo-400" />
          <h2 className="text-lg font-bold text-white">۱۵ تا ۱۷. شهربازی تعاملی چیدمان (Layout Playgrounds)</h2>
        </div>

        {/* Action subtabs */}
        <div className="flex items-center gap-1 bg-slate-950/60 border border-white/5 rounded-xl p-1 max-w-full overflow-x-auto shrink-0">
          <button
            onClick={() => setActiveTab('flex')}
            className={`rounded-lg px-3.5 py-1 text-xs font-semibold transition-all ${
              activeTab === 'flex' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            فلکس‌باکس (Flex)
          </button>
          <button
            onClick={() => setActiveTab('grid')}
            className={`rounded-lg px-3.5 py-1 text-xs font-semibold transition-all ${
              activeTab === 'grid' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            گرید (Grid)
          </button>
          <button
            onClick={() => setActiveTab('responsive')}
            className={`rounded-lg px-3.5 py-1 text-xs font-semibold transition-all ${
              activeTab === 'responsive' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            ریسپانسیو (Responsive)
          </button>
        </div>
      </div>

      {/* 1. FLEX PLAYGROUND */}
      {activeTab === 'flex' && (
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Controls side */}
          <div className="glass-panel rounded-2xl p-5 space-y-5">
            <h3 className="text-xs font-bold text-slate-400 tracking-wider">تنظیمات تراز و ردیف فلکس</h3>
            
            {/* Flex Direction */}
            <div className="space-y-1.5">
              <label className="text-[11px] text-slate-400">جهت چینش (flex-direction)</label>
              <div className="grid grid-cols-2 gap-1.5">
                {(['flex-row', 'flex-row-reverse', 'flex-col', 'flex-col-reverse'] as const).map((dir) => (
                  <button
                    key={dir}
                    onClick={() => setFlexDirection(dir)}
                    className={`rounded-lg py-1.5 text-[10px] font-mono font-bold border transition-all ${
                      flexDirection === dir 
                        ? 'bg-indigo-500/10 border-indigo-500 text-indigo-300' 
                        : 'bg-slate-950/20 border-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    {dir}
                  </button>
                ))}
              </div>
            </div>

            {/* Justify Content */}
            <div className="space-y-1.5">
              <label className="text-[11px] text-slate-400">تراز اصلی (justify-content)</label>
              <div className="grid grid-cols-2 gap-1.5">
                {(['justify-start', 'justify-end', 'justify-center', 'justify-between', 'justify-around', 'justify-evenly'] as const).map((just) => (
                  <button
                    key={just}
                    onClick={() => setJustifyContent(just)}
                    className={`rounded-lg py-1.5 text-[10px] font-mono border transition-all ${
                      justifyContent === just 
                        ? 'bg-indigo-500/10 border-indigo-500 text-indigo-300 font-bold' 
                        : 'bg-slate-950/20 border-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    {just}
                  </button>
                ))}
              </div>
            </div>

            {/* Align Items */}
            <div className="space-y-1.5">
              <label className="text-[11px] text-slate-400">تراز فرعی (align-items)</label>
              <div className="grid grid-cols-2 gap-1.5">
                {(['items-start', 'items-end', 'items-center', 'items-baseline', 'items-stretch'] as const).map((item) => (
                  <button
                    key={item}
                    onClick={() => setAlignItems(item)}
                    className={`rounded-lg py-1.5 text-[10px] font-mono border transition-all ${
                      alignItems === item 
                        ? 'bg-indigo-500/10 border-indigo-500 text-indigo-300 font-bold' 
                        : 'bg-slate-950/20 border-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Flex Gap */}
            <div className="space-y-1.5">
              <label className="text-[11px] text-slate-400">فاصله میانی (gap)</label>
              <div className="grid grid-cols-5 gap-1">
                {(['gap-0', 'gap-2', 'gap-4', 'gap-6', 'gap-8'] as const).map((g) => (
                  <button
                    key={g}
                    onClick={() => setFlexGap(g)}
                    className={`rounded-lg py-1.5 text-[10px] font-mono border transition-all ${
                      flexGap === g 
                        ? 'bg-indigo-500/10 border-indigo-500 text-indigo-300 font-bold' 
                        : 'bg-slate-950/20 border-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            <div className="h-px bg-white/10" />

            {/* Flex Item 1 Specific Control */}
            <div className="space-y-2">
              <h4 className="text-[11px] font-bold text-slate-400">تنظیمات اختصاصی آیتم ۱ (آبی)</h4>
              
              <div className="grid grid-cols-2 gap-2 text-[10px]">
                {/* Grow */}
                <div className="space-y-1">
                  <span className="text-slate-500">رشد (grow)</span>
                  <div className="flex gap-1">
                    {['grow', 'grow-0'].map((g) => (
                      <button
                        key={g}
                        onClick={() => setChildGrow(g as any)}
                        className={`flex-1 rounded p-1 border text-center font-mono ${
                          childGrow === g ? 'bg-cyan-500/10 border-cyan-500 text-cyan-300 font-bold' : 'bg-slate-950/20 border-white/5 text-slate-500'
                        }`}
                      >
                        {g}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Shrink */}
                <div className="space-y-1">
                  <span className="text-slate-500">انقباض (shrink)</span>
                  <div className="flex gap-1">
                    {['shrink', 'shrink-0'].map((s) => (
                      <button
                        key={s}
                        onClick={() => setChildShrink(s as any)}
                        className={`flex-1 rounded p-1 border text-center font-mono ${
                          childShrink === s ? 'bg-cyan-500/10 border-cyan-500 text-cyan-300 font-bold' : 'bg-slate-950/20 border-white/5 text-slate-500'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Basis */}
              <div className="space-y-1">
                <span className="text-[10px] text-slate-500 block">پایه حجم (flex-basis)</span>
                <div className="flex gap-1">
                  {['basis-auto', 'basis-1/4', 'basis-1/2'].map((b) => (
                    <button
                      key={b}
                      onClick={() => setChildBasis(b as any)}
                      className={`flex-1 rounded p-1 border text-center font-mono text-[10px] ${
                        childBasis === b ? 'bg-cyan-500/10 border-cyan-500 text-cyan-300' : 'bg-slate-950/20 border-white/5 text-slate-500'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Visual Canvas side */}
          <div className="xl:col-span-2 flex flex-col justify-between glass-panel rounded-2xl p-5 min-h-[400px]">
            <div>
              <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-4">
                <span className="text-xs font-bold text-slate-400">صفحه زنده پیش‌نمایش فلکس</span>
                
                {/* Live copy class */}
                <button
                  onClick={() => handleCopy(flexCode)}
                  className="flex items-center gap-1.5 rounded-lg bg-slate-950 px-3 py-1 text-xs text-indigo-300 border border-white/5 hover:border-white/15"
                >
                  {copiedText === flexCode ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
                  <span className="font-mono">{flexCode}</span>
                </button>
              </div>

              {/* Flex Container Canvas */}
              <div 
                className={`bg-slate-950/40 border border-dashed border-white/10 rounded-xl p-4 min-h-[250px] flex ${flexDirection} ${justifyContent} ${alignItems} ${flexGap} max-w-full overflow-x-auto`}
              >
                {/* Item 1 - Custom parameters */}
                <div className={`rounded-lg bg-indigo-500/15 border-2 border-indigo-400 p-4 min-h-[60px] min-w-[60px] flex flex-col justify-center items-center text-center ${childGrow} ${childShrink} ${childBasis}`}>
                  <span className="text-xs font-bold text-indigo-300">۱ (سفارشی)</span>
                  <span className="text-[8px] font-mono text-slate-400 mt-1 block leading-3">{flexChild1Code}</span>
                </div>

                <div className="rounded-lg bg-emerald-500/10 border border-emerald-500/20 p-4 h-16 w-16 flex items-center justify-center text-xs font-bold text-emerald-300">
                  ۲
                </div>

                <div className="rounded-lg bg-purple-500/10 border border-purple-500/20 p-4 h-12 w-12 flex items-center justify-center text-xs font-bold text-purple-300">
                  ۳
                </div>

                <div className="rounded-lg bg-amber-500/10 border border-amber-500/20 p-4 h-20 w-14 flex items-center justify-center text-xs font-bold text-amber-300">
                  ۴
                </div>
              </div>
            </div>

            <div className="text-[10px] text-slate-500 bg-slate-950/30 p-2.5 rounded-lg leading-5 mt-4">
              <strong>راهنما:</strong> در فلکس‌باکس، آیتم‌ها روی یک جهت اصلی (ردیف یا ستون) توزیع می‌شوند. با تغییر جهت، <code className="text-indigo-400 font-mono">justify-content</code> محور اصلی و <code className="text-indigo-400 font-mono">align-items</code> محور فرعی ترازدهی را کنترل می‌کنند.
            </div>
          </div>
        </div>
      )}

      {/* 2. GRID PLAYGROUND */}
      {activeTab === 'grid' && (
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Controls side */}
          <div className="glass-panel rounded-2xl p-5 space-y-5">
            <h3 className="text-xs font-bold text-slate-400 tracking-wider">تنظیمات ستون‌های گرید</h3>
            
            {/* Grid Modes */}
            <div className="space-y-1.5">
              <label className="text-[11px] text-slate-400">حالت چیدمان</label>
              <div className="grid grid-cols-3 gap-1">
                {[
                  { id: 'standard', name: 'استاندارد' },
                  { id: 'autofit', name: 'Auto Fit' },
                  { id: 'autofill', name: 'Auto Fill' }
                ].map((mode) => (
                  <button
                    key={mode.id}
                    onClick={() => setGridMode(mode.id as any)}
                    className={`rounded-lg py-1.5 text-[10px] font-semibold border transition-all ${
                      gridMode === mode.id 
                        ? 'bg-indigo-500/10 border-indigo-500 text-indigo-300' 
                        : 'bg-slate-950/20 border-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    {mode.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Columns Slider (Only visible in standard mode) */}
            {gridMode === 'standard' && (
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[11px] text-slate-400">
                  <span>تعداد ستون‌ها (grid-cols-*)</span>
                  <span className="font-mono text-indigo-300 font-bold">{gridCols} ستون</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="12" 
                  value={gridCols} 
                  onChange={(e) => setGridCols(parseInt(e.target.value))}
                  className="w-full accent-indigo-500"
                />
              </div>
            )}

            {/* Grid Gap */}
            <div className="space-y-1.5">
              <label className="text-[11px] text-slate-400">فاصله میانی (gap)</label>
              <div className="grid grid-cols-5 gap-1">
                {(['gap-0', 'gap-2', 'gap-4', 'gap-6', 'gap-8'] as const).map((g) => (
                  <button
                    key={g}
                    onClick={() => setGridGap(g)}
                    className={`rounded-lg py-1.5 text-[10px] font-mono border transition-all ${
                      gridGap === g 
                        ? 'bg-indigo-500/10 border-indigo-500 text-indigo-300' 
                        : 'bg-slate-950/20 border-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            <div className="h-px bg-white/10" />

            {/* Item 1 custom dimensions inside grid */}
            <div className="space-y-3">
              <h4 className="text-[11px] font-bold text-slate-400">تنظیمات ابعاد کارت ۱ (آبی)</h4>
              
              <div className="grid grid-cols-2 gap-2 text-[10px]">
                {/* Column Span */}
                <div className="space-y-1">
                  <span className="text-slate-500 block">عرض ستونی (span)</span>
                  <select 
                    value={item1ColSpan} 
                    onChange={(e) => setItem1ColSpan(parseInt(e.target.value))}
                    className="w-full bg-slate-900 border border-white/5 rounded p-1 text-slate-300 font-mono"
                  >
                    {[1, 2, 3, 4, 5, 6].map(n => <option key={n} value={n}>col-span-{n}</option>)}
                  </select>
                </div>

                {/* Row Span */}
                <div className="space-y-1">
                  <span className="text-slate-500 block">ارتفاع ردیفی (span)</span>
                  <select 
                    value={item1RowSpan} 
                    onChange={(e) => setItem1RowSpan(parseInt(e.target.value))}
                    className="w-full bg-slate-900 border border-white/5 rounded p-1 text-slate-300 font-mono"
                  >
                    {[1, 2, 3].map(n => <option key={n} value={n}>row-span-{n}</option>)}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Canvas side */}
          <div className="xl:col-span-2 flex flex-col justify-between glass-panel rounded-2xl p-5 min-h-[400px]">
            <div>
              <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-4">
                <span className="text-xs font-bold text-slate-400">صفحه زنده پیش‌نمایش گرید دو بعدی</span>
                
                {/* Copy helper */}
                <button
                  onClick={() => handleCopy(getGridCode())}
                  className="flex items-center gap-1.5 rounded-lg bg-slate-950 px-3 py-1 text-xs text-indigo-300 border border-white/5 hover:border-white/15"
                >
                  {copiedText === getGridCode() ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
                  <span className="font-mono">{gridMode === 'standard' ? `grid grid-cols-${gridCols}` : 'grid auto-cols'}</span>
                </button>
              </div>

              {/* Dynamic Grid Element */}
               <div 
                className={`bg-slate-950/40 border border-dashed border-white/10 rounded-xl p-4 min-h-[250px] grid ${gridGap} max-w-full overflow-x-auto`}
                style={{ 
                  gridTemplateColumns: gridMode === 'autofit' ? 'repeat(auto-fit, minmax(120px, 1fr))' 
                    : gridMode === 'autofill' ? 'repeat(auto-fill, minmax(100px, 1fr))' 
                    : `repeat(${gridCols}, minmax(0, 1fr))`
                }}
              >
                {/* Card 1 with custom properties */}
                <div 
                  className="rounded-lg bg-indigo-500/15 border-2 border-indigo-400 p-4 flex flex-col items-center justify-center text-center text-xs font-bold text-indigo-300"
                  style={{ 
                    gridColumn: `span ${item1ColSpan} / span ${item1ColSpan}`,
                    gridRow: `span ${item1RowSpan} / span ${item1RowSpan}`
                  }}
                >
                  <div>کارت ۱ (سفارشی)</div>
                  <div className="text-[9px] font-mono text-slate-400 mt-1">{getGridItem1Code()}</div>
                </div>

                <div className="rounded-lg bg-emerald-500/10 border border-emerald-500/20 p-4 min-h-[60px] flex items-center justify-center text-xs font-bold text-emerald-300">کارت ۲</div>
                <div className="rounded-lg bg-purple-500/10 border border-purple-500/20 p-4 min-h-[60px] flex items-center justify-center text-xs font-bold text-purple-300">کارت ۳</div>
                <div className="rounded-lg bg-amber-500/10 border border-amber-500/20 p-4 min-h-[60px] flex items-center justify-center text-xs font-bold text-amber-300">کارت ۴</div>
                <div className="rounded-lg bg-cyan-500/10 border border-cyan-500/20 p-4 min-h-[60px] flex items-center justify-center text-xs font-bold text-cyan-300">کارت ۵</div>
                <div className="rounded-lg bg-rose-500/10 border border-rose-500/20 p-4 min-h-[60px] flex items-center justify-center text-xs font-bold text-rose-300">کارت ۶</div>
                <div className="rounded-lg bg-teal-500/10 border border-teal-500/20 p-4 min-h-[60px] flex items-center justify-center text-xs font-bold text-teal-300">کارت ۷</div>
              </div>
            </div>

            <div className="text-[10px] text-slate-500 bg-slate-950/30 p-2.5 rounded-lg leading-5 mt-4">
              <strong>راهنما:</strong> چیدمان شبکه (Grid) یک سیستم دو بعدی بسیار منعطف است. حالت‌های <code className="text-indigo-400 font-mono">auto-fit</code> و <code className="text-indigo-400 font-mono">auto-fill</code> به شما اجازه می‌دهند بدون کلاس‌های پیچیده، چیدمان‌هایی کاملا خودکار و پاسخگو بر اساس کوچک‌ترین عرض کارت‌ها ایجاد کنید.
            </div>
          </div>
        </div>
      )}

      {/* 3. RESPONSIVE PLAYGROUND */}
      {activeTab === 'responsive' && (
        <div className="glass-panel rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-white/5 pb-2">
            <h3 className="text-sm font-bold text-indigo-400">۱۷. شبیه‌ساز واکنش‌گرایی کلاس‌ها در تمام Breakpointها</h3>
            <span className="text-[11px] text-slate-400">هاور روی هر کارت به شما نشان می‌دهد چطور کلاس‌ها تغییر رفتار می‌دهند.</span>
          </div>

          <p className="text-xs text-slate-400 leading-6">
            کارت‌های زیر شامل کلاس‌های تغییر حالت هستند. با تغییر عرض مانیتور، حالت‌های فعال روشن و موارد غیرفعال خاموش می‌شوند. عرض فعلی نمایشی: <strong className="text-cyan-400">{Math.round(currentWidth)}px</strong>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-4">
            {/* Card 1: hidden on mobile, block on lg */}
            <div className="p-4 rounded-xl bg-slate-950/30 border border-white/5 relative overflow-hidden flex flex-col justify-between min-h-[140px]">
              <div>
                <span className="text-[10px] text-slate-500 font-bold font-mono">CASE 1: hidden lg:block</span>
                <h4 className="text-sm font-bold text-white mt-1">پنهان‌سازی مشروط سایدبار</h4>
              </div>
              <div className="flex items-center justify-between gap-2 mt-4">
                <span className={`text-[11px] font-bold rounded px-2 py-0.5 ${currentWidth < 1024 ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30' : 'bg-slate-900 text-slate-500'}`}>
                  hidden (موبایل و تبلت)
                </span>
                <span className={`text-[11px] font-bold rounded px-2 py-0.5 ${currentWidth >= 1024 ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30' : 'bg-slate-900 text-slate-500'}`}>
                  lg:block (دسکتاپ)
                </span>
              </div>
            </div>

            {/* Card 2: flex layout change */}
            <div className="p-4 rounded-xl bg-slate-950/30 border border-white/5 relative overflow-hidden flex flex-col justify-between min-h-[140px]">
              <div>
                <span className="text-[10px] text-slate-500 font-bold font-mono">CASE 2: flex flex-col md:flex-row</span>
                <h4 className="text-sm font-bold text-white mt-1">تغییر توزیع ستونی به ردیفی</h4>
              </div>
              <div className="flex items-center justify-between gap-2 mt-4">
                <span className={`text-[11px] font-bold rounded px-2 py-0.5 ${currentWidth < 768 ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-slate-900 text-slate-500'}`}>
                  flex-col زیر هم
                </span>
                <span className={`text-[11px] font-bold rounded px-2 py-0.5 ${currentWidth >= 768 ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-slate-900 text-slate-500'}`}>
                  md:flex-row کنار هم
                </span>
              </div>
            </div>

            {/* Card 3: grid responsive changes */}
            <div className="p-4 rounded-xl bg-slate-950/30 border border-white/5 relative overflow-hidden flex flex-col justify-between min-h-[140px]">
              <div>
                <span className="text-[10px] text-slate-500 font-bold font-mono">CASE 3: text-sm md:text-2xl</span>
                <h4 className="text-sm font-bold text-white mt-1">اندازه متن واکنش‌گرا</h4>
              </div>
              <div className="flex items-center justify-between gap-2 mt-4">
                <span className={`text-[11px] font-bold rounded px-2 py-0.5 ${currentWidth < 768 ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' : 'bg-slate-900 text-slate-500'}`}>
                  text-sm (کوچک)
                </span>
                <span className={`text-[11px] font-bold rounded px-2 py-0.5 ${currentWidth >= 768 ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' : 'bg-slate-900 text-slate-500'}`}>
                  md:text-2xl (بزرگ)
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
