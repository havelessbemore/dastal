/**
 * Pad a string from both sides.
 */
export function pad(str: string, maxLen: number, fillString: string): string {
    const len = str.length;
    if (len >= maxLen) {
        return str;
    }
    const diff = maxLen - len;
    return str.padStart(len + diff / 2, fillString).padEnd(len + diff, fillString);
}
