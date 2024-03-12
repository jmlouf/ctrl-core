import Posts from "../pages/posts";
import Details from "../pages/Details";

const Forums = () => ({
  render: function () {
    return (
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Forum</title>
        <header>
          <div className="navbar">
            <nav className="navigation hide" id="navigation">
              <span className="close-icon" id="close-icon" onclick="showIconBar()"><i className="fa fa-close" /></span>
              <ul className="nav-list">
                <li className="nav-item"><Forums /></li>
                <li className="nav-item"><Posts /></li>
                <li className="nav-item"><Details /></li>
              </ul>
            </nav>
            <a className="bar-icon" id="iconBar" onclick="hideIconBar()"><i className="fa fa-bars" /></a>
            <div className="brand">My Forum</div>
          </div>
          <div className="search-box">
            <div>
              <select name id>
                <option value="Everything">Everything</option>
                <option value="Titles">Titles</option>
                <option value="Descriptions">Descriptions</option>
              </select>
              <input type="text" name="q" placeholder="search ..." />
              <button><i className="fa fa-search" /></button>
            </div>
          </div>
        </header>
        <div className="container">
          <div className="subforum">
            <div className="subforum-title">
              <h1>General Information</h1>
            </div>
            <div className="subforum-row">
              <div className="subforum-icon subforum-column center">
                <i className="fa fa-car center" />
              </div>
              <div className="subforum-description subforum-column">
                <h4><a href="#">Description Title</a></h4>
                <p>Description Content: Connect, Code, Conquer with CTRL-Core</p>
              </div>
              <div className="subforum-stats subforum-column center">
                <span>24 Posts | 12 Topics</span>
              </div>
              <div className="subforum-info subforum-column">
                <b><a href>Last post</a></b> by <a href>JustAUser</a>
                <br />on <small>12 Dec 2023</small>
              </div>
            </div>
            <div className="subforum">
              <div className="subforum-title">
                <h1>General Information</h1>
              </div>
              <div className="subforum-row">
                <div className="subforum-icon subforum-column center">
                  <i className="fa fa-car center" />
                </div>
                <div className="subforum-description subforum-column">
                  <h4><a href="#">Description Title</a></h4>
                  <p>Description Content: Connect, Code, Conquer with CTRL-Core</p>
                </div>
                <div className="subforum-stats subforum-column center">
                  <span>24 Posts | 12 Topics</span>
                </div>
                <div className="subforum-info subforum-column">
                  <b><a href>Last post</a></b> by <a href>JustAUser</a>
                  <br />on <small>12 Dec 2023</small>
                </div>
              </div>
              <hr className="subforum-devider" />
              <div className="subforum-row">
                <div className="subforum-icon subforum-column center">
                  <i className="fa fa-car center" />
                </div>
                <div className="subforum-description subforum-column">
                  <h4><a href="#">Description Title</a></h4>
                  <p>Description Content: Connect, Code, Conquer with CTRL-Core</p>
                </div>
                <div className="subforum-stats subforum-column center">
                  <span>24 Posts | 12 Topics</span>
                </div>
                <div className="subforum-info subforum-column">
                  <b><a href>Last post</a></b> by <a href>JustAUser</a>
                  <br />on <small>12 Dec 2023</small>
                </div>
              </div>
              <hr className="subforum-devider" />
              <div className="subforum-row">
                <div className="subforum-icon subforum-column center">
                  <i className="fa fa-car center" />
                </div>
                <div className="subforum-description subforum-column">
                  <h4><a href="#">Description Title</a></h4>
                  <p>Description Content: Connect, Code, Conquer with CTRL-Core</p>
                </div>
                <div className="subforum-stats subforum-column center">
                  <span>24 Posts | 12 Topics</span>
                </div>
                <div className="subforum-info subforum-column">
                  <b><a href>Last post</a></b> by <a href>JustAUser</a>
                  <br />on <small>12 Dec 2023</small>
                </div>
              </div>
              <hr className="subforum-devider" />
              <div className="subforum-row">
                <div className="subforum-icon subforum-column center">
                  <i className="fa fa-car center" />
                </div>
                <div className="subforum-description subforum-column">
                  <h4><a href="#">Description Title</a></h4>
                  <p>Description Content: Connect, Code, Conquer with CTRL-Core</p>
                </div>
                <div className="subforum-stats subforum-column center">
                  <span>24 Posts | 12 Topics</span>
                </div>
                <div className="subforum-info subforum-column">
                  <b><a href>Last post</a></b> by <a href>JustAUser</a>
                  <br />on <small>12 Dec 2023</small>
                </div>
              </div>
              <hr className="subforum-devider" />
              <div className="subforum-row">
                <div className="subforum-icon subforum-column center">
                  <i className="fa fa-car center" />
                </div>
                <div className="subforum-description subforum-column">
                  <h4><a href="#">Description Title</a></h4>
                  <p>Description Content: Connect, Code, Conquer with CTRL-Core</p>
                </div>
                <div className="subforum-stats subforum-column center">
                  <span>24 Posts | 12 Topics</span>
                </div>
                <div className="subforum-info subforum-column">
                  <b><a href>Last post</a></b> by <a href>JustAUser</a>
                  <br />on <small>12 Dec 2023</small>
                </div>
              </div>
            </div>
            <div className="subforum">
              <div className="subforum-title">
                <h1>General Information</h1>
              </div>
              <div className="subforum-row">
                <div className="subforum-icon subforum-column center">
                  <i className="fa fa-car center" />
                </div>
                <div className="subforum-description subforum-column">
                  <h4><a href="#">Description Title</a></h4>
                  <p>Description Content: Connect, Code, Conquer with CTRL-Core</p>
                </div>
                <div className="subforum-stats subforum-column center">
                  <span>24 Posts | 12 Topics</span>
                </div>
                <div className="subforum-info subforum-column">
                  <b><a href>Last post</a></b> by <a href>JustAUser</a>
                  <br />on <small>12 Dec 2023</small>
                </div>
              </div>
              <hr className="subforum-devider" />
              <div className="subforum-row">
                <div className="subforum-icon subforum-column center">
                  <i className="fa fa-car center" />
                </div>
                <div className="subforum-description subforum-column">
                  <h4><a href="#">Description Title</a></h4>
                  <p>Description Content: Connect, Code, Conquer with CTRL-Core </p>
                </div>
                <div className="subforum-stats subforum-column center">
                  <span>24 Posts | 12 Topics</span>
                </div>
                <div className="subforum-info subforum-column">
                  <b><a href>Last post</a></b> by <a href>JustAUser</a>
                  <br />on <small>12 Dec 2023</small>
                </div>
                <hr className="subforum-devider" />
                <div className="subforum-row">
                  <div className="subforum-icon subforum-column center">
                    <i className="fa fa-car center" />
                  </div>
                  <div className="subforum-description subforum-column">
                    <h4><a href="#">Description Title</a></h4>
                    <p>Description Content: Connect, Code, Conquer with CTRL-Core</p>
                  </div>
                  <div className="subforum-stats subforum-column center">
                    <span>24 Posts | 12 Topics</span>
                  </div>
                  <div className="subforum-info subforum-column">
                    <b><a href>Last post</a></b> by <a href>JustAUser</a>
                    <br />on <small>12 Dec 2023</small>
                  </div>
                </div>
                <hr className="subforum-devider" />
                <div className="subforum-row">
                  <div className="subforum-icon subforum-column center">
                    <i className="fa fa-car center" />
                  </div>
                  <div className="subforum-description subforum-column">
                    <h4><a href="#">Description Title</a></h4>
                    <p>Description Content: Connect, Code, Conquer with CTRL-Core</p>
                  </div>
                  <div className="subforum-stats subforum-column center">
                    <span>24 Posts | 12 Topics</span>
                  </div>
                  <div className="subforum-info subforum-column">
                    <b><a href>Last post</a></b> by <a href>JustAUser</a>
                    <br />on <small>12 Dec 2023</small>
                  </div>
                </div>
                <div className="forum-info">
                  <div className="chart">
                    MyForum - Stats &nbsp;<i className="fa fa-bar-chart" />
                  </div>
                  <span><u>5,369</u> Posts in <u>48</u> Topics by <u>8,124</u> Members.</span><br />
                  <span>Latest post: <b><a href>Random post</a></b> on Dec 15 2023 By <a href>RandomUser</a></span>.<br />
                  <span>Check <a href>the latest posts</a> .</span><br />
                </div>
                <footer>
                </footer>
              </div></div></div></div>
      </div>);
    }
});

export default Forums;
