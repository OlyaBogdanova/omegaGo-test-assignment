import React, { useState } from 'react'

type HookReturn = {
    values: Record<string, string>
    onChange(key: string, value: string): void
    clear(): void
}

export default function useMultiplyInputs(): HookReturn {
    const [values, setInputValues] = useState({
        inputValue1: '',
        inputValue2: '',
        inputValue3: '',
        inputValue4: '',
    });
    

    function onChange(key: string, value: string) {
        setInputValues((prevState) => {
            return { ...prevState, [key]: value };
        });
    }

    function clear() {
        setInputValues({
            inputValue1: '',
            inputValue2: '',
            inputValue3: '',
            inputValue4: '',
        });
    }


    return {values, onChange, clear}
}
