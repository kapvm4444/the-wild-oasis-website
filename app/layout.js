import Navigation from "@/app/components/Navigation";
import Logo from "@/app/components/Logo";

export const metadata = {
  title: "The Wild Oasis",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Logo />
          <Navigation />
        </header>
        {children}
        <footer>&copy; All rights reserved</footer>
      </body>
    </html>
  );
}
