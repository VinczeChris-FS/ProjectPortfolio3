//* Layout for all pages

const Layout = ({ children }) => {
  return (
    <div>
      <main className="main">{children}</main>
    </div>
  );
};

export default Layout;
