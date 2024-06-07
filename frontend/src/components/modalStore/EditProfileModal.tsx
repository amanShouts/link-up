import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, } from '@/components/ui/dialog';
import { Button } from '../ui/button';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '@/store/slice/modalSlice';
import { RootState } from '@/store/store';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export function EditProfile() {
  const { isOpen } = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: RootState) => state.users)

  useEffect(() => {
      console.log('currentUser: ',currentUser)
      if (currentUser?.age && currentUser?.city && currentUser?.type) {
      console.log('here')
      dispatch(closeModal())
    }
  }, [currentUser])


  return (
    <Dialog open={isOpen}>
      <DialogContent className="text-white">
        <DialogHeader>
          <DialogTitle>Profile is not complete.</DialogTitle>
          <DialogDescription className="text-white">To access all features please finish your profile. It will take just 5 minutes.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Link to="/onboarding">
            <Button
              type="button"
              variant="secondary"
              onClick={() => {
                setTimeout(() => {
                  dispatch(closeModal());
                }, 200);
              }}
            >
              Go to Onboarding
            </Button>
          </Link>
          <Button
            type="button"
            variant="secondary"
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
