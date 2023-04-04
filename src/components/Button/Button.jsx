function Button({text, isLight}) {
    let styleName = isLight ? 'btn bgd-white' : 'btn bgd-black'
    return(
        <button
            className={`${styleName}`}>
            {text}
        </button>
    )
}

export default Button;