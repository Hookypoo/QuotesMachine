import React from 'react'
import "./Header.css";

function Header() {
    return (
        <div className="header">
            <header className="App-header">
                <div id="codepen-info">
                    <a id="codepen-home" href="https://www.codepen.io" alt="codepen icon"><i class="fab fa-codepen"></i></a>
                    <div className="fcc-heading">
                        <p className="fcc-title">FCC: Random Quote Machine</p>
                        <p className="fcc-email"><small>freeCodeCamp.org</small></p>
                        <a href="https://www.codepen.io/login" alt="follow codepen"><p className="fcc-followers"><small><i class="fas fa-plus plus-sign"></i>Follow</small></p></a>
                    </div>
                </div>
                <div id="header-button-group">
                    <div id="love-container">
                        <a id="love-icon" href="https://www.codepen.io/login" alt="likes icon"><i id="quotes-love" class="far fa-heart inner-heart"></i></a>
                    </div>
                    <button id="quotes-views" class="btn btn primary header-buttons"><i id="eye" class="fas fa-eye inner-eye"></i>change View</button>
                    <button id="quotes-signup" class="btn btn primary header-buttons">Sign up</button>
                    <button id="quotes-login" class="btn btn primary header-buttons">Log in</button>
                </div>
            </header>

        </div>
    )
}

export default Header
