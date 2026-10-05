"use client";

import { useEffect } from "react";
import { initFlowbite } from "flowbite";

export type Images = {
    src?: string,
    alt?: string,
    aria_current: boolean
}

type MyProps = {
    images: Images[]
}

export default function Carousel(props: MyProps){

    useEffect(() => {
        initFlowbite();
    }, [])


    return <>
        <div id="indicators-carousel" className="relative w-full" data-carousel="static">

        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
            {props.images.map((image, i) => (
            <div
                key={i}
                className="hidden duration-700 ease-in-out"
                data-carousel-item={i === 0 ? "active" : ""}
            >
                <img
                src={image.src}
                alt={image.alt}
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                />
            </div>
            ))}
        </div>

        <div className="absolute z-30 flex -translate-x-1/2 space-x-3 bottom-5 left-1/2">
            {props.images.map((_, i) => (
            <button
                key={i}
                type="button"
                className="w-3 h-3 rounded-full bg-white/50"
                aria-current={i === 0}
                aria-label={`Slide ${i + 1}`}
                data-carousel-slide-to={i}
            />
            ))}
        </div>


        <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-base bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-5 h-5 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7"/></svg>
                <span className="sr-only">Previous</span>
            </span>
        </button>
        <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-base bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-5 h-5 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/></svg>
                <span className="sr-only">Next</span>
            </span>
        </button>
    </div>
        </>
}
    

