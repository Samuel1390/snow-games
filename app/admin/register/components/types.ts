export interface Event {
  changeEvent: React.ChangeEvent<HTMLInputElement>;
  submitEvent: React.FormEvent<HTMLFormElement>;
  target: {
    name: string;
    value: string;
    type: string;
    checked: boolean;
  };
}
export interface FormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: false;
}
