import React from "react";
import Footer from "./Footer";
import Navigation from "./Navigation/Navigation";

function Layout({ children, ...props }) {
  return (
    <div className="flex flex-col w-full items-center max-w-screen overflow-hidden">
      <Navigation {...props} />
      <main className="w-full flex flex-col items-center min-h-screen flex-grow gap-[150px]">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
