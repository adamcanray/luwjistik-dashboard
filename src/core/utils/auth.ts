import Cookies, { CookieAttributes } from 'js-cookie'

const COOKIE_NAME = 'session:luwjistik-dashboard'

export const authSessionGetter = (): string | undefined => {
  return Cookies.get(COOKIE_NAME)
}

export const authSessionSetter = (
  session: string,
  attributes?: CookieAttributes
) => {
  Cookies.set(COOKIE_NAME, session, attributes)
}

export const authSessionRemover = (): void => {
  Cookies.remove(COOKIE_NAME)
}
