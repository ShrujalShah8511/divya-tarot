// ==========================================================================
// JOURNAL MODAL COMPONENT (LocalStorage Saved Readings)
// ==========================================================================

export function renderJournalModal({ isOpen, savedReadings }) {
  if (!isOpen) return '';

  return `
    <div class="drawer-backdrop active" id="journal-modal">
      <div class="drawer-content">
        <button class="close-btn" id="close-journal-btn">
          <i data-lucide="x"></i>
        </button>

        <div style="text-align: center; border-bottom: 1px solid var(--glass-border); padding-bottom: 1rem; margin-bottom: 1.5rem;">
          <h2 style="font-size: 1.8rem; color: var(--gold-bright);">
            <i data-lucide="book-marked" style="vertical-align: middle; margin-right: 0.5rem;"></i> My Reading Journal
          </h2>
          <p style="color: var(--text-muted); font-size: 0.9rem;">Your personal timeline of past Tarot insights and reflections.</p>
        </div>

        ${(!savedReadings || savedReadings.length === 0) ? `
          <div style="text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
            <i data-lucide="sparkles" style="width: 48px; height: 48px; color: var(--gold-primary); margin-bottom: 1rem;"></i>
            <p>No saved readings yet.</p>
            <p style="font-size: 0.88rem; margin-top: 0.5rem;">Perform a reading and click "Save to My Journal" to keep a reflection log!</p>
          </div>
        ` : `
          <div style="display: flex; flex-direction: column; gap: 1.25rem;">
            ${savedReadings.map((item, index) => {
              return `
                <div class="glass-panel" style="padding: 1.25rem; border-color: rgba(245, 166, 35, 0.2);">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem;">
                    <div>
                      <span style="font-size: 0.75rem; color: var(--gold-primary); text-transform: uppercase;">${item.date}</span>
                      <h4 style="color: #fff; font-size: 1.1rem;">${item.spreadName}</h4>
                    </div>
                    <button class="delete-reading-btn" data-index="${index}" style="background: none; border: none; color: #ff5555; cursor: pointer;">
                      <i data-lucide="trash-2" style="width: 18px; height: 18px;"></i>
                    </button>
                  </div>

                  ${item.question ? `
                    <p style="color: var(--gold-bright); font-style: italic; font-size: 0.9rem; margin-bottom: 0.75rem;">
                      "${item.question}"
                    </p>
                  ` : ''}

                  <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                    ${item.cards.map(c => `
                      <span style="background: rgba(7, 9, 25, 0.8); border: 1px solid var(--glass-border); font-size: 0.75rem; padding: 0.25rem 0.6rem; border-radius: 4px; color: var(--text-gold);">
                        ${c.cardName} (${c.isReversed ? 'Rev' : 'Up'})
                      </span>
                    `).join('')}
                  </div>
                </div>
              `;
            }).join('')}
          </div>

          <div style="text-align: center; margin-top: 2rem;">
            <button id="clear-all-journal-btn" class="btn btn-secondary" style="color: #ff6b6b; border-color: rgba(255, 107, 107, 0.3);">
              <i data-lucide="trash"></i>
              <span>Clear Entire Journal</span>
            </button>
          </div>
        `}
      </div>
    </div>
  `;
}

export function setupJournalModalEvents({ onClose, onDeleteItem, onClearAll }) {
  const closeBtn = document.getElementById('close-journal-btn');
  if (closeBtn) closeBtn.addEventListener('click', onClose);

  const backdrop = document.getElementById('journal-modal');
  if (backdrop) {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) onClose();
    });
  }

  document.querySelectorAll('.delete-reading-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-index'), 10);
      onDeleteItem(idx);
    });
  });

  const clearBtn = document.getElementById('clear-all-journal-btn');
  if (clearBtn) {
    clearBtn.addEventListener('click', onClearAll);
  }
}
