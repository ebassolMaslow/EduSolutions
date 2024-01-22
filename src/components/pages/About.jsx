import Footer from "../footer/Footer";
import Header from "../header/Header";
import Ourcourses from "../ourcourses/Ourcourses";
import Ourhistory from "../ourhistory/Ourhistory";
import Partners from "../partners/Partners";
import Teachingteam from "../teachingteam/Teachingteam";

const About = () => {
    return (
        <>
            <div className="container">
                <Header />
                <Teachingteam />
                <Partners />
                <Ourhistory />
                <Ourcourses />
            </div>
            <Footer />
        </>
    );
}

export default About;