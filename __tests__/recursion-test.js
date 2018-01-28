const rec = x => {
    console.log(`### x is ${x}`);
    if (x < 3) rec(x + 1);
    
}
it('should console.log "\n### x is 0\n### x is 1\n### x is 2', () => {
    expect(rec(0)).toEqual(undefined);
});