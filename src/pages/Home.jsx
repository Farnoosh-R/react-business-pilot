import Category from "../components/home/Category";
import Header from "../components/home/Header";

const Home = () => {
    return(
        <div id="home" className="flex flex-col gap-7">
            <Header />
            <Category />
        </div>
    )
}
export default Home;