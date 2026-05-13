import Articles from "../components/home/Articles";
import Category from "../components/home/Category";
import Header from "../components/home/Header";

const Home = () => {
    return(
        <div id="home" className="flex flex-col gap-20">
            <Header />
            <Category />
            <Articles />
        </div>
    )
}
export default Home;