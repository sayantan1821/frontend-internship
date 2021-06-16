import React from 'react';
import './content.style.css';
import Card from './Card';
import { CardData } from './CardData';
import { WiDirectionUpRight } from "react-icons/wi";
import { BiCloudUpload } from "react-icons/bi";

function Content() {
    return (
        <div className='content'>
            <div className='bill'>
                <h4>Invoices</h4>
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
                <h4>Outstanding Revenue</h4>
            </div>
            <div className='profit'>
                <div className='graph'>
                    <div className='graph-title'>
                        <h1>Total Profit</h1>
                        <span>September 2020</span>
                    </div>
                </div>
                <div className='expense'>
                    <div className='expense-title'>
                        <h1>Expenses</h1>
                        <div className='search-icon'>
                            <WiDirectionUpRight />
                        </div>
                    </div>
                    <div className='card'>
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
            </div>
            <div className='invoices'>
                <div className='invoice-title'>
                    <h1>Invoices</h1>
                    <span>Recently created</span>
                </div>
                <div className='boxes'>
                    <div className='box box1'>
                        <BiCloudUpload size='md'/>
                        <span>Upload Invoice</span>
                    </div>

                    <div className='box'>
                        <p>#00106</p>
                        <h3>Mindtickle</h3>
                        <p>2 Sep, 2020</p>
                        <br></br>
                        <div className='box-foot'>
                            <p>Viewd</p>
                            <h2>$3,500</h2>
                        </div>
                    </div>

                    <div className='box'>
                        <p>#00105</p>
                        <h3>Cleancloud</h3>
                        <p>1 Sep, 2020</p>
                        <br></br>
                        <div className='box-foot'>
                            <p>Sent</p>
                            <h2>$2,000</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='work'>
                <div className='work-txt'>
                    <h1>Work Anywhere with the Invoicer Mobile Apps</h1>
                </div>
            </div>

        </div>
    )
}

export default Content;
