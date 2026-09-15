(function attachPriceCalculator(root, factory) {
  const calculator = factory();
  if (typeof module === "object" && module.exports) module.exports = calculator;
  if (root) root.LimonePriceCalculator = calculator;
})(typeof window !== "undefined" ? window : null, function createPriceCalculator() {
  const OFFICIAL_SALE_PRICES = Object.freeze({
    limoncello: Object.freeze({
      turista: Object.freeze({ 275: 68, 500: 89.5, 5000: 600 }),
      revenda: Object.freeze({ 275: 49, 500: 65, 5000: 600 })
    }),
    arancello: Object.freeze({
      turista: Object.freeze({ 275: 58, 500: 85, 5000: 0 }),
      revenda: Object.freeze({ 275: 42, 500: 62, 5000: 0 })
    })
  });

  const FINAL_VOLUME_FACTOR = Object.freeze({
    limoncello: 3.2,
    arancello: 3.08,
    "maca-canela": 2.3 / 0.6
  });

  function officialSalePrice(product, channel, sizeMl) {
    return Number(OFFICIAL_SALE_PRICES[product]?.[channel]?.[sizeMl] || 0);
  }

  function finalVolumeFromAlcohol(alcoholLiters, product = "limoncello") {
    const factor = FINAL_VOLUME_FACTOR[product] || FINAL_VOLUME_FACTOR.limoncello;
    return Number(alcoholLiters || 0) * factor;
  }

  function calculate(input) {
    const values = Object.fromEntries(
      Object.entries(input).map(([key, value]) => [key, Number(value || 0)])
    );
    if (values.finalLiters <= 0) throw new Error("O volume final deve ser maior que zero.");
    if (values.sizeMl <= 0) throw new Error("O tamanho da embalagem deve ser maior que zero.");
    if (values.alcoholLiters < 0) throw new Error("A quantidade de álcool não pode ser negativa.");
    if (values.lossPercent < 0 || values.lossPercent >= 100) {
      throw new Error("As perdas devem ficar entre 0% e 99%.");
    }
    if (values.feePercent < 0 || values.targetMargin < 0 || values.feePercent + values.targetMargin >= 100) {
      throw new Error("Impostos/taxas mais a margem desejada precisam somar menos de 100%.");
    }

    const bottleLiters = values.sizeMl / 1000;
    const batchIngredientCost =
      values.alcoholLiters * values.alcoholPrice +
      values.sugar +
      values.fruit +
      values.water +
      values.otherBatch;
    const liquidCost = batchIngredientCost * (bottleLiters / values.finalLiters);
    const packagingCost =
      values.bottle +
      values.cap +
      values.seal +
      values.frontLabel +
      values.backLabel +
      values.freight;
    const directCost = liquidCost + packagingCost + values.labor + values.overhead;
    const costWithLoss = directCost / (1 - values.lossPercent / 100);
    const salesFee = values.salePrice * (values.feePercent / 100);
    const profitPerBottle = values.salePrice - salesFee - costWithLoss;
    const actualMargin = values.salePrice > 0 ? profitPerBottle / values.salePrice * 100 : 0;
    const markup = costWithLoss > 0 ? (values.salePrice / costWithLoss - 1) * 100 : 0;
    const suggestedPrice = costWithLoss / (1 - values.feePercent / 100 - values.targetMargin / 100);
    const fullBottles = Math.floor(values.finalLiters / bottleLiters + 1e-9);
    const remainderMl = Math.max(0, Math.round((values.finalLiters - fullBottles * bottleLiters) * 1000));

    return {
      batchIngredientCost,
      liquidCost,
      packagingCost,
      directCost,
      costWithLoss,
      salesFee,
      profitPerBottle,
      actualMargin,
      markup,
      suggestedPrice,
      fullBottles,
      remainderMl,
      batchRevenue: values.salePrice * fullBottles,
      batchProfit: profitPerBottle * fullBottles
    };
  }

  return Object.freeze({
    OFFICIAL_SALE_PRICES,
    FINAL_VOLUME_FACTOR,
    officialSalePrice,
    finalVolumeFromAlcohol,
    calculate
  });
});
