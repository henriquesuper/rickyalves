'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Users,
  Building2,
  ClipboardList,
  DollarSign,
  ShieldCheck,
  FileText,
  FolderArchive,
  Settings,
  LogOut,
  Menu,
  X,
} from 'lucide-react';

const navItems = [
  { label: 'Dashboard', icon: LayoutDashboard, href: '/seep/admin/dashboard' },
  { label: 'Diagnóstico', icon: ClipboardList, href: '/seep/admin/diagnostico' },
  { label: 'Agentes', icon: Users, href: '/seep/admin/agentes' },
  { label: 'Contratantes', icon: Building2, href: '/seep/admin/contratantes' },
  { label: 'Contratos', icon: FileText, href: '/seep/admin/contratos' },
  { label: 'Documentos', icon: FolderArchive, href: '/seep/admin/documentos' },
  { label: 'Financeiro', icon: DollarSign, href: '/seep/admin/financeiro' },
  { label: 'Compliance', icon: ShieldCheck, href: '/seep/admin/compliance' },
];

const bottomItems = [
  { label: 'Configurações', icon: Settings, href: '#' },
  { label: 'Sair', icon: LogOut, href: '/seep/login' },
];

function SidebarContent({ pathname, onClose }) {
  return (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="px-6 py-6 flex items-center justify-between">
        <Link href="/seep" className="block">
          <h1
            className="text-2xl font-bold tracking-wider"
            style={{ color: '#C6A94D', fontFamily: 'var(--font-montserrat)' }}
          >
            S.E.E.P.
          </h1>
        </Link>
        {onClose && (
          <button onClick={onClose} className="lg:hidden text-white/60 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Separator */}
      <div className="mx-4 border-t border-white/10" />

      {/* Nav Items */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname?.startsWith(item.href + '/');
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                isActive ? 'text-white' : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
              style={
                isActive
                  ? { backgroundColor: 'rgba(198,169,77,0.15)', color: '#C6A94D' }
                  : undefined
              }
            >
              {isActive && (
                <div
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 rounded-r-full"
                  style={{ backgroundColor: '#C6A94D' }}
                />
              )}
              <item.icon className="w-5 h-5 shrink-0" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Items */}
      <div className="px-3 py-4 space-y-1 border-t border-white/10 mx-4">
        {bottomItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={onClose}
            className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-white/40 hover:text-white/70 hover:bg-white/5 transition-all duration-200"
          >
            <item.icon className="w-5 h-5 shrink-0" />
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex min-h-screen" style={{ backgroundColor: 'var(--seep-warm-bg)' }}>
      {/* Desktop Sidebar */}
      <aside
        className="hidden lg:flex w-64 flex-col fixed inset-y-0 left-0 z-40"
        style={{ backgroundColor: 'var(--seep-dark)' }}
      >
        <SidebarContent pathname={pathname} />
      </aside>

      {/* Mobile Sidebar Overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileOpen(false)}
          />
          <aside
            className="relative w-64 h-full"
            style={{ backgroundColor: 'var(--seep-dark)' }}
          >
            <SidebarContent pathname={pathname} onClose={() => setMobileOpen(false)} />
          </aside>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 lg:ml-64">
        {/* Top Bar */}
        <header
          className="sticky top-0 z-30 flex items-center justify-between h-16 px-6 border-b"
          style={{
            backgroundColor: 'rgba(250,248,244,0.95)',
            backdropFilter: 'blur(8px)',
            borderColor: 'var(--seep-border)',
          }}
        >
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-[var(--seep-light-bg)]"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="w-5 h-5" style={{ color: 'var(--seep-text-dark)' }} />
          </button>

          <div className="flex items-center gap-3 ml-auto">
            <div className="text-right">
              <p className="text-sm font-medium" style={{ color: 'var(--seep-text-dark)' }}>
                Administrador
              </p>
              <p className="text-xs" style={{ color: 'var(--seep-text-med)' }}>
                Central SEEP
              </p>
            </div>
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white"
              style={{ backgroundColor: 'var(--seep-gold)' }}
            >
              S
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
