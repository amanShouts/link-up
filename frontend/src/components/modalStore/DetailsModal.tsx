import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { EditProfile } from './EditProfileModal';

export default function DetailsModal() {
  const { type } = useSelector((state: RootState) => state.modal);

  switch (type) {
    case 'edit-profile-modal':
      return <EditProfile />;
      break;
    default:
      return <></>;
      break;
  }
}
