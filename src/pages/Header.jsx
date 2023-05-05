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
              <h2>Filter your favorite deal below</h2>
            </div>
            <div className="filter">
              <button className="active">
                Season <span>1</span>
              </button>
              <button>
                Season <span>2</span>
              </button>
            </div>
            <div>
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
  );
};

export default Header;
