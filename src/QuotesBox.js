import React, { useState } from 'react'
import "./QuotesBox.css";

function QuotesBox() {
    const [Quote, setQuote] = useState("The best site for your daily awe inspiring Quotes");
    const [Author, setAuthor] = useState("Authors name");



    function newQuote() {
        setQuote();
        setAuthor();
    }

    return (
        <div id="quote-box">
            <div id="text">
                <i class="fas fa-quote-left left-quote"></i>
                <span id="quote-text">{Quote}</span>
            </div>
            <div id="author">
                <h5>- {Author}</h5>
            </div>
            <div id="quotes-icons">
                <a id="tweet-quote" href="twitter.com/intent/tweet" alt="twiter icon"><i class="fab fa-twitter-square"></i></a>
                <a id="tumblr-home" href="tumblr.com" alt="tumblr icon"><i class="fab fa-tumblr-square"></i></a>
                <button id="new-quote" onClick={newQuote} class="btn btn primary">NewQuote</button>
            </div>
        </div>
    )
}

export default QuotesBox
