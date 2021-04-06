import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import styled from 'styled-components';

export const AvatarIcon = styled(Avatar)`
  width: 32px;
  height: 32px;
  margin-right: 12px;
`;

export const ProfileButton = styled(Button).attrs(props => ({
  variant: 'contained',
}))`
  background-color: #ffffff;
  color: rgba(0, 0, 0, 0.85);
  display: flex;
  width: 180px;
  height: 42px;
  border-radius: 24px;
  margin-right: 5px;
  text-transform: none;

  h3 {
    margin-left: 5px;
  }
`;

export const ProfileMenu = styled(Menu)`
  margin-top: 48px;
  align-self: center;
`;

export const ProfileMenuItem = styled(MenuItem)`
  margin: 10px;
`;
