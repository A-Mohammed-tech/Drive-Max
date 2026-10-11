const variants = {
  primary: "bg-brand-red text-white hover:bg-brand-red-dark",
  secondary: "bg-brand-blue text-white hover:bg-brand-blue-dark",
  outline: "border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white",
  light: "bg-white text-brand-blue hover:bg-mist",
  outlineLight: "border-2 border-white/70 text-white hover:bg-white hover:text-brand-blue",
};

/**
 * Renders a link when `href` is given, otherwise a button.
 * `icon` is any lucide-react icon component, shown on the right.
 */
export default function Button({
  href,
  onClick,
  variant = "primary",
  icon: Icon,
  children,
  className = "",
  type = "button",
  ...rest
}) {
  const classes = `group inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-base font-semibold transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60 ${variants[variant]} ${className}`;

  const content = (
    <>
      {children}
      {Icon && (
        <Icon
          size={18}
          aria-hidden="true"
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} className={classes} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...rest}>
      {content}
    </button>
  );
}
