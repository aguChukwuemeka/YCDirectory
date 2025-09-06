import React from 'react'
import Cards from "@/components/cards";
import data from "@/app/api/data";

export default function CardsContainer() {
    return (
        <div className="grid_cards">
            <Cards data={data}/>
        </div>
    )
};
