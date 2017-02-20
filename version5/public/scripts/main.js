// Header component
var Header = React.createClass({
    render: function () {
        return (
            <header>
              <a href=""><img className="logo" src="img/logo.png"/></a>
          	</header>
        );
    },
});

// Login Content component
var LoginContent = React.createClass({
    render: function () {
        return (
            <div className="formBox login_box">
                <form method="POST" action="" onsubmit="">
                  <ul>
                    <li>
                      <h3>Login</h3>
                    </li>
                    <li>
                      <label><strong className="red">*</strong> Username:</label>
                      <input type="text" className="inputfield required" data-valid="Please enter Username" value="" name="username" id="username" />
                      <span className="errormessage" id="error_username"></span>
                    </li>
                    <li>
                      <label><strong className="red">*</strong> Password:</label>
                      <input type="password" className="inputfield required" data-valid="Please enter Password" value="" name="password" id="password" />
                      <span className="errormessage" id="error_password"></span>
                    </li>
                    <li className="login_button">
                      <button type="submit" className="inputbutton" name="submit" id="submit">Login</button>
                      <a className="app_link" href="">Reset</a>
                    </li>
                    <li className="login_button">
                      <a className="signup_link" href="<?php echo FOLDER_PATH_HTTP;?>signup.php">Sign Up</a>
                      <a className="forgot_password_link" href="<?php echo FOLDER_PATH_HTTP;?>forgot_password.php">Forgot Password</a>
                    </li>
                  </ul>
                </form>
            </div>
        );
    },
});

// Main app component
var App = React.createClass({
    render: function () {
        return (
            <div>
                <Header />
                <LoginContent />
            </div>
        );
    },
});

ReactDOM.render(
    <App />,
    document.getElementById('content')
);
