import { LineChart, LayoutGrid, Package } from 'lucide-react';
import { ModuleInfo, PricingTier } from '../types/pricing';

export const pricingTiers: PricingTier[] = [
  {
    pv: 3000,
    monthly: {
      insight: 5980,
      experience: 8980,
      bundle: 11800
    },
    yearly: {
      insight: 4980,
      experience: 7980,
      bundle: 9980
    }
  },
  {
    pv: 10000,
    monthly: {
      insight: 11800,
      experience: 19800,
      bundle: 24800
    },
    yearly: {
      insight: 9980,
      experience: 14800,
      bundle: 19800
    }
  },
  {
    pv: 50000,
    monthly: {
      insight: 24800,
      experience: 39800,
      bundle: 49800
    },
    yearly: {
      insight: 19800,
      experience: 29800,
      bundle: 39800
    }
  },
  {
    pv: 100000,
    monthly: {
      insight: 39800,
      experience: 59800,
      bundle: 79800
    },
    yearly: {
      insight: 29800,
      experience: 49800,
      bundle: 59800
    }
  },
  {
    pv: 200000,
    monthly: {
      insight: 59800,
      experience: 89800,
      bundle: 119800
    },
    yearly: {
      insight: 49800,
      experience: 79800,
      bundle: 99800
    }
  },
  {
    pv: 500000,
    monthly: {
      insight: 79800,
      experience: 129800,
      bundle: 169800
    },
    yearly: {
      insight: 69800,
      experience: 119800,
      bundle: 149800
    }
  }
];

export const moduleData: Record<string, ModuleInfo> = {
  insight: {
    title: "Insight",
    name: "Insight",
    description: "ヒートマップやアクセス解析で、ユーザー行動を可視化し、Webサイトの課題を発見",
    icon: LineChart,
    features: {
      free: [
        { text: "ヒートマップ解析（1ページ）", included: true },
        { text: "イベント計測（100イベント）", included: true },
        { text: "コンバージョン計測（3個）", included: true },
        { text: "データ保管期間：1ヶ月", included: true }
      ],
      growth: [
        { text: "ヒートマップ解析（無制限）", included: true },
        { text: "イベント計測（PV上限の10%）", included: true },
        { text: "コンバージョン計測（20個）", included: true },
        { text: "データ保管期間：6ヶ月", included: true },
        { text: "ファネル分析", included: true },
        { text: "離脱率分析", included: true }
      ],
      premium: [
        { text: "Growthプランの全機能", included: true },
        { text: "イベント計測（PV上限の15%〜）", included: true },
        { text: "カスタムレポート作成", included: true },
        { text: "データ保管期間：12ヶ月〜", included: true },
        { text: "専任サポート担当者", included: true }
      ]
    }
  },
  experience: {
    title: "Experience",
    name: "Experience",
    description: "A/Bテスト、Web接客、ノーコードサイト編集で、ユーザー体験を最適化",
    icon: LayoutGrid,
    features: {
      free: [
        { text: "作成できる体験数(2個)", included: true },
        { text: "体験表示回数(3,000回)", included: true },
        { text: "ABテストのゴール数(2個) ", included: true },
        { text: "ユーザーセグメント(2個)", included: true }
      ],
      growth: [
        { text: "作成できる体験数(20個)", included: true },
        { text: "体験表示回数(無制限)", included: true },
        { text: "ABテストのゴール数(20個) ", included: true },
        { text: "ユーザーセグメント(20個)", included: true },
        { text: "ノーコードサイト編集(開発者モード)", included: true },
        { text: "パーソナライズ配信", included: true }
      ],
      premium: [
        { text: "Growthプランの全機能", included: true },
        { text: "カスタムJavaScript", included: true },
        { text: "専任サポート担当者", included: true }
      ]
    }
  },
  bundle: {
    title: "Bundle",
    name: "Bundle",
    description: "InsightとExperienceを統合し、分析から改善までをシームレスに実現",
    icon: Package,
    features: {
      free: [
        { text: "Insightの無料プラン機能", included: true },
        { text: "Experienceの無料プラン機能", included: true },
        { text: "セルフサービスサポート", included: true }
      ],
      growth: [
        { text: "Insightの全Growth機能", included: true },
        { text: "Experienceの全Growth機能", included: true },
        { text: "高度なレポート機能", included: true },
        { text: "優先サポート", included: true }
      ],
      premium: [
        { text: "両製品の全Premium機能", included: true },
        { text: "カスタマイズ可能なプラン", included: true },
        { text: "専任サポート担当者", included: true }
      ]
    }
  }
};