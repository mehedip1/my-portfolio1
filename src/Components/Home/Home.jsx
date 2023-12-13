import About from "../About/About";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Project from "../Projects/Project";
import Do from "../share/Do/Do";
import Text from "../share/Text/Text";


const Home = () => {
    return (
        <div>
         <Banner></Banner>
         <Text></Text>
         <About></About>
         <Do></Do>
         <Category></Category>
        
         <Project></Project>
        </div>
    );
};

export default Home;