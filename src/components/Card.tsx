import Image from 'next/image'
export const Card = ({className, src, title}: {className: string, src: string, title: string}) => {
    return <div className={`rounded-lg box-shadow mb-4 md:mb-[0px] ${className}`}>
        <div className="rounded-t-lg h-[85%]">
            <Image src={src} alt="meal" className="rounded-t-lg w-full h-full"/>
        </div>
        <div className="rounded-b-lg h-[15%] flex items-center text-[18px] pl-2">
            {title}
        </div>
    </div>
}