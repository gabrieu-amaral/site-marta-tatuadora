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
        
        const fields = "media_url,media_type,permalink"
        const Token = import.meta.env.VITE_INSTA_TOKEN
        const url = `https://graph.instagram.com/me/media?access_token=${Token}&fields=${fields}`;

        const { data } = await axios.get(url);
        setFeedList(data.data.slice(0,9));
    }

    useEffect(() => {
        getInstaFeed();
    }, [])

    return (
        <div className="w-full h-full grid grid-cols-3 md:gap-2 lg:gap-4 gap-1 p-6 lg:p-16 md:p-6">
            {feedList.map(item => (
                <a key={item.id} href={item.permalink} target="_black" className="-mb-9 md:-mb-10 p-0">
                    {item.media_type === "VIDEO" ? <video controls src={item.media_url}></video> : (
                        <img src={item.media_url} alt="" className="md:rounded-md opacity-90 transition ease-in-out hover:-translate-y-1 hover:transition-all hover:scale-110 duration-300 buttomhover hover:opacity-50"/>
                    )}
                </a>
            ))}
        </div>
    )
}

export default InstaFeed
