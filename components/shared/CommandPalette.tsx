"use client";

import * as React from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "cmdk";
import {
  Search,
  Home,
  FolderKanban,
  Briefcase,
  Mail,
  BookOpen,
  User,
  Sparkles,
  X,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

interface SearchItem {
  id: string;
  name: string;
  icon: React.ReactNode;
  href: string;
  category: "navigation" | "social" | "actions";
  keywords?: string[];
}

const items: SearchItem[] = [
  // Navigation
  {
    id: "home",
    name: "Home",
    icon: <Home className="h-4 w-4" />,
    href: "/",
    category: "navigation",
    keywords: ["home", "main", "start"],
  },
  {
    id: "projects",
    name: "Projects",
    icon: <FolderKanban className="h-4 w-4" />,
    href: "#projects",
    category: "navigation",
    keywords: ["portfolio", "work", "showcase"],
  },
  {
    id: "experience",
    name: "Experience",
    icon: <Briefcase className="h-4 w-4" />,
    href: "#experience",
    category: "navigation",
    keywords: ["work", "job", "career", "history"],
  },
  {
    id: "contact",
    name: "Contact",
    icon: <Mail className="h-4 w-4" />,
    href: "#contact",
    category: "navigation",
    keywords: ["email", "reach", "message"],
  },

  // Social Links
  {
    id: "github",
    name: "GitHub",
    icon: <FaGithub className="h-4 w-4" />,
    href: "https://github.com/AnsariSadaan",
    category: "social",
    keywords: ["code", "repository", "git"],
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    icon: <FaLinkedin className="h-4 w-4" />,
    href: "https://linkedin.com/in/your-profile",
    category: "social",
    keywords: ["professional", "network", "career"],
  },
  {
    id: "twitter",
    name: "Twitter",
    icon: <FaXTwitter className="h-4 w-4" />,
    href: "https://twitter.com/your-profile",
    category: "social",
    keywords: ["social", "tweet", "x"],
  },

  // Actions
  // {
  //   id: "blog",
  //   name: "Blog",
  //   icon: <BookOpen className="h-4 w-4" />,
  //   href: "#blog",
  //   category: "actions",
  //   keywords: ["articles", "posts", "writing"],
  // },
  {
    id: "about",
    name: "About Me",
    icon: <User className="h-4 w-4" />,
    href: "#about",
    category: "actions",
    keywords: ["bio", "profile", "info"],
  },
];

export function CommandPalette() {
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const router = useRouter();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
      // Close on Escape
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open]);

  const runCommand = (item: SearchItem) => {
    setOpen(false);
    setSearch("");

    if (item.href.startsWith("http")) {
      window.open(item.href, "_blank");
    } else if (item.href.startsWith("#")) {
      const element = document.querySelector(item.href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", item.href);
      }
    } else {
      router.push(item.href);
    }
  };

  const filteredItems = React.useMemo(() => {
    if (!search.trim()) return items;
    const searchLower = search.toLowerCase().trim();
    return items.filter((item) => {
      if (item.name.toLowerCase().includes(searchLower)) return true;
      if (
        item.keywords?.some((keyword) =>
          keyword.toLowerCase().includes(searchLower)
        )
      )
        return true;
      return false;
    });
  }, [search]);

  const groupedItems = React.useMemo(() => {
    const groups: Record<string, SearchItem[]> = {
      navigation: [],
      social: [],
      actions: [],
    };
    filteredItems.forEach((item) => {
      groups[item.category].push(item);
    });
    return groups;
  }, [filteredItems]);

  const getCategoryLabel = (category: string) => {
    const labels: Record<string, string> = {
      navigation: "Navigation",
      social: "Social Links",
      actions: "Quick Actions",
    };
    return labels[category] || category;
  };

  return (
    <>
      {/* Search Button */}
      <Button
        variant="outline"
        className="hidden md:flex items-center gap-2 text-sm text-muted-foreground w-48 justify-between rounded-full hover:bg-primary/5 hover:text-primary transition-all"
        onClick={() => setOpen(true)}
      >
        <div className="flex items-center gap-2">
          <Search className="h-4 w-4" />
          <span>Search...</span>
        </div>
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="md:hidden rounded-full hover:bg-primary/5 hover:text-primary transition-all"
        onClick={() => setOpen(true)}
      >
        <Search className="h-5 w-5" />
      </Button>

      {/* Command Dialog - Fixed positioning */}
      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        className="fixed inset-0 z-50 flex items-start justify-center sm:items-center"
      >
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
          onClick={() => setOpen(false)}
        />

        {/* Dialog Content */}
        <div className="relative w-full max-w-lg mx-auto mt-16 sm:mt-0 p-4">
          <div className="overflow-hidden rounded-xl border bg-background shadow-2xl">
            {/* Header with search input */}
            <div className="flex items-center border-b px-4">
              <Search className="mr-2 h-4 w-4 shrink-0 text-muted-foreground" />
              <CommandInput
                placeholder="Search for pages, projects, or actions..."
                value={search}
                onValueChange={setSearch}
                className="flex h-12 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
                autoFocus
              />
              {search && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-7 px-2 text-xs text-muted-foreground hover:text-foreground"
                  onClick={() => setSearch("")}
                >
                  <X className="h-3 w-3" />
                </Button>
              )}
              <kbd className="ml-2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground sm:flex">
                ESC
              </kbd>
            </div>

            {/* Results */}
            <CommandList className="max-h-75 overflow-y-auto p-2">
              {filteredItems.length === 0 ? (
                <div className="py-8 text-center text-sm text-muted-foreground">
                  <div className="mb-2 text-3xl">🔍</div>
                  <p>No results found for "{search}"</p>
                  <p className="mt-1 text-xs">
                    Try adjusting your search terms
                  </p>
                </div>
              ) : (
                Object.entries(groupedItems).map(
                  ([category, categoryItems]) => {
                    if (categoryItems.length === 0) return null;
                    return (
                      <React.Fragment key={category}>
                        <CommandGroup heading={getCategoryLabel(category)}>
                          <div className="mb-2 text-xs font-medium text-muted-foreground px-2">
                            {getCategoryLabel(category)}
                          </div>
                          {categoryItems.map((item) => (
                            <CommandItem
                              key={item.id}
                              onSelect={() => runCommand(item)}
                              className="flex items-center gap-3 px-3 py-2.5 cursor-pointer hover:bg-primary/10 rounded-lg transition-colors"
                            >
                              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                {item.icon}
                              </div>
                              <div className="flex-1">
                                <span className="text-sm font-medium">
                                  {item.name}
                                </span>
                                <span className="ml-2 text-xs text-muted-foreground">
                                  {category === "navigation"
                                    ? "Navigate"
                                    : category === "social"
                                    ? "Open"
                                    : "Action"}
                                </span>
                              </div>
                              <kbd className="text-xs text-muted-foreground opacity-50">
                                ↵
                              </kbd>
                            </CommandItem>
                          ))}
                        </CommandGroup>
                        {category !== "actions" && (
                          <CommandSeparator className="my-1" />
                        )}
                      </React.Fragment>
                    );
                  }
                )
              )}
            </CommandList>

            {/* Footer */}
            <div className="border-t px-4 py-2 flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <kbd className="rounded border bg-muted px-1.5 font-mono">
                    ⌘
                  </kbd>
                  <span>K</span>
                </span>
                <span className="hidden sm:inline">to open</span>
                <span className="hidden sm:inline">·</span>
                <span className="flex items-center gap-1">
                  <kbd className="rounded border bg-muted px-1.5 font-mono">
                    ↑
                  </kbd>
                  <kbd className="rounded border bg-muted px-1.5 font-mono">
                    ↓
                  </kbd>
                </span>
                <span className="hidden sm:inline">to navigate</span>
                <span className="hidden sm:inline">·</span>
                <span className="flex items-center gap-1">
                  <kbd className="rounded border bg-muted px-1.5 font-mono">
                    ↵
                  </kbd>
                </span>
                <span className="hidden sm:inline">to select</span>
              </div>
              <div className="flex items-center gap-1">
                <Sparkles className="h-3 w-3 text-primary" />
                <span className="hidden sm:inline">Powered by cmdk</span>
              </div>
            </div>
          </div>
        </div>
      </CommandDialog>
    </>
  );
}