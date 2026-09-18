import React, { useState } from 'react';
import { TrendingUp, MessageCircle, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { liveProducts } from '../../data/products';

export const WholesaleCalculator: React.FC = () => {
  const { lang, t } = useLanguage();
  const isFrench = lang === 'fr';

  // State: carton/case quantities per product SKU
  const [caseSelections, setCaseSelections] = useState<{ [sku: string]: number }>({
    'PDL-GEL': 2,
    'PDL-LAIT': 2,
    'PDL-HUILE': 2,
    'PDL-CREAM': 1,
  });

  const handleCaseChange = (sku: string, delta: number) => {
    setCaseSelections(prev => {
      const current = prev[sku] || 0;
      const next = Math.max(0, current + delta);
      return { ...prev, [sku]: next };
    });
  };

  // Wholesale calculation
  const calculations = liveProducts
    .filter(p => p.casePriceNgn > 0)
    .map(p => {
      const cases = caseSelections[p.sku] || 0;
      const totalUnits = cases * p.caseQty;
      const caseCost = cases * p.casePriceNgn;
      const projectedRetailValue = totalUnits * p.retailPriceNgn;
      const projectedProfit = projectedRetailValue - caseCost;
      const marginPercent = caseCost > 0 ? ((projectedProfit / projectedRetailValue) * 100).toFixed(0) : '0';

      return {
        product: p,
        cases,
        totalUnits,
        caseCost,
        projectedRetailValue,
        projectedProfit,
        marginPercent,
      };
    });

  const grandTotalCases = calculations.reduce((acc, c) => acc + c.cases, 0);
  const grandTotalUnits = calculations.reduce((acc, c) => acc + c.totalUnits, 0);
  const grandCaseCost = calculations.reduce((acc, c) => acc + c.caseCost, 0);
  const grandRetailValue = calculations.reduce((acc, c) => acc + c.projectedRetailValue, 0);
  const grandProfit = calculations.reduce((acc, c) => acc + c.projectedProfit, 0);

  const getWhatsAppWholesaleUrl = () => {
    const summaryLines = calculations
      .filter(c => c.cases > 0)
      .map(
        c =>
          `• ${c.cases} carton(s) de ${isFrench ? c.product.frenchName : c.product.name} (${c.product.caseQty} pcs/ctn) = ₦${c.caseCost.toLocaleString()}`
      )
      .join('\n');

    const message = isFrench
      ? `Bonjour l'équipe commerciale Proxima,\n\nJe souhaite passer une commande de gros pour mon commerce :\n\n${summaryLines}\n\n*Total cartons : ${grandTotalCases} (${grandTotalUnits} unités)*\n*Montant total d'achat : ₦${grandCaseCost.toLocaleString()}*\n*Bénéfice estimé à la revente : ₦${grandProfit.toLocaleString()}*\n\nNom de mon commerce :\nVille / Marché :\nTéléphone WhatsApp :\n\nMerci de me transmettre les délais d'expédition et les coordonnées bancaires.`
      : `Hello Proxima Trade Team,\n\nI am interested in placing a wholesale order for my business:\n\n${summaryLines}\n\n*Total Cases: ${grandTotalCases} (${grandTotalUnits} units)*\n*Wholesale Purchase Cost: ₦${grandCaseCost.toLocaleString()}*\n*Projected Retail Profit: ₦${grandProfit.toLocaleString()}*\n\nBusiness Name:\nCity / Market:\nWhatsApp Contact:\n\nPlease confirm availability, delivery timeline, and bank details.`;

    return `https://wa.me/2349044943580?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="bg-white rounded-3xl border border-proxima-brown-light/30 shadow-luxury overflow-hidden">
      {/* Header */}
      <div className="bg-proxima-brown-deep text-proxima-cream p-6 sm:p-8">
        <div className="flex items-center gap-2 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-2">
          <TrendingUp className="w-4 h-4" />
          <span>{t.wholesale.calculatorTitle}</span>
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-wide">
          {isFrench ? 'Estimez vos marges de revente' : 'Calculate Your Merchant Profit Margins'}
        </h3>
        <p className="text-xs sm:text-sm text-proxima-brown-pale/80 mt-1 max-w-2xl">
          {t.wholesale.calculatorSubtitle}
        </p>
      </div>

      {/* Case Quantity Selector Table */}
      <div className="p-6 sm:p-8 space-y-6">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-proxima-brown-light/20 text-[11px] font-bold uppercase tracking-wider text-proxima-brown-deep/70">
                <th className="py-3 px-2">{isFrench ? 'Produit' : 'Product'}</th>
                <th className="py-3 px-2 text-center">{isFrench ? 'Pièces / Carton' : 'Units / Case'}</th>
                <th className="py-3 px-2">{isFrench ? 'Prix Carton' : 'Case Price'}</th>
                <th className="py-3 px-2 text-center">{isFrench ? 'Quantité Cartons' : 'Case Quantity'}</th>
                <th className="py-3 px-2 text-right">{isFrench ? 'Total Achat' : 'Case Total'}</th>
                <th className="py-3 px-2 text-right text-emerald-700">{isFrench ? 'Bénéfice Prévu' : 'Est. Profit'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-proxima-cream text-xs">
              {calculations.map(item => {
                const displayName = isFrench ? item.product.frenchName : item.product.name;
                return (
                  <tr key={item.product.sku} className="hover:bg-proxima-cream/30 transition-colors">
                    <td className="py-3.5 px-2">
                      <div className="flex items-center gap-2.5">
                        <img
                          src={item.product.image}
                          alt={displayName}
                          className="w-9 h-9 object-contain rounded-md bg-proxima-cream/50 p-0.5 flex-shrink-0"
                        />
                        <div>
                          <p className="font-bold text-proxima-brown-deep truncate max-w-[180px]">
                            {displayName}
                          </p>
                          <p className="text-[10px] text-proxima-black/50">{item.product.size}</p>
                        </div>
                      </div>
                    </td>

                    <td className="py-3.5 px-2 text-center font-medium text-proxima-black/80">
                      {item.product.caseQty} pcs
                    </td>

                    <td className="py-3.5 px-2 font-semibold text-proxima-brown-deep">
                      ₦{item.product.casePriceNgn.toLocaleString()}
                    </td>

                    <td className="py-3.5 px-2 text-center">
                      <div className="inline-flex items-center border border-proxima-brown-light/30 rounded-lg bg-white px-2 py-1">
                        <button
                          onClick={() => handleCaseChange(item.product.sku, -1)}
                          className="w-5 h-5 flex items-center justify-center font-bold text-proxima-brown hover:bg-proxima-cream rounded"
                        >
                          -
                        </button>
                        <span className="w-8 text-center font-bold text-proxima-brown-deep text-xs">
                          {item.cases}
                        </span>
                        <button
                          onClick={() => handleCaseChange(item.product.sku, 1)}
                          className="w-5 h-5 flex items-center justify-center font-bold text-proxima-brown hover:bg-proxima-cream rounded"
                        >
                          +
                        </button>
                      </div>
                    </td>

                    <td className="py-3.5 px-2 text-right font-bold text-proxima-brown-deep">
                      ₦{item.caseCost.toLocaleString()}
                    </td>

                    <td className="py-3.5 px-2 text-right font-bold text-emerald-700">
                      +₦{item.projectedProfit.toLocaleString()}
                      <span className="block text-[10px] text-emerald-600 font-medium">
                        ({item.marginPercent}% {isFrench ? 'marge' : 'margin'})
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Grand Total Summary Box */}
        <div className="p-6 bg-proxima-cream/80 rounded-2xl border border-proxima-brown-light/20 grid grid-cols-1 sm:grid-cols-4 gap-4 text-center sm:text-left">
          <div>
            <span className="text-[11px] uppercase tracking-wider text-proxima-black/60 block">
              {isFrench ? 'Cartons :' : 'Cases:'}
            </span>
            <p className="font-serif text-xl font-bold text-proxima-brown-deep mt-0.5">
              {grandTotalCases} {isFrench ? 'cartons' : 'cases'}
              <span className="block text-[10px] font-normal text-proxima-black/60">
                ({grandTotalUnits} {isFrench ? 'unités' : 'units'})
              </span>
            </p>
          </div>

          <div>
            <span className="text-[11px] uppercase tracking-wider text-proxima-black/60 block">
              {isFrench ? 'Prix Achat Gros :' : 'Wholesale Cost:'}
            </span>
            <p className="font-serif text-xl font-bold text-proxima-brown-deep mt-0.5">
              ₦{grandCaseCost.toLocaleString()}
            </p>
          </div>

          <div>
            <span className="text-[11px] uppercase tracking-wider text-proxima-black/60 block">
              {isFrench ? 'Valeur Revente :' : 'Retail Value:'}
            </span>
            <p className="font-serif text-xl font-bold text-proxima-brown-deep mt-0.5">
              ₦{grandRetailValue.toLocaleString()}
            </p>
          </div>

          <div className="sm:text-right">
            <span className="text-[11px] uppercase tracking-wider text-emerald-800 font-semibold block">
              {isFrench ? 'Bénéfice Net Estimé :' : 'Est. Net Profit:'}
            </span>
            <p className="font-serif text-xl font-bold text-emerald-700 mt-0.5">
              +₦{grandProfit.toLocaleString()}
            </p>
          </div>
        </div>

        {/* WhatsApp Application Direct Route */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-proxima-black/70 max-w-md">
            {isFrench
              ? 'Les cartons sont préparés et expédiés directement depuis notre entrepôt d’Imo Plaza, BBA Trade Fair Complex à Lagos.'
              : 'Cases are dispatched directly from our flagship distribution hub at Imo Plaza, BBA Trade Fair Complex, Lagos.'}
          </p>

          <a
            href={getWhatsAppWholesaleUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-emerald-700 hover:bg-emerald-600 text-white py-3.5 px-6 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-colors shadow-md flex-shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{isFrench ? 'Commander ces cartons sur WhatsApp' : 'Order These Cases on WhatsApp'}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
