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
                    </div>
                </header></>

        );
    }
});