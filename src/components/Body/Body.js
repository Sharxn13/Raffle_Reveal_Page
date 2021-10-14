import React from 'react'
import './body.css'

const Body = () => {
    return (
        <div className='Body'>
            <div className='TicketBox'>
                <div className='GMT'>
                    <div className='GMTText'>Get More Tickets</div>
                    <div className='BUY'>BUY</div>
                </div>
                <span className='TBDivider'></span>
                <div className='Tickets'>
                    <div className='Ticket1'>Silver</div>
                    <div className='Ticket2'>Gold</div>
                    <div className='Ticket3'>Diamond</div>
                </div>
            </div>
            <div className='DragBox'>
                <div className='Title'>
                    <span className='T1'>Collector Event</span>
                    <span className='T2'>Participate and win high quality currated NFTs</span>
                </div>
                <div className='DisplayBox'>
                    <div className='DemoCard'></div>
                    <span className='DragBoxDesc'>
                        Drag a ticket or use the button below to 
                        draw your tickets
                    </span>
                </div>
                <div className='DragBoxDivider'></div>
                <div className='DrawTicketOption'>
                    <div className='TicketImg'>TICKET</div>
                </div>
                <div className='TicketsFound'>
                    <span className='DrawTicks'>Draw Tickets</span>
                    <span className='NumTicksFound'>10 Tickets Found</span>
                    <span className='PrizeExplanation'>
                        Open your tickets and get a chance to win $1000
                        worth of high quality NFTs! Learn More.
                    </span>
                </div>
                <div className='DrawingTickets'>
                    <div className='TicketLevel'>
                        Silver Ticket(1)
                    </div>
                    <button className='DrawTicketButton'>
                        Draw Ticket
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Body;
