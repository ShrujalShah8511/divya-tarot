// ==========================================================================
// NAVBAR COMPONENT (End-User Focused)
// ==========================================================================

import { soundFx } from '../utils/soundEffects.js';

export function renderNavbar({ onOpenJournal }) {
  const isMuted = soundFx.isMuted;

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
              <span class="brand-badge">Made for India 🇮🇳</span>
            </div>
            <div style="font-size: 0.72rem; color: var(--text-muted); font-family: var(--font-reading);">Vedic Karma & Tarot Guidance</div>
          </div>
        </a>

        <div class="nav-actions">
          <button id="audio-toggle-btn" class="btn btn-secondary" style="padding: 0.5rem 1rem; font-size: 0.85rem;" title="Toggle Ambient Music">
            <i data-lucide="${isMuted ? 'volume-x' : 'volume-2'}"></i>
            <span class="hide-mobile">${isMuted ? 'Mute Music' : 'Sacred Music'}</span>
          </button>

          <button id="journal-btn" class="btn btn-primary" style="padding: 0.5rem 1.1rem; font-size: 0.85rem;">
            <i data-lucide="book-marked"></i>
            <span>My Saved Journal</span>
          </button>
        </div>
      </div>
    </nav>
  `;
}

export function setupNavbarEvents({ onOpenJournal }) {
  const audioBtn = document.getElementById('audio-toggle-btn');
  if (audioBtn) {
    audioBtn.addEventListener('click', () => {
      const isMuted = soundFx.toggleMute();
      audioBtn.querySelector('span').textContent = isMuted ? 'Mute Music' : 'Sacred Music';
      const iconEl = audioBtn.querySelector('i');
      if (iconEl) {
        iconEl.setAttribute('data-lucide', isMuted ? 'volume-x' : 'volume-2');
        if (window.lucide) window.lucide.createIcons();
      }
    });
  }

  const journalBtn = document.getElementById('journal-btn');
  if (journalBtn) {
    journalBtn.addEventListener('click', onOpenJournal);
  }
}
