import axios from "axios";
import React, { useEffect } from "react";
import { useState } from 'react'

interface IFeedItem {
    id: string;
    media_type: "IMAGE" | "VIDEO";
    media_url: string;
    permalink: string;
}

export function InstaFeed(){
    const [feedList, setFeedList] = useState<IFeedItem[]>([]);

    async function getInstaFeed(){
        
        //const token = import.meta.env.VITE_INSTA_TOKEN;
        const fields = "media_url,media_type,permalink"
        const url = `https://graph.instagram.com/me/media?access_token=IGQVJXSElzSURpdVM2TlBKM2ZAnTHprUzJqd1d6eklRYW9kaEZAYSUdRVUdqdDRFT0sxSHdySVViWUR1UWRyaHRJQ2swRjR4dzhFcURNbk96VUh1SVBUY1ZAzMTdUUFQyaTVsc1VWdy1jZAEo1X296enc2MQZDZD&fields=${fields}`;

        const { data } = await axios.get(url);
        setFeedList(data.data.slice(0,9));
    }

    useEffect(() => {
        getInstaFeed();
    }, [])

    return (
        <div className="w-full h-full grid grid-cols-3 gap-5">
            {feedList.map(item => (
                <a key={item.id} href={item.permalink} target="_black">
                    {item.media_type === "VIDEO" ? <video controls src={item.media_url}></video> : (
                        <img src={item.media_url} alt="" className="rounded-md"/>
                    )}
                </a>
            ))}
        </div>
    )
}

export default InstaFeed