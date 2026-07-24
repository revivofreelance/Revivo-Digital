"use client";

import type { ReactElement } from "react";
import { cn } from "@/lib/utils";

/* ---------------- Blog thumbnail SVGs ---------------- */
/* Rich, creative, editorial-style illustrations for each blog article. */
/* Palette: deep navy (#0a1628), royal indigo (#4f46e5), orange CTA (#f97316), */
/* emerald (#10b981), slate grays, with warm accents. */

type ThumbnailKey =
  | "local-seo"
  | "website-speed"
  | "dental-marketing"
  | "restaurant-marketing"
  | "google-business"
  | "conversion-copywriting"
  | "branding"
  | "website-redesign"
  | "business-growth";

/* ============================================================
   1. LOCAL SEO — City skyline + ranking arrow + search magnifier
   ============================================================ */
function LocalSeoThumb({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 250" className={cn("h-full w-full", className)} role="img" aria-label="Local SEO illustration">
      <defs>
        <linearGradient id="seo-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0a1628" />
          <stop offset="60%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#334155" />
        </linearGradient>
        <linearGradient id="seo-glow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f97316" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="seo-pin-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#f97316" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Night sky background */}
      <rect width="400" height="250" fill="url(#seo-sky)" />

      {/* Stars */}
      <g fill="white" opacity="0.6">
        <circle cx="40" cy="30" r="1" />
        <circle cx="90" cy="50" r="1.5" />
        <circle cx="150" cy="25" r="1" />
        <circle cx="220" cy="40" r="1.2" />
        <circle cx="300" cy="20" r="1" />
        <circle cx="360" cy="45" r="1.5" />
        <circle cx="70" cy="80" r="0.8" />
        <circle cx="340" cy="90" r="1" />
      </g>

      {/* City skyline silhouette */}
      <g fill="#0a1628">
        <rect x="0" y="150" width="40" height="100" />
        <rect x="40" y="130" width="35" height="120" />
        <rect x="75" y="160" width="30" height="90" />
        <rect x="105" y="110" width="45" height="140" />
        <rect x="150" y="140" width="35" height="110" />
        <rect x="185" y="100" width="40" height="150" />
        <rect x="225" y="135" width="30" height="115" />
        <rect x="255" y="115" width="50" height="135" />
        <rect x="305" y="145" width="35" height="105" />
        <rect x="340" y="125" width="60" height="125" />
      </g>

      {/* Building windows */}
      <g fill="#fbbf24" opacity="0.7">
        <rect x="10" y="165" width="4" height="4" />
        <rect x="20" y="165" width="4" height="4" />
        <rect x="10" y="180" width="4" height="4" />
        <rect x="48" y="145" width="4" height="4" />
        <rect x="58" y="145" width="4" height="4" />
        <rect x="48" y="160" width="4" height="4" />
        <rect x="115" y="125" width="4" height="4" />
        <rect x="125" y="125" width="4" height="4" />
        <rect x="135" y="125" width="4" height="4" />
        <rect x="115" y="140" width="4" height="4" />
        <rect x="195" y="115" width="4" height="4" />
        <rect x="205" y="115" width="4" height="4" />
        <rect x="195" y="130" width="4" height="4" />
        <rect x="265" y="130" width="4" height="4" />
        <rect x="275" y="130" width="4" height="4" />
        <rect x="285" y="130" width="4" height="4" />
        <rect x="350" y="140" width="4" height="4" />
        <rect x="360" y="140" width="4" height="4" />
        <rect x="370" y="140" width="4" height="4" />
        <rect x="350" y="160" width="4" height="4" />
      </g>

      {/* Glow behind pin */}
      <circle cx="200" cy="85" r="60" fill="url(#seo-pin-glow)" />

      {/* Big location pin */}
      <g transform="translate(200, 85)">
        <path
          d="M0 25 C -20 5, -28 -10, -28 -22 C -28 -38, -15 -48, 0 -48 C 15 -48, 28 -38, 28 -22 C 28 -10, 20 5, 0 25 Z"
          fill="#f97316"
          stroke="white"
          strokeWidth="2"
        />
        <circle cx="0" cy="-22" r="11" fill="white" />
        <circle cx="0" cy="-22" r="6" fill="#0a1628" />
      </g>

      {/* Ranking arrow going up */}
      <g transform="translate(310, 60)">
        <path
          d="M0 40 L 15 25 L 25 32 L 45 8"
          fill="none"
          stroke="#10b981"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M45 8 L 45 18 M 45 8 L 35 8" stroke="#10b981" strokeWidth="3" strokeLinecap="round" />
        <text x="22" y="55" textAnchor="middle" fontSize="8" fontWeight="700" fill="#10b981">#1</text>
      </g>

      {/* Search magnifier badge */}
      <g transform="translate(55, 55)">
        <circle cx="0" cy="0" r="20" fill="white" />
        <circle cx="-3" cy="-3" r="9" fill="none" stroke="#0a1628" strokeWidth="2.5" />
        <line x1="4" y1="4" x2="11" y2="11" stroke="#0a1628" strokeWidth="3" strokeLinecap="round" />
      </g>

      {/* "Near me" text bubble */}
      <g transform="translate(120, 50)">
        <rect x="0" y="0" width="70" height="22" rx="11" fill="white" opacity="0.95" />
        <text x="35" y="15" textAnchor="middle" fontSize="9" fontWeight="700" fill="#0a1628">near me</text>
      </g>
    </svg>
  );
}

/* ============================================================
   2. WEBSITE SPEED — Rocket + speedometer + conversion drop
   ============================================================ */
