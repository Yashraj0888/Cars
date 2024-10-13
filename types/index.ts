import { MouseEventHandler } from "react";

export interface CustomButtonPropes{
    title: string;
    containerStyles?:string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
    btnType?:"button" | "submit"


}