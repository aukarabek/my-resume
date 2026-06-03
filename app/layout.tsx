import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "My Website",
  description: "Personal full-stack website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative text-white">

        {/* Navbar */}
        <header className="relative sticky top-0 z-50 w-full flex flex-col items-center pt-6 text-white border-b border-gray-700 overflow-hidden">

          {/* Background ONLY for header */}
          <div className="absolute inset-0 -z-10">
            <img
              src="/american-flag.png"
              alt="header background"
              className="w-full h-full object-cover opacity-30"
            />
          </div>

          {/* Optional dark overlay for readability */}
          <div className="absolute inset-0 -z-10 bg-black/40" />

          {/* Name */}
          <h1 className="text-4xl font-bold tracking-wide">
            Karabek Abiy Uulu
          </h1>

          {/* Divider */}
          <div className="w-1/2 border-t border-gray-300 my-5"></div>

          {/* Navigation */}
          <nav className="flex gap-10 mb-5">
            <NavLink href="/" label="Home" />
            <NavLink href="/about" label="About" />
            <NavLink href="/projects" label="Projects" />
            <NavLink href="/contact" label="Contact" />
          </nav>

        </header>

        {/* Page Content */}
        <main className="flex justify-center px-4">
          <div className="w-full max-w-4xl">
            {children}
          </div>
        </main>

      </body>
    </html>
  );
}

/* Reusable NavLink component */
function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="relative text-lg font-medium text-gray-300 hover:text-white transition-all duration-300"
    >
      {label}
    </Link>
  );
}