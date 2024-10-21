import type { Metadata } from "next";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Topbar from "@/Components/shares/Topbar";
import LeftSidebar from "@/Components/shares/LeftSidebar";
import RightSidebar from "@/Components/shares/RightSidebar";
import Bottombar from "@/Components/shares/Bottombar";

export const metadata: Metadata = {
  title: "Threads Clone App",
  description: "This is a clone of Threads app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body>
          <Topbar />
          <main className="flex flex-row">
            <LeftSidebar></LeftSidebar>
            <section className="main-container">
              <div className="w-full max-w-4xl">{children}</div>
            </section>
            <RightSidebar></RightSidebar>
          </main>
          <Bottombar></Bottombar>
        </body>
      </ClerkProvider>
    </html>
  );
}
