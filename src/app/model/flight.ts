import { Ticket } from "./ticket";

export interface Flight {
    id: number;
    departurePoint: string;
    arrivalPoint: string;
    departureTime: Date;
    arrivalTime: Date;
    tickets: Array<Ticket>;
}
