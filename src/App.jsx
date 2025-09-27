import { Suspense, useState} from "react";
import "./App.css";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TicketsCard from "./components/TicketsCard/TicketsCard";
import { toast, ToastContainer } from "react-toastify";

const fetchTickets = async () => {
  const res = await fetch("/tickets.json");
  return res.json();
};

function App() {
  const [inProgressCount, setInProgressCount] = useState(0);
  const [resolvedCount, setResolvedCount] = useState(0);
  const [selectedTickets, setSelectedTickets] = useState([]);

  const handleCardClick = (ticket) => {
    toast("in progress");
    const exists = selectedTickets.find((t) => t.id === ticket.id);
    if (exists) return;
    setSelectedTickets((prev) => [...prev, ticket]);
    if (ticket.status === "In Progress") {
      setInProgressCount((prev) => prev + 1);
    } else if (ticket.status === "Resolved") {
      setResolvedCount((prev) => prev + 1);
    }
  };

  const handleComplete = (ticketId) => {
    const ticket = selectedTickets.find((t) => t.id === ticketId);
    if (!ticket) return;

    if (ticket.status === "In Progress") {
      setInProgressCount((prev) => (prev > 0 ? prev - 1 : 0));
    }
    setResolvedCount((prev) => prev + 1);

    setSelectedTickets((prev) => prev.filter((t) => t.id !== ticketId));

    toast("Completed!");
  };

  const ticketsPromise = fetchTickets();

  return (
    <>
      <Navbar></Navbar>
      <Card
        handleCardClick={handleCardClick}
        resolvedCount={resolvedCount}
        inProgressCount={inProgressCount}
      ></Card>
      <div className="flex max-w-[1200px] mx-auto ">
        <h2 className="w-3/4 font-semibold text-xl text-[#34485A] ">
          Customer Tickets
        </h2>
        <h2 className="w-1/4 font-semibold text-xl text-[#34485A]">
          Task Status
        </h2>
      </div>
      <Suspense>
        <TicketsCard
          handleComplete={handleComplete}
          selectedTickets={selectedTickets}
          handleCardClick={handleCardClick}
          ticketsPromise={ticketsPromise}
        ></TicketsCard>
      </Suspense>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
