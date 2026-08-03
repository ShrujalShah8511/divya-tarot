// ==========================================================================
// INTERPRETATION DRAWER / MODAL COMPONENT
// ==========================================================================

import { generateWhatsAppShareLink } from '../utils/whatsappShare.js';

export function renderInterpretationDrawer({ isOpen, spread, question, drawnCards, isSaved }) {
  if (!isOpen || !spread || !drawnCards) return '';

  const whatsappLink = generateWhatsAppShareLink({
    spreadName: spread.name,
    question: question,
    drawnCards: drawnCards
  });

  return `
    <div class="drawer-backdrop active" id="interpretation-drawer">
      <div class="drawer-content">
        <button class="close-btn" id="close-drawer-btn">
          <i data-lucide="x"></i>
        </button>

        <div style="text-align: center; border-bottom: 1px solid var(--glass-border); padding-bottom: 1rem; margin-bottom: 1.5rem;">
          <span style="color: var(--gold-primary); font-size: 0.8rem; text-transform: uppercase; letter-spacing: 2px;">Sacred Vedic Interpretation</span>
          <h2 style="font-size: 1.8rem; color: #fff; margin: 0.25rem 0;">${spread.name}</h2>
          ${question && question.trim() ? `
            <p style="color: var(--gold-bright); font-style: italic; font-family: var(--font-reading); font-size: 1.1rem; margin-top: 0.5rem;">
              Question: "${question.trim()}"
            </p>
          ` : ''}
        </div>

        <div class="cards-summary-list">
          ${drawnCards.map((item) => {
            const card = item.card;
            const meaningText = item.isReversed ? card.reversedMeaning : card.uprightMeaning;

            return `
              <div class="card-insight-item">
                <div class="card-insight-mini-art">
                  <i data-lucide="${card.icon}" style="width: 28px; height: 28px; color: var(--gold-bright);"></i>
                  <span style="font-size: 0.65rem; color: var(--gold-primary); margin-top: 4px;">${card.number}</span>
                </div>

                <div class="card-insight-body">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap;">
                    <h3 class="card-insight-title">${card.name}</h3>
                    <span class="card-badge-status ${item.isReversed ? 'badge-reversed' : 'badge-upright'}">
                      ${item.isReversed ? 'Reversed (Vipreet)' : 'Upright (Shubh)'}
                    </span>
                  </div>
                  <div class="card-insight-position">${item.positionLabel}</div>

                  <p class="card-insight-text">${meaningText}</p>

                  ${card.indianInsight ? `
                    <div style="margin-top: 0.75rem; padding: 0.75rem; background: rgba(245, 166, 35, 0.08); border-radius: 8px; font-size: 0.88rem;">
                      <div style="color: var(--gold-bright); font-weight: 600; margin-bottom: 0.2rem;">
                        ⚡ Indian Life Context (${spread.id === 'dhan' ? 'Career & Abundance' : spread.id === 'rishta' ? 'Marriage & Family' : 'Karma Alignment'}):
                      </div>
                      <div style="color: var(--text-main);">
                        ${spread.id === 'dhan' ? card.indianInsight.career + ' ' + card.indianInsight.dhan :
                          spread.id === 'rishta' ? card.indianInsight.rishta :
                          card.indianInsight.karma}
                      </div>
                    </div>
                  ` : ''}
                </div>
              </div>
            `;
          }).join('')}
        </div>

        <!-- VEDIC WISDOM BOX -->
        <div class="indian-wisdom-box">
          <div class="indian-wisdom-title">
            <i data-lucide="sun"></i>
            <span>Auspicious Vedic Affirmation & Shubh Mantra</span>
          </div>
          <div class="indian-wisdom-quote">
            "${drawnCards[0]?.card?.indianInsight?.mantra || 'Satyam Eva Jayate - Truth alone triumphs.'}"
          </div>
        </div>

        <!-- ACTIONS: WHATSAPP SHARE & SAVE TO JOURNAL -->
        <div style="display: flex; gap: 1rem; margin-top: 2rem; justify-content: center; flex-wrap: wrap;">
          <a href="${whatsappLink}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp">
            <i data-lucide="message-circle"></i>
            <span>Share Reading on WhatsApp</span>
          </a>

          <button id="save-reading-btn" class="btn btn-secondary" ${isSaved ? 'disabled' : ''}>
            <i data-lucide="${isSaved ? 'check' : 'bookmark'}"></i>
            <span>${isSaved ? 'Saved to Journal' : 'Save to My Journal'}</span>
          </button>
        </div>
      </div>
    </div>
  `;
}

export function setupInterpretationDrawerEvents({ onClose, onSaveReading }) {
  const closeBtn = document.getElementById('close-drawer-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', onClose);
  }

  const backdrop = document.getElementById('interpretation-drawer');
  if (backdrop) {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) onClose();
    });
  }

  const saveBtn = document.getElementById('save-reading-btn');
  if (saveBtn) {
    saveBtn.addEventListener('click', onSaveReading);
  }
}
