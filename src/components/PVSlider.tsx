import React from 'react';
import { pricingTiers } from '../data/pricingData';
import { moduleColors } from '../utils/colors';
import { useModuleContext } from '../contexts/ModuleContext';

type PVSliderProps = {
  value: number;
  onChange: (value: number) => void;
};

export function PVSlider({ value, onChange }: PVSliderProps) {
  const { selectedModule } = useModuleContext();
  const currentIndex = pricingTiers.findIndex(tier => tier.pv === value);
  const colors = moduleColors[selectedModule];

  return (
    <div className="w-full max-w-3xl mx-auto mb-40">
      <div className="bg-white rounded-2xl shadow-lg p-8 border-2" style={{ borderColor: colors.primary }}>
        <label className="block text-center text-lg font-medium mb-6">
          <p className="text-sm text-gray-500">
            (50万PV以上は
            <a 
              href="https://www.ptengine.jp/contact_us/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              お問い合わせ
            </a>
            ください)
          </p>
        </label>

        <div className="relative mb-8">
          <input
            type="range"
            min="0"
            max={pricingTiers.length - 1}
            value={currentIndex}
            onChange={(e) => onChange(pricingTiers[parseInt(e.target.value)].pv)}
            className="w-full h-2 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2"
            style={{
              background: `linear-gradient(to right, ${colors.primary} ${(currentIndex / (pricingTiers.length - 1)) * 100}%, #E5E7EB ${(currentIndex / (pricingTiers.length - 1)) * 100}%)`,
              '--tw-ring-color': colors.primary
            }}
          />
        </div>

        <div className="flex justify-between px-2">
          {pricingTiers.map((tier, index) => (
            <div 
              key={tier.pv} 
              className={`flex flex-col items-center transition-all duration-200 ${
                index === currentIndex ? 'transform scale-110' : ''
              }`}
              style={{ width: '20px' }}
            >
              <div 
                className={`w-3 h-3 rounded-full mb-3 transition-all duration-200 ${
                  index === currentIndex ? 'ring-4' : ''
                }`}
                style={{
                  backgroundColor: index === currentIndex ? colors.primary : '#E5E7EB',
                  '--tw-ring-color': `${colors.primary}20`
                }}
              />
              <span className={`text-center text-sm whitespace-nowrap transition-all duration-200 ${
                index === currentIndex ? 'font-medium' : 'text-gray-600'
              }`}
              style={{ color: index === currentIndex ? colors.primary : undefined }}>
                {tier.pv >= 10000 ? `${tier.pv / 10000}万` : tier.pv.toLocaleString()}
                <span className="block text-xs text-gray-500">PV</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}