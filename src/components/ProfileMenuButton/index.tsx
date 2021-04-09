import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import React from 'react';
import { signOut } from '../../store/modules/auth/actions';
import {
  AvatarIcon,
  ProfileButton,
  ProfileMenu,
  ProfileMenuItem,
} from './styles';

interface ProfileMenuButtonProps {
  // eslint-disable-next-line react/require-default-props
  username: string;
}

const ProfileMenuButton: React.FC<ProfileMenuButtonProps> = ({
  username,
}: ProfileMenuButtonProps) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpenMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <ProfileButton
        disableElevation
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleOpenMenu}
      >
        <AvatarIcon>{username.substring(0, 1)}</AvatarIcon>
        <Typography variant="subtitle2" color="textSecondary">
          {username}
        </Typography>
        <KeyboardArrowDownIcon />
      </ProfileButton>
      <ProfileMenu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        <ProfileMenuItem onClick={() => history.push('/profile')}>
          Meu Perfil
        </ProfileMenuItem>
        <Divider />

        <ProfileMenuItem onClick={() => dispatch(signOut())}>
          Sair
        </ProfileMenuItem>
      </ProfileMenu>
    </div>
  );
};

export default ProfileMenuButton;
