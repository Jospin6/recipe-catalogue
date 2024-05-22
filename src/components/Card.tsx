
export const Card = ({className, src, title}: {className: string, src: string, title: string}) => {
    return <div className={`rounded-lg box-shadow ${className}`}>
        <div className="rounded-t-lg h-[85%]">
            <img src={src} alt="meal image" className="rounded-t-lg w-full h-full" />
        </div>
        <div className="rounded-b-lg h-[15%] flex items-center text-[18px] pl-2">
            {title}
        </div>
    </div>
}