const WHATSAPP_NUMBER = "5511999999999";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá, quero agendar um Diagnóstico Estratégico para minha empresa."
);

export const getWhatsAppLink = () =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;
