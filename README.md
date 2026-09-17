# Mulch Measure Calculator Kit

Small, dependency-free JavaScript functions and a reference CSV for common mulch-volume checks. The kit is intended for calculators, worksheets, and order-planning tools that use square feet, inches, cubic feet, and cubic yards.

## Included files

- `src/mulchMath.js` contains pure functions for volume, cubic-yard conversion, whole-bag rounding, coverage by depth, and quote-depth checks.
- `data/mulch-coverage-by-depth.csv` lists the exact area covered by one cubic yard at depths from one to six inches.
- `tests/mulchMath.test.mjs` runs worked examples with Node's built-in assertion module.

## Quick start

```js
import { cubicYardsFromArea, bagsNeeded } from "./src/mulchMath.js";

const cubicYards = cubicYardsFromArea(120, 3);
const bags = bagsNeeded(30, 2);

console.log(cubicYards); // 1.1111111111111112
console.log(bags);       // 15
```

## Formulas

```text
cubic feet = square feet × depth in inches ÷ 12
cubic yards = square feet × depth in inches ÷ 324
bags needed = round up(cubic feet ÷ bag size in cubic feet)
one-yard coverage in square feet = 324 ÷ depth in inches
quote depth in inches = quoted cubic yards × 324 ÷ square feet
```

Run the worked examples with:

```text
node tests/mulchMath.test.mjs
```

For a ready-to-use browser calculator, visit [Mulch Measure](https://mulchmeasure.com/).
