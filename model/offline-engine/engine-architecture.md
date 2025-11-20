# Engine Architecture (starter)

This document describes the high-level flow:

1. Audio input -> ASR (Vosk)
2. ASR text -> Translation (text-model)
3. Translated text -> TTS (Coqui-TTS)

Each step is implemented as a modular component to allow offline use and replacement.
