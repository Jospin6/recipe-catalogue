
export const HeadTitle = ({text, className}: {text: string, className: string}) => {
    return <div className={`w-full h-[50px] text-center text-[25px] ${className}`}>
        { text }
    </div>
}