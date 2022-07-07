export type TUser = {
  id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  address: string;
  slug: string;
  userRole: string;
  avatar: {
    url: string;
  };
};
