# Kalki Yoga Website - 管理手冊 🌿

恭喜！您的 **Kalki Yoga** 網站已經建立完成。
這是一個基於 Next.js 的現代化網站，專為瑜伽教室設計。

## 網站架構
- **首頁 (Home)**: 視覺形象、哲學介紹。
- **課程頁 (Classes)**: 展示課程列表（Hatha, Vinyasa, Yin...）。
- **導師頁 (Instructors)**: 展示師資團隊。
- **聯絡頁 (Contact)**: 聯絡資訊與表單。

## 🛠️ 如何開始管理內容 (CMS Setup)

目前網站使用的是「備用資料 (Fallback Data)」，因為 Outstatic CMS 尚未與您的 Github 帳號正式連結。請依照以下步驟完成設定：

1.  **建立 Github OAuth App**:
    - 到 [Github Developer Settings](https://github.com/settings/developers) 建立一個新的 OAuth App。
    - **Homepage URL**: 填入您的網域 (本地測試填 `http://localhost:3000`)
    - **Authorization callback URL**: 填入 `http://localhost:3000/api/outstatic/callback`
2.  **設定環境變數**:
    - 將專案根目錄下的 `.env.local.example` 複製一份並改名為 `.env.local`。
    - 填入剛剛取得的 `OST_GITHUB_ID` 和 `OST_GITHUB_SECRET`。
    - `OST_TOKEN_SECRET` 可以用任何 32 字元的亂碼填入。
3.  **登入後台**:
    - 重啟專案 (`npm run dev`)。
    - 訪問 `http://localhost:3000/outstatic`。
    - 使用 Github 帳號登入。
4.  **發布內容**:
    - 在後台建立新的 "Classes" 或 "Instructors"。
    - 填寫標題、內容、上傳圖片，然後點擊 **Publish**。
    - 當您發布第一篇文章後，網站就會自動切換顯示您在 CMS 中建立的真實內容！

## 🚀 未來擴充建議

為了讓網站更具功能性 (如會員系統)，我們預留了擴充空間：
- **會員系統**: 建議整合 Supabase 或 NextAuth，讓學生可以登入、查看預約紀錄。
- **線上預約**: 可以整合 Calendly 或專門的瑜伽預約系統 API。

---
*Built with ❤️ by Antigravity*
