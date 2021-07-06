const Navbar = () => {
    return (
        <div className="navbar">

            <div>
                <a href="/" className="brand-identity">
                    <img src="https://github.com/frontender007/loopstudio/blob/master/public/images/logo.svg" alt="Site Logo" />
                </a>
            </div>

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

        </div>
    )
}

export default Navbar;