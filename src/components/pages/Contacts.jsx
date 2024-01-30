import Footer from "../footer/Footer";
import Header from "../header/Header";
import Helpform from "../helpform/Helpform";
import Map from "../map/Map";

const Contacts = () => {
    return (
        <>
            <div className="container">
                <Header />
                <Map />
                <Helpform />
            </div>
            <Footer />
        </>
    );
}

export default Contacts;