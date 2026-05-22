import "./footer.css";
import githubIcon from "../../assets/icons/github.svg";
export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="stackUsed">
          Made Using
          <img
            height="30px"
            width="30px"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
          />
        </div>
        <a className="footer-link" href="" target="_blank">
          <img src={githubIcon} alt="github icon" className="icons github" />
          <p>Shriyashzzz</p>
        </a>
        <div className="sourceCredit">
          <a href="https://ankeart.gumroad.com/?sort=featured" target="_blank">
            Harry Potter Font
          </a>
          <a
            className="apiAnchor"
            href="https://hp-api.onrender.com/?ref=freepublicapis.com"
            target="_blank"
          >
            Harry Potter API{" "}
          </a>
        </div>
      </footer>
    </>
  );
}
