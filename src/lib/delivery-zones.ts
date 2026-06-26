export const DELIVERY_ZONES = [
  "EC1", "EC2", "E2", "E5", "E8", "N1", "N4", "N5", "N6", "N7", "N10", "N16", "N19", "NW5",
];

export function normalisePostcode(raw: string): string {
  return raw.replace(/\s+/g, "").toUpperCase();
}

export function extractOutcode(postcode: string): string | null {
  const match = postcode.match(/^([A-Z]{1,2}\d{1,2}[A-Z]?)/);
  return match ? match[1] : null;
}

export function isInDeliveryZone(postcode: string): boolean {
  const normalised = normalisePostcode(postcode);
  const outcode = extractOutcode(normalised);
  if (!outcode) return false;
  return DELIVERY_ZONES.some((zone) => outcode.startsWith(zone));
}
