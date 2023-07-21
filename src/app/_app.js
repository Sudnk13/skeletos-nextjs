import React, { useEffect } from "react";
import { useRouter } from "next/router";
import RootLayout from "@/path/to/your/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // Add your global side effects here
  useEffect(() => {
    // Example: Scroll to top on page navigation
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}

export default MyApp;