function WebsiteSpeedThumb({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 250" className={cn("h-full w-full", className)} role="img" aria-label="Website speed illustration">
      <defs>
        <linearGradient id="speed-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7c2d12" />
          <stop offset="50%" stopColor="#9a3412" />
          <stop offset="100%" stopColor="#0a1628" />
        </linearGradient>
        <linearGradient id="rocket-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f1f5f9" />
          <stop offset="100%" stopColor="#cbd5e1" />
        </linearGradient>
        <linearGradient id="flame" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="50%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#ef4444" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="400" height="250" fill="url(#speed-bg)" />

      {/* Speed lines */}
      <g stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" opacity="0.4">
        <line x1="20" y1="60" x2="80" y2="60" />
        <line x1="10" y1="80" x2="70" y2="80" />
        <line x1="30" y1="100" x2="90" y2="100" />
        <line x1="15" y1="120" x2="75" y2="120" />
        <line x1="25" y1="180" x2="85" y2="180" />
        <line x1="35" y1="200" x2="95" y2="200" />
      </g>

      {/* Conversion graph dropping */}
      <g transform="translate(270, 30)">
        <text x="40" y="0" textAnchor="middle" fontSize="9" fontWeight="700" fill="#fca5a5">CONVERSIONS</text>
        <path
          d="M 0 15 L 15 18 L 30 25 L 45 40 L 60 55 L 75 75"
          fill="none"
          stroke="#ef4444"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path d="M 0 15 L 15 18 L 30 25 L 45 40 L 60 55 L 75 75 L 75 90 L 0 90 Z" fill="#ef4444" opacity="0.15" />
        <text x="40" y="110" textAnchor="middle" fontSize="14" fontWeight="800" fill="#ef4444">-27%</text>
      </g>

      {/* Rocket */}
      <g transform="translate(160, 110)">
        {/* Flame */}
        <path d="M -12 35 L 0 75 L 12 35 L 6 40 L 0 30 L -6 40 Z" fill="url(#flame)" />
        <path d="M -7 38 L 0 60 L 7 38 L 3 42 L 0 35 L -3 42 Z" fill="#fde68a" />

        {/* Body */}
        <path
          d="M 0 -40 C -14 -30, -16 -10, -16 5 L -16 35 L 16 35 L 16 5 C 16 -10, 14 -30, 0 -40 Z"
          fill="url(#rocket-body)"
          stroke="#0a1628"
          strokeWidth="1.5"
        />
        {/* Window */}
        <circle cx="0" cy="-10" r="8" fill="#0a1628" stroke="#4f46e5" strokeWidth="2" />
        <circle cx="-2" cy="-12" r="3" fill="#60a5fa" opacity="0.8" />

        {/* Fins */}
        <path d="M -16 15 L -28 35 L -16 30 Z" fill="#ef4444" />
        <path d="M 16 15 L 28 35 L 16 30 Z" fill="#ef4444" />

        {/* Stripe */}
        <rect x="-16" y="15" width="32" height="4" fill="#f97316" />
      </g>

      {/* Stopwatch badge */}
      <g transform="translate(70, 45)">
        <circle cx="0" cy="0" r="22" fill="white" stroke="#0a1628" strokeWidth="2" />
        <circle cx="0" cy="0" r="18" fill="none" stroke="#e2e8f0" strokeWidth="1" />
        <line x1="0" y1="0" x2="0" y2="-12" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
        <line x1="0" y1="0" x2="8" y2="2" stroke="#0a1628" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="0" cy="0" r="2" fill="#0a1628" />
        <rect x="-5" y="-28" width="10" height="6" rx="2" fill="#0a1628" />
        <text x="0" y="40" textAnchor="middle" fontSize="8" fontWeight="700" fill="white">1.2s</text>
      </g>

      {/* "vs 4.8s" label */}
      <g transform="translate(130, 50)">
        <rect x="0" y="0" width="55" height="20" rx="10" fill="#0a1628" opacity="0.8" />
        <text x="27" y="14" textAnchor="middle" fontSize="8" fontWeight="600" fill="#fca5a5">vs 4.8s</text>
      </g>
    </svg>
  );
}

/* ============================================================
   3. DENTAL MARKETING — Smiling tooth + patient chart + phone
   ============================================================ */
function DentalMarketingThumb({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 250" className={cn("h-full w-full", className)} role="img" aria-label="Dental marketing illustration">
      <defs>
        <linearGradient id="dental-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ecfeff" />
          <stop offset="100%" stopColor="#cffafe" />
        </linearGradient>
        <linearGradient id="tooth-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="#e0f2fe" />
        </linearGradient>
      </defs>

      <rect width="400" height="250" fill="url(#dental-bg)" />

      {/* Decorative circles */}
      <circle cx="50" cy="40" r="30" fill="#06b6d4" opacity="0.1" />
      <circle cx="370" cy="220" r="40" fill="#0891b2" opacity="0.1" />

      {/* Big smiling tooth character */}
      <g transform="translate(120, 125)">
        {/* Tooth body */}
        <path
          d="M0 -45 C -18 -45, -32 -35, -35 -18 C -38 -2, -30 14, -26 30 C -24 42, -18 52, -10 52 C -3 52, 0 44, 0 34 C 0 44, 3 52, 10 52 C 18 52, 24 42, 26 30 C 30 14, 38 -2, 35 -18 C 32 -35, 18 -45, 0 -45 Z"
          fill="url(#tooth-grad)"
          stroke="#0891b2"
          strokeWidth="2.5"
        />
        {/* Eyes */}
        <circle cx="-12" cy="-15" r="4" fill="#0a1628" />
        <circle cx="12" cy="-15" r="4" fill="#0a1628" />
        <circle cx="-11" cy="-16" r="1.5" fill="white" />
        <circle cx="13" cy="-16" r="1.5" fill="white" />
        {/* Smile */}
        <path d="M -8 -5 Q 0 3, 8 -5" fill="none" stroke="#0a1628" strokeWidth="2" strokeLinecap="round" />
        {/* Pink cheeks */}
        <circle cx="-18" cy="-2" r="3" fill="#fb7185" opacity="0.5" />
        <circle cx="18" cy="-2" r="3" fill="#fb7185" opacity="0.5" />
        {/* Sparkle */}
        <g transform="translate(-22, -30)">
          <path d="M0 -8 L 2 -2 L 8 0 L 2 2 L 0 8 L -2 2 L -8 0 L -2 -2 Z" fill="#fbbf24" />
        </g>
        <g transform="translate(25, -25)">
          <path d="M0 -5 L 1.5 -1.5 L 5 0 L 1.5 1.5 L 0 5 L -1.5 1.5 L -5 0 L -1.5 -1.5 Z" fill="#fbbf24" />
        </g>
      </g>

      {/* Phone with booking notification */}
      <g transform="translate(255, 50)">
        <rect x="0" y="0" width="70" height="130" rx="12" fill="#0a1628" />
        <rect x="4" y="10" width="62" height="110" rx="4" fill="#f0f9ff" />
        {/* Notch */}
        <rect x="25" y="4" width="20" height="3" rx="1.5" fill="#1e293b" />

        {/* Notification card on phone */}
        <rect x="8" y="20" width="54" height="30" rx="6" fill="#10b981" opacity="0.9" />
        <circle cx="18" cy="35" r="5" fill="white" />
        <path d="M 16 35 L 17.5 36.5 L 20 33.5" fill="none" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <text x="27" y="33" fontSize="5" fontWeight="700" fill="white">New booking!</text>
        <text x="27" y="42" fontSize="4" fill="white" opacity="0.9">Priya S. · 2:15 PM</text>

        {/* Star rating on phone */}
        <g transform="translate(8, 58)">
          {[0, 9, 18, 27, 36].map((x) => (
            <path key={x} d={`M${x + 4} 0 L ${x + 5} 2.5 L ${x + 8} 2.5 L ${x + 5.5} 4 L ${x + 6.5} 7 L ${x + 4} 5 L ${x + 1.5} 7 L ${x + 2.5} 4 L ${x} 2.5 L ${x + 3} 2.5 Z`} fill="#fbbf24" />
          ))}
          <text x="0" y="18" fontSize="5" fontWeight="700" fill="#0a1628">4.2 rating</text>
        </g>

        {/* Calendar mini */}
        <g transform="translate(8, 85)">
          <rect x="0" y="0" width="54" height="28" rx="4" fill="white" stroke="#cbd5e1" strokeWidth="0.5" />
          <rect x="0" y="0" width="54" height="7" rx="4" fill="#0891b2" />
          <text x="27" y="5" textAnchor="middle" fontSize="4" fontWeight="700" fill="white">APPOINTMENTS</text>
          <circle cx="10" cy="15" r="2" fill="#10b981" />
          <circle cx="20" cy="15" r="2" fill="#10b981" />
          <circle cx="30" cy="15" r="2" fill="#10b981" />
          <circle cx="40" cy="15" r="2" fill="#10b981" />
          <circle cx="50" cy="15" r="2" fill="#f97316" />
        </g>
      </g>

      {/* Patient growth chart */}
      <g transform="translate(40, 180)">
        <rect x="0" y="0" width="18" height="40" rx="2" fill="#0891b2" opacity="0.4" />
        <rect x="22" y="-10" width="18" height="50" rx="2" fill="#0891b2" opacity="0.6" />
        <rect x="44" y="-25" width="18" height="65" rx="2" fill="#0891b2" opacity="0.85" />
        <rect x="66" y="-40" width="18" height="80" rx="2" fill="#f97316" />
        <path d="M 9 0 L 31 -10 L 53 -25 L 75 -40" fill="none" stroke="#0a1628" strokeWidth="1.5" strokeDasharray="3 2" />
        <text x="42" y="55" textAnchor="middle" fontSize="7" fontWeight="700" fill="#0a1628">+112% patients</text>
      </g>

      {/* Floating stars */}
      <g fill="#fbbf24">
        <path d="M 60 70 L 62 75 L 67 75 L 63 78 L 65 83 L 60 80 L 55 83 L 57 78 L 53 75 L 58 75 Z" opacity="0.7" />
        <path d="M 340 180 L 342 185 L 347 185 L 343 188 L 345 193 L 340 190 L 335 193 L 337 188 L 333 185 L 338 185 Z" opacity="0.6" />
      </g>
    </svg>
  );
}

