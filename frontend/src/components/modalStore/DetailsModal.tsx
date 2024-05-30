import { useSelector } from "react-redux"
import { RootState } from "@/store/store"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useEffect } from "react"
import { Button } from "../ui/button"
import { closeModal } from "@/store/slice/modalSlice"
import { EditProfile } from "./EditProfileModal"

export default function DetailsModal() {

  const { isOpen, type } = useSelector(( state : RootState ) =>  state.modal )
  

  switch ( type ) {
    case 'edit-profile-modal' : 
     return <EditProfile/>
    break;
    default :
      return <></>
    break;
  }
}
