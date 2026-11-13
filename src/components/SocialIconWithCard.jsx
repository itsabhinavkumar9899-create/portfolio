import React, { useState } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  MapPin,
  Link2,
  Sparkles,
  Copy,
  Check
} from 'lucide-react';
import { personalInfo, socialProfiles } from '../data/portfolioData';

const PLATFORM_ICONS = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
};

const ACCENT_STYLES = {
  guava: {
    cardBorder: 'border-green-400/50',
    avatarBg: 'from-green-500/25 via-emerald-500/20 to-pink-500/20 border-green-400/50 text-green-300',
    handleText: 'text-green-400',
    footerLink: 'text-green-400 hover:text-green-300',
    badge: 'bg-green-950/70 border-green-700/50 text-green-300',
    dot: 'bg-green-400',
    metaIcon: 'text-green-400',
  },
  pink: {
    cardBorder: 'border-pink-500/50',
    avatarBg: 'from-pink-500/25 via-rose-500/20 to-green-500/20 border-pink-400/50 text-pink-300',
    handleText: 'text-pink-400',
    footerLink: 'text-pink-400 hover:text-pink-300',
    badge: 'bg-pink-950/70 border-pink-700/50 text-pink-300',
    dot: 'bg-pink-400',
    metaIcon: 'text-pink-400',
  },
  green: {
    cardBorder: 'border-green-400/50',
    avatarBg: 'from-green-500/25 to-pink-500/20 border-green-400/50 text-green-300',
    handleText: 'text-green-400',
    footerLink: 'text-green-400 hover:text-green-300',
    badge: 'bg-green-950/70 border-green-700/50 text-green-300',
    dot: 'bg-green-400',
    metaIcon: 'text-green-400',
  },
  orangeRed: {
    cardBorder: 'border-pink-500/40',
    avatarBg: 'from-pink-500/25 to-green-500/20 border-pink-500/40 text-pink-300',
    handleText: 'text-pink-400',
    footerLink: 'text-pink-400 hover:text-pink-300',
    badge: 'bg-pink-950/70 border-pink-700/50 text-pink-300',
    dot: 'bg-pink-400',
    metaIcon: 'text-pink-400',
  },
  violet: {
    cardBorder: 'border-green-500/40',
    avatarBg: 'from-green-500/25 to-pink-500/20 border-green-500/40 text-green-300',
    handleText: 'text-green-400',
    footerLink: 'text-green-400 hover:text-green-300',
    badge: 'bg-green-950/70 border-green-700/50 text-green-300',
    dot: 'bg-green-400',
    metaIcon: 'text-green-400',
  },
  sky: {
    cardBorder: 'border-pink-400/40',
    avatarBg: 'from-pink-400/25 to-green-500/25 border-pink-400/40 text-pink-300',
    handleText: 'text-pink-300',
    footerLink: 'text-pink-400 hover:text-pink-300',
    badge: 'bg-pink-950/70 border-pink-700/50 text-pink-300',
    dot: 'bg-pink-400',
    metaIcon: 'text-pink-400',
  },
};

const ALIGN_CLASSES = {
  left: 'left-0',
  right: 'right-0',
  center: 'left-1/2 -translate-x-1/2',
  'center-left': '-left-14 sm:left-1/2 sm:-translate-x-1/2',
  'center-right': '-right-14 sm:left-1/2 sm:right-auto sm:-translate-x-1/2',
  'end-left': '-left-10 sm:left-auto sm:right-0',
  'end-center': '-left-20 sm:left-auto sm:right-0',
  'end-right': '-right-12 sm:right-0',
};

/**
 * Interactive social/contact link button that reveals a floating profile card on hover or focus.
 */
