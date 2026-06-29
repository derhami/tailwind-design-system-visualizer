import React from 'react';
import { Monitor, Tablet, Smartphone, Search, Settings as SettingsIcon, Download, Sliders, RefreshCw } from 'lucide-react';
import { Settings } from '../types';

interface NavbarProps {
  currentWidth: number;
  setCurrentWidth: (width: number) => void;
  isSimulating: boolean;
  setIsSimulating: (sim: boolean) => void;
  onOpenSearch: () => void;
  onOpenSettings: () => void;
  onDownloadSingleFile: () => void;
  settings: Settings;
  currentBreakpoint: string;
}

export default function Navbar({
  currentWidth,
  setCurrentWidth,
  isSimulating,
  setIsSimulating,
  onOpenSearch,
  onOpenSettings,
  onDownloadSingleFile,
  settings,
  currentBreakpoint
}: NavbarProps) {
  const devices = [
    { name: 'موبایل', width: 375, icon: Smartphone, label: '375px' },
    { name: 'تبلت', width: 768, icon: Tablet, label: '768px' },
    { name: 'لپ‌تاپ', width: 1024, icon: Monitor, label: '1024px' },
    { name: 'دسکتاپ', width: 1440, icon: Monitor, label: '1440px' },
    { name: 'صفحه بزرگ', width: 1600, icon: Monitor, label: '1600px' }
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Right side: Brand and Iranian title */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500 shadow-lg shadow-cyan-500/20">
            <Sliders className="h-5 w-5 text-zinc-950" />
          </div>
          <div>
            <h1 className="text-xs sm:text-base font-bold text-white leading-tight">ویژوالایزر تلویند             ▐</h1>
            <p className="text-[9px] sm:text-[10px] text-zinc-400">Tailwind Design System</p>
          </div>
        </div>

        {/* Center: Simulated device selector (Legendary UI tool) */}
        <div className="hidden lg:flex items-center gap-2 rounded-xl bg-zinc-950 p-1 border border-zinc-800/80">
          <button
            onClick={() => setIsSimulating(!isSimulating)}
            className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs transition-all ${
              !isSimulating 
                ? 'bg-zinc-800 text-white font-medium border border-zinc-700/50' 
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <RefreshCw className="h-3.5 w-3.5" />
            <span>اندازه زنده مرورگر</span>
          </button>

          <div className="h-4 w-px bg-zinc-800" />

          {devices.map((device) => {
            const Icon = device.icon;
            const isActive = isSimulating && currentWidth === device.width;
            return (
              <button
                key={device.name}
                onClick={() => {
                  setIsSimulating(true);
                  setCurrentWidth(device.width);
                }}
                className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs transition-all ${
                  isActive 
                    ? 'bg-cyan-500 text-zinc-950 font-bold' 
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                <span>{device.name}</span>
                <span className="text-[10px] opacity-70">({device.label})</span>
              </button>
            );
          })}
        </div>

        {/* Left side: Search, settings and download standalone */}
        <div className="flex items-center gap-2">
          {/* Quick search button */}
          <button
            onClick={onOpenSearch}
            className="flex h-9 items-center gap-2 rounded-lg bg-zinc-900 px-3 text-xs text-zinc-400 border border-zinc-800/80 hover:border-zinc-700 transition-all hover:bg-zinc-900/80"
          >
            <Search className="h-4 w-4" />
            <span className="hidden sm:inline">جستجوی سریع...</span>
            <kbd className="hidden md:inline-flex h-5 select-none items-center gap-0.5 rounded border border-zinc-800 bg-zinc-800 px-1.5 font-mono text-[10px] text-zinc-500">
              Ctrl K
            </kbd>
          </button>

          {/* Settings Trigger */}
          <button
            onClick={onOpenSettings}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800/80 bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-900/80 transition-all"
            title="تنظیمات سیستم"
          >
            <SettingsIcon className="h-4 w-4" />
          </button>

          {/* Export button */}
          <button
            onClick={onDownloadSingleFile}
            className="flex h-9 items-center gap-2 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 px-3.5 text-xs font-bold transition-all shadow-lg shadow-white/5"
            title="دانلود نسخه تک‌فایلی مستقل آفلاین"
          >
            <Download className="h-4 w-4" />
            <span className="hidden md:inline">دانلود فایل تکی</span>
          </button>
        </div>
      </div>

      {/* Responsive warning / Simulator width controls in mobile view */}
      <div className="lg:hidden flex flex-col sm:flex-row items-center justify-between gap-2.5 border-t border-zinc-800/50 bg-zinc-950/30 px-4 py-2.5 text-xs">
        <div className="flex items-center gap-2 text-zinc-400">
          <span>عرض نمایشی:</span>
          <span className="font-mono text-cyan-400 font-bold">{Math.round(currentWidth)}px</span>
          <span className="badge rounded px-1 text-[9px] bg-zinc-800 text-zinc-300 uppercase">{currentBreakpoint}</span>
        </div>
        <div className="flex gap-1.5 w-full sm:w-auto justify-center sm:justify-end">
          <button
            onClick={() => { setIsSimulating(false); setCurrentWidth(window.innerWidth); }}
            className={`flex-1 sm:flex-initial rounded px-2.5 py-1 text-[10px] transition-all ${!isSimulating ? 'bg-cyan-500 text-zinc-950 font-bold' : 'bg-zinc-900 text-zinc-400'}`}
          >
            عرض زنده
          </button>
          <button
            onClick={() => { setIsSimulating(true); setCurrentWidth(375); }}
            className={`flex-1 sm:flex-initial rounded px-2.5 py-1 text-[10px] transition-all ${isSimulating && currentWidth === 375 ? 'bg-cyan-500 text-zinc-950 font-bold' : 'bg-zinc-900 text-zinc-400'}`}
          >
            موبایل (۳۷۵)
          </button>
          <button
            onClick={() => { setIsSimulating(true); setCurrentWidth(768); }}
            className={`flex-1 sm:flex-initial rounded px-2.5 py-1 text-[10px] transition-all ${isSimulating && currentWidth === 768 ? 'bg-cyan-500 text-zinc-950 font-bold' : 'bg-zinc-900 text-zinc-400'}`}
          >
            تبلت (۷۶۸)
          </button>
        </div>
      </div>
    </header>
  );
}
