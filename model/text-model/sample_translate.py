import csv

# Simple lookup-based demo translator using the starter CSV
TRANSLATIONS = {}
with open('dataset/text/text-dataset.csv', newline='', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    for row in reader:
        key = (row['source_lang'], row['target_lang'], row['sentence'].strip().lower())
        TRANSLATIONS[key] = row['sentence']  # placeholder


def translate(text, src='en', tgt='mw'):
    key = (src, tgt, text.strip().lower())
    return TRANSLATIONS.get(key, f"[no translation for '{text}']")


if __name__ == '__main__':
    print(translate('Hello, how are you?', 'en', 'mw'))
