// TAILWIND
////

// Tailwind cannot render dynamic classes using string interpolation
// We must offer a string compilable as legit utility class at JIT

const TW_BASE_CLICKABLE = ['cursor-pointer', 'active:outline-1'];

const TW_CLICKABLE: Record<BtnStyleBase, string[]> = {
  'rose-outlined': [
    'outline-rose-800',
    'text-rose-600',
    'bg-rose-900/25',
    'hover:text-rose-500',
    'hover:bg-rose-900/15',
    'active:text-rose-700',
    'active:bg-rose-900/5',
    ...TW_BASE_CLICKABLE,
  ],
  'emerald-outlined': [
    'outline-emerald-800',
    'text-emerald-600',
    'bg-emerald-900/25',
    'hover:text-emerald-500',
    'hover:bg-emerald-900/15',
    'active:text-emerald-700',
    'active:bg-emerald-900/5',
    ...TW_BASE_CLICKABLE,
  ],
  'amber-outlined': [
    'outline-amber-200/30',
    'text-amber-200/75',
    'bg-amber-800/20',
    'hover:text-amber-300/95',
    'hover:bg-amber-800/15',
    'active:text-amber-200/85',
    'active:bg-amber-800/10',
    ...TW_BASE_CLICKABLE,
  ],
  'gray-outlined': [
    'outline-gray-600',
    'text-gray-400',
    'bg-gray-700/25',
    'hover:text-gray-300',
    'hover:bg-gray-700/15',
    'active:text-gray-200',
    'active:bg-gray-700/5',
    ...TW_BASE_CLICKABLE,
  ],
  'disabled-gray-outlined': [
    'disabled:outline-gray-700',
    'disabled:text-gray-600',
    'disabled:bg-gray-800/25',
    'cursor-not-allowed',
  ],
  'pink-link': ['text-pink-500', 'hover:text-pink-400', 'active:text-pink-300', 'cursor-pointer'],
  'slate-link': [
    'text-slate-300/80',
    'hover:text-slate-300',
    'active:text-slate-200',
    'cursor-pointer',
  ],
};

const TW_PROGRESSBAR: Record<ProgressbarPercent, string> = {
  0: 'w-[0%]',
  25: 'w-[25%]',
  50: 'w-[50%]',
  75: 'w-[75%]',
  100: 'w-[100%]',
};

const TW_SNACKBAR_ICONS: Record<SnackIcons, string> = {
  'icon-warning': 'text-rose-600 bg-rose-900/30',
  'icon-check': 'text-emerald-600 bg-emerald-900/30',
};

// LOCALE
////

const CURRENCY_LOCALES: Record<Currency, Locale> = { EUR: 'es-ES', USD: 'en-US' };

// REGEX
////

/** RegExp Pattern: **Image URL**
 *
 * Included some special characters that can be present in the URL, like the port, passwords or parameters
 * More info on URL structure:
 *
 * - https://es.wikipedia.org/wiki/Localizador_de_recursos_uniforme
 * - https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL#url_usernames_and_passwords
 * - https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL
 *
 *  e.g. Valid URL:
 *  - `https://www.direccion.com/nuevo-articulo.jpg`
 *  - `http://es.wikipedia.org:80/wiki/Special:Search?search=tren&go=Go`
 *  - `https://username:password@www.example.com:8080`
 */
const REGEX_URL =
  /^(http|https):(\/){2}(\w|\.|\/|-|_|&|\?|=|#|~|@|:){1,}(\.){1}(\w){2,3}(\w|\.|\/|-|_|&|\?|=|#|~|@|:){1,}/;

export { TW_CLICKABLE, TW_PROGRESSBAR, TW_SNACKBAR_ICONS, CURRENCY_LOCALES, REGEX_URL };
