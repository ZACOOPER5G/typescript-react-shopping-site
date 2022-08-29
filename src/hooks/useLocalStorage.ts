import { useEffect, useState } from "react"

export const useLocalStorage = <T>(key: string, intialValue: T | (() => T)) => {
    const [value, setValue] = useState<T>(() => {
        const jsonValue = localStorage.getItem(key)
        if (jsonValue != null) return JSON.parse(jsonValue)

        if (typeof intialValue === "function") {
            return (intialValue as () => T)()
        } else {
            return intialValue
        }
    })

    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])
    
    return [value, setValue]
}