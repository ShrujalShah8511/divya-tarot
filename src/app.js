// ==========================================================================
// DIVYA TAROT MAIN APPLICATION ORCHESTRATOR
// ==========================================================================

import { MandalaCanvas } from './components/MandalaCanvas.js';
import { renderNavbar, setupNavbarEvents } from './components/Navbar.js';
import { renderHeroBanner } from './components/HeroBanner.js';
import { renderSpreadSelector, setupSpreadSelectorEvents } from './components/SpreadSelector.js';
import { renderReadingBoard, setupReadingBoardEvents } from './components/ReadingBoard.js';
import { renderInterpretationDrawer, setupInterpretationDrawerEvents } from './components/InterpretationDrawer.js';
import { renderJournalModal, setupJournalModalEvents } from './components/JournalModal.js';

import { TAROT_DECK } from './data/tarotDeck.js';
import { TAROT_SPREADS } from './data/spreads.js';
import { soundFx } from './utils/soundEffects.js';

class DivyaTarotApp {
  constructor() {
    this.state = {
      selectedSpreadId: 'karma',
      userQuestion: '',
      drawnCards: [],
      isDrawerOpen: false,
      isJournalOpen: false,
      isReadingSaved: false,
      savedReadings: this.loadJournalFromStorage()
    };

    this.init();
  }

  init() {
    // Initialize sacred background canvas
    window.addEventListener('DOMContentLoaded', () => {
      new MandalaCanvas('mandala-canvas');
    });

    this.render();
  }

  loadJournalFromStorage() {
    try {
      const data = localStorage.getItem('divya_tarot_journal');
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.warn('LocalStorage error:', e);
      return [];
    }
  }

  saveJournalToStorage(readings) {
    try {
      localStorage.setItem('divya_tarot_journal', JSON.stringify(readings));
    } catch (e) {
      console.warn('LocalStorage save error:', e);
    }
  }

  // Shuffle and Deal Tarot Cards
  dealReading(question) {
    const spread = TAROT_SPREADS.find(s => s.id === this.state.selectedSpreadId) || TAROT_SPREADS[0];
    
    // Fisher-Yates Shuffle
    const deckCopy = [...TAROT_DECK];
    for (let i = deckCopy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deckCopy[i], deckCopy[j]] = [deckCopy[j], deckCopy[i]];
    }

    // Select cards for positions
    const drawn = spread.positions.map((pos, idx) => {
      const card = deckCopy[idx];
      const isReversed = Math.random() < 0.25; // 25% chance reversed
      return {
        positionId: pos.id,
        positionLabel: pos.label,
        card: card,
        isFlipped: false,
        isReversed: isReversed
      };
    });

    soundFx.playShuffleSFX();

    this.state.userQuestion = question || '';
    this.state.drawnCards = drawn;
    this.state.isReadingSaved = false;
    this.render();

    // Smooth scroll down to reading area
    setTimeout(() => {
      const arena = document.getElementById('reading-arena');
      if (arena) arena.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }

  flipCard(index) {
    if (this.state.drawnCards[index]) {
      this.state.drawnCards[index].isFlipped = !this.state.drawnCards[index].isFlipped;
      this.render();
    }
  }

  revealAllCards() {
    this.state.drawnCards.forEach(item => item.isFlipped = true);
    this.render();
  }

  saveCurrentReadingToJournal() {
    const spread = TAROT_SPREADS.find(s => s.id === this.state.selectedSpreadId);
    if (!spread || !this.state.drawnCards.length) return;

    const newEntry = {
      id: Date.now(),
      date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
      spreadName: spread.name,
      question: this.state.userQuestion,
      cards: this.state.drawnCards.map(item => ({
        position: item.positionLabel,
        cardName: item.card.name,
        isReversed: item.isReversed
      }))
    };

    const updatedJournal = [newEntry, ...this.state.savedReadings];
    this.state.savedReadings = updatedJournal;
    this.state.isReadingSaved = true;
    this.saveJournalToStorage(updatedJournal);
    this.render();
  }

  render() {
    const appContainer = document.getElementById('app');
    if (!appContainer) return;

    const activeSpread = TAROT_SPREADS.find(s => s.id === this.state.selectedSpreadId) || TAROT_SPREADS[0];

    appContainer.innerHTML = `
      ${renderNavbar({
        onOpenJournal: () => { this.state.isJournalOpen = true; this.render(); }
      })}

      <main style="flex: 1;">
        ${renderHeroBanner()}

        ${renderSpreadSelector(this.state.selectedSpreadId, this.state.userQuestion)}

        ${renderReadingBoard({
          spread: activeSpread,
          drawnCards: this.state.drawnCards,
          isReadingComplete: this.state.drawnCards.length > 0 && this.state.drawnCards.every(c => c.isFlipped)
        })}
      </main>

      <!-- MODALS & DRAWERS -->
      ${renderInterpretationDrawer({
        isOpen: this.state.isDrawerOpen,
        spread: activeSpread,
        question: this.state.userQuestion,
        drawnCards: this.state.drawnCards,
        isSaved: this.state.isReadingSaved
      })}

      ${renderJournalModal({
        isOpen: this.state.isJournalOpen,
        savedReadings: this.state.savedReadings
      })}

      <footer class="footer">
        <div class="container">
          <p class="footer-text">
            <span class="text-gold-gradient" style="font-weight: 700;">Divya Tarot</span> • Authentic Indian Vedic Karma & Tarot Readings
          </p>
          <p style="font-size: 0.78rem; color: var(--text-muted); margin-top: 0.4rem;">
            Crafted for India with ♥ • Sacred Guidance & Inner Harmony
          </p>
        </div>
      </footer>
    `;

    // Re-initialize Lucide icons
    if (window.lucide) {
      window.lucide.createIcons();
    }

    // Attach Event Listeners
    setupNavbarEvents({
      onOpenJournal: () => { this.state.isJournalOpen = true; this.render(); }
    });

    setupSpreadSelectorEvents({
      onSelectSpread: (id) => {
        this.state.selectedSpreadId = id;
        this.state.drawnCards = [];
        this.render();
      },
      onStartReading: (q) => {
        this.dealReading(q);
      }
    });

    setupReadingBoardEvents({
      onFlipCard: (idx) => this.flipCard(idx),
      onRevealAll: () => this.revealAllCards(),
      onViewReading: () => { this.state.isDrawerOpen = true; this.render(); },
      onReset: () => {
        this.state.drawnCards = [];
        this.state.userQuestion = '';
        this.render();
      }
    });

    setupInterpretationDrawerEvents({
      onClose: () => { this.state.isDrawerOpen = false; this.render(); },
      onSaveReading: () => this.saveCurrentReadingToJournal()
    });

    setupJournalModalEvents({
      onClose: () => { this.state.isJournalOpen = false; this.render(); },
      onDeleteItem: (idx) => {
        this.state.savedReadings.splice(idx, 1);
        this.saveJournalToStorage(this.state.savedReadings);
        this.render();
      },
      onClearAll: () => {
        this.state.savedReadings = [];
        this.saveJournalToStorage([]);
        this.render();
      }
    });
  }
}

// Instantiate App
new DivyaTarotApp();
