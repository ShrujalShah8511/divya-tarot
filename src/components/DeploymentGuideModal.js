// ==========================================================================
// DEPLOYMENT & GITHUB HOSTING GUIDE MODAL
// ==========================================================================

export function renderDeploymentGuideModal({ isOpen }) {
  if (!isOpen) return '';

  return `
    <div class="drawer-backdrop active" id="guide-modal">
      <div class="drawer-content">
        <button class="close-btn" id="close-guide-btn">
          <i data-lucide="x"></i>
        </button>

        <div style="text-align: center; border-bottom: 1px solid var(--glass-border); padding-bottom: 1rem; margin-bottom: 1.5rem;">
          <span style="color: var(--gold-primary); font-size: 0.8rem; text-transform: uppercase; letter-spacing: 2px;">Step-by-Step Hosting Guide</span>
          <h2 style="font-size: 1.8rem; color: #fff; margin: 0.25rem 0;">
            <i data-lucide="github" style="vertical-align: middle; margin-right: 0.5rem;"></i> Host on GitHub & Free Platforms
          </h2>
          <p style="color: var(--text-muted); font-size: 0.9rem;">Follow these easy steps to put your website online for free forever with your custom domain or free URL.</p>
        </div>

        <!-- STEP 1: GITHUB REPOSITORY SETUP -->
        <div class="guide-step">
          <div class="guide-step-title">Step 1: Create GitHub Repository & Push Code</div>
          <p style="font-size: 0.9rem; color: var(--text-muted);">
            Open your terminal or command prompt inside your project folder and run:
          </p>

          <div class="code-snippet">git init
git add .
git commit -m "Initial commit of Divya Tarot web app"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/divya-tarot.git
git push -u origin main</div>
        </div>

        <!-- STEP 2: VERCEL FREE HOSTING (RECOMMENDED) -->
        <div class="guide-step" style="border-left-color: #0070f3;">
          <div class="guide-step-title" style="color: #0070f3;">Step 2 (Option A - Recommended): Deploy Free on Vercel</div>
          <ol style="margin-left: 1.25rem; font-size: 0.9rem; color: var(--text-main); line-height: 1.7;">
            <li>Go to <a href="https://vercel.com/signup" target="_blank" style="color: var(--gold-bright);">Vercel.com</a> and sign in with your **GitHub account**.</li>
            <li>Click <strong>"Add New" ➔ "Project"</strong>.</li>
            <li>Select your <code>divya-tarot</code> repository from the list and click <strong>Import</strong>.</li>
            <li>Keep all default settings and click <strong>Deploy</strong>.</li>
            <li>🎉 Done! Vercel gives you a free <code>https://divya-tarot.vercel.app</code> URL with free SSL certificate and continuous automatic deploys whenever you push to GitHub!</li>
          </ol>
        </div>

        <!-- STEP 3: NETLIFY FREE HOSTING -->
        <div class="guide-step" style="border-left-color: #00c7b7;">
          <div class="guide-step-title" style="color: #00c7b7;">Step 2 (Option B): Deploy Free on Netlify</div>
          <ol style="margin-left: 1.25rem; font-size: 0.9rem; color: var(--text-main); line-height: 1.7;">
            <li>Go to <a href="https://netlify.com" target="_blank" style="color: var(--gold-bright);">Netlify.com</a> and log in with GitHub.</li>
            <li>Click <strong>"Add new site" ➔ "Import an existing project"</strong>.</li>
            <li>Select <strong>GitHub</strong> ➔ Choose <code>divya-tarot</code>.</li>
            <li>Click <strong>Deploy Site</strong>. Your site will be live instantly with a free Netlify domain!</li>
          </ol>
        </div>

        <!-- STEP 4: GITHUB PAGES -->
        <div class="guide-step" style="border-left-color: var(--gold-bright);">
          <div class="guide-step-title">Step 2 (Option C): Deploy via GitHub Pages</div>
          <ol style="margin-left: 1.25rem; font-size: 0.9rem; color: var(--text-main); line-height: 1.7;">
            <li>In your GitHub repo web page, click <strong>Settings ➔ Pages</strong>.</li>
            <li>Under <strong>Branch</strong>, select <code>main</code> branch and folder <code>/ (root)</code>.</li>
            <li>Click <strong>Save</strong>. In 1 minute your app is live at <code>https://YOUR_USERNAME.github.io/divya-tarot</code>!</li>
          </ol>
        </div>

        <div style="text-align: center; margin-top: 2rem;">
          <button id="close-guide-modal-btn" class="btn btn-primary">
            <i data-lucide="check-circle"></i>
            <span>Got It! Close Guide</span>
          </button>
        </div>
      </div>
    </div>
  `;
}

export function setupDeploymentGuideModalEvents({ onClose }) {
  const closeBtn = document.getElementById('close-guide-btn');
  if (closeBtn) closeBtn.addEventListener('click', onClose);

  const closeBtn2 = document.getElementById('close-guide-modal-btn');
  if (closeBtn2) closeBtn2.addEventListener('click', onClose);

  const backdrop = document.getElementById('guide-modal');
  if (backdrop) {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) onClose();
    });
  }
}
