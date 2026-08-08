// Kalki Wellness 網站內容管理操作指南 — 頁面內容
// 此頁面刻意使用不易猜測的路徑，且設為 noindex，僅供知道連結的人瀏覽。
// 內容來源：docs/Kalki網站內容管理操作指南.pdf 對應之 HTML。

const guideStyles = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: "Microsoft JhengHei", "Noto Sans TC", "PingFang TC", sans-serif;
    font-size: 15px;
    color: #3d2e21;
    line-height: 1.8;
    background: #f5f0eb;
  }
  .guide-wrap {
    max-width: 880px;
    margin: 0 auto;
    background: #fff;
    padding: 56px 64px 72px;
    box-shadow: 0 4px 24px rgba(74, 54, 40, 0.08);
  }
  .cover {
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 80px 0 48px;
    border-bottom: 1px solid #eee4d8;
    margin-bottom: 48px;
  }
  .cover .brand { color: #7d5a45; font-size: 16px; letter-spacing: 6px; margin-bottom: 16px; font-weight: 600; }
  .cover h1 { font-size: 38px; color: #4a3628; margin-bottom: 14px; letter-spacing: 3px; }
  .cover .sub { color: #b59a85; font-size: 15px; letter-spacing: 3px; margin-bottom: 12px; }
  .cover .meta { color: #9a8a7a; font-size: 13px; margin-top: 40px; }
  h2 {
    font-size: 24px;
    color: #7d5a45;
    margin: 48px 0 16px;
    padding-bottom: 8px;
    border-bottom: 3px solid #c47b5f;
    letter-spacing: 1px;
  }
  h3 { font-size: 18px; color: #4a3628; margin: 28px 0 10px; }
  p { margin-bottom: 12px; }
  ul, ol { margin: 6px 0 14px 26px; }
  li { margin-bottom: 6px; }
  .toc ol { list-style: none; margin-left: 0; counter-reset: toc; }
  .toc li { counter-increment: toc; margin-bottom: 10px; font-size: 16px; }
  .toc li::before { content: counter(toc) ". "; color: #c47b5f; font-weight: bold; margin-right: 8px; }
  .toc .l2 { margin-left: 32px; font-size: 14px; color: #6b5744; }
  .box {
    background: #f5f0eb;
    border-left: 4px solid #7d5a45;
    padding: 14px 18px;
    margin: 16px 0;
    border-radius: 4px;
  }
  .box.warn { background: #fdf3e7; border-left-color: #c47b5f; }
  .box.info { background: #f5f0eb; border-left-color: #b59a85; }
  .box.tip { background: #f2f7f2; border-left-color: #5f7d5a; }
  .box strong { color: #4a3628; }
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 14px 0 20px;
    font-size: 14px;
  }
  th {
    background: #7d5a45;
    color: #fff;
    padding: 9px 12px;
    text-align: left;
    font-weight: 600;
  }
  td {
    border: 1px solid #e0d5c9;
    padding: 8px 12px;
    vertical-align: top;
  }
  tr:nth-child(even) td { background: #faf6f2; }
  code {
    font-family: Consolas, "Courier New", monospace;
    background: #f5f0eb;
    padding: 2px 6px;
    border-radius: 3px;
    font-size: 13px;
    color: #7d5a45;
  }
  pre {
    background: #f5f0eb;
    padding: 12px 14px;
    border-radius: 4px;
    font-size: 13px;
    overflow-x: auto;
    margin: 10px 0 16px;
    line-height: 1.6;
  }
  pre code { background: transparent; padding: 0; color: #4a3628; }
  .stepnum {
    display: inline-block;
    width: 24px; height: 24px;
    background: #c47b5f;
    color: #fff;
    border-radius: 50%;
    text-align: center;
    line-height: 24px;
    font-weight: bold;
    font-size: 12px;
    margin-right: 8px;
  }
  .field-table td:first-child { font-weight: 600; white-space: nowrap; }
  .req { color: #c0392b; font-weight: bold; }
  .footnote { font-size: 12px; color: #9a8a7a; margin-top: 40px; padding-top: 16px; border-top: 1px solid #eee4d8; }
  a { color: #7d5a45; }
  a:hover { color: #c47b5f; }
  @media (max-width: 640px) {
    .guide-wrap { padding: 32px 20px 48px; }
    .cover h1 { font-size: 28px; }
    table { font-size: 12.5px; }
    .field-table td:first-child { white-space: normal; }
  }
`;

const guideBody = `
  <div class="cover">
    <div class="brand">KALKI WELLNESS</div>
    <h1>網站內容管理操作指南</h1>
    <div class="sub">課程頁（Classes）・ 工作坊頁（Workshops）</div>
    <div class="sub" style="margin-top:-16px;">新增・修改・刪除・發布</div>
    <div class="meta">適用版本：Outstatic CMS 2.x ／ Next.js 16<br>最後更新：2026 年 8 月</div>
  </div>

  <div class="toc">
    <h2>目錄</h2>
    <ol>
      <li>認識您的網站後台</li>
      <li>第一次使用：登入設定（GitHub OAuth）</li>
      <li>登入內容管理後台</li>
      <li>課程頁（/classes）內容管理
        <ol class="l2">
          <li>新增一筆課程</li>
          <li>修改現有課程</li>
          <li>刪除課程</li>
          <li>課程欄位說明</li>
        </ol>
      </li>
      <li>工作坊頁（/workshops）內容管理
        <ol class="l2">
          <li>新增一筆工作坊</li>
          <li>修改現有工作坊</li>
          <li>刪除工作坊</li>
          <li>工作坊欄位說明</li>
        </ol>
      </li>
      <li>發布流程與網站更新</li>
      <li>備用資料（Fallback）機制說明</li>
      <li>常見問題</li>
    </ol>
    <div class="box info" style="margin-top:24px;">
      <strong>管理員需要什麼？</strong><br>
      一台電腦、一個 GitHub 帳號、以及本指南。所有內容更新都不需要寫程式。
    </div>
  </div>

  <div class="section">
    <h2>1. 認識您的網站後台</h2>
    <p>Kalki Wellness 網站使用 <strong>Outstatic CMS</strong>（內容管理系統）管理課程與工作坊。所有內容以 Markdown 檔案的形式存放在 GitHub 儲存庫中，後台提供一個圖形化介面讓您輕鬆新增、修改與刪除內容。</p>

    <h3>1.1 後台網址</h3>
    <ul>
      <li><strong>本機（開發機）：</strong><code>http://localhost:3000/outstatic</code></li>
      <li><strong>正式網站：</strong>視部署方式而定，若部署於 Vercel 等平台，後台同樣位於 <code>https://www.kalkiwellness.com/outstatic</code>（需先完成 GitHub OAuth 設定）。</li>
    </ul>

    <h3>1.2 內容存放位置（與網站對應）</h3>
    <table>
      <tr><th>頁面</th><th>網址</th><th>後台集合（Collection）</th><th>檔案位置</th></tr>
      <tr><td>課程頁</td><td><code>/classes</code></td><td><strong>Classes</strong></td><td><code>outstatic/content/classes/</code></td></tr>
      <tr><td>工作坊頁</td><td><code>/workshops</code></td><td><strong>Workshops</strong></td><td><code>outstatic/content/workshops/</code></td></tr>
    </table>

    <h3>1.3 更新內容的流程</h3>
    <ol>
      <li>在後台新增／修改／刪除內容，點擊<strong>發布（Publish）</strong>。</li>
      <li>Outstatic 會自動把變更提交（Commit）到 GitHub 儲存庫。</li>
      <li>部署平台偵測到新提交後，自動重新建置網站。</li>
      <li>約 1–3 分鐘後，正式網站即顯示更新內容。</li>
    </ol>
    <div class="box tip"><strong>小提醒：</strong>後台的「發布」等同「儲存並上線」。若只想存草稿，可選取草稿狀態，但網站只會顯示已發布（published）的內容。</div>
  </div>

  <div class="section">
    <h2>2. 第一次使用：登入設定（GitHub OAuth）</h2>
    <p>網站後台透過 <strong>GitHub 帳號</strong>驗證身分，才能安全地修改內容。第一次使用前，需要建立一個 GitHub OAuth App 並設定環境變數。此步驟只需要做一次。</p>

    <h3>2.1 建立 GitHub OAuth App</h3>
    <ol>
      <li>前往 <a href="https://github.com/settings/developers">GitHub Developer Settings</a>。</li>
      <li>點擊 <strong>New OAuth App</strong>（新增應用程式）。</li>
      <li>填寫下列欄位：
        <table>
          <tr><th>欄位</th><th>填寫內容</th></tr>
          <tr><td>Application name</td><td>例如 <code>Kalki Wellness CMS</code></td></tr>
          <tr><td>Homepage URL</td><td>本機測試：<code>http://localhost:3000</code>；正式環境：您的網站網址</td></tr>
          <tr><td>Authorization callback URL</td><td><code>http://localhost:3000/api/outstatic/callback</code></td></tr>
        </table>
      </li>
      <li>點擊 <strong>Register application</strong>。</li>
      <li>畫面會顯示 <strong>Client ID</strong> 與 <strong>Client Secret</strong>，請複製保存（Client Secret 只會顯示一次，若遺失需重新產生）。</li>
    </ol>

    <h3>2.2 設定環境變數</h3>
    <ol>
      <li>在專案根目錄建立檔案 <code>.env.local</code>（如已存在則直接編輯）。</li>
      <li>填入以下三個變數：
        <pre><code>OST_GITHUB_ID=你的_Client_ID
OST_GITHUB_SECRET=你的_Client_Secret
OST_TOKEN_SECRET=任意32字元以上亂碼字串</code></pre>
      </li>
      <li>儲存檔案後，重新啟動開發伺服器（<code>npm run dev</code>）。</li>
    </ol>
    <div class="box warn"><strong>注意：</strong>此檔案含有機密資訊，請勿上傳到 GitHub（專案已設定 .gitignore 排除）。若在正式環境使用後台，也請設定相同的環境變數。</div>
  </div>

  <div class="section">
    <h2>3. 登入內容管理後台</h2>
    <ol>
      <li><span class="stepnum">1</span>啟動開發伺服器：<code>npm run dev</code>（正式環境直接開啟網站網址）。</li>
      <li><span class="stepnum">2</span>在瀏覽器開啟 <code>http://localhost:3000/outstatic</code>。</li>
      <li><span class="stepnum">3</span>點擊 <strong>Sign in with GitHub</strong>，授權應用程式。</li>
      <li><span class="stepnum">4</span>登入後即可看到左側的集合清單（<strong>Classes</strong>、<strong>Workshops</strong> 等）。</li>
    </ol>
    <div class="box info"><strong>後台介面導覽：</strong><br>
      · 左側：集合清單（Classes、Workshops、Events、Products 等）<br>
      · 中央：目前集合的內容列表（草稿與已發布）<br>
      · 右上角：<strong>New Document</strong>（新增內容）按鈕</div>
    <div class="box warn"><strong>尚未設定 OAuth 時：</strong>若未完成第 2 章設定，後台會顯示登入錯誤或無法使用，請先完成設定。</div>
  </div>

  <div class="section">
    <h2>4. 課程頁（/classes）內容管理</h2>
    <p>課程頁展示所有已發布的課程卡片，每張卡片包含課程名稱、時長、強度與簡介。本節說明如何在後台管理課程。</p>

    <h3>4.1 新增一筆課程</h3>
    <ol>
      <li><span class="stepnum">1</span>登入後台，點擊左側 <strong>Classes</strong>。</li>
      <li><span class="stepnum">2</span>點擊右上角 <strong>New Document</strong>。</li>
      <li><span class="stepnum">3</span>填寫欄位（必填欄位見 4.4 說明）：
        <ul>
          <li><strong>Title</strong>：課程名稱，例如「Hatha Flow」。</li>
          <li><strong>Description</strong>：課程簡介文字。</li>
          <li><strong>Duration</strong>：課程長度，例如「60 min」。</li>
          <li><strong>Intensity</strong>：強度，例如「★★☆☆☆」。</li>
          <li><strong>Content（選填）</strong>：更詳細的課程說明（下方編輯器）。</li>
          <li><strong>Cover Image（選填）</strong>：課程代表圖。</li>
        </ul>
      </li>
      <li><span class="stepnum">4</span>點擊 <strong>Publish</strong>（發布）按鈕。</li>
      <li><span class="stepnum">5</span>等待部署完成，課程即顯示於 <code>/classes</code> 頁面。</li>
    </ol>

    <h3>4.2 修改現有課程</h3>
    <ol>
      <li><span class="stepnum">1</span>登入後台，點擊左側 <strong>Classes</strong>。</li>
      <li><span class="stepnum">2</span>在內容列表中，點擊想修改的課程標題。</li>
      <li><span class="stepnum">3</span>修改欄位內容。</li>
      <li><span class="stepnum">4</span>點擊 <strong>Publish</strong>（或 <strong>Save</strong> 儲存草稿）。</li>
    </ol>
    <div class="box tip"><strong>小提醒：</strong>發布新版本後，網站會自動更新。若只想保留修改但暫不上線，選取草稿狀態即可。</div>

    <h3>4.3 刪除課程</h3>
    <ol>
      <li><span class="stepnum">1</span>登入後台，點擊左側 <strong>Classes</strong>。</li>
      <li><span class="stepnum">2</span>點擊想刪除的課程標題進入編輯畫面。</li>
      <li><span class="stepnum">3</span>點擊畫面中的 <strong>Delete</strong>（刪除）按鈕。</li>
      <li><span class="stepnum">4</span>確認刪除後，該課程即自網站移除。</li>
    </ol>
    <div class="box warn"><strong>注意：</strong>刪除會直接從 GitHub 儲存庫移除該內容檔案，刪除後無法在後台復原（GitHub 提交歷史中仍可找回，但需開發人員協助）。</div>

    <h3>4.4 課程欄位說明</h3>
    <table class="field-table">
      <tr><th>欄位</th><th>顯示位置</th><th>必填</th><th>範例</th></tr>
      <tr><td>Title</td><td>卡片標題</td><td><span class="req">必填</span></td><td>Hatha Flow</td></tr>
      <tr><td>Description</td><td>卡片內文</td><td><span class="req">必填</span></td><td>透過溫和的流動與呼吸練習…</td></tr>
      <tr><td>Duration</td><td>卡片右上角標籤</td><td>選填</td><td>60 min</td></tr>
      <tr><td>Intensity</td><td>卡片「強度:」一行</td><td>選填</td><td>★★☆☆☆</td></tr>
      <tr><td>Content</td><td>（目前頁面未顯示，僅留作擴充）</td><td>選填</td><td>長篇課程說明</td></tr>
      <tr><td>Cover Image</td><td>（目前頁面顯示佔位圖）</td><td>選填</td><td>課程代表圖</td></tr>
    </table>
  </div>

  <div class="section">
    <h2>5. 工作坊頁（/workshops）內容管理</h2>
    <p>工作坊頁以列表形式展示每一場工作坊，包含日期時間、地點、價格、報名連結與簡介，並提供「立即報名」按鈕。本節說明如何管理工作坊內容。</p>

    <h3>5.1 新增一筆工作坊</h3>
    <ol>
      <li><span class="stepnum">1</span>登入後台，點擊左側 <strong>Workshops</strong>。</li>
      <li><span class="stepnum">2</span>點擊右上角 <strong>New Document</strong>。</li>
      <li><span class="stepnum">3</span>填寫欄位（必填欄位見 5.4 說明）：
        <ul>
          <li><strong>Title</strong>：工作坊名稱。</li>
          <li><strong>Date &amp; Time</strong>：日期與時間，例如「2026-09-12 14:00–17:00」。</li>
          <li><strong>Location</strong>：地點，例如「Kalki Studio」。</li>
          <li><strong>Price</strong>：費用，例如「HK$ 880」。</li>
          <li><strong>Registration Link</strong>：報名表單網址（會出現在「立即報名」按鈕）。</li>
          <li><strong>Short Description</strong>：工作坊簡介。</li>
        </ul>
      </li>
      <li><span class="stepnum">4</span>點擊 <strong>Publish</strong>（發布）按鈕。</li>
      <li><span class="stepnum">5</span>等待部署完成，工作坊即顯示於 <code>/workshops</code> 頁面。</li>
    </ol>

    <h3>5.2 修改現有工作坊</h3>
    <ol>
      <li><span class="stepnum">1</span>登入後台，點擊左側 <strong>Workshops</strong>。</li>
      <li><span class="stepnum">2</span>點擊想修改的工作坊標題。</li>
      <li><span class="stepnum">3</span>修改欄位內容。</li>
      <li><span class="stepnum">4</span>點擊 <strong>Publish</strong>（或 <strong>Save</strong> 儲存草稿）。</li>
    </ol>

    <h3>5.3 刪除工作坊</h3>
    <ol>
      <li><span class="stepnum">1</span>登入後台，點擊左側 <strong>Workshops</strong>。</li>
      <li><span class="stepnum">2</span>點擊想刪除的工作坊標題進入編輯畫面。</li>
      <li><span class="stepnum">3</span>點擊 <strong>Delete</strong>（刪除）按鈕並確認。</li>
    </ol>
    <div class="box warn"><strong>注意：</strong>刪除工作坊後，若 Workshops 集合中沒有任何已發布的內容，工作坊頁會顯示「目前沒有即將舉辦的工作坊」的空狀態訊息，屬正常現象。</div>

    <h3>5.4 工作坊欄位說明</h3>
    <table class="field-table">
      <tr><th>欄位</th><th>顯示位置</th><th>必填</th><th>範例</th></tr>
      <tr><td>Title</td><td>工作坊標題</td><td><span class="req">必填</span></td><td>脈輪淨化工作坊</td></tr>
      <tr><td>Date &amp; Time</td><td>📅 日期時間</td><td>選填</td><td>2026-09-12 14:00–17:00</td></tr>
      <tr><td>Location</td><td>📍 地點</td><td>選填</td><td>Kalki Studio</td></tr>
      <tr><td>Price</td><td>💲 費用</td><td>選填</td><td>HK$ 880</td></tr>
      <tr><td>Registration Link</td><td>「立即報名」按鈕連結</td><td>選填</td><td>https://forms.google.com/…</td></tr>
      <tr><td>Short Description</td><td>工作坊簡介</td><td>選填</td><td>深入探索七大脈輪…</td></tr>
    </table>
    <div class="box tip"><strong>小提醒：</strong>若未填寫 Registration Link，則該工作坊不會顯示報名按鈕。</div>
  </div>

  <div class="section">
    <h2>6. 發布流程與網站更新</h2>
    <h3>6.1 內容發布到上線的完整流程</h3>
    <ol>
      <li><span class="stepnum">1</span>在後台新增或修改內容。</li>
      <li><span class="stepnum">2</span>點擊 <strong>Publish</strong> —— 內容會以 Markdown 檔案寫入 <code>outstatic/content/</code> 並自動 Commit 到 GitHub。</li>
      <li><span class="stepnum">3</span>部署平台（如 Vercel）偵測到新的 Commit，自動重新建置。</li>
      <li><span class="stepnum">4</span>建置完成（約 1–3 分鐘）後，網站即顯示最新內容。</li>
    </ol>

    <h3>6.2 只有「已發布」的內容會顯示</h3>
    <p>課程與工作坊頁面都只會讀取 <code>status: published</code> 的內容。草稿（draft）狀態的內容只會出現在後台，不會顯示於網站。</p>

    <h3>6.3 排序規則</h3>
    <p>課程與工作坊依「發布時間（publishedAt）」由新到舊排列。最新的會顯示在最上方。</p>
    <div class="box info"><strong>如何調整顯示順序？</strong><br>在後台編輯內容，修改其發布時間欄位（publishedAt），較新的時間會排在前面。此欄位若後台未直接顯示，可請開發人員協助調整，或改以編輯內容後重新發布處理。</div>

    <h3>6.4 上傳圖片</h3>
    <ul>
      <li>在編輯畫面的 <strong>Cover Image</strong> 欄位可上傳圖片，Outstatic 會將圖片存入 <code>public/images/</code>。</li>
      <li>目前課程卡片顯示的仍是佔位圖（Image 區塊），若需讓封面圖顯示於網站，需要開發人員調整頁面程式碼。</li>
    </ul>
  </div>

  <div class="section">
    <h2>7. 備用資料（Fallback）機制說明</h2>
    <p>為避免 CMS 尚未設定或沒有內容時網站一片空白，程式內建了備用資料機制。了解它可避免誤會。</p>

    <h3>7.1 課程頁（Classes）</h3>
    <ul>
      <li>當 <strong>Classes 集合中沒有任何已發布的內容</strong>時，頁面會顯示程式內建的 3 筆示範課程（Hatha Flow、Vinyasa、Yin Yoga）。</li>
      <li>只要您在後台發布 <strong>至少一筆</strong>課程，頁面就會改為顯示 CMS 中的真實內容（示範課程不再出現）。</li>
    </ul>

    <h3>7.2 工作坊頁（Workshops）</h3>
    <ul>
      <li>工作坊頁<strong>沒有</strong>內建的備用資料。當 Workshops 集合中沒有任何已發布的內容時，頁面會顯示「目前沒有即將舉辦的工作坊」空狀態訊息。</li>
    </ul>
    <div class="box warn"><strong>重要：</strong>若在課程頁（Classes）看到示範課程（Hatha Flow、Vinyasa、Yin Yoga），表示該集合目前沒有已發布的真實內容 —— 請在後台發布一筆真實課程，示範項目即會消失。</div>
  </div>

  <div class="section">
    <h2>8. 常見問題</h2>
    <h3>Q1. 我發布了內容，但網站沒有更新？</h3>
    <p>請確認：① 內容狀態為「已發布（published）」；② 部署平台已成功完成建置（約需 1–3 分鐘）；③ 若部署失敗，GitHub 儲存庫或部署平台的記錄中會有錯誤訊息，可請開發人員查看。</p>

    <h3>Q2. 為什麼網站顯示的課程和我後台看到的不同？</h3>
    <p>最可能的原因：網站顯示的是「備用資料」（第 7 章）。當後台 Classes 集合沒有已發布內容時，網站會顯示內建的示範課程（Hatha Flow、Vinyasa、Yin Yoga）。請在後台發布一筆真實課程。工作坊頁則無此機制，沒有已發布內容時會顯示空狀態訊息。</p>

    <h3>Q3. 刪除了內容，可以復原嗎？</h3>
    <p>後台刪除會直接移除 GitHub 中的檔案，無法在後台復原。但由於內容都儲存在 GitHub，開發人員可以從提交歷史（git history）找回被刪除的檔案。</p>

    <h3>Q4. 可以在手機上管理內容嗎？</h3>
    <p>可以。只要瀏覽器能開啟後台網址並能以 GitHub 登入，就能管理內容。建議使用電腦操作以獲得較佳體驗。</p>

    <h3>Q5. 新增課程時，後台沒有「Intensity / Duration」等欄位？</h3>
    <p>這些欄位由集合的 Schema 定義（<code>outstatic/content/classes/schema.json</code>）。若欄位未顯示，可請開發人員在 Schema 中加入，或直接編輯內容檔案的 frontmatter。</p>

    <h3>Q6. 可以直接編輯 Markdown 檔案嗎？</h3>
    <p>可以。所有內容都是 Markdown 檔案，位於 <code>outstatic/content/classes/</code> 與 <code>outstatic/content/workshops/</code>。直接編輯後 Commit 到 GitHub 同樣會觸發網站更新，但建議以 <strong>後台操作為主</strong>，避免格式錯誤。</p>

    <div class="box info"><strong>需要協助？</strong><br>若遇到後台無法登入、建置失敗或需要調整版面，請聯絡網站開發人員。內容更新（新增／修改／刪除課程與工作坊）可由您自行完成。</div>

    <p class="footnote">本指南對應專案：OurFunMedia/kalki-site ・ 技術棧：Next.js 16 + Outstatic CMS 2.x<br>版權所有 © Kalki Wellness</p>
  </div>
`;

export { guideStyles, guideBody };
