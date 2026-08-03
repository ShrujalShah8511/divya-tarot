// ==========================================================================
// NAVBAR COMPONENT (Clean & Minimalist)
// ==========================================================================

export function renderNavbar({ onOpenJournal }) {
  return `
    <nav class="navbar">
      <div class="container navbar-inner">
        <a href="#" class="brand" onclick="location.reload(); return false;">
          <div class="brand-icon">
            <i data-lucide="sparkles"></i>
          </div>
          <div>
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <span class="brand-title text-gold-gradient">Divya Tarot</span>
              <span class="brand-badge">Vedic Guidance 2.0</span>
            </div>
            <div style="font-size: 0.72rem; color: var(--text-muted); font-family: var(--font-reading);">Vedic Karma & Tarot Guidance</div>
          </div>
        </a>

        <div class="nav-actions">
          <button id="journal-btn" class="btn btn-primary" style="padding: 0.5rem 1.1rem; font-size: 0.85rem;">
            <i data-lucide="book-marked"></i>
            <span>Saved Journal</span>
          </button>
        </div>
      </div>
    </nav>
  `;
}

export function setupNavbarEvents({ onOpenJournal }) {
  const journalBtn = document.getElementById('journal-btn');
  if (journalBtn) {
    journalBtn.addEventListener('click', onOpenJournal);
  }
}
