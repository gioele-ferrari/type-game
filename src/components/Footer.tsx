function Footer({author} : {author : string}) {
    return (
        <div className="footer">
            <a href="https://github.com/gioele-ferrari">{author}</a>
        </div>
    )
}

export default Footer;