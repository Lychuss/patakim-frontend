import Carousel from "../ui/carousel"


let images = 
[    
    {
        src: "/assets/images/menu-1.jpg",
        alt: "first",
        aria_current: true
    },
    {
        src: "/assets/images/menu-2.jpg",
        alt: "second",
        aria_current: true
    },
    {
        src: "/assets/images/menu-3.jpg",
        alt: "third",
        aria_current: true
    },
    {
        src: "/assets/images/menu-4.jpg",
        alt: "fourth",
        aria_current: true
    },
    {
        src: "/assets/images/menu-5.jpg",
        alt: "fifth",
        aria_current: true
    },
]


export default function Menu(){

    return <div className="flex flex-col items-center justify-center gap-10">
        <h1 className="text-[rgba(255,189,0,0.8)] font-bold text-3xl">
            Popular Menu
        </h1>
        <Carousel images={images}/>
    </div>
}