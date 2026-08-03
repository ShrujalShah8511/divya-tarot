// ==========================================================================
// NAVBAR COMPONENT WITH MODERN THEME SELECTOR
// ==========================================================================

import { soundFx } from '../utils/soundEffects.js';

export function renderNavbar({ onOpenJournal, currentTheme = 'cyber-violet' }) {
  const isMuted = soundFx.isMuted;

  const themes = [
    { id: 'cyber-violet', name: '💜 Cyber Violet', dot: '#8b5cf6' },
    { id: 'vedic-emerald', name: '💚 Vedic Emerald', dot: '#10b981' },
    { id: 'starlight-sapphire', name: '💙 Cosmic Sapphire', dot: '#06b6d4' },
    { id: 'obsidian-amber', name: '🧡 Radiant Amber', dot: '#f59e0b' }
  ];

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
              <span class="brand-badge">Vedic 2.0 🇮🇳</span>
            </div>
            <div style="font-size: 0.72rem; color: var(--text-muted); font-family: var(--font-reading);">Vedic Karma & Tarot Guidance</div>
          </div>
        </a>

        <div class="nav-actions">
          <!-- Modern Theme Selector -->
          <div class="theme-selector-wrapper">
            <button id="theme-menu-btn" class="btn btn-secondary theme-btn" title="Change Color Theme">
              <i data-lucide="palette"></i>
              <span class="hide-mobile">Theme</span>
            </button>
            
            <div id="theme-dropdown" class="theme-dropdown glass-panel hidden">
              <div class="theme-dropdown-header">Select Color Atmosphere</div>
              ${themes.map(t => `
                <button class="theme-option ${currentTheme === t.id ? 'active' : ''}" data-theme-id="${t.id}">
                  <span class="theme-dot" style="background: ${t.dot};"></span>
                  <span>${t.name}</span>
                </button>
              `).join('')}
            </div>
          </div>

          <button id="audio-toggle-btn" class="btn btn-secondary" style="padding: 0.5rem 1rem; font-size: 0.85rem;" title="Toggle Ambient Music">
            <i data-lucide="${isMuted ? 'volume-x' : 'volume-2'}"></i>
            <span class="hide-mobile">${isMuted ? 'Mute Music' : 'Sacred Music'}</span>
          </button>

          <button id="journal-btn" class="btn btn-primary" style="padding: 0.5rem 1.1rem; font-size: 0.85rem;">
            <i data-lucide="book-marked"></i>
            <span>Saved Journal</span>
          </button>
        </div>
      </div>
    </nav>
  `;
}

export function setupNavbarEvents({ onOpenJournal, onThemeChange }) {
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

  // Theme dropdown toggler
  const themeBtn = document.getElementById('theme-menu-btn');
  const dropdown = document.getElementById('theme-dropdown');
  if (themeBtn && dropdown) {
    themeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdown.classList.toggle('hidden');
    });

    document.addEventListener('click', (e) => {
      if (!dropdown.contains(e.target) && e.target !== themeBtn) {
        dropdown.classList.add('hidden');
      }
    });

    const themeOptions = dropdown.querySelectorAll('.theme-option');
    themeOptions.forEach(opt => {
      opt.addEventListener('click', () => {
        const themeId = opt.getAttribute('data-theme-id');
        if (onThemeChange) onThemeChange(themeId);
        dropdown.classList.add('hidden');
      });
    });
  }
}
