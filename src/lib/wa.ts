/**
 * Build a WhatsApp deep link with optional pre-filled message.
 * Centralized so every CTA points to the same URL with the same message.
 *
 * Pre-fills only work on wa.me (mobile and web). Native sharing won't,
 * but that's a graceful degradation — the chat just opens empty.
 */
import { SITE } from '../config/site';

export function waLink(message?: string): string {
  const text = encodeURIComponent(message ?? SITE.contact.waMessage);
  return `${SITE.contact.waUrl}?text=${text}`;
}
