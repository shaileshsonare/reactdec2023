import Footer from "./Footer";
import Header from "./Header";
import Sqr from "./Sqr";
import Users from "./Users";

function App() {
  return (
    <>
      <Header />
      <Users />
      <Sqr num={5} />
      <Sqr num={6} />
      <Sqr num={7} />
      <Footer />
    </>
  );
}

export default App;

//CW1 Create footer component and import it
//in App component

//CW2 Create Sqr component and import it in 
//App component