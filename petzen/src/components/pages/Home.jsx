import Navbar from './pagecomponents/navbar';
import Banner from './pagecomponents/banner';
import Services from './pagecomponents/services';
import Additional from './pagecomponents/additional';
import App from './pagecomponents/app';
import Feedback from './pagecomponents/feedback';
import News from './pagecomponents/news';
import Footer from './pagecomponents/footer';

function Home() {
    return(
        <section>
            <Navbar/>
            <Banner/>
            <Services/>
            <Additional/>
            <App/>
            <Feedback/>
            <News/>
            <Footer/>
        </section>
    );
}

export default Home;
