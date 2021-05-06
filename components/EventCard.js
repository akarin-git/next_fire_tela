import React from 'react'

export default function EventCard({eventpost}) {
    console.log(eventpost);
    return (
        <div>
            <p>{eventpost.name}</p>
            <p>{eventpost.date}</p>
            <p>{eventpost.money}</p>
            <p>{eventpost.email}</p>
            <p>{eventpost.comment}</p>
            <p>{eventpost.web}</p>
        </div>
    )
}
