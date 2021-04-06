import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import React from 'react';
import {
  AvatarIcon,
  ProfileButton,
  ProfileMenu,
  ProfileMenuItem,
} from './styles';

interface ProfileMenuButtonProps {
  username: string;
}

const ProfileMenuButton: React.FC<ProfileMenuButtonProps> = ({
  username,
}: ProfileMenuButtonProps) => {
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
        <ProfileMenuItem onClick={() => console.log('teste')}>
          Meu Perfil
        </ProfileMenuItem>
        <Divider />

        <ProfileMenuItem onClick={() => console.log('testa')}>
          Sair
        </ProfileMenuItem>
      </ProfileMenu>
    </div>
  );
};

export default ProfileMenuButton;
