type DateStyle = Intl.DateTimeFormatOptions['dateStyle'];

export function formatDate(date: string, dateStyle: DateStyle = 'medium', locales = 'en') {
	const formatter = new Intl.DateTimeFormat(locales, { dateStyle });
	return formatter.format(new Date(date));
}

export function truncatedBech(bech32: string, length?: number): string {
	const bech32Length = bech32.length;
    return `${bech32.substring(0, length || 9)}...${bech32.substring(bech32Length - 9)}`;
}
