"use client";
import { Filters } from "../hooks/types";
import { createContext } from "react";
const FilterContext = createContext<Filters>({} as Filters);
export default FilterContext;
