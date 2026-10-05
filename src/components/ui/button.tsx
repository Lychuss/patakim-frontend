type MyProps = {
    className?: string,
    children?: string
}
export default function Button(props: MyProps){

    return <button className={`flex rounded-2xl w-[150px] text-[0.8rem] p-[0.3em] mt-[1em]
        items-center justify-center active:scale-90 transition-all duration-300 ease-in ${props.className} `}>
        {props.children}
    </button>
}