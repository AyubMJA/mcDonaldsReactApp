import './home.styles.scss';
import { ReactComponent as McLogo } from "../../assets/mcdonalds.svg";
const Home = () => {
    return(
        <div className="home-body">
            <div className="circles">
                <div><McLogo className="circles"/></div>
                <div><McLogo className="circles"/></div>
                <div><McLogo className="circles"/></div>
                <div><McLogo className="circles"/></div>
                <div><McLogo className="circles"/></div>
                <div><McLogo className="circles"/></div>
                <div><McLogo className="circles"/></div>
                <div><McLogo className="circles"/></div>
                <div><McLogo className="circles"/></div>
                <div><McLogo className="circles"/></div>
            </div>
        </div>
    );
}
export default Home;