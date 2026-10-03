type MyProps = {
    children?: string,
    className?: string,
    key?: number
}

export default function DivText(props: MyProps){
    return <div className={`rounded-2xl w-[70px] mt-[1em] z-10 absolute text-center p-[0.2em] text-[0.8rem] font-bold text-black ${props.className}`}
        key={props.key}>
        {props.children}
    </div>
}