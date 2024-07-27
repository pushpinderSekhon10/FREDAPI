
import './styles/App.css';
import VCard from './VCard.js'

function App() {
  return (
    <>
    <section className="dashboard">
      <h1 className="title">FRED</h1>
      <div className="line"></div>

        <form className="search-container">
            <input type="text" id="searchCoun" placeholder='Search by Country'/>
        </form>
        
    </section>

    <VCard />
    <div className="spacer"></div>
    </>  
  );
}

export default App;
