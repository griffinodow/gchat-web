import { useEffect, useState } from 'react'

const PREFIX = 'gchat-'

export const useLocalStorage = (
  key: string,
  initialValue?: JSON | Function | Array<any> | undefined) => {
  const prefixedKey = PREFIX + key
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey)
    if (jsonValue !== null) return JSON.parse(jsonValue)
    if (typeof initialValue === 'function') {
      return initialValue()
    } else {
      return initialValue
    }
  })

  const deleteValue = () => {
    localStorage.removeItem(prefixedKey)
  }

  useEffect(() => {
    if (value === undefined) return
    localStorage.setItem(prefixedKey, JSON.stringify(value))
  },
  [prefixedKey, value])

  return [value, setValue, deleteValue]
}
