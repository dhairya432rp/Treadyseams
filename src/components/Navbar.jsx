import React, { useState } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  UserIcon,
  HeartIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";

export default function MegaMenuNavbar() {
  // desktop hover state
  const [hoveredMenu, setHoveredMenu] = useState(null);
  // mobile drawer
  const [drawerOpen, setDrawerOpen] = useState(false);
  // mobile accordion open keys
  const [openAccordions, setOpenAccordions] = useState({});

  const toggleAccordion = (key) =>
    setOpenAccordions((p) => ({ ...p, [key]: !p[key] }));

  return (
    <header className="w-full bg-white border-b relative z-50">
      {/* ===== Top utility row (compact on mobile) ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-3">
        {/* Left: Logo */}
        <a href="#" className="shrink-0 leading-none">
          {/* Replace with your logo in /public */}
          <img src="/logo.svg" alt="eShakti" className="h-8 w-auto" />
          <p className="text-[10px] text-gray-500 -mt-1 hidden sm:block">
            We design. You customize.
          </p>
        </a>

        {/* Middle: Search (desktop/tablet) */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="w-full max-w-2xl">
            <div className="flex items-center gap-2">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-600" />
              <input
                type="text"
                placeholder="Search Products"
                className="w-full outline-none text-sm placeholder-gray-500"
              />
            </div>
            <div className="border-b mt-1 border-gray-300" />
          </div>
        </div>

        {/* Right: Icons + Hamburger */}
        <div className="flex items-center gap-4">
          <button className="hidden md:inline-flex items-center gap-2 text-sm hover:text-black">
            <UserIcon className="h-5 w-5" />
            <span>Sign in</span>
          </button>
          <button className="hidden md:inline-flex items-center gap-2 text-sm hover:text-black">
            <HeartIcon className="h-5 w-5" />
            <span>Wishlist</span>
          </button>
          <button className="inline-flex items-center gap-2 text-sm hover:text-black">
            <ShoppingBagIcon className="h-5 w-5" />
            <span className="hidden md:inline">Cart</span>
          </button>

          {/* Hamburger (mobile) */}
          <button
            className="md:hidden p-2 rounded hover:bg-gray-100"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
          >
            <Bars3Icon className="h-7 w-7" />
          </button>
        </div>
      </div>

      {/* ===== Bottom nav (desktop only) ===== */}
      <nav className="hidden lg:block border-t border-gray-200">
        <ul className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-center gap-7 text-[13px] font-medium text-gray-800">
          <NavLink>TOP SELLERS</NavLink>
          <Divider />
          {/* Hover wrapper for mega menu */}
          <li
            className="relative cursor-pointer hover:text-black"
            onMouseEnter={() => setHoveredMenu("DRESSES")}
            onMouseLeave={() => setHoveredMenu(null)}
          >
            DRESSES
            {/* underline active indicator */}
            <span className="block h-[2px] w-10 bg-black mx-auto mt-2 opacity-90" />
            {hoveredMenu === "DRESSES" && (
              <div
                className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[980px] bg-white border border-gray-200 shadow-xl rounded-md overflow-hidden"
                onMouseEnter={() => setHoveredMenu("DRESSES")}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <div className="grid grid-cols-4 gap-8 p-6 text-sm text-gray-700">
                  {/* Col 1 */}
                  <div>
                    <h3 className="font-semibold mb-2">SHOP</h3>
                    <MenuList
                      items={["All Dresses", "New Arrivals", "Top Sellers"]}
                    />
                    <h3 className="font-semibold mt-5 mb-2">
                      SHOP BY COLLECTION
                    </h3>
                    <MenuList items={["Classic", "Bohemian", "Contemporary"]} />
                  </div>

                  {/* Col 2 */}
                  <div>
                    <h3 className="font-semibold mb-2">SHOP BY FABRIC</h3>
                    <MenuList
                      items={[
                        "Velvet",
                        "Cotton",
                        "Cotton Chambray",
                        "Cotton Jersey",
                        "Cotton Poplin",
                        "Denim",
                        "Crepe",
                        "Georgette",
                        "Dupioni",
                      ]}
                      italics={["Cotton Chambray", "Cotton Jersey", "Cotton Poplin"]}
                    />
                  </div>

                  {/* Col 3 */}
                  <div>
                    <h3 className="font-semibold mb-2">SHOP BY STYLE</h3>
                    <MenuList
                      items={[
                        "Fit and Flare",
                        "A-Line",
                        "Empire",
                        "Sheath",
                        "Shift",
                        "Shirtdress",
                        "Wrap",
                      ]}
                    />
                    <h3 className="font-semibold mt-5 mb-2">SHOP BY TYPE</h3>
                    <MenuList items={["Solid", "Print", "Embroidery"]} />
                  </div>

                  {/* Col 4: Images */}
                  <div className="flex gap-4 justify-center">
                    <Thumb
                      src="/pics/dress1.jpg"
                      label="CONTEMPORARY"
                    />
                    <Thumb
                      src="/pics/dress2.jpg"
                      label="BOHEMIAN"
                    />
                  </div>
                </div>
              </div>
            )}
          </li>
          <Divider />
          <NavLink>TOPS</NavLink>
          <Divider />
          <NavLink>BOTTOMS</NavLink>
          <Divider />
          <NavLink>JUMPSUITS</NavLink>
          <Divider />
          <NavLink>COATS</NavLink>
          <Divider />
          <NavLink>VACATION</NavLink>
          <Divider />
          <NavLink>PERENNIALS</NavLink>
          <Divider />
          <NavLink>YEAR-ROUND ESSENTIALS</NavLink>
          <Divider />
          <NavLink>
            <span className="relative">
              SALE
              <small className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[10px] text-red-600">
                UPTO 50% OFF
              </small>
            </span>
          </NavLink>
          <Divider />
          <NavLink>ABOUT US</NavLink>
          <Divider />
          <NavLink>MASKS</NavLink>
        </ul>
      </nav>

      {/* ===== Mobile drawer ===== */}
      <div
        className={`fixed inset-0 bg-black/40 transition-opacity duration-200 z-40 ${
          drawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setDrawerOpen(false)}
      />
      <aside
        className={`fixed top-0 left-0 h-full w-[320px] bg-white z-50 shadow-2xl transition-transform duration-200 overflow-y-auto ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div className="p-4 border-b flex items-center justify-between">
          <img src="/logo.svg" alt="logo" className="h-7" />
          <button
            className="p-2 rounded hover:bg-gray-100"
            onClick={() => setDrawerOpen(false)}
            aria-label="Close menu"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Search inside drawer */}
        <div className="p-4">
          <div className="bg-gray-100 flex items-center gap-2 px-3 rounded-full h-10">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-600" />
            <input
              placeholder="Search Products"
              className="w-full bg-transparent outline-none text-sm"
            />
          </div>
        </div>

        {/* Category list (accordion) */}
        <div className="px-2 pb-6">
          <MobileLink label="TOP SELLERS" />
          {/* DRESSES accordion mirrors the desktop mega menu */}
          <MobileAccordion
            label="DRESSES"
            open={!!openAccordions.dresses}
            onToggle={() => toggleAccordion("dresses")}
          >
            <Section title="SHOP" items={["All Dresses", "New Arrivals", "Top Sellers"]} />
            <Section
              title="SHOP BY FABRIC"
              items={[
                "Velvet",
                "Cotton",
                "Cotton Chambray",
                "Cotton Jersey",
                "Cotton Poplin",
                "Denim",
                "Crepe",
              ]}
              italics={["Cotton Chambray", "Cotton Jersey", "Cotton Poplin"]}
            />
            <Section
              title="SHOP BY STYLE"
              items={["Fit and Flare", "A-Line", "Empire", "Sheath", "Shift", "Shirtdress", "Wrap"]}
            />
            <Section title="SHOP BY TYPE" items={["Solid", "Print", "Embroidery"]} />
            <div className="mt-3 grid grid-cols-2 gap-3">
              <Thumb src="/pics/dress1.jpg" label="CONTEMPORARY" small />
              <Thumb src="/pics/dress2.jpg" label="BOHEMIAN" small />
            </div>
          </MobileAccordion>

          <MobileLink label="TOPS" />
          <MobileLink label="BOTTOMS" />
          <MobileLink label="JUMPSUITS" />
          <MobileLink label="COATS" />
          <MobileLink label="VACATION" />
          <MobileLink label="PERENNIALS" />
          <MobileLink label="YEAR-ROUND ESSENTIALS" />
          <MobileLink label="SALE" subLabel="UPTO 50% OFF" subClass="text-red-600" />
          <MobileLink label="ABOUT US" />
          <MobileLink label="MASKS" />
        </div>
      </aside>
    </header>
  );
}

/* ============== tiny helpers ============== */

function NavLink({ children }) {
  return (
    <li className="cursor-pointer hover:text-black">
      <span className="whitespace-nowrap">{children}</span>
    </li>
  );
}

function Divider() {
  return <span className="h-4 w-px bg-gray-300" />;
}

function MenuList({ items, italics = [] }) {
  return (
    <ul className="space-y-1">
      {items.map((it) => (
        <li
          key={it}
          className={`cursor-pointer hover:underline ${
            italics.includes(it) ? "italic" : ""
          }`}
        >
          {it}
        </li>
      ))}
    </ul>
  );
}

function Thumb({ src, label, small = false }) {
  return (
    <div className="text-center">
      <img
        src={src}
        alt={label}
        className={`${small ? "h-36 w-24" : "h-48 w-32"} object-cover mx-auto`}
      />
      <p className="text-xs mt-1">{label}</p>
    </div>
  );
}

/* ===== Mobile-only helpers ===== */

function MobileLink({ label, subLabel, subClass = "" }) {
  return (
    <div className="px-2 py-3 border-b">
      <a href="#" className="block text-sm font-medium">
        {label}
      </a>
      {subLabel && (
        <small className={`block text-[10px] mt-1 ${subClass}`}>{subLabel}</small>
      )}
    </div>
  );
}

function MobileAccordion({ label, open, onToggle, children }) {
  return (
    <div className="px-2 py-2 border-b">
      <button
        className="w-full flex items-center justify-between text-left"
        onClick={onToggle}
        aria-expanded={open}
      >
        <span className="text-sm font-medium">{label}</span>
        {open ? <ChevronUpIcon className="h-5 w-5" /> : <ChevronDownIcon className="h-5 w-5" />}
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ${
          open ? "grid-rows-[1fr] mt-2" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
}

function Section({ title, items, italics = [] }) {
  return (
    <div className="mt-3">
      <h4 className="text-xs font-semibold text-gray-600 mb-1">{title}</h4>
      <ul className="text-sm space-y-1">
        {items.map((it) => (
          <li
            key={it}
            className={`pl-1 ${italics.includes(it) ? "italic" : ""} hover:underline cursor-pointer`}
          >
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}
