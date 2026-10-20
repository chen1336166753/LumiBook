import en from './en.json' with { type: 'json' };
import zhHans from './zh-Hans.json' with { type: 'json' };

export type Language =
  | 'en'
  | 'zh-Hans'
  | 'zh-Hant'
  | 'fr'
  | 'es'
  | 'es-AR'
  | 'es-CL'
  | 'pl'
  | 'de'
  | 'ru'
  | 'ja'
  | 'it'
  | 'ca'
  | 'da'
  | 'hi'
  | 'sv-SE'
  | 'ur'
  | 'ar'
  | 'uk'
  | 'ko'
  | 'pt-BR'
  | 'fa'
  | 'nb-NO'
  | 'kk'
  | 'tr';

export type LanguageResource = typeof en;
export const SUPPORTED_LANGUAGES: Record<
  Language,
  {
    name: string;
    originalName: string;
    flagEmoji: string;
    rtl?: boolean;
    resource:
      | LanguageResource
      | (() => Promise<{ default: Partial<LanguageResource> }>);
  }
> = {
  en: {
    name: '英语',
    originalName: 'English',
    flagEmoji: '🇬🇧',
    resource: en,
  },
  ko: {
    name: '韩语',
    originalName: '한국어(대한민국)',
    flagEmoji: '🇰🇷',
    resource: () => import('./ko.json'),
  },
  'pt-BR': {
    name: '葡萄牙语（巴西）',
    originalName: 'português (Brasil)',
    flagEmoji: '🇧🇷',
    resource: () => import('./pt-BR.json'),
  },
  'zh-Hans': {
    name: '简体中文',
    originalName: '简体中文',
    flagEmoji: '🇨🇳',
    // 默认语言（见 i18next.ts 的 defaultLng），必须同步可用：
    // i18next init 的 resources 传入的是懒加载函数时，
    // 所有 key 查找都会失败并回退到 children。
    resource: zhHans,
  },
  'zh-Hant': {
    name: '繁体中文',
    originalName: '繁體中文',
    flagEmoji: '🇭🇰',
    resource: () => import('./zh-Hant.json'),
  },
  fr: {
    name: '法语',
    originalName: 'français',
    flagEmoji: '🇫🇷',
    resource: () => import('./fr.json'),
  },
  es: {
    name: '西班牙语',
    originalName: 'español',
    flagEmoji: '🇪🇸',
    resource: () => import('./es.json'),
  },
  'es-AR': {
    name: '西班牙语（阿根廷）',
    originalName: 'español (Argentina)',
    flagEmoji: '🇦🇷',
    resource: () => import('./es-AR.json'),
  },
  'es-CL': {
    name: '西班牙语（智利）',
    originalName: 'español (Chile)',
    flagEmoji: '🇨🇱',
    resource: () => import('./es-CL.json'),
  },
  pl: {
    name: '波兰语',
    originalName: 'Polski',
    flagEmoji: '🇵🇱',
    resource: () => import('./pl.json'),
  },
  de: {
    name: '德语',
    originalName: 'Deutsch',
    flagEmoji: '🇩🇪',
    resource: () => import('./de.json'),
  },
  ru: {
    name: '俄语',
    originalName: 'русский',
    flagEmoji: '🇷🇺',
    resource: () => import('./ru.json'),
  },
  ja: {
    name: '日语',
    originalName: '日本語',
    flagEmoji: '🇯🇵',
    resource: () => import('./ja.json'),
  },
  it: {
    name: '意大利语',
    originalName: 'italiano',
    flagEmoji: '🇮🇹',
    resource: () => import('./it.json'),
  },
  ca: {
    name: '加泰罗尼亚语',
    originalName: 'català',
    flagEmoji: '🇦🇩',
    resource: () => import('./ca.json'),
  },
  da: {
    name: '丹麦语',
    originalName: 'dansk',
    flagEmoji: '🇩🇰',
    resource: () => import('./da.json'),
  },
  hi: {
    name: '印地语',
    originalName: 'हिन्दी',
    flagEmoji: '🇮🇳',
    resource: () => import('./hi.json'),
  },
  'sv-SE': {
    name: '瑞典语',
    originalName: 'svenska (Sverige)',
    flagEmoji: '🇸🇪',
    resource: () => import('./sv-SE.json'),
  },
  ur: {
    name: '乌尔都语',
    originalName: 'اردو',
    flagEmoji: '🇵🇰',
    rtl: true,
    resource: () => import('./ur.json'),
  },
  ar: {
    name: '阿拉伯语',
    originalName: 'العربية',
    flagEmoji: '🇸🇦',
    rtl: true,
    resource: () => import('./ar.json'),
  },
  fa: {
    name: '波斯语',
    originalName: 'فارسی',
    flagEmoji: '🇮🇷',
    rtl: true,
    resource: () => import('./fa.json'),
  },
  uk: {
    name: '乌克兰语',
    originalName: 'українська',
    flagEmoji: '🇺🇦',
    resource: () => import('./uk.json'),
  },
  'nb-NO': {
    name: '挪威语',
    originalName: 'Norsk (Bokmål)',
    flagEmoji: '🇳🇴',
    resource: () => import('./nb-NO.json'),
  },
  kk: {
    name: '哈萨克语',
    originalName: 'Қазақша',
    flagEmoji: '🇰🇿',
    resource: () => import('./kk.json'),
  },
  tr: {
    name: '土耳其语',
    originalName: 'Türkçe',
    flagEmoji: '🇹🇷',
    resource: () => import('./tr.json'),
  },
};
