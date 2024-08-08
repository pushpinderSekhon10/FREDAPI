import './styles/VCard.css';

function VCard({onClose}){

    
    return (
        <section className="Card">
            <h2 className="country">CANADA</h2>
            <div className="cline"></div>

            <section className="graph">
            
            </section>

            <section className="infoTab">
                <div>
                <h3 className="infoTitle">Real GDP</h3>
                <p>1.907 </p>
                <p>1.907</p>
                <p>1.907</p>
                </div>

                <div>
                <h3 className="infoTitle">Real GDP</h3>
                <p>1.907 </p>
                <p>1.907</p>
                <p>1.907</p>
                </div>

                <div>
                <h3 className="infoTitle">Real GDP</h3>
                <p>1.907 </p>
                <p>1.907</p>
                <p>1.907</p>
                </div>
            </section>

            <div className="btnRow">
                <button className="graphBtn">Annual</button>
                <button className="graphBtn">$US</button>
                <button className="graphBtn">Inflation</button>
            </div>

        </section>
    )
} 

export default VCard;