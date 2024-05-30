import {Card} from "@/components/ui/card.tsx";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";

export function RecommendationCard() {
    return (
        <Card className={"dark:border-neutral-700"}>
            <div className="flex pl-4 my-2 gap-4">
                <div className="relative">
                    <Avatar className="  border-2 border-neutral-700  h-8 w-8">
                        <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
                        <AvatarFallback className={"text-sm"}>CN</AvatarFallback>
                    </Avatar>
                    <div className="absolute bottom-0 right-0 h-4 w-4 rounded-full bg-green-500 border-2 border-white dark:border-gray-800" />
                </div>
                <div>
                    <h4 className="text-sm font-medium">Emily Johnson</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                        @emilyjohnson
                    </p>
                </div>
            </div>
        </Card>
    );
}