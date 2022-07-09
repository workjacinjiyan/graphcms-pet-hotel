export type TUser = {
  id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  slug: string;
  userRole: string;
  avatar: {
    url: string;
  };
};
