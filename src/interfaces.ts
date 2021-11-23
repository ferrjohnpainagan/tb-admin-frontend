export interface ITask {
  task: string;
  deadline: number;
}

export interface IRoute {
  path: string;
  name: string;
  exact: boolean;
  component: any;
  props?: any;
  isPrivate: boolean;
}

export interface IPage {
  name: string;
}

export interface IBookingItem {
  id: string;
  date: string;
  time: string;
  packageType: string;
  from: string;
  fromContact: string;
  to: string;
  toContact: string;
  location: string;
  amount: string | number | undefined;
  status: string;
  theme: string | undefined;
  referenceNumber: string;
  packageDetails?: any;
  cardMessage: string;
  bgMusic?: string;
  ageYear?: string;
}

export interface IAddBooking {
  packageType: string;
  date: string | Date | undefined | null;
  time: string;
  from: string;
  fromContact: string;
  to: string;
  toContact: string;
  location: string;
  amount: string | number | undefined;
  status: string;
  theme: string | undefined;
  referenceNumber: string;
  packageDetails?: any;
  cardMessage: string;
  bgMusic?: string;
  ageYear?: string;
}
