// ==========================================================================
// WHATSAPP READING SHARE UTILITY (For Indian Audience)
// ==========================================================================

export function generateWhatsAppShareLink({ spreadName, question, drawnCards }) {
  let text = `🎴 *Divya Tarot Reading Insight* 🎴\n\n`;
  text += `✨ *Spread:* ${spreadName}\n`;
  if (question && question.trim()) {
    text += `❓ *Question:* "${question.trim()}"\n`;
  }
  text += `\n-------------------------------\n`;

  drawnCards.forEach((item) => {
    const card = item.card;
    const orientation = item.isReversed ? '🔄 (Reversed)' : '✨ (Upright)';
    text += `\n*${item.positionLabel}:*\n`;
    text += `• *${card.name}* ${orientation}\n`;
    text += `• _Insight:_ ${item.isReversed ? card.reversedMeaning : card.uprightMeaning}\n`;
  });

  text += `\n-------------------------------\n`;
  text += `🙏 *Vedic Affirmation:* ${drawnCards[0]?.card?.indianInsight?.mantra || 'Satyam Eva Jayate'}\n\n`;
  text += `🌟 Read your free Indian Tarot on *Divya Tarot*!`;

  const encodedText = encodeURIComponent(text);
  return `https://api.whatsapp.com/send?text=${encodedText}`;
}
