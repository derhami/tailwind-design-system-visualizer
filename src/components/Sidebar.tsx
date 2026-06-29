import React from 'react';
import { 
  Tv, Maximize2, Move, Type, Bold, Percent, Layout, 
  Layers, Map, Table, Columns, Copy, Code2, HelpCircle 
} from 'lucide-react';

interface Section {
  id: string;
  name: string;
  icon: any;
}

export const SECTIONS: Section[] = [
  { id: 'breakpoints', name: '۱. نقاط شکست ریسپانسیو', icon: Tv },
  { id: 'container', name: '۲. کانتینر رسمی', icon: Maximize2 },
  { id: 'spacing', name: '۳. مقیاس فاصله‌ها (Spacing)', icon: Move },
  { id: 'typography', name: '۴. اندازه تایپوگرافی', icon: Type },
  { id: 'font-weights', name: '۵. ضخامت فونت', icon: Bold },
  { id: 'letter-spacing', name: '۶. فاصله بین حروف', icon: Type },
  { id: 'line-heights', name: '۷. ارتفاع خطوط (Leading)', icon: Type },
  { id: 'border-radius', name: '۸. شعاع حواشی (Radius)', icon: Columns },
  { id: 'shadows', name: '۹. مقیاس سایه‌ها (Shadow)', icon: Layers },
  { id: 'opacity', name: '۱۰. شفافیت (Opacity)', icon: Percent },
  { id: 'colors', name: '۱۱. پالت‌های رنگی رسمی', icon: Table },
  { id: 'width-utils', name: '۱۲. ابزارهای عرض (Width)', icon: Layout },
  { id: 'max-width-utils', name: '۱۳. حداکثر عرض (Max Width)', icon: Layout },
  { id: 'height-utils', name: '۱۴. ابزارهای ارتفاع (Height)', icon: Layout },
  { id: 'flex-playground', name: '۱۵. شهربازی تعاملی فلکس', icon: Code2 },
  { id: 'grid-playground', name: '۱۶. شهربازی تعاملی گرید', icon: Code2 },
  { id: 'responsive-playground', name: '۱۷. شهربازی واکنش‌گرایی', icon: Tv },
  { id: 'z-index', name: '۱۸. چیدمان عمودی (Z-Index)', icon: Layers },
  { id: 'position', name: '۱۹. موقعیت (Position)', icon: Move },
  { id: 'overflow', name: '۲۰. سرریز محتوا (Overflow)', icon: Columns },
  { id: 'cheatsheet', name: '۲۱. تقلب‌نامه کدهای پرکاربرد', icon: Copy },
  { id: 'design-tokens', name: '۲۲. توکن‌های کلی طراحی', icon: Map }
];

interface SidebarProps {
  activeSection: string;
}

export default function Sidebar({ activeSection }: SidebarProps) {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <aside className="sticky top-20 hidden w-64 shrink-0 lg:block">
      <div className="glass-panel rounded-2xl p-4 max-h-[calc(100vh-120px)] overflow-y-auto">
        <div className="mb-4">
          <span className="text-xs font-bold text-zinc-400 tracking-wider">منوی ناوبری سیستم</span>
          <div className="mt-1 h-px bg-zinc-800/80 w-full" />
        </div>
        
        <nav className="space-y-1">
          {SECTIONS.map((section) => {
            const Icon = section.icon;
            const isActive = activeSection === section.id;
            return (
              <button
                key={section.id}
                onClick={() => handleScroll(section.id)}
                className={`group flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-right text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500/15 to-cyan-500/5 text-cyan-400 border-r-2 border-cyan-500'
                    : 'text-zinc-400 hover:bg-zinc-800 hover:text-white border-r-2 border-transparent'
                }`}
              >
                <Icon className={`h-4 w-4 shrink-0 transition-colors ${
                  isActive ? 'text-cyan-400' : 'text-zinc-500 group-hover:text-zinc-300'
                }`} />
                <span className="truncate">{section.name}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
