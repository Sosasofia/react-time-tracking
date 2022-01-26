import React, { useState } from "react";
import './style.css'

export default function ProfileCard({ name, timeframe, change }) {


    return (
        <div className="Profile-card">
            <div className="Profile-content">
                <img src="images/image-jeremy.png" alt="" />
                <div className="textContainer">
                    <small>Report for </small>
                    <p>{name}</p>
                </div>
            </div>

            <div className="Timeframes">

                <a className={timeframe === 'daily' ? 'selected' : ''} onClick={() => change('daily')}>Daily</a>

                <a className={timeframe === 'weekly' ? 'selected' : ''} onClick={() => change('weekly')}>Weekly</a>

                <a className={timeframe === 'monthly' ? 'selected' : ''} onClick={() => change('monthly')}>Monthly</a>

            </div>
        </div>

    )
}