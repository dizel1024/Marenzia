'use client';

import React, { useState, useEffect } from 'react';
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
    
    // Toggle classes
    body.classList.toggle('a11y-readable-font', activeFeatures.readableFont);
    body.classList.toggle('a11y-high-contrast', activeFeatures.highContrast);
    body.classList.toggle('a11y-grayscale', activeFeatures.grayscale);
    body.classList.toggle('a11y-highlight-links', activeFeatures.highlightLinks);
    body.classList.toggle('a11y-stop-animations', activeFeatures.stopAnimations);
    
    // Apply font size
    document.documentElement.style.fontSize = `${fontSizeMultiplier * 100}%`;
    
  }, [activeFeatures, fontSizeMultiplier]);

  const toggleFeature = (feature: keyof typeof activeFeatures) => {
    setActiveFeatures(prev => ({
      ...prev,
      [feature]: !prev[feature]
    }));
  };

  const adjustFontSize = (increase: boolean) => {
    setFontSizeMultiplier(prev => {
      const newMultiplier = prev + (increase ? 0.1 : -0.1);
      // Limit scaling between 0.8x and 1.5x
      return Math.max(0.8, Math.min(1.5, newMultiplier));
    });
  };

  const resetAll = () => {
    setActiveFeatures({
      readableFont: false,
      highContrast: false,
      grayscale: false,
      highlightLinks: false,
      stopAnimations: false,
    });
    setFontSizeMultiplier(1);
  };

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-[9999] flex flex-row-reverse items-start pointer-events-none" dir="rtl">
      {/* Widget Trigger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#0a0a0a] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform pointer-events-auto"
        aria-label="פתח תפריט נגישות"
        title="אפשרויות נגישות"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Accessibility className="w-6 h-6" />}
      </button>

      {/* Widget Panel */}
      <div 
        className={`
          bg-white shadow-2xl rounded-2xl mx-4 overflow-hidden border border-gray-100 
          transition-all duration-300 origin-right pointer-events-auto
          w-72 
          ${isOpen ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-95 translate-x-8 pointer-events-none'}
        `}
      >
        <div className="bg-[#0a0a0a] text-white p-4 flex justify-between items-center">
          <h2 className="font-bold flex items-center gap-2">
            <Accessibility className="w-5 h-5" />
            התאמות נגישות
          </h2>
        </div>

        <div className="p-4 space-y-3 max-h-[70vh] overflow-y-auto">
          {/* Text Resizing */}
          <div className="flex justify-between items-center bg-gray-50 p-2 rounded-lg">
            <span className="text-sm font-medium text-gray-700">גודל טקסט</span>
            <div className="flex gap-2">
              <button 
                onClick={() => adjustFontSize(false)}
                className="p-1.5 bg-white border rounded hover:bg-gray-100 disabled:opacity-50"
                disabled={fontSizeMultiplier <= 0.8}
                aria-label="הקטן טקסט"
              >
                <ZoomOut className="w-4 h-4 text-black" />
              </button>
              <button 
                onClick={() => adjustFontSize(true)}
                className="p-1.5 bg-white border rounded hover:bg-gray-100 disabled:opacity-50"
                disabled={fontSizeMultiplier >= 1.5}
                aria-label="הגדל טקסט"
              >
                <ZoomIn className="w-4 h-4 text-black" />
              </button>
            </div>
          </div>

          {/* Features */}
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

          {/* Reset Action */}
          <button 
            onClick={resetAll}
            className="w-full mt-4 flex justify-center items-center gap-2 py-3 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors text-sm font-medium"
          >
            <RotateCcw className="w-4 h-4" />
            איפוס הגדרות נגישות
          </button>
          
          <div className="text-center mt-2">
            <a href="/accessibility" className="text-[10px] text-gray-400 hover:text-black hover:underline transition-colors block py-2">הצהרת נגישות תקן 5568</a>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureToggle({ 
  active, 
  onClick, 
  icon, 
  label 
}: { 
  active: boolean, 
  onClick: () => void, 
  icon: React.ReactNode, 
  label: string 
}) {
  return (
    <button 
      onClick={onClick}
      className={`
        w-full flex items-center justify-between p-3 rounded-lg border transition-all text-sm
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
        w-10 h-5 rounded-full relative transition-colors duration-200
        ${active ? 'bg-white/20' : 'bg-gray-200'}
      `}>
        <div className={`
          w-3 h-3 bg-white rounded-full absolute top-1 transition-transform duration-200
          ${active ? 'left-1' : 'right-1 !bg-[#0a0a0a]'}
        `} />
      </div>
    </button>
  );
}
