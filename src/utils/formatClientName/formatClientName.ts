export function formatClientName(fullName: string | undefined): string {
    if (fullName) {
        const parts = fullName.trim().split(' ');
    
        if (parts.length === 2 || parts.length === 3) {
            const lastName = parts[0];
            const firstName = parts[1];
            return `${lastName} ${firstName.charAt(0)}.`;
        }
    
        if (parts.length === 1) {
            const lastName = parts[0];
            return `${lastName}`;
        }
    }

    return '';
}