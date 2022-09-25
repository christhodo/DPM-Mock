export interface Message {
  message: string;
}

export interface BaseEntity {
  id: string | null;
}

export interface Order extends BaseEntity {
  title: string;
  description: string;
  complete: boolean;
}

export interface User {
  email: string;
  password: string;
}
