import Footer from "../footer/Footer";
import Header from "../header/Header";
import Personaldata from "../personaldata/Personaldata";
import Profilecourses from "../profilecourses/Profilecourses";

const Profile = () => {
    return (
        <>
            <div className="container">
                <Header />
                <Profilecourses />
                <Personaldata />
            </div>
            <Footer />
        </>
    );
}

export default Profile;