import { useAppContext } from "@/context/AppContext";
import { Sun, Moon, Bell, Menu } from "lucide-react";

export function Header() {
  const { theme, toggleTheme, sidebarOpen, setSidebarOpen } = useAppContext();

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-card px-6">
      <div className="flex items-center gap-3">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="rounded-md p-2 text-muted-foreground hover:bg-accent lg:hidden"
        >
          <Menu size={20} />
        </button>
      </div>
      <div className="flex items-center gap-2">
        <button className="relative rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-foreground">
          <Bell size={18} />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-destructive" />
        </button>
        <button
          onClick={toggleTheme}
          className="rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-foreground"
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <div className="ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
          JD
        </div>
      </div>
    </header>
  );
}
