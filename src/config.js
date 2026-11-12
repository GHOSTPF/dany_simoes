/* =========================================================
   CONFIGURAÇÃO — troque aqui e a página inteira é atualizada
   ========================================================= */

// Link do checkout (Hotmart / Kiwify / Eduzz). Ex.: https://pay.kiwify.com.br/XXXX
export const CHECKOUT_URL = '[LINK]'

// WhatsApp: só números, com DDI e DDD. Ex.: 5583999999999
// Enquanto não for preenchido, o botão flutuante do WhatsApp fica escondido.
export const WHATSAPP_NUMERO = '[NUMERO]'
export const WHATSAPP_MSG = 'Olá! Vim pela página do ebook Venda de Bem-Casados e tenho uma dúvida 😊'

export const EBOOK = 'Venda de Bem-Casados'
export const AUTORA = 'Dany Simões'
export const INSTAGRAM = 'dannysimoesconfeitaria'
export const INSTAGRAM_URL = `https://instagram.com/${INSTAGRAM}`

// ---- derivados (não precisa mexer) ----
export const CHECKOUT_HREF = /^https?:\/\//.test(CHECKOUT_URL) ? CHECKOUT_URL : '#oferta'
const zap = WHATSAPP_NUMERO.replace(/\D/g, '')
export const WHATSAPP_HREF = zap.length >= 10
  ? `https://wa.me/${zap}?text=${encodeURIComponent(WHATSAPP_MSG)}`
  : null
