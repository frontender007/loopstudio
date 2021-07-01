const Footer = () => {
    return (
        <footer>
            
            <div className="row">
                <div>
                    <a href="/" className="brand-identity">
                        <img src="/images/logo.svg" alt="Site Logo" />
                    </a>
                </div>
                <div className="social">
                    <ul>
                        <li><a href="/"><img src="/images/icon-facebook.svg" alt="Facebook Icon" /></a></li>
                        <li><a href="/"><img src="/images/icon-twitter.svg" alt="Twitter Icon" /></a></li>
                        <li><a href="/"><img src="/images/icon-pinterest.svg" alt="Pinterest Icon" /></a></li>
                        <li><a href="/"><img src="/images/icon-instagram.svg" alt="Instagram Icon" /></a></li>
                    </ul>
                </div>
            </div>

            <div className="row">
                <div>
                    <nav>
                        <ul>
                            <li><a href="/">About</a></li>
                            <li><a href="/">Careers</a></li>
                            <li><a href="/">Events</a></li>
                            <li><a href="/">Products</a></li>
                            <li><a href="/">Support</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="copy-right">
                    <small>&copy; Loopstudio 2021 All Rights Are Strictly Reserved</small>
                </div>
            </div>
        </footer>
    )
}

export default Footer;