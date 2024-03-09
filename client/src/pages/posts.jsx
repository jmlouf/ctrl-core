var NewComponent = React.createClass({
    render: function () {
        return (
            <><div>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Forum</title>
                <link rel="stylesheet" href="style.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:ital@1&display=swap" rel="stylesheet" />
            </div>
                <header>
                    <div className="navbar">
                        <nav className="navigation hide" id="navigation">
                            <span className="close-icon" id="close-icon" onclick="showIconBar()"><i className="fa fa-close" /></span>
                            <ul className="nav-list">
                                <li className="nav-item"><a href="forums.html">Forums</a></li>
                                <li className="nav-item"><a href="posts.html">Posts</a></li>
                                <li className="nav-item"><a href="detail.html">Detail</a></li>
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
          <div className="navigate">
            <span><a href>MyForum - Forums</a> &gt;&gt; <a href>random subforum</a></span>
          </div>
          </div>
          <div className="posts-table">
            <div className="table-head">
              <div className="status">Status</div>
              <div className="subjects">Subjects</div>
              <div className="replies">Replies/Views</div>
              <div className="last-reply">Last Reply</div>
            </div>
            <div className="table-row">
              <div className="status"><i className="fa fa-fire" /></div>
              <div className="subjects">
                <a href>Is learning Python on 2023 worth it?</a>
                <br />
                <span>Started by <b><a href>User</a></b> .</span>
              </div>
              <div className="replies">
                2 replies <br /> 125 views
              </div>
              <div className="last-reply">
                Oct 12 2023
                <br />By <b><a href>User</a></b>
              </div>
            </div>
            <div className="table-row">
              <div className="status"><i className="fa fa-fire" /></div>
              <div className="subjects">
                <a href>Is learning Python on 2023 worth it?</a>
                <br />
                <span>Started by <b><a href>User</a></b> .</span>
              </div>
              <div className="replies">
                2 replies <br /> 125 views
              </div>
              <div className="last-reply">
                Oct 12 2023
                <br />By <b><a href>User</a></b>
              </div>
            </div>
            <div className="table-row">
              <div className="status"><i className="fa fa-fire" /></div>
              <div className="subjects">
                <a href>Is learning Python on 2023 worth it?</a>
                <br />
                <span>Started by <b><a href>User</a></b> .</span>
              </div>
              <div className="replies">
                2 replies <br /> 125 views
              </div>
              <div className="last-reply">
                Oct 12 2023
                <br />By <b><a href>User</a></b>
              </div>
            </div>
            <div className="table-row">
              <div className="status"><i className="fa fa-book" /></div>
              <div className="subjects">
                <a href>Is learning Python on 2023 worth it?</a>
                <br />
                <span>Started by <b><a href>User</a></b> .</span>
              </div>
              <div className="replies">
                2 replies <br /> 125 views
              </div>
              <div className="last-reply">
                Oct 12 2023
                <br />By <b><a href>User</a></b>
              </div>
            </div>
            <div className="table-row">
              <div className="status"><i className="fa fa-rocket" /></div>
              <div className="subjects">
                <a href>Is learning Python on 2023 worth it?</a>
                <br />
                <span>Started by <b><a href>User</a></b> .</span>
              </div>
              <div className="replies">
                2 replies <br /> 125 views
              </div>
              <div className="last-reply">
                Oct 12 2023
                <br />By <b><a href>User</a></b>
              </div>
            </div>
            <div className="table-row">
              <div className="status"><i className="fa fa-frown-o" /></div>
              <div className="subjects">
                <a href>Is learning Python on 2023 worth it?</a>
                <br />
                <span>Started by <b><a href>User</a></b> .</span>
              </div>
              <div className="replies">
                2 replies <br /> 125 views
              </div>
              <div className="last-reply">
                Oct 12 2023
                <br />By <b><a href>User</a></b>
              </div>
            </div>
            <div className="table-row">
              <div className="status"><i className="fa fa-fire" /></div>
              <div className="subjects">
                <a href>Is learning Python on 2023 worth it?</a>
                <br />
                <span>Started by <b><a href>User</a></b> .</span>
              </div>
              <div className="replies">
                2 replies <br /> 125 views
              </div>
              <div className="last-reply">
                Oct 12 2023
                <br />By <b><a href>User</a></b>
              </div>
            </div>
            <div className="table-row">
              <div className="status"><i className="fa fa-fire" /></div>
              <div className="subjects">
                <a href>Is learning Python on 2023 worth it?</a>
                <br />
                <span>Started by <b><a href>User</a></b> .</span>
              </div>
              <div className="replies">
                2 replies <br /> 125 views
              </div>
              <div className="last-reply">
                Oct 12 2023
                <br />By <b><a href>User</a></b>
              </div>
            </div>
            <div className="table-row">
              <div className="status"><i className="fa fa-lock" /></div>
              <div className="subjects">
                <a href>Is learning Python on 2023 worth it?</a>
                <br />
                <span>Started by <b><a href>User</a></b> .</span>
              </div>
              <div className="replies">
                2 replies <br /> 125 views
              </div>
              <div className="last-reply">
                Oct 12 2023
                <br />By <b><a href>User</a></b>
              </div>
            </div>
            <div className="table-row">
              <div className="status"><i className="fa fa-fire" /></div>
              <div className="subjects">
                <a href>Is learning Python on 2023 worth it?</a>
                <br />
                <span>Started by <b><a href>User</a></b> .</span>
              </div>
              <div className="replies">
                2 replies <br /> 125 views
              </div>
              <div className="last-reply">
                Oct 12 2021
                <br />By <b><a href>User</a></b>
              </div>
              </div>
              </div></>

        );
    }
});