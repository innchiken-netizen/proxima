export type Language = 'en' | 'fr';

export interface ProductVariant {
  name: string;
  colorHex?: string;
  badge?: string;
}

export interface Product {
  sku: string;
  name: string;
  frenchName: string;
  category: string;
  size: string;
  retailPriceNgn: number;
  casePriceNgn: number;
  caseQty: number;
  status: 'clean image available' | 'no image yet' | 'excluded';
  image: string;
  keyActives: string[];
  colorLine?: 'pink' | 'brown' | 'green' | 'specialty';
  colorLabel?: string;
  imageFlag?: string;
  isMatchingSetShot?: boolean;
  benefitStatement: {
    en: string;
    fr: string;
  };
  whyYoullLoveIt: {
    en: string[];
    fr: string[];
  };
  whatsInside: {
    en: { active: string; description: string }[];
    fr: { active: string; description: string }[];
  };
  variants?: string[];
  isBestSeller?: boolean;
  isNewArrival?: boolean;
  routineStep?: 'cleanse' | 'treat' | 'moisturize' | 'protect';
}

export interface ActiveIngredient {
  id: string;
  name: string;
  chemicalName?: string;
  benefit: {
    en: string;
    fr: string;
  };
  whatItDoes: {
    en: string;
    fr: string;
  };
  whoItsFor: {
    en: string;
    fr: string;
  };
  howToUse: {
    en: string;
    fr: string;
  };
  featuredInSkus: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedVariant?: string;
}

export interface QuizAnswer {
  concern: string;
  skinType: string;
  routineHabit: string;
}