/* ============================================================
   4. RESTAURANT — Dinner table scene + reservation book + stars
   ============================================================ */
function RestaurantMarketingThumb({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 250" className={cn("h-full w-full", className)} role="img" aria-label="Restaurant marketing illustration">
      <defs>
        <linearGradient id="rest-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#451a03" />
          <stop offset="100%" stopColor="#7c2d12" />
        </linearGradient>
        <linearGradient id="plate-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="#e2e8f0" />
        </linearGradient>
        <radialGradient id="warm-light" cx="0.5" cy="0.3" r="0.6">
          <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Warm dark background */}
      <rect width="400" height="250" fill="url(#rest-bg)" />
      <rect width="400" height="250" fill="url(#warm-light)" />

      {/* Hanging pendant light */}
      <g transform="translate(200, 0)">
        <line x1="0" y1="0" x2="0" y2="30" stroke="#92400e" strokeWidth="1.5" />
        <path d="M -15 30 L 15 30 L 10 50 L -10 50 Z" fill="#92400e" />
        <ellipse cx="0" cy="50" rx="12" ry="3" fill="#fbbf24" />
        <circle cx="0" cy="55" r="35" fill="#fbbf24" opacity="0.15" />
      </g>

      {/* Table surface */}
      <ellipse cx="200" cy="220" rx="180" ry="30" fill="#92400e" opacity="0.5" />

      {/* Main plate */}
      <g transform="translate(200, 160)">
        <ellipse cx="0" cy="0" rx="70" ry="18" fill="#0a1628" opacity="0.3" />
        <circle cx="0" cy="-5" r="60" fill="url(#plate-grad)" stroke="#92400e" strokeWidth="2" />
        <circle cx="0" cy="-5" r="45" fill="none" stroke="#cbd5e1" strokeWidth="1" />
        {/* Food on plate */}
        <ellipse cx="-8" cy="-8" rx="20" ry="10" fill="#f97316" />
        <ellipse cx="-8" cy="-10" rx="18" ry="8" fill="#fb923c" />
        <circle cx="12" cy="-12" r="6" fill="#84cc16" />
        <circle cx="15" cy="-5" r="5" fill="#65a30d" />
        <circle cx="-2" cy="2" r="4" fill="#ef4444" />
        {/* Steam */}
        <g fill="none" stroke="white" strokeWidth="1.5" opacity="0.4" strokeLinecap="round">
          <path d="M -15 -25 Q -18 -32, -15 -38 Q -12 -44, -15 -50" />
          <path d="M 0 -28 Q -3 -35, 0 -41 Q 3 -47, 0 -53" />
          <path d="M 15 -25 Q 12 -32, 15 -38 Q 18 -44, 15 -50" />
        </g>
      </g>

      {/* Wine glass left */}
      <g transform="translate(80, 120)">
        <path d="M 0 0 L 5 0 L 8 35 L -3 35 Z" fill="#7f1d1d" opacity="0.3" />
        <path d="M 0 0 C -8 0, -10 15, -5 22 L 5 22 C 10 15, 8 0, 0 0 Z" fill="#7f1d1d" opacity="0.7" stroke="#fde68a" strokeWidth="1" />
        <line x1="0" y1="22" x2="0" y2="55" stroke="#fde68a" strokeWidth="1.5" />
        <ellipse cx="0" cy="57" rx="12" ry="2.5" fill="#fde68a" opacity="0.8" />
      </g>

      {/* Fork right */}
      <g transform="translate(320, 110)" stroke="#fde68a" strokeWidth="2" fill="none" strokeLinecap="round">
        <line x1="0" y1="0" x2="0" y2="75" />
        <path d="M -7 0 L -7 18 M 0 0 L 0 22 M 7 0 L 7 18" />
        <line x1="-7" y1="0" x2="7" y2="0" />
      </g>

      {/* Reservation book */}
      <g transform="translate(30, 50)">
        <rect x="0" y="0" width="75" height="55" rx="4" fill="#0a1628" stroke="#fbbf24" strokeWidth="1.5" />
        <rect x="0" y="0" width="75" height="14" rx="4" fill="#f97316" />
        <text x="37" y="10" textAnchor="middle" fontSize="7" fontWeight="700" fill="white" letterSpacing="1">RESERVATIONS</text>
        {/* Lines */}
        <g stroke="#475569" strokeWidth="0.8">
          <line x1="8" y1="24" x2="67" y2="24" />
          <line x1="8" y1="32" x2="67" y2="32" />
          <line x1="8" y1="40" x2="50" y2="40" />
        </g>
        {/* Check marks */}
        <g fill="none" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M 10 22 L 12 24 L 16 20" />
          <path d="M 10 30 L 12 32 L 16 28" />
        </g>
        <text x="37" y="51" textAnchor="middle" fontSize="5" fontWeight="700" fill="#10b981">38 TONIGHT</text>
      </g>

      {/* Star rating */}
      <g transform="translate(295, 50)">
        {[0, 13, 26, 39, 52].map((x) => (
          <path key={x} d={`M${x + 6} 0 L ${x + 7.5} 4 L ${x + 12} 4 L ${x + 8.5} 6.5 L ${x + 10} 11 L ${x + 6} 8 L ${x + 2} 11 L ${x + 3.5} 6.5 L ${x} 4 L ${x + 4.5} 4 Z`} fill="#fbbf24" />
        ))}
        <text x="30" y="25" textAnchor="middle" fontSize="8" fontWeight="700" fill="#fbbf24">4.8 / 5</text>
      </g>
    </svg>
  );
}

