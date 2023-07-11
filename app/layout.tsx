import "@/styles/global.css"
import { Navbar, Footer } from "@/components";
export const metadata = {
  title: "Jason Dam",
  description: "Personal website for Jason Dam"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}