'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Shield, Eye, EyeOff } from 'lucide-react';
import Button from '../components/ui/Button';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Demo: just redirect to admin
    await new Promise((r) => setTimeout(r, 800));
    router.push('/seep/admin/dashboard');
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-6"
      style={{ background: 'linear-gradient(135deg, #1B1B2F 0%, #0D0D1A 50%, #1B1B2F 100%)' }}
    >
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/seep">
            <h1
              className="text-5xl font-bold tracking-wider mb-2"
              style={{ color: '#C6A94D', fontFamily: 'var(--font-montserrat)' }}
            >
              S.E.E.P.
            </h1>
          </Link>
          <p className="text-sm" style={{ color: '#B0B0C0' }}>
            Acesso ao painel administrativo
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-xl p-8 border"
          style={{ backgroundColor: 'rgba(22,36,71,0.5)', borderColor: 'rgba(198,169,77,0.15)' }}
        >
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1.5" style={{ color: '#B0B0C0' }}>
                E-mail
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                className="w-full px-4 py-3 rounded-lg text-sm bg-[var(--seep-dark)] border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[var(--seep-gold)] focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5" style={{ color: '#B0B0C0' }}>
                Senha
              </label>
              <div className="relative">
                <input
                  type={showPass ? 'text' : 'password'}
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-lg text-sm bg-[var(--seep-dark)] border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[var(--seep-gold)] focus:border-transparent pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/70"
                >
                  {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <Button size="lg" className="w-full mt-2" type="submit" disabled={loading}>
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Entrando...
                </span>
              ) : (
                'Entrar'
              )}
            </Button>
          </div>

          {/* Demo hint */}
          <div className="mt-6 p-3 rounded-lg text-center" style={{ backgroundColor: 'rgba(198,169,77,0.08)' }}>
            <p className="text-xs" style={{ color: '#C6A94D' }}>
              Demo: clique em Entrar com qualquer credencial
            </p>
          </div>
        </form>

        {/* Links */}
        <div className="mt-6 text-center space-y-2">
          <Link
            href="/seep/app/contratante"
            className="text-sm block hover:underline"
            style={{ color: '#C6A94D' }}
          >
            Portal do Contratante (App)
          </Link>
          <Link
            href="/seep/app/agente"
            className="text-sm block hover:underline"
            style={{ color: '#B0B0C0' }}
          >
            Acesso do Agente (App)
          </Link>
        </div>
      </div>
    </div>
  );
}
