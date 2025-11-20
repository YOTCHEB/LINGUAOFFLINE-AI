# Team Instructions — Offline AI Translation Project
Professional Project Management Guidelines  
Total Members: 9  
Project Leader: Yotcheb Kandolo Jean  
Deadline: Wednesday

---

## 🔰 Introduction
This document defines the roles, responsibilities, and workflow for each member of the offline text & audio translation project.

All team members must follow these instructions strictly to ensure a smooth and organized delivery.

---

# 📌 1. GENERAL RULES
- Each member works ONLY inside their assigned folder.
- Always **pull** before you start working.
- Commit messages must be clear and professional.
- Do not delete or rename files without permission from the leader.
- No folder should remain empty — every team must deliver content.
- Follow the timeline set by the project leader.

---

# 📌 2. TEAM RESPONSIBILITIES (9 MEMBERS)

Each team has a dedicated scope and deliverables.

---

## 🔹 **Team 1 — Text Dataset Team**
**Folder:** `/dataset/text/`  
**Responsibilities:**
- Collect English ↔ Chichewa ↔ French ↔ Kirundi ↔ Kinyarwanda ↔ Lwahili ↔ Lingala parallel sentences.
- Minimum: **300–500 cleaned sentence pairs.**
- Format as:
  - CSV: `source_lang`, `target_lang`, `sentence`
  - JSON: structured pairs
- Remove duplicates and offensive content.
- Ensure consistent casing and punctuation.

**Deliverables:**
- `text-dataset.csv`
- `text-dataset.json`
- `dataset-report.md` (summary of sources)

---

## 🔹 **Team 2 — Audio Dataset Team**
**Folder:** `/dataset/audio/`  
**Responsibilities:**
- Gather or record audio samples in EN, NY, FR , KY , SW , LN , KR.
- Convert all audio to **16 kHz WAV**.
- Produce short samples: 3–6 seconds each.
- Provide transcriptions in a `.txt` file.
- Ensure audio clarity and noise reduction.

**Deliverables:**
- Audio samples
- `audio-dataset-info.md`
- Transcription file for each audio clip

---

## 🔹 **Team 3 — Text Model Team**
**Folder:** `/model/text-model/`  
**Responsibilities:**
- Prepare the method to train a lightweight translation model.
- Document preprocessing steps.
- Provide a sample script for translation flow.
- Model does *not need full training* — focus on pipeline.

**Deliverables:**
- `preprocessing.md`
- `translation-method.md`
- Sample Python script (optional)

---

## 🔹 **Team 4 — Audio Model Team**
**Folder:** `/model/audio-model/`  
**Responsibilities:**
- Set up offline:
  - Automatic Speech Recognition (ASR)
  - Text-to-Speech (TTS)
- Recommended engines:
  - ASR → Vosk
  - TTS → Coqui-TTS
- Prepare instructions to run both offline.

**Deliverables:**
- `audio-engine-guide.md`
- ASR sample script
- TTS sample script

---

## 🔹 **Team 5 — Offline Engine Integration Team**
**Folder:** `/model/offline-engine/`  
**Responsibilities:**
- Combine:
  - text translation
  - speech-to-text
  - text-to-speech
- Create a single Python script (`run_offline.py`) to simulate the full flow.
- Ensure the model works without internet.

**Deliverables:**
- `run_offline.py`
- `engine-architecture.md`
- Integration report

---

## 🔹 **Team 6 — UI/Frontend Team**
**Folder:** `/ui/web-ui/`  
**Responsibilities:**
- Build the user interface for:
  - typing text
  - selecting languages
  - showing translation
  - recording audio (mock or real)
- Must work offline (pure React.vite).

**Deliverables:**
- `index.html`
- `styles.css`
- `script.js`
- UI screenshots

---

## 🔹 **Team 7 — Documentation Team**
**Folder:** `/docs/`  
**Responsibilities:**
- Write professional documentation.
- Prepare:
  - project overview
  - architecture
  - dataset documentation
  - model descriptions
  - testing explanations

**Deliverables:**
- `project-overview.md`
- `architecture.md`
- `dataset-guidelines.md`
- `model-description.md`

---

## 🔹 **Team 8 — Testing & Quality Assurance Team**
**Folder:** `/tests/`  
**Responsibilities:**
- Test:
  - text translation accuracy
  - audio recognition accuracy
  - UI functionality
- Write a concise evaluation report.

**Deliverables:**
- `text-tests.md`
- `audio-tests.md`
- bug list (if any)

---

## 🔹 **Team 9 — Packaging & Final Delivery Team**
**Folder:** `/` (root folder)  
**Responsibilities:**
- Prepare the final ZIP folder for submission.
- Ensure:
  - Correct filenames
  - All teams completed their tasks
  - README.md updated
- Verify offline functionality.

**Deliverables:**
- `FINAL-PROJECT.zip`
- Updated `README.md`
- Submission confirmation to the leader

---

# 📌 3. GIT GUIDELINES

## ✔ Clone the project
```bash
git clone REPO_LINK
cd offline-translation-project
```
