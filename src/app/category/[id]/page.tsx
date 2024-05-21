import { Card } from "@/components/Card";
import { HeadTitle } from "@/components/HeadTitle";

export default function Category(){
    return <div className="text-2xl">
        <HeadTitle text="Selected category" className="mb-4"/>
        <div className="md:grid md:grid-cols-6 md:gap-4">
            <Card className='col-span-2 h-[300px]'/>
        </div>
    </div>
}