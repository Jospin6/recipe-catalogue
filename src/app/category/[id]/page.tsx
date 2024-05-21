import { Card } from "@/components/Card";
import { HeadTitle } from "@/components/HeadTitle";

export default function Category(){
    return <div className="text-2xl">
        <HeadTitle text="Selected category" className="mb-4"/>
        <Card/>
    </div>
}