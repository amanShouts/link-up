import { useSelector } from "react-redux"
import { RootState } from "@/store/store"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"
import { useEffect } from "react"

export default function DetailsModal() {

  const isOpen = useSelector(( state : RootState ) =>  state.modal.isOpen )

  useEffect(() => {
    console.log('isOpen: ',isOpen)
  }, [isOpen])
  

  return (
    <div>
      <Dialog open={isOpen}>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}
