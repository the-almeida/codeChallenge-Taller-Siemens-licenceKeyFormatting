import { licenseKeyFormatting } from '../src/licenseKeyFormatting'

describe('licenseKeyFormatting', () => {
    it('should handle a key with only dashes', () => {
        const result = licenseKeyFormatting('----', 2);
        expect(result).toBe('');
    });

    it('should handle an empty key', () => {
        const result = licenseKeyFormatting('', 2);
        expect(result).toBe('');
    });
    it('should reformat a simple key with dashes and lowercase letters', () => {
        const result = licenseKeyFormatting('5F3Z-2e-9-w', 4);
        expect(result).toBe('5F3Z-2E9W');
    });

    it('should handle a key with no dashes', () => {
        const result = licenseKeyFormatting('1A2B3C4D', 1);
        expect(result).toBe('1-A-2-B-3-C-4-D');
    });

    it('should remove dashes and uppercase the string when K equal to the string length', () => {
        const result = licenseKeyFormatting('ABC-DEF-GHI', 12);
        expect(result).toBe('ABCDEFGHI');
    });

    it('should remove dashes and uppercase the string when K greater than the length of the string', () => {
        const result = licenseKeyFormatting('abc-def-ghi', 10);
        expect(result).toBe('ABCDEFGHI');
    });
});