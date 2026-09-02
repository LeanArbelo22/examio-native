export const colors = {
  primary: {
    50: '#eef2ff',
    100: '#e0e7ff',
    200: '#c7d2fe',
    300: '#a5b4fc',
    400: '#818cf8',
    500: '#6366f1',
    600: '#4f46e5',
    700: '#4338ca',
    800: '#3730a3',
    900: '#312e81',
  },
  neutral: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
  },
  success: {
    background: '#ecfdf5',
    border: '#d1fae5',
    text: '#047857',
    solid: '#059669',
  },
  warning: {
    background: '#fffbeb',
    border: '#fde68a',
    text: '#b45309',
    solid: '#d97706',
  },
  danger: {
    background: '#fef2f2',
    border: '#fee2e2',
    text: '#b91c1c',
    solid: '#dc2626',
  },
  info: {
    background: '#eff6ff',
    border: '#dbeafe',
    text: '#1d4ed8',
    solid: '#2563eb',
  },
  white: '#ffffff',
  black: '#000000',
  transparent: 'transparent',
} as const;

export const semanticColors = {
  screenBackground: colors.neutral[50],
  surface: colors.white,
  surfaceMuted: colors.neutral[100],
  border: colors.neutral[200],
  borderStrong: colors.neutral[300],
  text: colors.neutral[900],
  textStrong: colors.neutral[800],
  textMuted: colors.neutral[500],
  primary: colors.primary[600],
  primaryPressed: colors.primary[700],
  primarySoft: colors.primary[50],
  primaryBorder: colors.primary[100],
  onPrimary: colors.white,
} as const;

export const spacing = {
  0: 0,
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  8: 32,
  10: 40,
  12: 48,
} as const;

export const borderRadius = {
  small: 6,
  medium: 8,
  large: 12,
  extraLarge: 16,
  card: 16,
  pill: 9999,
} as const;

export const fontSize = {
  caption: 12,
  bodySmall: 14,
  body: 16,
  titleSmall: 18,
  title: 24,
  display: 30,
} as const;

export const lineHeight = {
  caption: 16,
  bodySmall: 20,
  body: 24,
  titleSmall: 24,
  title: 32,
  display: 36,
} as const;

export const fontWeight = {
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extraBold: '800',
} as const;

export const shadows = {
  card: {
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  floating: {
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 6,
  },
} as const;

export const layout = {
  screenPadding: spacing[4],
  sectionGap: spacing[6],
  cardPadding: spacing[4],
  contentMaxWidth: 800,
} as const;

export const theme = {
  colors,
  semanticColors,
  spacing,
  borderRadius,
  fontSize,
  lineHeight,
  fontWeight,
  shadows,
  layout,
} as const;

export type AppTheme = typeof theme;
