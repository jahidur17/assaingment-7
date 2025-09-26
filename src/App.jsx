import { Suspense } from 'react';
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
  
 const ticketsPromise = fetchTickets()
  return (
    <>
      <Navbar></Navbar>
      <Card></Card>
      <Suspense
        fallback={<span className="loading loading-spinner loading-xl"></span>}
      >
        <TicketsCard ticketsPromise={ticketsPromise}></TicketsCard>
      </Suspense>
      <Footer></Footer>
    </>
  );
}

export default App
