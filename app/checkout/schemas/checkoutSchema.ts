import { z } from "zod";
import dayjs from "dayjs";

const baseCheckoutSchema = z.object({
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

  // Optional password fields
  password: z.string().optional(),
  confirmPassword: z.string().optional(),

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

// Create schema with conditional password validation
export const createCheckoutSchema = (requirePassword: boolean = false) => {
  if (requirePassword) {
    return baseCheckoutSchema
      .extend({
        password: z
          .string()
          .min(1, "Password is required")
          .min(8, "Password must be at least 8 characters")
          .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, "Password must contain at least one uppercase letter, one lowercase letter, and one number"),
        confirmPassword: z
          .string()
          .min(1, "Please confirm your password"),
      })
      .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ["confirmPassword"],
      });
  }
  return baseCheckoutSchema;
};

export const checkoutSchema = baseCheckoutSchema;

export type CheckoutFormData = z.infer<typeof baseCheckoutSchema>;

export const defaultValues: Partial<CheckoutFormData> = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
  pickupDate: "",
  pickupTime: "",
  specialInstructions: "",
};
