



const isvalidamount = (amount: number): boolean => amount > 0 && amount <= 10000;

const testcase = [
    { input: 0, expected: true },
    {input:-5, expected: false},
    {input:10000, expected: true},
    {input:10001, expected: false},
    {input:0.01, expected: true}    
];

for (const tc of testcase) {
    const actual = isvalidamount(tc.input);
    const result = actual === tc.expected ? 'PASS' : 'FAIL';
    console.log(`${result}: input ${tc.input} -> expected ${tc.expected},got ${actual}`);
} 