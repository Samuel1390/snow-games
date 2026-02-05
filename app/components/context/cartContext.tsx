"use client";
import { ReturnValue,  } from "../hooks/types";
import { createContext } from "react";
const cartContext = createContext<ReturnValue>({} as ReturnValue);
export default cartContext;
