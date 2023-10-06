interface IconsProps {
  name: string;
  icon: IconType;
  href: string;
  onClick?: () => void;
}

interface HeaderProps {
  name: string;
}

interface AvatarProps {
  userId: string;
  big?: boolean;
}

interface UserRegister {
  username: string;
  name: string;
  email: string;
  password: string;
}

interface UserLogin {
  email: string;
  password: string;
}