/* ============================================================
   5. GOOGLE BUSINESS — Phone showing Map Pack + reviews
   ============================================================ */
function GoogleBusinessThumb({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 250" className={cn("h-full w-full", className)} role="img" aria-label="Google Business Profile illustration">
      <defs>
        <linearGradient id="gbp-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f0f9ff" />
          <stop offset="100%" stopColor="#e0f2fe" />
        </linearGradient>
        <linearGradient id="phone-screen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="#f8fafc" />
        </linearGradient>
      </defs>

      <rect width="400" height="250" fill="url(#gbp-bg)" />

      {/* Decorative map grid */}
      <g opacity="0.15" stroke="#0ea5e9" strokeWidth="0.8">
        <path d="M0 80 L 120 70" />
        <path d="M0 120 L 130 110" />
        <path d="M0 160 L 125 150" />
        <path d="M0 200 L 140 190" />
      </g>

      {/* Floating review bubbles */}
      <g transform="translate(30, 30)">
        <rect x="0" y="0" width="85" height="45" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="1" />
        <circle cx="14" cy="15" r="7" fill="#4285f4" />
        <text x="14" y="19" textAnchor="middle" fontSize="7" fontWeight="700" fill="white">PS</text>
        <g fill="#fbbf24">
          {[24, 31, 38, 45, 52].map((x) => (
            <path key={x} d={`M${x} 12 L ${x + 1.5} 15 L ${x + 5} 15 L ${x + 2} 17 L ${x + 3} 20.5 L ${x} 18.5 L ${x - 3} 20.5 L ${x - 2} 17 L ${x - 5} 15 L ${x - 1.5} 15 Z`} />
          ))}
        </g>
        <text x="14" y="32" fontSize="5" fill="#64748b">"Best dentist in"</text>
        <text x="14" y="39" fontSize="5" fill="#64748b">"the area!"</text>
      </g>

      <g transform="translate(285, 195)">
        <rect x="0" y="0" width="90" height="42" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="1" />
        <circle cx="14" cy="15" r="7" fill="#10b981" />
        <text x="14" y="19" textAnchor="middle" fontSize="7" fontWeight="700" fill="white">MR</text>
        <g fill="#fbbf24">
          {[24, 31, 38, 45, 52].map((x) => (
            <path key={x} d={`M${x} 12 L ${x + 1.5} 15 L ${x + 5} 15 L ${x + 2} 17 L ${x + 3} 20.5 L ${x} 18.5 L ${x - 3} 20.5 L ${x - 2} 17 L ${x - 5} 15 L ${x - 1.5} 15 Z`} />
          ))}
        </g>
        <text x="14" y="32" fontSize="5" fill="#64748b">"Highly recommend"</text>
      </g>

      {/* Phone */}
      <g transform="translate(140, 35)">
        <rect x="0" y="0" width="120" height="190" rx="18" fill="#0a1628" />
        <rect x="4" y="8" width="112" height="174" rx="10" fill="url(#phone-screen)" />
        {/* Notch */}
        <rect x="45" y="3" width="30" height="5" rx="2.5" fill="#1e293b" />

        {/* Google search bar */}
        <g transform="translate(10, 20)">
          <rect x="0" y="0" width="100" height="18" rx="9" fill="white" stroke="#e2e8f0" strokeWidth="1" />
          <circle cx="10" cy="9" r="3.5" fill="none" stroke="#4285f4" strokeWidth="1.5" />
          <line x1="12.5" y1="11.5" x2="15" y2="14" stroke="#4285f4" strokeWidth="1.5" strokeLinecap="round" />
          <rect x="20" y="7" width="60" height="4" rx="2" fill="#cbd5e1" />
        </g>

        {/* "Dentist near me" text */}
        <text x="60" y="50" textAnchor="middle" fontSize="6" fill="#64748b">dentist near me</text>

        {/* Map Pack - 3 business listings */}
        <g transform="translate(8, 55)">
          {/* Listing 1 (highlighted) */}
          <rect x="0" y="0" width="104" height="32" rx="6" fill="#e0f2fe" stroke="#0ea5e9" strokeWidth="1" />
          <rect x="0" y="0" width="3" height="32" rx="1.5" fill="#0ea5e9" />
          <circle cx="14" cy="16" r="7" fill="#0ea5e9" />
          <path d="M 14 11 C 11 11, 9 13, 9 15 C 9 18, 14 22, 14 22 C 14 22, 19 18, 19 15 C 19 13, 17 11, 14 11 Z" fill="white" />
          <text x="26" y="12" fontSize="6" fontWeight="700" fill="#0a1628">Bright Smile Dental</text>
          <g fill="#fbbf24">
            {[26, 31, 36, 41, 46].map((x) => (
              <path key={x} d={`M${x} 16 L ${x + 1} 17.5 L ${x + 2.5} 17.5 L ${x + 1.3} 18.5 L ${x + 1.8} 20 L ${x} 19 L ${x - 1.8} 20 L ${x - 1.3} 18.5 L ${x - 2.5} 17.5 L ${x - 1} 17.5 Z`} />
            ))}
          </g>
          <text x="53" y="20" fontSize="5" fill="#64748b">4.8 (234)</text>
          <text x="26" y="27" fontSize="5" fill="#10b981" fontWeight="600">OPEN · 0.8 mi</text>

          {/* Listing 2 */}
          <rect x="0" y="36" width="104" height="28" rx="6" fill="white" stroke="#e2e8f0" strokeWidth="0.8" />
          <circle cx="14" cy="50" r="6" fill="#cbd5e1" />
          <text x="26" y="47" fontSize="5.5" fontWeight="600" fill="#475569">City Dental Clinic</text>
          <g fill="#fbbf24">
            {[26, 31, 36, 41].map((x) => (
              <path key={x} d={`M${x} 51 L ${x + 1} 52.5 L ${x + 2.5} 52.5 L ${x + 1.3} 53.5 L ${x + 1.8} 55 L ${x} 54 L ${x - 1.8} 55 L ${x - 1.3} 53.5 L ${x - 2.5} 52.5 L ${x - 1} 52.5 Z`} />
            ))}
          </g>
          <text x="53" y="55" fontSize="5" fill="#64748b">4.2 (89)</text>

          {/* Listing 3 */}
          <rect x="0" y="68" width="104" height="28" rx="6" fill="white" stroke="#e2e8f0" strokeWidth="0.8" />
          <circle cx="14" cy="82" r="6" fill="#cbd5e1" />
          <text x="26" y="79" fontSize="5.5" fontWeight="600" fill="#475569">Smile Care Center</text>
          <g fill="#fbbf24">
            {[26, 31, 36].map((x) => (
              <path key={x} d={`M${x} 83 L ${x + 1} 84.5 L ${x + 2.5} 84.5 L ${x + 1.3} 85.5 L ${x + 1.8} 87 L ${x} 86 L ${x - 1.8} 87 L ${x - 1.3} 85.5 L ${x - 2.5} 84.5 L ${x - 1} 84.5 Z`} />
            ))}
          </g>
          <text x="53" y="87" fontSize="5" fill="#64748b">3.8 (45)</text>
        </g>

        {/* Call button */}
        <g transform="translate(8, 160)">
          <rect x="0" y="0" width="104" height="16" rx="8" fill="#0a1628" />
          <text x="52" y="11" textAnchor="middle" fontSize="6" fontWeight="700" fill="white">📞 CALL NOW</text>
        </g>
      </g>

      {/* Notification badge */}
      <g transform="translate(245, 55)">
        <circle cx="0" cy="0" r="18" fill="#10b981" />
        <text x="0" y="3" textAnchor="middle" fontSize="9" fontWeight="800" fill="white">+5</text>
        <text x="0" y="11" textAnchor="middle" fontSize="4" fill="white">calls</text>
      </g>
    </svg>
  );
}

