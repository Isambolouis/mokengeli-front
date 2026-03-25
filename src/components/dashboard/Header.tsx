import { Link } from 'react-router-dom';

interface HeaderProps {
  title: string;
  subtitle?: string;
  onMenuClick?: () => void;
}

export function Header({ title, subtitle, onMenuClick }: HeaderProps) {
  const notifications = 3;

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b border-slate-200 px-4 py-3 sm:px-6 sm:py-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex min-w-0 items-start gap-3">
          {onMenuClick && (
            <button
              type="button"
              onClick={onMenuClick}
              className="lg:hidden mt-0.5 shrink-0 rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Ouvrir le menu"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          )}
          <div className="min-w-0 flex-1">
            <h1 className="text-xl font-bold text-slate-900 sm:text-2xl truncate">{title}</h1>
            {subtitle && <p className="text-sm text-slate-500 mt-1 line-clamp-2">{subtitle}</p>}
          </div>
        </div>

        <div className="flex items-center justify-end gap-2 sm:gap-3 shrink-0">
          <Link
            to="/client"
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-2.5 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 sm:px-3"
            title="Portail client — simulation"
            aria-label="Aller au portail client"
          >
            <span className="hidden sm:inline">Client</span>
            <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>

          <button
            type="button"
            className="relative w-10 h-10 rounded-lg bg-slate-50 hover:bg-slate-100 flex items-center justify-center transition-colors"
            aria-label="Notifications"
          >
            <svg className="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            {notifications > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                {notifications}
              </span>
            )}
          </button>

          <div className="flex items-center gap-2 sm:gap-3 pl-3 sm:pl-4 border-l border-slate-200 min-w-0">
            <div className="text-right min-w-0 hidden sm:block">
              <p className="text-sm font-semibold text-slate-900 truncate">Admin User</p>
              <p className="text-xs text-slate-500 truncate">Administrateur</p>
            </div>
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-xs sm:text-sm font-semibold shrink-0">
              AU
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
