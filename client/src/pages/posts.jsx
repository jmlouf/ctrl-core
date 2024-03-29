var NewComponent = React.createClass({
    render: function () {
        return (
            <><div>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Forum</title>
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
                        <div className="pagination">
                            pages: <a href>1</a><a href>2</a><a href>3</a>
                        </div>
                    </div>
                    <div className="note">
                        <span><i className="fa fa-frown-o" />&nbsp; 0 Engagement Topic</span>&nbsp;&nbsp;&nbsp;<a href><i className="fa fa-share-square" /></a><br />
                        <span><i className="fa fa-book" />&nbsp; Low Engagement Topic</span>&nbsp;&nbsp;&nbsp;<a href><i className="fa fa-share-square" /></a><br />
                        <span><i className="fa fa-fire" />&nbsp; Popular Topic</span>&nbsp;&nbsp;&nbsp;<a href><i className="fa fa-share-square" /></a><br />
                        <span><i className="fa fa-rocket" />&nbsp; High Engagement Topic</span>&nbsp;&nbsp;&nbsp;<a href><i className="fa fa-share-square" /></a><br />
                        <span><i className="fa fa-lock" />&nbsp; Closed Topic</span>&nbsp;&nbsp;&nbsp;<a href><i className="fa fa-share-square" /></a><br />
                    </div>
                </div ></>
                );
        }
});