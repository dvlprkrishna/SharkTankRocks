import "../assets/css/Header.css";

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <div className="navStripe">
            <p>List of Invesments made in Shark Tank India </p>
            <a href="#">About Us</a>
          </div>
          <div className="filterWrap">
            <div>
              <h2>Find your favorite deal below</h2>
            </div>
            <div className="filter">
              <button>
                Season <span>1</span>
              </button>
              <button>
                Season <span>2</span>
              </button>
            </div>
            <div>
              <button>
                Namita Thapar<span>1</span>
              </button>
              <button>
                Ashneer Grover <span>2</span>
              </button>
              <button>
                Vineeta Singh <span>2</span>
              </button>
              <button>
                Aman Gupta <span>2</span>
              </button>
              <button>
                Peyush Bansal <span>2</span>
              </button>
              <button>
                Ghazal Alag <span>2</span>
              </button>
              <button>
                Anupam Mittal <span>2</span>
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
