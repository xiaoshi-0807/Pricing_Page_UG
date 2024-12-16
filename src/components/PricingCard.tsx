import React from 'react';
import { Check } from 'lucide-react';
import { PlanFeature } from '../types/pricing';
import { moduleColors } from '../utils/colors';

type PricingCardProps = {
  title: string;
  description?: string;
  price: string | number;
  features: PlanFeature[];
  isPopular?: boolean;
  buttonText?: string;
  isYearly?: boolean;
  colors: typeof moduleColors[keyof typeof moduleColors];
  contactUrl?: string;
};

export function PricingCard({
  title,
  description,
  price,
  features,
  isPopular = false,
  buttonText = "開始する",
  isYearly = false,
  colors,
  contactUrl
}: PricingCardProps) {
  const formattedPrice = typeof price === 'number' 
    ? `¥${price.toLocaleString()}` 
    : price;

  const handleClick = () => {
    if (contactUrl) {
      window.open(contactUrl, '_blank', 'noopener noreferrer');
    }
  };

  const billingPeriod = isYearly ? '月×12（年間契約）' : '月（単月契約）';

  return (
    <div 
      className={`relative rounded-2xl border p-8 shadow-lg transition-all duration-200 hover:scale-105 ${
        isPopular ? 'border-2' : 'border'
      }`}
      style={{
        borderColor: isPopular ? colors.primary : '#e5e7eb',
        backgroundColor: isPopular ? colors.secondary : 'white'
      }}
    >
      {isPopular && (
        <div 
          className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full px-4 py-1 text-sm font-medium text-white"
          style={{ backgroundColor: colors.primary }}
        >
          人気プラン
        </div>
      )}
      
      <div className="mb-5">
        <h3 className="text-xl font-bold" style={{ color: colors.primary }}>{title}</h3>
        {description && <p className="mt-2 text-gray-600">{description}</p>}
      </div>

      <div className="mb-5">
        {typeof price === 'string' ? (
          <>
            <a href={contactUrl} target="_blank" rel="noopener noreferrer" className="text-4xl font-bold hover:underline">
              {formattedPrice}
            </a>
            {title === "プレミアムプラン" && (
              <p className="text-sm mt-2 text-gray-600">月間50万PV以上のサイトから対応</p>
            )}
          </>
        ) : (
          <>
            <span className="text-4xl font-bold">{formattedPrice}</span>
            <span className="text-gray-600">/{billingPeriod}</span>
          </>
        )}
      </div>

      <ul className="mb-8 space-y-4">
        {features?.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <Check 
              className="h-5 w-5" 
              style={{ color: feature.included ? colors.primary : '#e5e7eb' }}
            />
            <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      <button 
        onClick={handleClick}
        className={`w-full rounded-lg py-3 font-medium transition-colors duration-200 ${
          contactUrl ? 'hover:opacity-90' : ''
        }`}
        style={{ 
          backgroundColor: isPopular ? colors.primary : colors.secondary,
          color: isPopular ? 'white' : colors.primary
        }}
      >
        {buttonText}
      </button>
    </div>
  );
}