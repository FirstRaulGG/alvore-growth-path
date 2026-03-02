const WHATSAPP_NUMBER = "5531994497451";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá, quero agendar um Diagnóstico Estratégico para minha empresa."
);

export const getWhatsAppLink = () =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;
