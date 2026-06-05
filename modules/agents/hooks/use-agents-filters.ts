import { useQueryStates } from "nuqs";
import { filtersSearchParams } from "../params";

export const useAgentsFilters = () => {
  return useQueryStates(filtersSearchParams);
};
