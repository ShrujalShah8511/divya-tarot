// ==========================================================================
// HERO BANNER COMPONENT
// ==========================================================================

export function renderHeroBanner() {
  return `
    <header class="hero container">
      <div class="hero-subtitle">
        <i data-lucide="sun" style="width: 16px; height: 16px; color: var(--gold-bright);"></i>
        <span>Divya Gyana • Authentic Indian Life Spreads</span>
        <i data-lucide="sun" style="width: 16px; height: 16px; color: var(--gold-bright);"></i>
      </div>

      <h1 class="hero-title">
        Discover Your <span class="text-gold-gradient">Karma, Career & Love</span> Destiny
      </h1>

      <p class="hero-desc">
        Seek authentic clarity on your path. Explore sacred 78-card Tarot readings tailored specifically for Indian life contexts — Career prosperity, Karma alignment, Marriage (Rishta) compatibility, and Daily Shubh Muhurat.
      </p>
    </header>
  `;
}
