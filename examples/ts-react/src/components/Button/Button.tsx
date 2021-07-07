import { FC, ReactNode } from 'react';

interface ButtonProps {
  /**
   * The content of the button.
   */
  children: ReactNode;
  /**
   * Sets the button size.
   */
  variant: 'small' | 'large';
  /**
   * Disables the button.
   */
  disabled?: boolean;
}

// NOTE: Right now FC<Props> is not working.
const Button: FC<ButtonProps> = ({
  children,
  disabled,
  variant,
}: ButtonProps) => (
  <button disabled={disabled} type='button'>
    {children} {variant}
  </button>
);

// eslint-disable-next-line import/no-default-export
export default Button;
