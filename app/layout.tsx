import "./globals.css";
import { Nunito } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import ClinetOnly from "./components/ClinetOnly";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/modals/LoginModal";

export const metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClinetOnly>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <Navbar />
        </ClinetOnly>
        {children}
      </body>
    </html>
  );
}
