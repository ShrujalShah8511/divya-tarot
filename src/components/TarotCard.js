// ==========================================================================
// 3D TAROT CARD COMPONENT
// ==========================================================================

export function renderTarotCard({ card, positionLabel, index, isFlipped, isReversed }) {
  const reversedClass = isReversed ? 'reversed' : '';
  const flippedClass = isFlipped ? 'flipped' : '';

  return `
    <div class="slot-container">
      <div class="slot-label">${positionLabel}</div>

      <div 
        class="tarot-card-wrapper ${flippedClass} ${reversedClass}" 
        data-card-index="${index}"
      >
        <div class="tarot-card-inner">
          <!-- CARD BACK -->
          <div class="card-face card-back">
            <div class="card-back-pattern">
              <svg class="card-back-lotus" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M12 2C12 2 14.5 6 14.5 9.5C14.5 11.5 13.5 13 12 14C10.5 13 9.5 11.5 9.5 9.5C9.5 6 12 2 12 2Z" />
                <path d="M12 14C12 14 16.5 13 18.5 15.5C20.5 18 19 20 17 20C14 20 12.5 16.5 12 14Z" />
                <path d="M12 14C12 14 7.5 13 5.5 15.5C3.5 18 5 20 7 20C10 20 11.5 16.5 12 14Z" />
              </svg>
              <span style="font-family: var(--font-serif); font-size: 0.65rem; color: var(--gold-primary); margin-top: 8px; letter-spacing: 1px;">DIVYA TAROT</span>
            </div>
          </div>

          <!-- CARD FRONT -->
          <div class="card-face card-front">
            <div class="card-header-mini">
              <div class="card-number">${card.number}</div>
              <div class="card-title-mini">${card.name.split('(')[0]}</div>
            </div>

            <div class="card-art-box">
              <i data-lucide="${card.icon}" class="card-art-icon"></i>
              <div class="card-element-tag">${card.element} • ${card.astrology}</div>
            </div>

            <div class="card-footer-mini">
              <span class="card-badge-status ${isReversed ? 'badge-reversed' : 'badge-upright'}">
                ${isReversed ? 'Reversed (Vipreet)' : 'Upright (Shubh)'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}
