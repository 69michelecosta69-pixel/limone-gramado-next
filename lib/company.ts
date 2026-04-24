export const companyProfile = {
  brandName: "Limone Gramado",
  legalName: "Limone Gramado",
  cnpj: "em regularização",
  email: "info@limonegramado.com.br",
  phoneDisplay: "+55 (62) 98134-7722",
  phoneSchema: "+55-62-98134-7722",
  phoneE164Digits: "5562981347722",
  locationDisplay: "Linha 28, 820 - Gramado - RS - Brasil",
  address: {
    locality: "Gramado",
    region: "RS",
    country: "BR",
    streetAddress: "Linha 28, 820",
    postalCode: "95670-000",
  },
} as const;

const whatsappText =
  "Olá! Quero saber mais sobre o Limoncello Limone Gramado e disponibilidade para compra/degustação em Gramado.";

export const whatsappLink = `https://wa.me/${companyProfile.phoneE164Digits}?text=${encodeURIComponent(whatsappText)}`;
