import { Stewardesses } from "./stewardesses";

export interface Crew {
    id: number;
    pilotId: number;
    stewardesses: Array<Stewardesses>;
}
