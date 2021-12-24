export const CodeTarget: React.FC<{ inline?: boolean }> = ({
  inline,
  children,
}) => {
  return <code>{children}</code>
}
