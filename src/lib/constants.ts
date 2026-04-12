/**
 * Store listing URLs — **KAWN: Your Social Network** (`StoreBadges`, etc.).
 * Optional override in `.env.local`:
 *   NEXT_PUBLIC_APP_STORE_URL="..."
 *   NEXT_PUBLIC_PLAY_STORE_URL="..."
 */
const envApp = process.env.NEXT_PUBLIC_APP_STORE_URL?.trim();
const envPlay = process.env.NEXT_PUBLIC_PLAY_STORE_URL?.trim();

/** App Store — KAWN: Your Social Network (Apple opens the correct regional page). */
export const APP_STORE_URL =
  envApp ||
  "https://apps.apple.com/cy/app/kawn-your-social-network/id6737165795";

/** Google Play — package `kawn.app.kawn`. */
export const PLAY_STORE_URL =
  envPlay ||
  "https://play.google.com/store/apps/details?id=kawn.app.kawn";
