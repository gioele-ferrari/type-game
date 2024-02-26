function Footer({author} : {author : string}) {
    return (
        <div className="footer">
            <p>Author: <a href="https://github.com/gioele-ferrari">{author}</a></p>
        </div>
    )
}

export default Footer;