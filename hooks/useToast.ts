import { toast } from "sonner";

export type BasicToastType = "success" | "info" | "warning" | "error";

export interface ToastMethods {
  showBasicToast: (message: string, type: BasicToastType) => void;
}

const useToast = (): ToastMethods => {
  const showBasicToast = (message: string, type: BasicToastType) => {
    toast[type](message);
  };

  return { showBasicToast };
};

export default useToast;
