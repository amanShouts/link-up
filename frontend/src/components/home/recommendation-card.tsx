import { Card } from '@/components/ui/card.tsx';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar.tsx';
import { MentorDataType } from '@/components/MentorListCard.tsx';

export function RecommendationCard({ mentor }: { mentor: MentorDataType }) {
  return (
    <Card className={'dark:border-neutral-700'}>
      <div className="flex pl-4 my-2 gap-4">
        <div className="relative">
          <Avatar className="  border-2 border-neutral-700  h-8 w-8">
            <AvatarImage alt="@shadcn" src={mentor.imgSrc} />
            <AvatarFallback className={'text-sm'}>CN</AvatarFallback>
          </Avatar>
          <div className="absolute bottom-0 right-0 h-4 w-4 rounded-full bg-green-500 border-2 border-white dark:border-gray-800" />
        </div>
        <div>
          <h4 className="text-sm font-medium">{mentor.name}</h4>
          <p className="text-xs text-gray-500 dark:text-gray-400">{mentor.currPost}</p>
        </div>
      </div>
    </Card>
  );
}
