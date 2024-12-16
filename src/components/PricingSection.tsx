import React from 'react';
import { PricingCard } from './PricingCard';
import { ModuleInfo, PricingTier } from '../types/pricing';
import { ModuleType, moduleColors } from '../utils/colors';

type PricingSectionProps = {
  module: ModuleInfo;
  selectedPV: number;
  pricing: PricingTier;
  isYearly: boolean;
  moduleType: ModuleType;
};

const CONTACT_URL = 'https://www.ptengine.jp/contact_us/';

export function PricingSection({ 
  module, 
  selectedPV, 
  pricing, 
  isYearly, 
  moduleType 
}: PricingSectionProps) {
  const colors = moduleColors[moduleType];
  
  const getPriceForPlan = () => {
    const priceKey = module.title.toLowerCase();
    return isYearly ? pricing.yearly[priceKey] : pricing.monthly[priceKey];
  };

  const getSignupUrl = () => {
    return `https://www.ptengine.jp/app/signup?plan=free&product=${moduleType}&level=${selectedPV}`;
  };

  return (
    <div className="py-4">
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        <PricingCard
          title="無料プラン"
          description=""
          price="無料"
          features={module.features.free}
          buttonText="無料で始める"
          isYearly={isYearly}
          colors={colors}
          contactUrl={getSignupUrl()}
        />
        <PricingCard
          title="Growthプラン"
          description=""
          price={getPriceForPlan()}
          features={module.features.growth}
          isPopular={true}
          buttonText="14日間無料トライアル"
          isYearly={isYearly}
          colors={colors}
        />
        <PricingCard
          title="プレミアムプラン"
          description=""
          price="お問い合わせ"
          features={module.features.premium}
          buttonText="お問い合わせ"
          isYearly={isYearly}
          colors={colors}
          contactUrl={CONTACT_URL}
        />
      </div>
    </div>
  );
}