/** Return cubic feet for a measured bed in square feet and a layer depth in inches. */
export function cubicFeetFromArea(squareFeet, depthInches) {
  requirePositive(squareFeet, "squareFeet");
  requirePositive(depthInches, "depthInches");
  return (squareFeet * depthInches) / 12;
}

/** Return cubic yards for a measured bed in square feet and a layer depth in inches. */
export function cubicYardsFromArea(squareFeet, depthInches) {
  return cubicFeetFromArea(squareFeet, depthInches) / 27;
}

/** Return the whole-number bag count needed for a known cubic-foot volume. */
export function bagsNeeded(cubicFeet, bagSizeCubicFeet) {
  requirePositive(cubicFeet, "cubicFeet");
  requirePositive(bagSizeCubicFeet, "bagSizeCubicFeet");
  return Math.ceil(cubicFeet / bagSizeCubicFeet);
}

/** Return square feet covered by one cubic yard at a selected depth in inches. */
export function coveragePerCubicYard(depthInches) {
  requirePositive(depthInches, "depthInches");
  return 324 / depthInches;
}

/** Return the installed depth represented by a cubic-yard quote over a known area. */
export function quoteDepthInches(squareFeet, quotedCubicYards) {
  requirePositive(squareFeet, "squareFeet");
  requireNonNegative(quotedCubicYards, "quotedCubicYards");
  return (quotedCubicYards * 324) / squareFeet;
}

function requirePositive(value, name) {
  if (!Number.isFinite(value) || value <= 0) {
    throw new RangeError(`${name} must be a finite number greater than zero.`);
  }
}

function requireNonNegative(value, name) {
  if (!Number.isFinite(value) || value < 0) {
    throw new RangeError(`${name} must be a finite number greater than or equal to zero.`);
  }
}
