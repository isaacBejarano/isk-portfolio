import { CURRENCY_LOCALES } from '@app/app-constants';

function localeFromCurrency(currency: Currency): Locale {
  return CURRENCY_LOCALES[currency];
}

export { localeFromCurrency };