export default function SocialIconWithCard({
  platform = 'github',
  href,
  placement = 'top',
  align = 'center',
  wrapperClassName = 'inline-block',
  iconClassName = 'w-5 h-5',
  buttonClassName = 'inline-flex items-center justify-center p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-violet-500/40 hover:text-violet-400 transition-colors',
  children,
}) {
  const [copied, setCopied] = useState(false);

  const profile = socialProfiles[platform] || socialProfiles.github;
  const accent = ACCENT_STYLES[profile.accent] || ACCENT_STYLES.violet;
  const PlatformIcon = PLATFORM_ICONS[profile.id] || Github;
  const targetUrl = href || profile.url;
  const isExternal = !targetUrl.startsWith('mailto:');

  const placementClasses =
    placement === 'bottom'
      ? 'top-full pt-3 translate-y-1 group-hover/social:translate-y-0 group-focus-within/social:translate-y-0'
      : 'bottom-full pb-3 -translate-y-1 group-hover/social:translate-y-0 group-focus-within/social:translate-y-0';

  const alignClass = ALIGN_CLASSES[align] || ALIGN_CLASSES.center;

  const handleCopyEmail = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`relative ${wrapperClassName} group/social`}>
      <a
        href={targetUrl}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        aria-label={`${profile.platform} Profile (${profile.handle})`}
        className={buttonClassName}
      >
        {children || <PlatformIcon className={iconClassName} />}
      </a>

      {/* Floating Profile Details Card on Hover/Focus (desktop & tablet; inline/menu links cover mobile) */}
      <div
        role="tooltip"
        className={`hidden sm:block absolute ${placementClasses} ${alignClass} z-50 w-72 md:w-80 pointer-events-none opacity-0 invisible group-hover/social:opacity-100 group-hover/social:visible group-hover/social:pointer-events-auto group-focus-within/social:opacity-100 group-focus-within/social:visible group-focus-within/social:pointer-events-auto transition-all duration-200 ease-out`}
      >
        <div className={`rounded-2xl bg-slate-900/95 backdrop-blur-xl border ${accent.cardBorder} shadow-[0_20px_50px_rgba(0,0,0,0.8)] p-4 text-left`}>
          {/* Header Row */}
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex items-center gap-3 min-w-0">
              <div className={`relative w-10 h-10 rounded-xl bg-gradient-to-br ${accent.avatarBg} border flex items-center justify-center font-mono font-bold text-xs shrink-0`}>
                <span>AK</span>
                <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-slate-950 border border-slate-700 flex items-center justify-center">
                  <PlatformIcon className="w-2.5 h-2.5 text-white" />
                </span>
              </div>
              <div className="min-w-0">
                <div className="text-sm font-bold text-white truncate">
                  {personalInfo.name}
                </div>
                <div className={`text-xs font-mono ${accent.handleText} truncate`}>
                  {profile.handle}
                </div>
              </div>
            </div>

            <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-[10px] font-mono shrink-0 ${accent.badge}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${accent.dot} animate-pulse`}></span>
              {profile.platform}
            </span>
          </div>

          {/* Profile Bio */}
          <p className="text-xs text-slate-300 leading-relaxed mb-3">
            {profile.bio}
          </p>

          {/* Meta & Tech Highlights */}
          <div className="flex items-center gap-1.5 text-[11px] text-slate-400 mb-3 font-mono">
            <MapPin className={`w-3 h-3 ${accent.metaIcon} shrink-0`} />
            <span className="truncate">{personalInfo.location}</span>
            <span className="text-slate-600">•</span>
            <Sparkles className="w-3 h-3 text-orange-400 shrink-0" />
            <span className="truncate">{profile.status}</span>
          </div>

          <div className="flex flex-wrap gap-1.5 mb-3">
            {profile.highlights.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-md bg-slate-950/90 border border-slate-800 text-[10px] font-mono text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Clickable Footer */}
          <div className="pt-2.5 border-t border-slate-800/80 flex items-center justify-between gap-2 text-[11px] font-mono">
            <a
              href={targetUrl}
              {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className={`flex items-center gap-1.5 min-w-0 truncate ${accent.footerLink} transition-colors`}
            >
              <Link2 className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">{profile.displayUrl}</span>
              <ExternalLink className="w-3 h-3 shrink-0" />
            </a>

            {profile.id === 'email' && (
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 shrink-0 transition-colors"
                title="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-3 h-3 text-green-400" />
                    <span className="text-green-300">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
