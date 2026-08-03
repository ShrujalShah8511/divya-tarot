// ==========================================================================
// READING BOARD COMPONENT
// ==========================================================================

import { renderTarotCard } from './TarotCard.js';
import { soundFx } from '../utils/soundEffects.js';

export function renderReadingBoard({ spread, drawnCards, isReadingComplete }) {
  if (!drawnCards || drawnCards.length === 0) {
    return '';
  }

  const allFlipped = drawnCards.every(item => item.isFlipped);

  return `
    <section class="reading-arena container" id="reading-arena">
      <div style="text-align: center; margin-bottom: 2rem;">
        <h2 style="font-size: 2rem; color: var(--gold-bright);">${spread.name}</h2>
        <p style="color: var(--text-muted);">Tap each card to flip and reveal your divine reading guidance.</p>
      </div>

      <div class="cards-spread-flex">
        ${drawnCards.map((item, index) => {
          return renderTarotCard({
            card: item.card,
            positionLabel: item.positionLabel,
            index: index,
            isFlipped: item.isFlipped,
            isReversed: item.isReversed
          });
        }).join('')}
      </div>

      <div style="text-align: center; margin-top: 3rem; display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
        ${!allFlipped ? `
          <button id="reveal-all-btn" class="btn btn-primary">
            <i data-lucide="eye"></i>
            <span>Reveal All Cards</span>
          </button>
        ` : ''}

        <button id="view-reading-btn" class="btn ${allFlipped ? 'btn-primary' : 'btn-secondary'}" ${!allFlipped ? 'disabled style="opacity:0.6; cursor:not-allowed;"' : ''}>
          <i data-lucide="scroll-text"></i>
          <span>View Complete Reading Insights</span>
        </button>

        <button id="reset-reading-btn" class="btn btn-secondary">
          <i data-lucide="rotate-ccw"></i>
          <span>New Reading</span>
        </button>
      </div>
    </section>
  `;
}

export function setupReadingBoardEvents({ onFlipCard, onRevealAll, onViewReading, onReset }) {
  document.querySelectorAll('.tarot-card-wrapper').forEach(cardWrapper => {
    cardWrapper.addEventListener('click', () => {
      const cardIndex = parseInt(cardWrapper.getAttribute('data-card-index'), 10);
      soundFx.playCardFlipSFX();
      onFlipCard(cardIndex);
    });
  });

  const revealBtn = document.getElementById('reveal-all-btn');
  if (revealBtn) {
    revealBtn.addEventListener('click', () => {
      soundFx.playCardFlipSFX();
      onRevealAll();
    });
  }

  const viewBtn = document.getElementById('view-reading-btn');
  if (viewBtn) {
    viewBtn.addEventListener('click', () => {
      if (!viewBtn.disabled) {
        onViewReading();
      }
    });
  }

  const resetBtn = document.getElementById('reset-reading-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', onReset);
  }
}
