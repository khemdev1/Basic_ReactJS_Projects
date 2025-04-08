import { useState } from "react";
import Ticket from "./Ticket.jsx";
import { genTicket, sum } from "./helper.js";

const LotteryNew = ({n, winningsum}) => {
    let [ticket, setTicket] = useState(genTicket(n));   
    let isWinning = sum(ticket) === winningsum;

    let buyTicket = () => { 
        setTicket(genTicket(n))
    };
  
    return (    
        <div>
            <Ticket ticket={ticket}/>
            <button onClick={buyTicket}>Buy New Ticket</button><br />
            <h3>{isWinning && "Congratulation, You win"} </h3>
        </div>
    )
}
export default LotteryNew;