/* ============================================================
   6. CONVERSION COPYWRITING — Pen writing words into customers
   ============================================================ */
function ConversionCopywritingThumb({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 250" className={cn("h-full w-full", className)} role="img" aria-label="Conversion copywriting illustration">
      <defs>
        <linearGradient id="copy-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1e1b4b" />
          <stop offset="100%" stopColor="#0a1628" />
        </linearGradient>
        <linearGradient id="ink" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4f46e5" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        <linearGradient id="gold-coin" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fde68a" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
      </defs>

      <rect width="400" height="250" fill="url(#copy-bg)" />

      {/* Decorative dots */}
      <g fill="#4f46e5" opacity="0.2">
        <circle cx="50" cy="30" r="2" />
        <circle cx="350" cy="220" r="2" />
        <circle cx="380" cy="40" r="1.5" />
        <circle cx="20" cy="200" r="1.5" />
      </g>

      {/* Left: Words being written */}
      <g transform="translate(30, 30)">
        {/* Paper sheet */}
        <rect x="0" y="0" width="130" height="100" rx="6" fill="white" opacity="0.95" transform="rotate(-3)" />
        <g transform="rotate(-3)">
          {/* Headline being written */}
          <rect x="12" y="14" width="90" height="6" rx="3" fill="#0a1628" />
          <rect x="12" y="24" width="70" height="4" rx="2" fill="#cbd5e1" />
          <rect x="12" y="32" width="80" height="4" rx="2" fill="#cbd5e1" />

          {/* Bullet points */}
          <circle cx="16" cy="45" r="2" fill="#f97316" />
          <rect x="22" y="43" width="60" height="3" rx="1.5" fill="#94a3b8" />
          <circle cx="16" cy="53" r="2" fill="#f97316" />
          <rect x="22" y="51" width="70" height="3" rx="1.5" fill="#94a3b8" />
          <circle cx="16" cy="61" r="2" fill="#f97316" />
          <rect x="22" y="59" width="55" height="3" rx="1.5" fill="#94a3b8" />

          {/* CTA button on paper */}
          <rect x="12" y="74" width="50" height="14" rx="7" fill="#f97316" />
          <text x="37" y="84" textAnchor="middle" fontSize="6" fontWeight="700" fill="white">BOOK NOW</text>
        </g>

        {/* Ink flowing from pen */}
        <path d="M 100 60 Q 130 75, 150 90" fill="none" stroke="url(#ink)" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
      </g>

      {/* Pen */}
      <g transform="translate(155, 50) rotate(35)">
        <rect x="0" y="0" width="7" height="80" rx="2" fill="#0a1628" />
        <rect x="0" y="0" width="7" height="14" rx="2" fill="#4f46e5" />
        <rect x="0" y="14" width="7" height="3" fill="#f97316" />
        <path d="M 0 80 L 3.5 95 L 7 80 Z" fill="#f97316" />
        <path d="M 1.5 88 L 3.5 95 L 5.5 88 Z" fill="#0a1628" />
      </g>

      {/* Arrow flowing right */}
      <g transform="translate(180, 110)">
        <path d="M 0 0 Q 20 -5, 40 0 Q 60 5, 80 0" fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray="4 3" strokeLinecap="round" />
        <path d="M 75 -4 L 82 0 L 75 4" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* Right: Coins/customers emerging */}
      <g transform="translate(270, 60)">
        {/* Gold coins stacking */}
        <g>
          <ellipse cx="40" cy="130" rx="35" ry="8" fill="#d97706" />
          <ellipse cx="40" cy="128" rx="35" ry="8" fill="url(#gold-coin)" />
          <ellipse cx="38" cy="110" rx="30" ry="7" fill="#d97706" />
          <ellipse cx="38" cy="108" rx="30" ry="7" fill="url(#gold-coin)" />
          <ellipse cx="42" cy="90" rx="25" ry="6" fill="#d97706" />
          <ellipse cx="42" cy="88" rx="25" ry="6" fill="url(#gold-coin)" />
          {/* ₹ symbol on top coin */}
          <text x="42" y="92" textAnchor="middle" fontSize="10" fontWeight="800" fill="#92400e">₹</text>
        </g>

        {/* Customer figure */}
        <g transform="translate(15, 0)">
          <circle cx="15" cy="15" r="10" fill="#fbbf24" />
          <circle cx="12" cy="13" r="1.5" fill="#0a1628" />
          <circle cx="18" cy="13" r="1.5" fill="#0a1628" />
          <path d="M 11 18 Q 15 21, 19 18" fill="none" stroke="#0a1628" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M 10 26 L 20 26 L 22 50 L 8 50 Z" fill="#10b981" />
          <text x="15" y="65" textAnchor="middle" fontSize="6" fontWeight="700" fill="#10b981">CUSTOMER</text>
        </g>

        {/* +8% badge */}
        <g transform="translate(75, 10)">
          <rect x="0" y="0" width="50" height="22" rx="11" fill="#10b981" />
          <text x="25" y="15" textAnchor="middle" fontSize="10" fontWeight="800" fill="white">+8%</text>
        </g>
      </g>

      {/* "Words → Money" label */}
      <g transform="translate(200, 225)">
        <rect x="-70" y="-12" width="140" height="20" rx="10" fill="white" opacity="0.1" />
        <text x="0" y="2" textAnchor="middle" fontSize="8" fontWeight="700" fill="#c4b5fd" letterSpacing="2">WORDS → REVENUE</text>
      </g>
    </svg>
  );
}

