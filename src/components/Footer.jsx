import "./footer.css";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <p>
            <span>&copy;{currentYear} Lauren Moore</span>
            <span className="footer-separator">·</span>
                <a
                    href="https://github.com/Lauren245/DnD-Names"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View on GitHub
                </a>
            </p>
            
        </footer>
    )
};
export default Footer;