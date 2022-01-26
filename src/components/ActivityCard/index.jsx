import React from "react";
import './style.css'

export default function ActivityCard({ title, current, previous, timeframe }) {

    const activity = title.split(" ").join("")
    const icon = '/images/icon-' + activity + '.svg'

    const colors = {
        'Work': 'hsl(15, 100%, 70%)',
        'Play': 'hsl(195, 74%, 62%)',
        'Study': 'hsl(348, 100%, 68%)',
        'Exercise': 'hsl(145, 58%, 55%)',
        'Social': 'hsl(264, 64%, 52%)',
        'Self Care': 'hsl(43, 84%, 65%)'
    };
    const cardBackground = { backgroundColor: colors[title] };

    return (
        <div className="Card" style={cardBackground}>
            <div className="img-container">
                <img src={icon} alt="activity logo" />
            </div>

            <div className="Card-content">
                <h2>{title}</h2>
                <img src="/images/icon-ellipsis.svg" id="ellipsis" ></img>
                <p>{current + 'hrs'}</p>
                <small>
                    {
                        timeframe === "daily" ? "Yesterday"
                            : timeframe === "weekly" ? "Last Week"
                                : "Last Month"
                    } - {previous + 'hrs'}
                </small>
            </div>
        </div>
    )
}