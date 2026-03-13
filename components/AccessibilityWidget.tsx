'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { 
  Accessibility, 
  Type, 
  ZoomIn, 
  ZoomOut, 
  Contrast, 
  Palette, 
  Link as LinkIcon, 
  PauseCircle, 
  RotateCcw,
  X 
} from 'lucide-react';

export default function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeFeatures, setActiveFeatures] = useState({
    readableFont: false,
    highContrast: false,
    grayscale: false,
    highlightLinks: false,
    stopAnimations: false,
  });
  
  const [fontSizeMultiplier, setFontSizeMultiplier] = useState(1);

  // Apply CSS classes to body based on active features
  useEffect(() => {
    const body = document.body;
    
    body.classList.toggle('a11y-readable-font', activeFeatures.readableFont);
    body.classList.toggle('a11y-high-contrast', activeFeatures.highContrast);
    body.classList.toggle('a11y-grayscale', activeFeatures.grayscale);
    body.classList.toggle('a11y-highlight-links', activeFeatures.highlightLinks);
    body.classList.toggle('a11y-stop-animations', activeFeatures.stopAnimations);
    
    document.documentElement.style.fontSize = `${fontSizeMultiplier * 100}%`;

    return () => {
      // Cleanup on unmount
      document.documentElement.style.fontSize = '';
    };
  }, [activeFeatures, fontSizeMultiplier]);

  const toggleFeature = useCallback((feature: keyof typeof activeFeatures) => {
    setActiveFeatures(prev => ({
      ...prev,
      [feature]: !prev[feature]
    }));
  }, []);

  const adjustFontSize = useCallback((increase: boolean) => {
    setFontSizeMultiplier(prev => {
      const newVal = prev + (increase ? 0.1 : -0.1);
      return Math.max(0.8, Math.min(1.5, Math.round(newVal * 10) / 10));
    });
  }, []);

  const resetAll = useCallback(() => {
    setActiveFeatures({
      readableFont: false,
      highContrast: false,
      grayscale: false,
      highlightLinks: false,
      stopAnimations: false,
    });
    setFontSizeMultiplier(1);
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const activeCount = Object.values(activeFeatures).filter(Boolean).length + (fontSizeMultiplier !== 1 ? 1 : 0);

  return (
    <>
      {/* FAB Button — bottom-right corner, uses fixed inline style to avoid RTL flip */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed z-[9999] bg-[#0a0a0a] text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-transform"
        style={{ bottom: '24px', right: '24px', left: 'auto', width: '52px', height: '52px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        aria-label="פתח תפריט נגישות"
        title="אפשרויות נגישות"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Accessibility className="w-6 h-6" />}
        {/* Active count badge */}
        {activeCount > 0 && !isOpen && (
          <span 
            className="absolute bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center"
            style={{ top: '-4px', right: '-4px', left: 'auto', width: '20px', height: '20px' }}
          >
            {activeCount}
          </span>
        )}
      </button>

      {/* Panel — opens upward from the button */}
      {isOpen && (
        <div 
          className="fixed z-[9998] bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-100"
          style={{ bottom: '88px', right: '24px', left: 'auto', width: '300px' }}
          dir="rtl"
        >
          {/* Header */}
          <div className="bg-[#0a0a0a] text-white px-5 py-4 flex justify-between items-center">
            <h2 className="font-bold text-sm flex items-center gap-2">
              <Accessibility className="w-5 h-5" />
              התאמות נגישות
            </h2>
            <button onClick={() => setIsOpen(false)} className="hover:opacity-70" aria-label="סגור תפריט נגישות">
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Controls */}
          <div className="p-4 space-y-2.5 max-h-[65vh] overflow-y-auto">
            {/* Text Resizing */}
            <div className="flex justify-between items-center bg-gray-50 p-3 rounded-xl">
              <span className="text-sm font-medium text-gray-700">גודל טקסט</span>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => adjustFontSize(false)}
                  className="w-8 h-8 flex items-center justify-center bg-white border border-gray-200 rounded-lg hover:bg-gray-100 disabled:opacity-30"
                  disabled={fontSizeMultiplier <= 0.8}
                  aria-label="הקטן טקסט"
                >
                  <ZoomOut className="w-4 h-4 text-black" />
                </button>
                <span className="text-xs font-mono text-gray-500 w-8 text-center">
                  {Math.round(fontSizeMultiplier * 100)}%
                </span>
                <button 
                  onClick={() => adjustFontSize(true)}
                  className="w-8 h-8 flex items-center justify-center bg-white border border-gray-200 rounded-lg hover:bg-gray-100 disabled:opacity-30"
                  disabled={fontSizeMultiplier >= 1.5}
                  aria-label="הגדל טקסט"
                >
                  <ZoomIn className="w-4 h-4 text-black" />
                </button>
              </div>
            </div>

            {/* Feature Toggles */}
            <FeatureToggle 
              active={activeFeatures.readableFont} 
              onClick={() => toggleFeature('readableFont')} 
              icon={<Type className="w-4 h-4" />} 
              label="פונט קריא" 
            />
            <FeatureToggle 
              active={activeFeatures.highContrast} 
              onClick={() => toggleFeature('highContrast')} 
              icon={<Contrast className="w-4 h-4" />} 
              label="ניגודיות גבוהה" 
            />
            <FeatureToggle 
              active={activeFeatures.grayscale} 
              onClick={() => toggleFeature('grayscale')} 
              icon={<Palette className="w-4 h-4" />} 
              label="גווני אפור" 
            />
            <FeatureToggle 
              active={activeFeatures.highlightLinks} 
              onClick={() => toggleFeature('highlightLinks')} 
              icon={<LinkIcon className="w-4 h-4" />} 
              label="הדגשת קישורים" 
            />
            <FeatureToggle 
              active={activeFeatures.stopAnimations} 
              onClick={() => toggleFeature('stopAnimations')} 
              icon={<PauseCircle className="w-4 h-4" />} 
              label="השהיית אנימציות" 
            />

            {/* Reset */}
            <button 
              onClick={resetAll}
              className="w-full mt-3 flex justify-center items-center gap-2 py-3 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition-colors text-sm font-medium"
            >
              <RotateCcw className="w-4 h-4" />
              איפוס הכל
            </button>
            
            {/* Link */}
            <div className="text-center pt-1 pb-1">
              <a href="/accessibility" className="text-[10px] text-gray-400 hover:text-black hover:underline transition-colors">
                הצהרת נגישות · תקן ישראלי 5568
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function FeatureToggle({ 
  active, 
  onClick, 
  icon, 
  label 
}: { 
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button 
      onClick={onClick}
      className={`
        w-full flex items-center justify-between p-3 rounded-xl border transition-all text-sm
        ${active 
          ? 'bg-[#0a0a0a] border-[#0a0a0a] text-white' 
          : 'bg-white border-gray-200 text-gray-700 hover:border-gray-400'
        }
      `}
      aria-pressed={active}
    >
      <span className="flex items-center gap-3">
        {icon}
        {label}
      </span>
      <div className={`
        w-9 h-5 rounded-full relative transition-colors duration-200
        ${active ? 'bg-green-500' : 'bg-gray-300'}
      `}>
        <div className={`
          w-3.5 h-3.5 bg-white rounded-full absolute top-[3px] transition-all duration-200 shadow-sm
          ${active ? 'left-[3px]' : 'left-[18px]'}
        `} />
      </div>
    </button>
  );
}
