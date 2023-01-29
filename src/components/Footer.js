import { pageLists, socialLinks } from "../data";
function Footer() {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLists.map((list) => {
          return (
            <li key={list.id}>
              <a href={list.href} className="footer-link">
                {list.text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="footer-icons">
        {socialLinks.map((link) => {
          return (
            <li key={link.id}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="footer-icon"
              >
                <i className={link.icon}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
}

export default Footer;
