const WHATSAPP_NUMBER = "5511999999999";
const WHATSAPP_MESSAGE_DIAGNOSTICO = encodeURIComponent(
  "Olá, gostaria de agendar meu Diagnóstico Estratégico Alvore."
);
const WHATSAPP_MESSAGE_ESPECIALISTA = encodeURIComponent(
  "Olá, gostaria de falar com um especialista da Alvore."
);

export const getWhatsAppLinkDiagnostico = () =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE_DIAGNOSTICO}`;

export const getWhatsAppLinkEspecialista = () =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE_ESPECIALISTA}`;
