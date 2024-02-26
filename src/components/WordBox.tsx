function WordBox({ displayText } : { displayText: string }) {
    return (
        <p className="typer default-text">&#8205;{displayText}</p>
    )
}

export default WordBox;