import Articles from "../components/home/Articles";
import Category from "../components/home/Category";
import Customers from "../components/home/Customers";
import Header from "../components/home/Header";
import Steps from "../components/home/Steps";
import Support from "../components/home/Support";
import Testimonials from "../components/home/Testimonials";

const Home = () => {
    return(
        <div id="home" className="flex flex-col gap-20">
            <Header />
            <Category />
            <Articles />
            <Steps />
            <Testimonials />
            <Customers />
            <Support />
        </div>
    )
}
export default Home;