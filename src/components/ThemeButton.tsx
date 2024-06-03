import React, { useContext } from "react"

function ThemeButton(){
    const themeContext = React.createContext('dark')
    const theme = useContext(themeContext)
    return <>
    <button style={{background:theme}}>theme Button</button>
    </>
}

export default ThemeButton