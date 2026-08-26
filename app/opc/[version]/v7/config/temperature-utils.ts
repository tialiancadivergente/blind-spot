export const TEMPERATURE_TAG_MAP: Record<string, number> = {
  'q': 121271,
  'm': 121271,
  'f': 121271,
  't': 121271,
  'o': 121271,
  'org': 121271
};

/**
 * Retorna o ID da tag baseado na temperatura fornecida
 * @param temperature - Valor da temperatura (q, m, f, o)
 * @returns ID numérico da tag ou null se não encontrado
 */
export const getTagIdByTemperature = (temperature: string): number | null => {
  return TEMPERATURE_TAG_MAP[temperature] || null;
};

/**
 * Verifica se uma temperatura é válida
 * @param temperature - Valor da temperatura para verificar
 * @returns true se a temperatura é válida, false caso contrário
 */
export const isValidTemperature = (temperature: string): boolean => {
  return temperature in TEMPERATURE_TAG_MAP;
};

/**
 * Retorna todas as temperaturas válidas
 * @returns Array com todas as temperaturas válidas
 */
export const getValidTemperatures = (): string[] => {
  return Object.keys(TEMPERATURE_TAG_MAP);
};

export const NORMALIZED_TEMPERATURE_VALUES = ["q", "f", "m", "t", "org", "ind"] as const;

export type NormalizedTemperature =
  (typeof NORMALIZED_TEMPERATURE_VALUES)[number];

export const normalizeTemperature = (
  value: string | string[] | undefined
): NormalizedTemperature | undefined => {
  const rawValue = Array.isArray(value) ? value[0] : value;
  if (!rawValue) return undefined;

  if (rawValue === "o") {
    return "org";
  }

  if (
    rawValue === "q" ||
    rawValue === "f" ||
    rawValue === "m" ||
    rawValue === "t" ||
    rawValue === "ind" ||
    rawValue === "org"
  ) {
    return rawValue;
  }

  return undefined;
};