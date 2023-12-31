"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/src/components/ui/navigation-menu";
import { cn } from "@/src/lib/shadcn-utils";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

const triggerStyles = cn(
  "text-[1.25rem]/1.3 font-medium tracking-[.0125rem] text-[#FEFEFE] hover:text-[#90E900] bg-transparent hover:bg-transparent data-[active]:bg-transparent data-[active]:text-[#90E900] data-[state=open]:text-[#90E900] data-[state=open]:bg-transparent"
);

export function NavigationMenuDemo() {
  return (
    <div className="bg-[#172029] min-h-screen pb-96">
      <header className="py-6">
        <div className="container">
          <div className="flex items-center justify-between">
            <Link href={"/"}>
              <svg
                width={110}
                height={60}
                viewBox="0 0 110 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M43.4902 9.54955V19.0994L44.9316 21.0672C46.5235 23.2405 47.4473 24.8715 48.4579 27.2927L49.128 28.8986L50.2036 28.1823C52.5303 26.6328 53.4968 26.363 56.7479 26.3564C59.5347 26.3504 60.1144 26.4568 61.7905 27.2798C63.9107 28.3209 65.9077 30.3877 67.0677 32.7413C68.1469 34.9312 68.1804 39.5495 67.1334 41.8202C64.3698 47.814 57.1072 50.2608 51.3441 47.1396C47.6959 45.1638 45.8752 41.8795 45.4497 36.5062C45.2959 34.5659 44.9462 32.1583 44.6724 31.1557C42.7955 24.2799 36.9014 18.18 29.7353 15.6972C27.3857 14.8831 26.6121 14.7787 22.9407 14.7801C18.1758 14.7821 16.2876 15.2282 12.2692 17.3007C2.57977 22.2982 -2.21258 34.0114 1.23079 44.2815C2.52607 48.1448 3.83925 50.2177 7.00686 53.4002C9.3137 55.7176 10.379 56.5108 12.6659 57.6135C17.4042 59.8988 22.6865 60.5604 27.7042 59.4971C30.1983 58.9688 35.4659 56.5811 35.7457 55.8522C35.8421 55.6003 35.3161 54.5931 34.5767 53.614C33.8372 52.6346 32.6119 50.4994 31.8535 48.869C31.0952 47.2387 30.4303 45.8526 30.3753 45.7886C30.3206 45.7246 29.7711 46.0574 29.1542 46.5277C27.441 47.8346 25.3625 48.462 22.775 48.4531C20.0114 48.4438 18.0824 47.8071 15.9949 46.2152C12.8847 43.843 11.4701 40.5597 11.7409 36.3401C12.2095 29.0404 19.8075 24.2769 26.806 26.8953C29.9703 28.0796 32.9022 31.3619 33.6814 34.5931C33.8077 35.1164 34.0457 37.0756 34.2101 38.9473C34.5601 42.9319 35.4112 45.718 37.212 48.7749C43.9701 60.2462 59.0746 63.5106 69.8711 55.8333C75.9561 51.5063 79.6175 44.2235 79.6175 36.4472C79.6175 32.739 82.9097 28.3152 86.7459 26.8688C89.4604 25.8453 93.268 26.0094 95.6992 27.2543C97.4701 28.1614 100.266 30.8958 100.646 32.0924C100.772 32.4888 100.992 32.8129 101.135 32.8129C101.278 32.8129 102.256 31.8809 103.308 30.7414C104.361 29.6022 106.187 27.6815 107.368 26.4737L109.513 24.2779L107.296 21.9273C102.901 17.2679 96.8261 14.5835 90.6778 14.5835C85.7051 14.5835 79.4684 16.9934 75.7685 20.345L73.7424 22.1802L72.9512 21.3291C71.6688 19.9493 68.2411 17.6265 65.9624 16.5934C63.4162 15.439 59.5006 14.5835 56.7618 14.5835H54.7593V7.29176V0H49.1247H43.4902V9.54955ZM98.0126 45.9162C94.3837 49.0546 88.0478 49.3546 84.3853 46.5612C83.7927 46.1091 83.2412 45.7392 83.1603 45.7392C83.0791 45.7392 82.6738 46.646 82.2591 47.7544C81.5005 49.7835 79.4564 53.2371 78.2149 54.5884C77.2958 55.5887 77.5758 56.0491 79.8306 57.2443C83.0954 58.9751 85.7542 59.6976 89.593 59.8975C96.0644 60.2346 101.102 58.4249 106.299 53.896L107.625 52.7406L103.652 48.7427C101.468 46.544 99.6032 44.7505 99.5094 44.7575C99.4153 44.7641 98.7418 45.2858 98.0126 45.9162Z"
                  fill="#90E900"
                />
              </svg>
            </Link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={triggerStyles}>
                    Getting started
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium">
                              shadcn/ui
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Beautifully designed components built with Radix
                              UI and Tailwind CSS.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="/docs" title="Introduction">
                        Re-usable components built using Radix UI and Tailwind
                        CSS.
                      </ListItem>
                      <ListItem href="/docs/installation" title="Installation">
                        How to install dependencies and structure your app.
                      </ListItem>
                      <ListItem
                        href="/docs/primitives/typography"
                        title="Typography"
                      >
                        Styles for headings, paragraphs, lists...etc
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={triggerStyles}>
                    Components
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/docs" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        triggerStyles
                      )}
                    >
                      Documentation
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuIndicator />
              </NavigationMenuList>
            </NavigationMenu>
            <div>
              <Link
                href={"/"}
                className="inline-flex items-center gap-2 bg-transparent border border-current text-[#90E900] min-h-[3.5rem] py-1 px-6 rounded-full transition-colors duration-500 hover:bg-[#90E900] hover:text-black"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
