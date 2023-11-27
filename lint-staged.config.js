module.exports = {
  '*.{ts,tsx}': ['npm run lint', () => 'tsc --noEmit', 'prettier . --write '],
}
