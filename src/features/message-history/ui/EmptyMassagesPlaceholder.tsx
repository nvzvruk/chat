import { ChatBubbleBottomCenterIcon } from '@heroicons/react/24/outline'

export const EmptyMassagesPlaceholder = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-4 text-foreground">
      <ChatBubbleBottomCenterIcon className="w-10" />
      <p className="text-xl">No messages yet</p>
    </div>
  )
}
