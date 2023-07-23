export const capitalize = (text?: string) => {
  if (typeof text === 'string') {
    return text
      .toLowerCase()
      .replace(/(?<!\p{L})\b\w(?!\/)/gu, letter => letter.toUpperCase())
  }
}
