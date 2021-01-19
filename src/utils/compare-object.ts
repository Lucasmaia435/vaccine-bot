import { isEqual } from 'lodash'

export const compareObjects = (obj: object, objToCompare: object) => {
  return isEqual(obj, objToCompare)
}
