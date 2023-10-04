interface IconsProps {
  name: string;
  href: string;
  icon: IconType;
  onClick?: () => void;
}

interface HeaderProps {
  name: string;
}

interface LoginAndRegisterProps {
  close?: () => void;
}

interface UserRegister {
  username: string;
  name: string;
  email: string;
  password: string;
}
