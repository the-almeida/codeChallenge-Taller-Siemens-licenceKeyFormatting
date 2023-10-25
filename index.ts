import { licenseKeyFormatting } from './src/licenseKeyFormatting';

console.log("Running licenseKeyFormatting with the provided examples: \n -1st: S = '5F3Z-2e-9-w',  K = 4 \n -2nd: S = '2-5g-3-J', K = 2")
const input1 = '5F3Z-2e-9-w';
const k1 = 4;
const result1 = licenseKeyFormatting(input1, k1);
console.log('\nResult 1:', result1);

const input2 = '2-5g-3-J';
const k2 = 2;
const result2 = licenseKeyFormatting(input2, k2);
console.log('\nResult 2:', result2);

console.log("\nYou can also run 'npm run test' to see another use cases tested.\n\n");
