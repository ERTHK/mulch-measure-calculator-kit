import assert from "node:assert/strict";
import {
  bagsNeeded,
  coveragePerCubicYard,
  cubicFeetFromArea,
  cubicYardsFromArea,
  quoteDepthInches,
} from "../src/mulchMath.js";

assert.equal(cubicFeetFromArea(120, 3), 30);
assert.equal(cubicYardsFromArea(120, 3), 30 / 27);
assert.equal(bagsNeeded(30, 2), 15);
assert.equal(bagsNeeded(30, 3), 10);
assert.equal(coveragePerCubicYard(3), 108);
assert.equal(quoteDepthInches(120, 1.5), 4.05);

console.log("All mulch-math examples passed.");
