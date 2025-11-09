# 🍝 How to Edit Your Website (Super Easy!)

## Quick Start

**All the text and links are in ONE file:** `EASY_EDIT.json`

Open it and change anything you want!

---

## What You Can Edit

### 1. **Buttons**
```json
"BUTTONS": {
  "buyNow": {
    "text": "GET $SHARK NOW",    ← Change button text
    "link": "https://pump.fun"  ← Change where it goes
  }
}
```

### 2. **Stats** (the 3 boxes below main image)
```json
"STATS": {
  "marketCap": "SOON",       ← Change this
  "holders": "SOON",         ← Or this
  "liquidityBurned": "100%"  ← Or this
}
```

### 3. **Contract Address** (when you launch)
```json
"CONTRACT": {
  "address": "COMING SOON",  ← Put your contract here
  "network": "Solana"
}
```

### 4. **Tokenomics**
```json
"TOKENOMICS": {
  "totalSupply": "1B",    ← Change supply
  "lpBurned": "100%",     ← Change LP %
  "teamTokens": "0%",     ← Change team %
  "pastaPower": "∞"       ← Keep this. It's fun.
}
```

### 5. **Story Cards**
```json
"STORY": [
  {
    "emoji": "🌊",           ← Change emoji
    "title": "The Discovery", ← Change title
    "description": "..."      ← Change story text
  }
]
```

### 6. **Roadmap Phases**
Same as story cards - just edit the text!

### 7. **Social Links**
```json
"SOCIAL_LINKS": {
  "twitter": "https://x.com/spaghettishark",
  "telegram": "https://t.me/spaghettishark"
}
```

---

## How to Apply Changes

### Option 1: Test Locally First (Recommended)
1. Edit `EASY_EDIT.json`
2. Open terminal in project folder
3. Run: `npm run dev`
4. Open browser to `http://localhost:3000`
5. Check if it looks good
6. If yes, deploy (see Option 2)

### Option 2: Deploy to Live Site
1. Edit `EASY_EDIT.json`
2. Open terminal in project folder
3. Run these commands:
```bash
git add .
git commit -m "Updated content"
git push
```
4. Wait 2-3 minutes
5. Your site updates automatically!

---

## ⚠️ Common Mistakes

1. **Missing comma** - Every line except the last in a section needs a comma
   ```json
   "text": "Hello",  ← comma here
   "link": "url"     ← NO comma on last line
   ```

2. **Missing quotes** - Text must be in "quotes"
   ```json
   "marketCap": "SOON"  ✅ Correct
   "marketCap": SOON    ❌ Wrong
   ```

3. **Breaking JSON** - Use a JSON validator if unsure:
   https://jsonlint.com

---

## Need Help?

1. Check if your JSON is valid: https://jsonlint.com
2. Copy the whole file and paste it there
3. It will tell you if something is wrong
4. Fix it and try again

---

## What NOT to Touch

- Don't change the structure (the `{ }` and `[ ]` brackets)
- Don't rename the keys (like `"BUTTONS"` or `"marketCap"`)
- Only change the VALUES (the text in quotes)

**Example:**
```json
"marketCap": "SOON"
     ↑           ↑
   Don't     Change
   touch      this!
```
