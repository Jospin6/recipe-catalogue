
export const Card = ({className}: {className: string}) => {
    return <div className={`rounded-lg box-shadow ${className}`}>
        <div className="rounded-t-lg bg-red-300 h-[90%]"></div>
        <div className="rounded-b-lg h-[10%] flex items-center text-[18px] pl-2">
            the comp text
        </div>
    </div>
}