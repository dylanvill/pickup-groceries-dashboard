import { z } from "zod";
import dayjs from "dayjs";

export const checkoutSchema = z.object({
  // Customer Details
  firstName: z
    .string()
    .min(1, "First name is required")
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must be less than 50 characters"),

  lastName: z
    .string()
    .min(1, "Last name is required")
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name must be less than 50 characters"),

  email: z
    .email("Please enter a valid email address")
    .min(1, "Email is required"),

  phone: z
    .string()
    .min(1, "Phone number is required")
    .regex(/^[0-9]{10}$/, "Phone number must be 10 digits"),

  // Pickup Information
  pickupDate: z
    .string()
    .min(1, "Pickup date is required")
    .refine((date) => {
      const selectedDate = dayjs(date);
      const today = dayjs().startOf('day');
      return selectedDate.isAfter(today) || selectedDate.isSame(today);
    }, "Pickup date cannot be in the past"),

  pickupTime: z
    .string()
    .min(1, "Pickup time is required")
    .regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "Please enter a valid time"),

  // Optional fields
  specialInstructions: z.string().optional(),
});

export type CheckoutFormData = z.infer<typeof checkoutSchema>;

export const defaultValues: Partial<CheckoutFormData> = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  pickupDate: "",
  pickupTime: "",
  specialInstructions: "",
};
