import { Md5 } from 'ts-md5'

export const toMd5 = (str: string): string => {
  return Md5.hashStr(str)
}
