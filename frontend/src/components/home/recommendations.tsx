import {Card} from "@/components/ui/card.tsx";
import {User2Icon} from "lucide-react";
import {RecommendationCard} from "@/components/home/recommendation-card.tsx";

export function Recommendation() {
    return (
        <div className={"col-span-2 flex flex-col gap-4 sticky top-32 h-fit"}>
            <RecommendationCard />
            <RecommendationCard />
            <RecommendationCard />
            <RecommendationCard />
            <RecommendationCard />
            <RecommendationCard />
            <Card
                className={
                    "hover:top-[-4px] dark:border-neutral-700 hover:cursor-pointer relative top-0 transition-all duration-150 ease-in-out dark:hover:bg-neutral-800 hover:bg-neutral-200"
                }
            >
                <div className="flex pl-4 my-2 gap-4 text-center text-sm font-medium">
                    <User2Icon className={"w-5 h-5"} /> Search for more Mentors...
                </div>
            </Card>
        </div>
    );
}