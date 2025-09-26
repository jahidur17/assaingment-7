import { Suspense,useState, useEffect} from 'react';
import './App.css'
import Card from './components/Card';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import TicketsCard from './components/TicketsCard/TicketsCard';



const fetchTickets = async() => {
  const res = await fetch("/tickets.json")
  return res.json();
}

function App() {


  const [ticketsValue, setTicketsData] = useState([]);
  console.log(ticketsValue);
  const [inProgressCount, setInProgressCount] = useState(0);
  const [resolvedCount, setResolvedCount] = useState(0);

  useEffect(() => {
    fetch("/tickets.json")
      .then((res) => res.json())
      .then((data) => setTicketsData(data));
  }, []);

  const handleCardClick = (id) => {
    if (id.includes(id)) {
      setInProgressCount((prev) => prev + 1);
    } else if (id === "Resolved") {
      setResolvedCount((prev) => prev + 1);
    }
  };

  

 const ticketsPromise = fetchTickets()


  return (
    <>
      <Navbar></Navbar>
      <Card handleCardClick={handleCardClick} resolvedCount={resolvedCount} inProgressCount={inProgressCount}></Card>
      <div className="flex max-w-[1200px] mx-auto ">
        <h2 className="w-3/4 font-semibold text-xl text-[#34485A] ">
          Customer Tickets
        </h2>
        <h2 className="w-1/4 font-semibold text-xl text-[#34485A]">
          Task Status
        </h2>
      </div>
      <Suspense>
        <TicketsCard handleCardClick={handleCardClick}  ticketsPromise={ticketsPromise}></TicketsCard>
      </Suspense>
      <Footer></Footer>
    </>
  );
}

export default App
