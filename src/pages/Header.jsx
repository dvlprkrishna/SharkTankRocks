/* eslint-disable react/prop-types */
import "../assets/css/Header.css";
import sti from "/stilogo.png";
// eslint-disable-next-line react/prop-types
const Header = (props) => {
  function handleClick(event) {
    event.stopPropagation();
    const season = event.target.id === "s1btn" ? "Season 1" : "Season 2";
    props.onSeasonChange(season);
    // console.log(event.target.id === "s1btn");
  }

  return (
    console.log(props),
    (
      <>
        <header>
          <nav>
            <div className="navStripe">
              <div className="logoWrap">
                <img src={sti} width={80} alt="" />
                <p>List of Invesments made in Shark Tank India </p>
              </div>
              <div className="navLinks">
                <a href="/stats">Stats</a>
                <a href="/about">About Us</a>
                <a href="/" className="active">
                  Homepage
                </a>
              </div>
            </div>
            <div className="filterWrap">
              <div>
                <h2>Filter your favorite deal below</h2>
              </div>
              <div className="filter">
                <button
                  className={props.season == "Season1" ? "active" : "inactive"}
                  id="s1btn"
                  onClick={handleClick}
                >
                  Season 1
                </button>
                <button
                  id="s2btn"
                  className={props.season == "Season2" ? "active" : "inactive"}
                  onClick={handleClick}
                >
                  Season 2
                </button>
              </div>
              <div className="investors" style={{ zIndex: -1, cursor: "none" }}>
                <button>
                  Namita Thapar<span>22</span>
                </button>
                <button>
                  Ashneer Grover <span>21</span>
                </button>
                <button>
                  Vineeta Singh <span>15</span>
                </button>
                <button>
                  Aman Gupta <span>29</span>
                </button>
                <button>
                  Peyush Bansal <span>27</span>
                </button>
                <button>
                  Ghazal Alag <span>7</span>
                </button>
                <button>
                  Anupam Mittal <span>24</span>
                </button>
              </div>
            </div>
          </nav>
        </header>
      </>
    )
  );
};

export default Header;
