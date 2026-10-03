import Button from "../ui/button";
import DivText from "../ui/divtext";
import Image from "next/image";

let divText = [
    {title: "Delicious", className: "left-[1px] bg-orange-600 rotate-160 -scale-x-100 -scale-y-100"},
    {title: "Drink", className: "left-[30%] bottom-[0px] bg-yellow-400 rotate-10"},
    {title: "Food", className: "right-[10px] top-[20px] rotate-10 bg-green-500"},
]

export default function Home(){
    return <div className="relative w-full min-h-screen py-[0.8em]">
        <div className="flex px-[1em]">
            <div className="relative w-full">
                <div className="flex">
                    <div className="text-center">
                        <h1 className="text-[rgba(255,189,0,0.8)] text-[2.8rem] font-extrabold leading-11 tracking-tighter">Experience The Taste You Deserve</h1>
                    </div>
                </div>
            <div className="absolute w-full h-[150px] top-[0px]">
                {divText.map((text, i) => (
                    <DivText children={text.title} key={i} className={text.className}/>
                ))}
            </div>
        </div>
        </div>

        <div className="flex flex-col mt-[2em] px-[1em]">
            <h1 className="text-[0.8rem]">Discover the Curated Fresh Dishes Crafted By Experts Chefs
                For Unforgettable Dining Experiences
            </h1>

            <Button />
        </div>

        <div className="relative w-full">
            <Image src={"/assets/images/bowl-v2.png"} width={1000} height={1000} alt="tonkatsu" className="w-full mt-[1em]"/>
        </div>
    </div>
}