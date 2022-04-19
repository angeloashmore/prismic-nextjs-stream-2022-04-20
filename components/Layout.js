export const Layout = ({ children }) => {
  return (
    <div>
      <main className="overflow-x-hidden antialiased">{children}</main>
    </div>
  );
};
