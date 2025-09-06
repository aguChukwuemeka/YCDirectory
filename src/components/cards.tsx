import React from 'react'
import Image from "next/image";
import {CardItem} from "@/types";
import {Button} from "@/components/ui/button"

type CardsProps = { data: CardItem[] };


export default function Cards({data}: CardsProps) {
    return (
        <>{data.map((info, index) => (
            <article className="cards" key={index}>
                <div className="cards_header">
                    <div className="card_header_content">
                        <span className="header-date">{info.date}</span>
                        <span className="header-time">{info.time}</span>
                    </div>
                    <div className="card_header_content">
                        <div className="header-title">{info.title}</div>
                        <Image src={info.ico} alt="icon" width={44} height={24}/>
                    </div>
                    <span className="card_desc">{info.description}</span>
                </div>
                <div className="card_body">
                    <div className="card_body_content">
                        <Image src={info.image} alt="icon" width={340} height={24}/>
                    </div>
                </div>
                <div className="card_footer">
                    <div className="cards_footer_content">
                        <span className="">{info.startup}</span>
                        <Button className="">Publish</Button>
                    </div>
                </div>
            </article>
        ))}
        </>
    )
}
// const {title, description, image, date, time, startup, user, userImage, comments, likes, shares} = data;
