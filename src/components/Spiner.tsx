import loading from '@/assets/loading.gif'


export const Spiner = () => {
    return <div className="flex items-center justify-center w-full h-[70vh]">
        <img src={loading.src} alt="Loading..." />
    </div>
}