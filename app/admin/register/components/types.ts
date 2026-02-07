export interface Event {
  changeEvent: React.ChangeEvent<HTMLInputElement>;
  submitEvent: React.FormEvent<HTMLFormElement>;
  target: Target;
}
export interface RegisterFormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: false;
}
export type LoginFormData = Pick<RegisterFormData, "email" | "password"> & {
  rememberMe: boolean;
};
export interface Target {
  name: keyof RegisterFormData | keyof LoginFormData | "rememberMe";
  value: string;
  type: string;
  checked: boolean;
}
