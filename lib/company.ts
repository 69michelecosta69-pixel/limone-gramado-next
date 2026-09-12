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

export const salesLocations = [
  {
    name: "Fornos da Várzea Grande",
    shortAddress: "RS-115, 112 · Várzea Grande · Gramado/RS",
    fullAddress: "RS-115, 112 · Várzea Grande · Gramado/RS · CEP 95670-000",
    availability: "LIMONE GRAMADO disponível para compra e degustação mediante consulta.",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Fornos+da+V%C3%A1rzea+Grande%2C+RS-115%2C+112%2C+V%C3%A1rzea+Grande%2C+Gramado%2C+RS%2C+95670-000",
  },
  {
    name: "Adega Salvador",
    shortAddress: "Rodovia ERS-115, 36316, Loja 1 · Várzea Grande · Gramado/RS",
    fullAddress: "Rodovia ERS-115, 36316 · Loja 1 · Várzea Grande · Gramado/RS · CEP 95677-276",
    availability: "LIMONE GRAMADO 500 ml disponível para compra.",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Adega+Salvador%2C+Rodovia+ERS-115%2C+36316%2C+Loja+1%2C+V%C3%A1rzea+Grande%2C+Gramado%2C+RS%2C+95677-276",
  },
] as const;

export const salesLocationNames = salesLocations.map((location) => location.name).join(" e ");

const whatsappText =
  "Olá! Quero saber mais sobre o Limoncello Limone Gramado e disponibilidade para compra/degustação em Gramado.";

export const whatsappLink = `https://wa.me/${companyProfile.phoneE164Digits}?text=${encodeURIComponent(whatsappText)}`;

const partnerWhatsappText =
  "Olá! Tenho interesse em uma parceria com a Limone Gramado para meu hotel/restaurante. Gostaria de receber uma proposta para carta de drinks, welcome drink ou degustação.";

export const partnerWhatsappLink = `https://wa.me/${companyProfile.phoneE164Digits}?text=${encodeURIComponent(partnerWhatsappText)}`;
