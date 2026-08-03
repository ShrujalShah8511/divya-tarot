// ==========================================================================
// SPREAD SELECTOR COMPONENT
// ==========================================================================

import { TAROT_SPREADS } from '../data/spreads.js';
import { soundFx } from '../utils/soundEffects.js';

export function renderSpreadSelector(selectedSpreadId, userQuestion) {
  return `
    <section class="container" style="margin-bottom: 2rem;">
      <div class="spreads-grid">
        ${TAROT_SPREADS.map(spread => {
          const isActive = spread.id === selectedSpreadId;
          return `
            <div class="glass-panel spread-card ${isActive ? 'active' : ''}" data-spread-id="${spread.id}">
              <div class="spread-icon-wrap">
                <i data-lucide="${spread.icon}"></i>
              </div>
              <h3 class="spread-title">${spread.name}</h3>
              <span class="spread-cards-count">${spread.cardCount} ${spread.cardCount === 1 ? 'Card' : 'Cards'}</span>
              <p class="spread-desc">${spread.description}</p>
            </div>
          `;
        }).join('')}
      </div>

      <div class="glass-panel question-box">
        <h4 style="font-family: var(--font-serif); color: var(--gold-bright); margin-bottom: 0.25rem;">
          <i data-lucide="help-circle" style="width: 18px; height: 18px; vertical-align: middle;"></i> Ask Your Specific Question (Optional)
        </h4>
        <p style="font-size: 0.88rem; color: var(--text-muted);">
          e.g. "Will I crack my competitive exam?", "Is this job transition favorable?", or "Will our marriage proposal bring peace?"
        </p>

        <div class="question-input-wrap">
          <input 
            type="text" 
            id="user-question-input" 
            class="question-input" 
            placeholder="Type your question here..." 
            value="${userQuestion || ''}"
          />
          <button id="start-reading-btn" class="btn btn-primary">
            <i data-lucide="sparkles"></i>
            <span>Shuffle & Deal Deck</span>
          </button>
        </div>
      </div>
    </section>
  `;
}

export function setupSpreadSelectorEvents({ onSelectSpread, onStartReading }) {
  document.querySelectorAll('.spread-card').forEach(cardEl => {
    cardEl.addEventListener('click', () => {
      soundFx.playShuffleSFX();
      const spreadId = cardEl.getAttribute('data-spread-id');
      onSelectSpread(spreadId);
    });
  });

  const startBtn = document.getElementById('start-reading-btn');
  if (startBtn) {
    startBtn.addEventListener('click', () => {
      const qInput = document.getElementById('user-question-input');
      const questionVal = qInput ? qInput.value : '';
      onStartReading(questionVal);
    });
  }
}
