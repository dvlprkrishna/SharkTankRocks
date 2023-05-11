import github from "/github.png";
import twitter from "/twitter.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div style={{ textAlign: "left" }}>
          <small>
            &copy; All trademarks, logos and brand names are the property of
            their respective owners. <br />
          </small>
          <small>
            &copy; {new Date().getFullYear()} All Right Reserved. Created By -
            <a
              href="https://krishnasahu.in"
              rel="noreferrer"
              target="_blank"
              style={{ marginLeft: "0.25em" }}
            >
              Krishna Sahu
            </a>
          </small>
        </div>
        <p>
          <a
            href="https://twitter.com/dvlprkrishna/"
            target="_blank"
            rel="noreferrer"
            style={{ marginRight: "1em" }}
          >
            <img src={twitter} width={30} alt="" />
          </a>
          <a
            href="https://github.com/dvlprkrishna/SharkTankRocks"
            target="_blank"
            rel="noreferrer"
          >
            <img src={github} width={30} alt="" />
          </a>
        </p>
      </footer>
    </>
  );
};

export default Footer;
