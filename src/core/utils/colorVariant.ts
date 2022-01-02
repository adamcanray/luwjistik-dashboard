import Cookies, { CookieAttributes } from 'js-cookie'
import { Tcolors, colors } from '.'

const COOKIE_NAME = 'color-variant:luwjistik-dashboard'
const COLOR_VARIANT_DEFAULT = 'pink'
const COLOR_VARIANT_MAP_COLOR_KEY = 300

export const colorVariantGetter = (): string => {
  return Cookies.get(COOKIE_NAME) || COLOR_VARIANT_DEFAULT
}

export const colorVariantSetter = (
  colorVariant: keyof Tcolors,
  attributes?: CookieAttributes
) => {
  Cookies.set(COOKIE_NAME, colorVariant, attributes)
}

export const colorVariantMap = () => {
  const keyColors = Object.keys(colors)
  return keyColors.map((e: string) => ({
    name: e,
    color: colors[e as keyof Tcolors][COLOR_VARIANT_MAP_COLOR_KEY],
    colorKey: COLOR_VARIANT_MAP_COLOR_KEY,
  }))
}
