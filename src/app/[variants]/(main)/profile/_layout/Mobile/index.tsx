
import { LayoutProps } from '../type';

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      {/* <MobileContentLayout header={<Header />}>
        {children}
        <div style={{ flex: 1 }} />
        <Footer />
      </MobileContentLayout>
      <InitClientDB /> */}
    </>
  );
};

Layout.displayName = 'MobileProfileLayout';

export default Layout;
