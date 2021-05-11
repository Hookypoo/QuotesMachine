import './App.css';
import Header from "./Header";
import QuotesBox from "./QuotesBox";


function App() {
  return (
    <div className="App">
      <Header />
      <a id="quotes-menuBars" href="google.com" alt="a menu icon"><i class="fas fa-bars"></i></a>
      <QuotesBox />
      <div id="quotes-signature">
        <p>by <em>Hookypoo</em></p>
      </div>
    </div>
  );
}

export default App;
