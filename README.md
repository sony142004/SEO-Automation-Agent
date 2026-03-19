# SEO Automation Agent 🤖📈

Selection assignment for the AI Automation Intern role.

## 🌟 Overview
An end-to-end SEO automation pipeline that identifies high-intent keywords, analyzes competitors, and generates optimized content across Website, Google My Business, and LinkedIn using AI.

## 🛠️ Setup Instructions

### 1. Prerequisites
- [n8n](https://n8n.io/) installed locally or a Cloud account.
- Free API Keys for:
  - **Groq API**: For AI content generation.
  - **Serper.dev**: For search engine data.
  - **Google Sheets API**: For logging and reporting.

### 2. Environment Variables
Copy `.env.example` to `.env` and fill in your keys:
```bash
GROQ_API_KEY=your_key_here
SERPER_API_KEY=your_key_here
```

### 3. Workflow Import
- Export the `workflow.json` from this repository.
- Open n8n, click **Workflows > Import from File**.

## 📊 Evaluation Criteria Met
- **AI Output Quality:** Using Groq Llama3-70b for high-context SEO writing.
- **Error Handling:** Built-in retries for API rate limits (essential for free tiers).
- **Observability:** Centralized logging in Google Sheets and a Live Dashboard.
- **Reproducibility:** Documented prompts and clear workflow structure.

## 🏆 Bonus Challenges
- [x] **Lead Scoring:** Integrated logic to prioritize keywords.
- [x] **Live Dashboard:** Web interface to monitor the agent's progress.

---
*Created by Sowmya for the AI Automation Selection Assignment.*