/* ============================================================
   7. BRANDING — Brand identity system + mood board
   ============================================================ */
function BrandingThumb({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 250" className={cn("h-full w-full", className)} role="img" aria-label="Branding illustration">
      <defs>
        <linearGradient id="brand-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fdf2f8" />
          <stop offset="100%" stopColor="#fce7f3" />
        </linearGradient>
        <linearGradient id="brand-accent" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#4f46e5" />
        </linearGradient>
      </defs>

      <rect width="400" height="250" fill="url(#brand-bg)" />

      {/* Decorative shapes */}
      <circle cx="370" cy="30" r="25" fill="#7c3aed" opacity="0.08" />
      <circle cx="30" cy="220" r="30" fill="#f97316" opacity="0.08" />

      {/* Color palette swatches - overlapping cards */}
      <g transform="translate(35, 35) rotate(-5)">
        <rect x="0" y="0" width="90" height="90" rx="12" fill="white" stroke="#e2e8f0" strokeWidth="1" transform="rotate(3)" />
      </g>
      <g transform="translate(40, 40)">
        <text x="45" y="15" textAnchor="middle" fontSize="6" fontWeight="700" fill="#94a3b8" letterSpacing="1">PALETTE</text>
        <rect x="10" y="22" width="30" height="30" rx="6" fill="#0a1628" />
        <rect x="44" y="22" width="30" height="30" rx="6" fill="#7c3aed" />
        <rect x="10" y="56" width="30" height="30" rx="6" fill="#f97316" />
        <rect x="44" y="56" width="30" height="30" rx="6" fill="#10b981" />
        <text x="25" y="100" textAnchor="middle" fontSize="5" fill="#64748b">Navy</text>
        <text x="59" y="100" textAnchor="middle" fontSize="5" fill="#64748b">Royal</text>
      </g>

      {/* Logo concept card */}
      <g transform="translate(160, 30)">
        <rect x="0" y="0" width="100" height="85" rx="12" fill="white" stroke="#e2e8f0" strokeWidth="1" transform="rotate(-2)" />
        <g transform="translate(50, 42)">
          {/* Abstract logo mark */}
          <circle cx="0" cy="0" r="22" fill="none" stroke="#0a1628" strokeWidth="3" />
          <path d="M -14 0 A 14 14 0 0 1 14 0" fill="none" stroke="#f97316" strokeWidth="3" />
          <circle cx="0" cy="-6" r="4" fill="url(#brand-accent)" />
        </g>
        <text x="50" y="78" textAnchor="middle" fontSize="8" fontWeight="800" fill="#0a1628" letterSpacing="3">REVIVO</text>
      </g>

      {/* Typography card */}
      <g transform="translate(280, 35)">
        <rect x="0" y="0" width="90" height="75" rx="12" fill="white" stroke="#e2e8f0" strokeWidth="1" transform="rotate(4)" />
        <text x="45" y="22" textAnchor="middle" fontSize="20" fontWeight="800" fill="#0a1628" fontFamily="Georgia, serif">Aa</text>
        <rect x="12" y="32" width="66" height="2" rx="1" fill="#e2e8f0" />
        <text x="45" y="48" textAnchor="middle" fontSize="7" fontWeight="600" fill="#64748b">DISPLAY</text>
        <rect x="12" y="55" width="50" height="3" rx="1.5" fill="#cbd5e1" />
        <rect x="12" y="62" width="60" height="3" rx="1.5" fill="#cbd5e1" />
        <rect x="12" y="69" width="40" height="3" rx="1.5" fill="#cbd5e1" />
      </g>

      {/* Business card mockup */}
      <g transform="translate(50, 155)">
        <rect x="0" y="0" width="120" height="70" rx="6" fill="white" stroke="#e2e8f0" strokeWidth="1" transform="rotate(-3)" />
        <rect x="0" y="0" width="120" height="20" rx="6" fill="#0a1628" />
        <circle cx="15" cy="10" r="6" fill="#f97316" />
        <text x="15" y="13" textAnchor="middle" fontSize="7" fontWeight="800" fill="white">R</text>
        <text x="28" y="14" fontSize="7" fontWeight="700" fill="white" letterSpacing="1">REVIVO</text>
        <text x="10" y="35" fontSize="6" fontWeight="700" fill="#0a1628">Aarav Mehta</text>
        <text x="10" y="44" fontSize="5" fill="#64748b">Independent Web Studio</text>
        <text x="10" y="56" fontSize="5" fill="#7c3aed">revivodigitals@gmail.com</text>
        <text x="10" y="64" fontSize="5" fill="#64748b">+91 98765 43210</text>
      </g>

      {/* Brand voice tags */}
      <g transform="translate(190, 170)">
        <rect x="0" y="0" width="50" height="16" rx="8" fill="#7c3aed" opacity="0.15" />
        <text x="25" y="11" textAnchor="middle" fontSize="6" fontWeight="700" fill="#7c3aed">Warm</text>

        <rect x="55" y="0" width="60" height="16" rx="8" fill="#f97316" opacity="0.15" />
        <text x="85" y="11" textAnchor="middle" fontSize="6" fontWeight="700" fill="#f97316">Expert</text>

        <rect x="120" y="0" width="65" height="16" rx="8" fill="#10b981" opacity="0.15" />
        <text x="152" y="11" textAnchor="middle" fontSize="6" fontWeight="700" fill="#10b981">Reassuring</text>

        <rect x="20" y="22" width="60" height="16" rx="8" fill="#0a1628" opacity="0.1" />
        <text x="50" y="33" textAnchor="middle" fontSize="6" fontWeight="700" fill="#0a1628">Direct</text>

        <rect x="85" y="22" width="75" height="16" rx="8" fill="#7c3aed" opacity="0.15" />
        <text x="122" y="33" textAnchor="middle" fontSize="6" fontWeight="700" fill="#7c3aed">Professional</text>
      </g>

      {/* Sparkle */}
      <g transform="translate(155, 125)">
        <path d="M0 -8 L 2 -2 L 8 0 L 2 2 L 0 8 L -2 2 L -8 0 L -2 -2 Z" fill="#fbbf24" />
      </g>
    </svg>
  );
}

/* ============================================================
   8. WEBSITE REDESIGN — Butterfly transformation metaphor
   ============================================================ */
