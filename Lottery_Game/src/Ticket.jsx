import TicketNum from "./TicketNum.jsx"
import "./Ticket.css";

const Ticket = ({ticket}) => {
    return (
        <div className="ticket">
        <h2>Ticket</h2>
        {ticket.map((num, idx) => (
            <TicketNum num = {num} key={idx}/>
        ))}
        </div>
    )
}
export default Ticket;