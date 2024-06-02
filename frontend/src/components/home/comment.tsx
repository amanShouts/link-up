import { Card } from '@/components/ui/card.tsx';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar.tsx';

export function Comment() {
  return (
    <Card className={'dark:border-neutral-800'}>
      <div className="flex pl-4 my-2 gap-4">
        <div className="relative">
          <Avatar className="  border-2 border-neutral-700  h-8 w-8">
            <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
            <AvatarFallback className={'text-sm'}>CN</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <h4 className="text-xs font-medium">Emily Johnson</h4>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            @emilyjohnson
          </p>
        </div>
      </div>
      <p className={'text-xs px-4 pb-4'}>
        I think what you're building is amazing! Keep up the great work,
        Cody.and I can't wait to see the final product.
      </p>
    </Card>
  );
}
