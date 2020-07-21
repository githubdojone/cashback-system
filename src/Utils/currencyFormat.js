export function currencyFormat(value, prefix = true) {

  return value.toLocaleString('pt-BR', {
    currencyDisplay: 'symbol',
    currency: prefix ? 'BRL' : null,
    style: 'currency',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}
