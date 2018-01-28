const rec = x => {
    console.log(`### x is ${x}`);
    if (x < 3) rec(x + 1);
    
}
it('should console.log "\n### x is 0\n### x is 1\n### x is 2', () => {
    expect(rec(0)).toEqual(undefined);
});
it('should print out a countdown', () => {
    const down = x => {
        if (x === 0) {
            console.log(`\n### 0 is x "λ" - THE END`);
            return;
        }
        console.log(`\n### x is ${x}`);
        down(x - 1);
    };
    expect(down(10)).toEqual(undefined);
});