import type {
  ResendVerificationEmailRequestData,
  VerifyRegistrationRequestData,
  RegisterRequestData,
} from "../types";

export interface RegistrationBehaviors {
  resendVerificationEmail: (
    data: ResendVerificationEmailRequestData,
  ) => Promise<void>;

  verify: (data: VerifyRegistrationRequestData) => Promise<void>;
  start: (data: RegisterRequestData) => Promise<{ id: string }>;
}
