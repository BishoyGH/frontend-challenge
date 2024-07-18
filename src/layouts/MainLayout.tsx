import { ModeToggle } from "@/components/mode-toggle";
import { ThemeProvider } from "@/components/theme-provider";
import { Code } from "lucide-react";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="container">
        <header className="flex h-16 items-center border-b bg-background px-4 md:px-6">
          <a
            className="flex items-center gap-1 font-semibold tracking-tight hover:text-indigo-900 hover:underline dark:hover:text-indigo-100 md:text-xl"
            href="/"
          >
            <Code />
            Frontend Challenge
          </a>
          <div className="ms-auto">
            <ModeToggle />
          </div>
        </header>
        <main className="p-4">{children}</main>
      </div>
    </ThemeProvider>
  );
};
export default MainLayout;
