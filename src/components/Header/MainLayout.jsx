import { Outlet } from "react-router";
import { Header } from "./Header";

/**
 * 메인 레이아웃
 * @author <hwitae>
 */
export const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};
