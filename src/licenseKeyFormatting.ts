export function licenseKeyFormatting(S: string, K: number): string {
    S = S.replace(/-/g, '').toUpperCase();
    
    const firstGroupLength = S.length % K || K;
    const groups = [S.slice(0, firstGroupLength)];
    
    for (let i = firstGroupLength; i < S.length; i += K) {
        groups.push(S.slice(i, i + K));
    }
    
    return groups.join('-');
}