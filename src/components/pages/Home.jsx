import Courses from "../courses/Courses";
import Feedback from "../feedback/Feedback";
import Feedbackquestions from "../feedbackquestions/Feedbackquestions";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Hero from "../hero/Hero";
import Peopleschoice from "../peopleschoice/Peopleschoice";
import Research from "../research/Research";

const Home = () => {
  return (
    <>
      <div className="container">
        <Header />
        <Hero />
        <Courses />
        <Peopleschoice />
        <Research />
        <Feedback />
        <Feedbackquestions />
      </div>
      <Footer />
    </>
  );
}

export default Home;