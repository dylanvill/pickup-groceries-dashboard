import { formatCurrency } from "@/utils/formatCurrency";

const useFormatCurrency = (amount?: number) => {
  return formatCurrency(amount || 0);
};

export default useFormatCurrency;
