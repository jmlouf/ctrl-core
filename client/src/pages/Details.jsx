var NewComponent = React.createClass({
    render: function () {
        return (
            <div>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Forum</title>
            <link rel="stylesheet" href="style.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:ital@1&display=swap" rel="stylesheet" />
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
              <div className="container">
                <div className="navigate">
                  <span><a href>MyForum - Forums</a> &gt;&gt; <a href>random subforum</a> &gt;&gt; <a href>random topic</a></span>
                </div>
                <div className="topic-container">
                  <div className="head">
                    <div className="authors">Author</div>
                    <div className="content">Topic: random topic (Read 1325 Times)</div>
                  </div>
                  <div className="body">
                    <div className="authors">
                      <div className="username"><a href>Username</a></div>
                      <div>Role</div>
                      <img src="https://cdn.pixabay.com/photo/2015/11/06/13/27/ninja-1027877_960_720.jpg" alt="" />
                      <div>Posts: <u>45</u></div>
                      <div>Points: <u>4586</u></div>
                    </div>
                    <div className="content">
                      Just a random content of a random topic.
                      <br />To see how it looks.
                      <br /><br />
                      Nothing more and nothing less.
                      <br />
                      <hr />
                      Regards username
                      <br />
                      <div className="comment">
                        <button onclick="showComment()">Comment</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="comment-area hide" id="comment-area">
                  <textarea name="comment" id placeholder="comment here ... " defaultValue={""} />
                  <input type="submit" defaultValue="submit" />
                </div>
                <div className="comments-container">
                  <div className="body">
                    <div className="authors">
                      <div className="username"><a href>AnotherUser</a></div>
                      <div>Role</div>
                      <img src="https://cdn.pixabay.com/photo/2015/11/06/13/27/ninja-1027877_960_720.jpg" alt="" />
                      <div>Posts: <u>455</u></div>
                      <div>Points: <u>4586</u></div>
                    </div>
                    <div className="content">
                      Just a comment of the above random topic.
                      <br />To see how it looks.
                      <br /><br />
                      Nothing more and nothing less.
                      <br />
                      <br />
                      <div className="comment">
                        <button onclick="showReply()">Reply</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="comment-area hide" id="reply-area">
                  <textarea name="reply" id placeholder="reply here ... " defaultValue={""} />
                  <input type="submit" defaultValue="submit" />
                </div>
                <div className="comments-container">
                  <div className="body">
                    <div className="authors">
                      <div className="username"><a href>AnotherUser</a></div>
                      <div>Role</div>
                      <img src="https://cdn.pixabay.com/photo/2015/11/06/13/27/ninja-1027877_960_720.jpg" alt="" />
                      <div>Posts: <u>455</u></div>
                      <div>Points: <u>4586</u></div>
                    </div>
                    <div className="content">
                      Just a comment of the above random topic.
                      <br />To see how it looks.
                      <br /><br />
                      Nothing more and nothing less.
                      <br />
                      <br />
                      <div className="comment">
                        <button onclick="showReply()">Reply</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="comment-area hide" id="reply-area">
                  <textarea name="reply" id placeholder="reply here ... " defaultValue={""} />
                  <input type="submit" defaultValue="submit" />
                </div>
              </div>
            </header></div>
        );
      }
    });