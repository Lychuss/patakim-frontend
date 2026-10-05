import Button from "../ui/button"

export default function About(){
    return <div className="relative flex flex-col items-center mt-[2em] w-full min-h-screen p-[1.5em]">

        <div className="absolute inset-0 -z-10 rounded-3xl bg-yellow-200 w-full h-[450px]
              [mask-image:linear-gradient(to_top,transparent,white_80%)]" />

        

        <h1 className="font-extrabold text-center text-2xl text-[rgb(81,26,0)]">
            About Our Dining Experience
        </h1>

        <div className="flex flex-col mt-[1em] gap-4">
            <h1 className="text-[rgb(81,26,0)] font-bold text-sm">
                A Taste of Quality And Passion
            </h1>
            <p className="text-[10px] font-semibold">We Bring Together Fresh Ingredients, Skilled Chefs, And A Warm Atmosphere
                To Create Memorable Dining Moments. Every Dish Is Thoughtfully Prepared To 
                Deliver Rich Flavors, Stunning Presentation, And a Truly Satisfying Experience 
                For Every Guest, Every Time They Visit Us.</p>

            <div className="w-full flex items-center justify-center">
                <Button children="Read More" className="bg-[rgba(249,145,0,0.8)] font-bold text-white"/>
            </div>
        </div>

        <div className="w-full h-[240px] rounded-full bg-[url('/assets/images/patakim.jpg')] bg-cover bg-center bg-no-repeater mt-[1em]" />
    </div>
}