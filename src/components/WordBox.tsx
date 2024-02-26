function WordBox({ displayText } : { displayText: string }) {
    return (
        <div className='word-box'>
            <p>&#8205;{displayText}</p>
        </div>
    )
}

export default WordBox;