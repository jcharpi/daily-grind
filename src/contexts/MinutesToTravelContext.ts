import { createContext } from "react";

interface MinutesToTravelContextType extends Array<any> {
    0: string;
    1: React.Dispatch<React.SetStateAction<string>>;
}

const MinutesToTravelContext = createContext<MinutesToTravelContextType>(["", () => {}])

export default MinutesToTravelContext