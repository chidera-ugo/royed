import { PaystackButton } from "react-paystack";
import getConfig from "next/config";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  submitting?: boolean;
  onClose: () => void;
  buttonText: string;
  onSuccess: (reference: string) => void;
  config: {
    email: string;
    amount: string;
    fullName: string;
    phoneNumber: string;
  };
}

export const CheckoutButton: React.FC<Props> = ({
  children,
  className,
  onClose,
  buttonText,
  config,
  onSuccess,
  ...props
}) => {
  const { publicRuntimeConfig } = getConfig();

  const paystackConfig = {
    ...config,
    amount: Number(config.amount.replace(/\D/g, "")) * 100,
    reference: new Date().getTime().toString(),
    publicKey: publicRuntimeConfig.paystackKey,
    text: buttonText,
    onSuccess,
    onClose,
  };

  return (
    <PaystackButton
      {...props}
      {...paystackConfig}
      className={`secondary-button-solid h-12 ${className ?? ""}`}
    >
      {children}
    </PaystackButton>
  );
};
