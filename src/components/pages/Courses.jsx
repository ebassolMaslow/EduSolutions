import Catalogcourses from "../catalogcourses/Catalogcourses";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const Courses = () => {
    return (
        <>
            <div className="container">
                <Header />
                <Catalogcourses />
            </div>
            <Footer />
        </>
    );
}

export default Courses;