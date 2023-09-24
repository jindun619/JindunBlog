import { useEffect } from "react"

function useTheme() {
    useEffect(()=> {
        // SETTING THEME
        const systemTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'winter'
        const curTheme = window.localStorage.getItem('theme') || systemTheme
        document.querySelector("html").setAttribute('data-theme', curTheme)
        window.localStorage.setItem('theme', curTheme)
    })
}

export { useTheme }