function WebsiteRedesignThumb({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 250" className={cn("h-full w-full", className)} role="img" aria-label="Website redesign illustration">
      <defs>
        <linearGradient id="redesign-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f0fdf4" />
          <stop offset="50%" stopColor="#ecfeff" />
          <stop offset="100%" stopColor="#fef3c7" />
        </linearGradient>
        <linearGradient id="butterfly-wing-l" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#4f46e5" />
        </linearGradient>
        <linearGradient id="butterfly-wing-r" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#fbbf24" />
        </linearGradient>
      </defs>

      <rect width="400" height="250" fill="url(#redesign-bg)" />

      {/* Left: Old website (caterpillar/chrysalis) */}
      <g transform="translate(30, 60)">
        {/* Old browser */}
        <rect x="0" y="0" width="120" height="90" rx="8" fill="white" stroke="#94a3b8" strokeWidth="1.5" transform="rotate(-5)" />
        <g transform="rotate(-5)">
          {/* Browser bar */}
          <rect x="0" y="0" width="120" height="16" rx="8" fill="#94a3b8" />
          <circle cx="10" cy="8" r="3" fill="#ef4444" />
          <circle cx="20" cy="8" r="3" fill="#fbbf24" />
          <circle cx="30" cy="8" r="3" fill="#10b981" />
          <rect x="45" y="5" width="65" height="6" rx="3" fill="white" opacity="0.6" />

          {/* Messy content */}
          <rect x="8" y="24" width="40" height="4" rx="2" fill="#cbd5e1" />
          <rect x="8" y="32" width="80" height="3" rx="1.5" fill="#e2e8f0" />
          <rect x="8" y="39" width="65" height="3" rx="1.5" fill="#e2e8f0" />
          <rect x="8" y="48" width="50" height="20" rx="3" fill="#94a3b8" opacity="0.4" />
          <rect x="62" y="48" width="50" height="20" rx="3" fill="#94a3b8" opacity="0.4" />
          <rect x="8" y="73" width="80" height="3" rx="1.5" fill="#e2e8f0" />
          <rect x="8" y="80" width="60" height="3" rx="1.5" fill="#e2e8f0" />

          {/* "BEFORE" label */}
          <text x="60" y="105" textAnchor="middle" fontSize="7" fontWeight="700" fill="#94a3b8" letterSpacing="2">BEFORE</text>
        </g>
      </g>

      {/* Arrow / transformation swirl */}
      <g transform="translate(170, 105)">
        <path
          d="M 0 0 Q 15 -15, 30 0 Q 45 15, 60 0"
          fill="none"
          stroke="#10b981"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="5 3"
        />
        <path d="M 55 -5 L 62 0 L 55 5" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

        {/* Sparkles around transformation */}
        <g fill="#fbbf24">
          <path d="M 15 -20 L 17 -16 L 21 -14 L 17 -12 L 15 -8 L 13 -12 L 9 -14 L 13 -16 Z" />
          <path d="M 45 -18 L 46 -16 L 48 -15 L 46 -14 L 45 -12 L 44 -14 L 42 -15 L 44 -16 Z" />
        </g>
      </g>

      {/* Right: New website with butterfly */}
      <g transform="translate(250, 50)">
        {/* New browser */}
        <rect x="0" y="0" width="120" height="100" rx="10" fill="white" stroke="#0a1628" strokeWidth="2" transform="rotate(3)" />
        <g transform="rotate(3)">
          {/* Browser bar */}
          <rect x="0" y="0" width="120" height="16" rx="10" fill="#0a1628" />
          <circle cx="10" cy="8" r="3" fill="#ef4444" />
          <circle cx="20" cy="8" r="3" fill="#fbbf24" />
          <circle cx="30" cy="8" r="3" fill="#10b981" />
          <rect x="45" y="5" width="65" height="6" rx="3" fill="white" opacity="0.3" />

          {/* Clean hero content */}
          <rect x="10" y="24" width="60" height="6" rx="3" fill="#0a1628" />
          <rect x="10" y="34" width="90" height="3" rx="1.5" fill="#cbd5e1" />
          <rect x="10" y="40" width="75" height="3" rx="1.5" fill="#cbd5e1" />

          {/* CTA button */}
          <rect x="10" y="50" width="50" height="14" rx="7" fill="#f97316" />
          <text x="35" y="60" textAnchor="middle" fontSize="5" fontWeight="700" fill="white">GET STARTED</text>

          {/* Feature cards */}
          <rect x="10" y="70" width="32" height="20" rx="4" fill="#7c3aed" opacity="0.1" />
          <rect x="46" y="70" width="32" height="20" rx="4" fill="#4f46e5" opacity="0.1" />
          <rect x="82" y="70" width="28" height="20" rx="4" fill="#10b981" opacity="0.1" />
        </g>

        {/* "AFTER" label */}
        <text x="60" y="120" textAnchor="middle" fontSize="7" fontWeight="700" fill="#0a1628" letterSpacing="2">AFTER</text>
      </g>

      {/* Butterfly above */}
      <g transform="translate(200, 45)">
        {/* Left wings */}
        <path
          d="M 0 0 C -15 -18, -35 -20, -38 -8 C -40 5, -25 12, -8 8 Z"
          fill="url(#butterfly-wing-l)"
          opacity="0.9"
        />
        <path
          d="M -8 8 C -20 12, -30 18, -28 25 C -25 30, -12 25, -5 15 Z"
          fill="url(#butterfly-wing-l)"
          opacity="0.8"
        />
        {/* Right wings */}
        <path
          d="M 0 0 C 15 -18, 35 -20, 38 -8 C 40 5, 25 12, 8 8 Z"
          fill="url(#butterfly-wing-r)"
          opacity="0.9"
        />
        <path
          d="M 8 8 C 20 12, 30 18, 28 25 C 25 30, 12 25, 5 15 Z"
          fill="url(#butterfly-wing-r)"
          opacity="0.8"
        />
        {/* Body */}
        <ellipse cx="0" cy="8" rx="3" ry="12" fill="#0a1628" />
        {/* Antennae */}
        <path d="M -2 -3 Q -8 -10, -10 -14" fill="none" stroke="#0a1628" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M 2 -3 Q 8 -10, 10 -14" fill="none" stroke="#0a1628" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="-10" cy="-14" r="1.5" fill="#0a1628" />
        <circle cx="10" cy="-14" r="1.5" fill="#0a1628" />
        {/* Wing dots */}
        <circle cx="-22" cy="-5" r="3" fill="white" opacity="0.7" />
        <circle cx="22" cy="-5" r="3" fill="white" opacity="0.7" />
        <circle cx="-22" cy="-5" r="1.5" fill="#0a1628" />
        <circle cx="22" cy="-5" r="1.5" fill="#0a1628" />
      </g>

      {/* "No SEO loss" badge */}
      <g transform="translate(200, 220)">
        <rect x="-55" y="-10" width="110" height="20" rx="10" fill="#10b981" />
        <path d="M -40 0 L -36 4 L -30 -4" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <text x="5" y="4" textAnchor="middle" fontSize="7" fontWeight="700" fill="white">NO SEO LOSS</text>
      </g>
    </svg>
  );
}

/* ============================================================
   9. BUSINESS GROWTH — Staircase with figure climbing + stages
   ============================================================ */
