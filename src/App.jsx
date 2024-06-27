import Header from "./header/Header";
import FormData from "./form/Form";
import Footer from "./footer/Footer";
import Album from "./album/Album";
import Apartments_features from "./parts_apartments/Apartments_features";
import Contacts from "./information/Contacts";
function App() {
    return (
        <>
            <Header/>
            <Album/>
            <Apartments_features/>
            <FormData/>
            <Contacts/>
            <Footer/>
        </>

    )
}

export default App;
