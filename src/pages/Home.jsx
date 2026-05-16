import Articles from "../components/home/Articles";
import Category from "../components/home/Category";
import Header from "../components/home/Header";
import Steps from "../components/home/Steps";
import Testimonials from "../components/home/Testimonials";

const Home = () => {
    return(
        <div id="home" className="flex flex-col gap-20">
            <Header />
            <Category />
            <Articles />
            <Steps />
            <Testimonials />
        </div>
    )
}
export default Home;