function BusinessGrowthThumb({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 250" className={cn("h-full w-full", className)} role="img" aria-label="Business growth illustration">
      <defs>
        <linearGradient id="growth-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f0fdf4" />
          <stop offset="100%" stopColor="#d1fae5" />
        </linearGradient>
        <linearGradient id="step-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0a1628" />
          <stop offset="100%" stopColor="#1e293b" />
        </linearGradient>
        <linearGradient id="growth-arc" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect width="400" height="250" fill="url(#growth-bg)" />

      {/* Sun / goal at top right */}
      <g transform="translate(355, 35)">
        <circle cx="0" cy="0" r="18" fill="#fbbf24" />
        <g stroke="#fbbf24" strokeWidth="2" strokeLinecap="round">
          <line x1="0" y1="-25" x2="0" y2="-30" />
          <line x1="0" y1="25" x2="0" y2="30" />
          <line x1="-25" y1="0" x2="-30" y2="0" />
          <line x1="18" y1="-18" x2="22" y2="-22" />
          <line x1="-18" y1="-18" x2="-22" y2="-22" />
        </g>
        <text x="0" y="3" textAnchor="middle" fontSize="8" fontWeight="800" fill="white">₹2Cr+</text>
      </g>

      {/* Growth arc area */}
      <path
        d="M 30 220 Q 100 200, 170 170 Q 240 130, 310 80 L 310 220 Z"
        fill="url(#growth-arc)"
      />
      <path
        d="M 30 220 Q 100 200, 170 170 Q 240 130, 310 80"
        fill="none"
        stroke="#10b981"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="6 4"
      />

      {/* Staircase steps */}
      <g>
        {/* Step 1 */}
        <rect x="20" y="195" width="60" height="30" rx="3" fill="url(#step-grad)" />
        <text x="50" y="215" textAnchor="middle" fontSize="7" fontWeight="700" fill="#10b981">S1</text>
        <text x="50" y="240" textAnchor="middle" fontSize="5" fill="#64748b">Exist</text>

        {/* Step 2 */}
        <rect x="85" y="165" width="60" height="60" rx="3" fill="url(#step-grad)" />
        <text x="115" y="195" textAnchor="middle" fontSize="7" fontWeight="700" fill="#10b981">S2</text>
        <text x="115" y="240" textAnchor="middle" fontSize="5" fill="#64748b">Survive</text>

        {/* Step 3 */}
        <rect x="150" y="130" width="60" height="95" rx="3" fill="url(#step-grad)" />
        <text x="180" y="170" textAnchor="middle" fontSize="7" fontWeight="700" fill="#fbbf24">S3</text>
        <text x="180" y="240" textAnchor="middle" fontSize="5" fill="#64748b">Success</text>

        {/* Step 4 */}
        <rect x="215" y="85" width="60" height="140" rx="3" fill="url(#step-grad)" />
        <text x="245" y="140" textAnchor="middle" fontSize="7" fontWeight="700" fill="#f97316">S4</text>
        <text x="245" y="240" textAnchor="middle" fontSize="5" fill="#64748b">Take-off</text>

        {/* Step 5 */}
        <rect x="280" y="35" width="60" height="190" rx="3" fill="url(#step-grad)" />
        <text x="310" y="120" textAnchor="middle" fontSize="7" fontWeight="700" fill="#7c3aed">S5</text>
        <text x="310" y="240" textAnchor="middle" fontSize="5" fill="#64748b">Mature</text>
      </g>

      {/* Figure climbing (on step 3, moving to 4) */}
      <g transform="translate(225, 100)">
        {/* Head */}
        <circle cx="0" cy="-15" r="6" fill="#fbbf24" />
        {/* Body */}
        <path d="M 0 -9 L -3 5 L -5 18 M 0 -9 L 3 5 L 5 18" fill="none" stroke="#0a1628" strokeWidth="2.5" strokeLinecap="round" />
        {/* Arms reaching up to next step */}
        <path d="M 0 -5 L 8 -12 L 12 -20" fill="none" stroke="#0a1628" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M 0 -5 L -8 -3" fill="none" stroke="#0a1628" strokeWidth="2.5" strokeLinecap="round" />
      </g>

      {/* Revenue badges on steps */}
      <g>
        <g transform="translate(50, 185)">
          <rect x="-20" y="-8" width="40" height="14" rx="7" fill="white" stroke="#10b981" strokeWidth="1" />
          <text x="0" y="2" textAnchor="middle" fontSize="6" fontWeight="700" fill="#10b981">₹5L</text>
        </g>
        <g transform="translate(115, 155)">
          <rect x="-22" y="-8" width="44" height="14" rx="7" fill="white" stroke="#10b981" strokeWidth="1" />
          <text x="0" y="2" textAnchor="middle" fontSize="6" fontWeight="700" fill="#10b981">₹20L</text>
        </g>
        <g transform="translate(180, 120)">
          <rect x="-22" y="-8" width="44" height="14" rx="7" fill="white" stroke="#fbbf24" strokeWidth="1" />
          <text x="0" y="2" textAnchor="middle" fontSize="6" fontWeight="700" fill="#d97706">₹50L</text>
        </g>
        <g transform="translate(245, 75)">
          <rect x="-25" y="-8" width="50" height="14" rx="7" fill="white" stroke="#f97316" strokeWidth="1" />
          <text x="0" y="2" textAnchor="middle" fontSize="6" fontWeight="700" fill="#f97316">₹2Cr</text>
        </g>
      </g>

      {/* "+185%" growth badge */}
      <g transform="translate(150, 30)">
        <rect x="0" y="0" width="60" height="24" rx="12" fill="#10b981" />
        <text x="30" y="16" textAnchor="middle" fontSize="10" fontWeight="800" fill="white">+185%</text>
      </g>

      {/* Up arrow */}
      <g transform="translate(90, 50)" opacity="0.4">
        <path d="M 0 20 L 0 -10 M -6 -4 L 0 -10 L 6 -4" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

/* ---------------- Main component ---------------- */
const THUMBNAILS: Record<ThumbnailKey, (props: { className?: string }) => ReactElement> = {
  "local-seo": LocalSeoThumb,
  "website-speed": WebsiteSpeedThumb,
  "dental-marketing": DentalMarketingThumb,
  "restaurant-marketing": RestaurantMarketingThumb,
  "google-business": GoogleBusinessThumb,
  "conversion-copywriting": ConversionCopywritingThumb,
  "branding": BrandingThumb,
  "website-redesign": WebsiteRedesignThumb,
  "business-growth": BusinessGrowthThumb,
};

export function BlogThumbnail({
  thumbnail,
  className,
}: {
  thumbnail: string;
  className?: string;
}) {
  const Thumb = THUMBNAILS[thumbnail as ThumbnailKey] ?? LocalSeoThumb;
  return (
    <div className={cn("block h-full w-full", className)}>
      <Thumb className="block h-full w-full" />
    </div>
  );
}
