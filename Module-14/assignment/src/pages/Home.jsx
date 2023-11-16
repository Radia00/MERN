
// import Counter from "../components/Counter";
import Hero from "../components/Hero";
import Slider from "../components/Slider";
import WorkList from "../components/WorkList";
import Counter from "../components/Counter";
import FeaturedProject from "../components/FeaturedProject";
import NewsLetter from "../components/NewsLetter";
import Footer from "../layout/Footer";
const Home = (props) => {

  return (
    <div>
        <Hero hero={props.hero}/>
        <Slider slider={props.slider}/>
        <WorkList workList={props.workList}/>
        <Counter Counter={props.counter}/>
        <FeaturedProject featuredProject={props.featurePost}/>
        <NewsLetter newsletter={props.newsletter}/>
        <Footer footer={props.footer}/>
    </div>
  );
};

export default Home;
