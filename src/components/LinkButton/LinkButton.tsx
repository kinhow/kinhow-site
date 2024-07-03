import { LinkButtonProps } from "./LinkButtonProps";

const Link = ({ children, ...props }: LinkButtonProps) => {
  return (
    <a rel="noreferrer" {...props}>{children}</a>
  )
}

export default Link;
