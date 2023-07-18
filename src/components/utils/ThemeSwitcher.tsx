import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { FiMoon, FiSun } from 'react-icons/fi'


export const ThemeSwitcher = () => {
    const [theme, setTheme] = useState<string>(localStorage.getItem('theme') || 'light')

    console.log(theme)

    useEffect(() => {
        let html = document.querySelector("html") as HTMLElement
        html.className = theme
    }, [theme])



    const handleChange = () => {

        if (theme === 'light') {
            setTheme('dark')
            localStorage.setItem('theme', 'dark')
        }
        else {
            setTheme('light')
            localStorage.setItem('theme', 'light')
        }
    }

    return (
        <Button variant="ghost" className="rounded-full" size="icon" onClick={handleChange}>
            {
                theme !== 'light' ? (<FiSun size={20} />) : (<FiMoon size={20} />)
            }
        </Button>
    );
}