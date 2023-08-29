export interface UserType {
  name: string;
  phone: string;
  image?: string;
}

export interface TicketFileType {
  fileName: string;
  fileSize: string;
  fileType: string;
}

export interface TicketType {
  id: number;
  user: UserType;
  ticketNumber: number;
  ticketPrice: number;
  cinemas: string[];
  numberOfPeople: number;
  numberOfPurchases: string;
  ticketFile: TicketFileType;
}
