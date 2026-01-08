export function onlyDigits(value: string) {
  return (value ?? "").replace(/\D/g, "");
}

/**
 * Formata telefone BR para exibição.
 * - 10 dígitos: (11) 3333-2222
 * - 11 dígitos: (11) 98888-7777
 */
export function formatBrazilPhone(value: string) {
  const digits = onlyDigits(value).slice(0, 11);
  if (!digits) return "";

  const ddd = digits.slice(0, 2);
  const isMobile = digits.length > 10;
  const part1 = isMobile ? digits.slice(2, 7) : digits.slice(2, 6);
  const part2 = isMobile ? digits.slice(7, 11) : digits.slice(6, 10);

  let out = `(${ddd}`;
  if (digits.length >= 2) out += ") ";
  out += part1;
  if (part2) out += `-${part2}`;
  return out;
}


