import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { Fragment, ReactNode } from "react";

export default async function CommonLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <Fragment>
      <Navbar />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </Fragment>
  );
}
