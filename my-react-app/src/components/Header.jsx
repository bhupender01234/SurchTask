import React, { useState } from "react";

const Header = ({
    user = null,
    onNav,
    onSignIn,
    onLogout,
    dark = false,
}) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);

    const navItems = [
        { label: "Find Jobs", action: "search" },
        { label: "Companies", action: "companies" },
        { label: "Career Tools", action: "tools" },
        { label: "Career Tips", action: "tips" },
    ];

    const userMenuItems = [
        { label: "Dashboard", action: "dashboard" },
        { label: "My Applications", action: "applications" },
        { label: "My Profile", action: "profile" },
    ];

    const handleNav = (action) => {
        if (onNav) {
            onNav(action);
        }

        setMobileOpen(false);
        setUserMenuOpen(false);
    };

    const handleSignIn = () => {
        if (onSignIn) {
            onSignIn();
        }

        setMobileOpen(false);
    };

    const handleLogout = () => {
        if (onLogout) {
            onLogout();
        }

        setUserMenuOpen(false);
        setMobileOpen(false);
    };

    const getInitials = () => {
        if (user?.initials) {
            return user.initials;
        }

        if (user?.name) {
            return user.name
                .split(" ")
                .map((word) => word[0])
                .join("")
                .slice(0, 2)
                .toUpperCase();
        }

        return "U";
    };

    return (
        <header
            className={`sticky top-0 z-50 border-b backdrop-blur-xl ${dark
                ? "bg-purple-950/80 border-white/10"
                : "bg-orange-50/80 border-black/5"
                }`}
        >
            {/* ================================
          MAIN NAVBAR
      ================================= */}
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">

                {/* ================================
            LOGO + DESKTOP NAV
        ================================= */}
                <div className="flex items-center gap-10">

                    {/* Logo */}
                    <button
                        type="button"
                        onClick={() => handleNav("home")}
                        className={`cursor-pointer text-xl font-bold tracking-tight ${dark ? "text-white" : "text-gray-900"
                            }`}
                    >
                        Career<span className="text-violet-600">ly</span>
                    </button>

                    {/* Desktop Navigation */}
                    <nav className="hidden items-center gap-7 lg:flex">
                        {navItems.map((item) => (
                            <button
                                key={item.action}
                                type="button"
                                onClick={() => handleNav(item.action)}
                                className={`text-sm font-medium transition ${dark
                                    ? "text-white/80 hover:text-white"
                                    : "text-gray-700 hover:text-violet-600"
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </nav>
                </div>

                {/* ================================
            RIGHT SIDE
        ================================= */}
                <div className="flex items-center gap-3">

                    {user ? (
                        <>
                            {/* Dashboard */}
                            <button
                                type="button"
                                onClick={() => handleNav("dashboard")}
                                className={`hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-medium transition sm:inline-flex ${dark
                                    ? "text-white/80 hover:bg-white/10 hover:text-white"
                                    : "text-gray-700 hover:bg-black/5"
                                    }`}
                            >
                                <span className="text-base">▦</span>
                                Dashboard
                            </button>

                            {/* User Menu */}
                            <div className="relative">

                                {/* User Button */}
                                <button
                                    type="button"
                                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                                    className={`flex items-center gap-2 rounded-full border py-1 pl-1 pr-3 transition ${dark
                                        ? "border-white/10 text-white hover:border-white/30"
                                        : "border-black/10 text-gray-900 hover:border-black/30"
                                        }`}
                                >
                                    {/* Avatar */}
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-pink-600 text-xs font-bold text-white">
                                        {getInitials()}
                                    </div>

                                    {/* Name */}
                                    <span className="hidden text-sm font-medium sm:block">
                                        {user.name?.split(" ")[0] || "User"}
                                    </span>

                                    {/* Arrow */}
                                    <span className="text-[9px] opacity-60">
                                        {userMenuOpen ? "▲" : "▼"}
                                    </span>
                                </button>

                                {/* Dropdown */}
                                {userMenuOpen && (
                                    <div
                                        className={`absolute right-0 top-full mt-2 w-48 rounded-xl border p-1.5 shadow-xl ${dark
                                            ? "border-white/10 bg-purple-950 text-white"
                                            : "border-black/5 bg-white text-gray-900"
                                            }`}
                                    >
                                        {userMenuItems.map((item) => (
                                            <button
                                                key={item.action}
                                                type="button"
                                                onClick={() => handleNav(item.action)}
                                                className={`w-full rounded-lg px-3 py-2 text-left text-sm transition ${dark
                                                    ? "hover:bg-white/10"
                                                    : "hover:bg-orange-50"
                                                    }`}
                                            >
                                                {item.label}
                                            </button>
                                        ))}

                                        {/* Divider */}
                                        <div
                                            className={`my-1 h-px ${dark ? "bg-white/10" : "bg-black/5"
                                                }`}
                                        />

                                        {/* Logout */}
                                        <button
                                            type="button"
                                            onClick={handleLogout}
                                            className="w-full rounded-lg px-3 py-2 text-left text-sm text-rose-600 transition hover:bg-rose-50"
                                        >
                                            Sign out
                                        </button>
                                    </div>
                                )}
                            </div>
                        </>
                    ) : (
                        <>
                            {/* Sign In */}
                            <button
                                type="button"
                                onClick={handleSignIn}
                                className={`hidden rounded-full border px-4 py-2 text-sm font-medium transition sm:inline-flex ${dark
                                    ? "border-white/15 text-white hover:border-white/30"
                                    : "border-black/10 text-gray-900 hover:border-black/30"
                                    }`}
                            >
                                Sign in
                            </button>

                            {/* Employers */}
                            <button
                                type="button"
                                onClick={() => handleNav("employers")}
                                className="hidden items-center gap-1.5 rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet-600 sm:inline-flex"
                            >
                                Employers
                                <span>↗</span>
                            </button>
                        </>
                    )}

                    {/* Mobile Button */}
                    <button
                        type="button"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className={`rounded-lg p-2 text-xl lg:hidden ${dark
                            ? "text-white hover:bg-white/10"
                            : "text-gray-900 hover:bg-black/5"
                            }`}
                    >
                        {mobileOpen ? "✕" : "☰"}
                    </button>
                </div>
            </div>

            {/* ================================
          MOBILE MENU
      ================================= */}
            {mobileOpen && (
                <div
                    className={`border-t px-6 py-4 lg:hidden ${dark
                        ? "border-white/10 bg-purple-950"
                        : "border-black/5 bg-orange-50"
                        }`}
                >
                    {/* Main Navigation */}
                    <div className="flex flex-col gap-1">
                        {navItems.map((item) => (
                            <button
                                key={item.action}
                                type="button"
                                onClick={() => handleNav(item.action)}
                                className={`rounded-lg px-3 py-3 text-left text-sm font-medium ${dark
                                    ? "text-white/80 hover:bg-white/10"
                                    : "text-gray-700 hover:bg-black/5"
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

                    {/* Divider */}
                    <div
                        className={`my-3 h-px ${dark ? "bg-white/10" : "bg-black/5"
                            }`}
                    />

                    {/* Mobile User Actions */}
                    {user ? (
                        <div className="flex flex-col gap-1">
                            {userMenuItems.map((item) => (
                                <button
                                    key={item.action}
                                    type="button"
                                    onClick={() => handleNav(item.action)}
                                    className={`rounded-lg px-3 py-3 text-left text-sm ${dark
                                        ? "text-white/80 hover:bg-white/10"
                                        : "text-gray-700 hover:bg-black/5"
                                        }`}
                                >
                                    {item.label}
                                </button>
                            ))}

                            <button
                                type="button"
                                onClick={handleLogout}
                                className="rounded-lg px-3 py-3 text-left text-sm text-rose-600 hover:bg-rose-50"
                            >
                                Sign out
                            </button>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-2">
                            <button
                                type="button"
                                onClick={handleSignIn}
                                className={`rounded-lg px-3 py-3 text-left text-sm font-medium ${dark
                                    ? "text-white hover:bg-white/10"
                                    : "text-gray-700 hover:bg-black/5"
                                    }`}
                            >
                                Sign in
                            </button>

                            <button
                                type="button"
                                onClick={() => handleNav("employers")}
                                className="rounded-lg bg-gray-900 px-3 py-3 text-left text-sm font-semibold text-white hover:bg-violet-600"
                            >
                                Employers
                            </button>
                        </div>
                    )}
                </div>
            )}
        </header>
    );
};

export default Header;