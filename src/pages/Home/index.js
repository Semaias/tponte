import Navbar from '../../components/Navbar';
import Banner from '../../components/Banner';
import ConnectingPeople from '../../components/ConnectingPeople';
import WeWantToKnow from '../../components/WeWantToKnow';
import CheckTheSchedule from '../../components/CheckTheSchedule';
import Footer from '../../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <ConnectingPeople />
      <WeWantToKnow />
      <CheckTheSchedule />
      <Footer />
    </>
  );
}
