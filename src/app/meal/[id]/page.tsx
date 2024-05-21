import { Card } from "@/components/Card";
import { HeadTitle } from "@/components/HeadTitle";

export default function mail() {
    return <div className="md:grid md:grid-cols-4 md:gap-4">
        <div className="col-span-2">
            <Card/>
        </div>
        <div className="col-span-2">
            <div className="w-full border-b-[1px] border-gray-200">
                <HeadTitle text="Meal name" className=""/>
            </div>
        </div>
    </div>
}