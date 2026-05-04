import { useCallback, useState } from 'react'

function load<T>(key: string, defaultValue: T): T {
  if (typeof window === 'undefined') return defaultValue
  try {
    const raw = localStorage.getItem(key)
    if (raw == null) return defaultValue
    return JSON.parse(raw) as T
  } catch {
    return defaultValue
  }
}

function save<T>(key: string, value: T) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    /* quota or private mode */
  }
}

/**
 * Persists JSON-serializable state to localStorage only (never sent to a server).
 */
export function useLocalStorageJson<T>(storageKey: string, defaultValue: T) {
  const [value, setValue] = useState<T>(() =>
    load(storageKey, defaultValue),
  )

  const set = useCallback(
    (updater: T | ((prev: T) => T)) => {
      setValue((prev) => {
        const next =
          typeof updater === 'function'
            ? (updater as (p: T) => T)(prev)
            : updater
        save(storageKey, next)
        return next
      })
    },
    [storageKey],
  )

  const reset = useCallback(() => {
    setValue(defaultValue)
    try {
      localStorage.removeItem(storageKey)
    } catch {
      /* ignore */
    }
  }, [defaultValue, storageKey])

  return { value, set, reset }
}
