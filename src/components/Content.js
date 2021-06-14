import React from 'react';
import './content.style.css';
import Card from './Card';
import { CardData } from './CardData';
import { BsSearch } from "react-icons/bs";

function Content() {
    return (
        <div className='content'>
            <div className='bill'>
                <h5>Invoices</h5>
                <div className='due'>
                    <div className='due-items overdue'>
                        <h1>$12,095</h1>
                        <p>Overdue</p>
                    </div>
                    <div className='due-items total'>
                        <h1>$33,363</h1>
                        <p>Total Outstanding</p>
                    </div>
                    <div className='due-items draft'>
                        <h1>$4,500</h1>
                        <p>In draft</p>
                    </div>
                </div>
            </div>
            <div className='outstanding'>
                Outstanding Revenue
            </div>
            <div className='profit'>
                <div className='graph'>
                    graph
                </div>
                <div className='expense'>
                    <h1>Expenses</h1>
                    <div className='search-icon'>
                        <BsSearch />
                    </div>
                    {CardData.map((item,index) => {
                        return(
                            <Card 
                                className= 'expense-card'
                                key= {index}
                                price= {item.price}
                                date= {item.date}
                                icon= {item.icon}
                                txt= {item.txt}
                                color= {item.color}
                            />
                        )
                    })}
                </div>
            </div>
            <div className='invoices'>
                upload
            </div>
            <div className='work'>
                Mobile Apps
            </div>

        </div>
    )
}

export default Content;
