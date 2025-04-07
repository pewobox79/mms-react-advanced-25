import { useState } from "react";

export default function useLocalStorage<T>(key: string) {

    const [value, setValue] = useState<T | null>(() => {

        if (typeof window === "undefined") {
            return null
        }

        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : null;

    })

    const setStoredValue = (newValue: T) => {
        setValue(newValue)
        if (typeof window !== "undefined") {
            localStorage.setItem(key, JSON.stringify(newValue))
        }
    }

    const removeLocalStorage = () => {
        setValue(null)
        if (typeof window !== "undefined") {
            localStorage.removeItem(key)
        }
    }



    return { value, setStoredValue, removeLocalStorage }

}