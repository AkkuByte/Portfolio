import './floating_cards.css'
import personImg from '../../assets/person.png'

function Floating_cards() {
    return (
       <section id='hello'>
         <div className="cards">
            <div class="card-content">
                <h2>Card Title</h2>
                <div className="cardImage">
                    <img src={personImg} alt="image" />
                </div>
                <p>Some descriptive text or content for the card.</p>
                <button class="glow-btn">Click Me</button>
            </div>

        </div>
       </section>
    );
}

export default Floating_cards;