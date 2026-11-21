# gta6-clipper-01 — Clip GTA 6 for the most YouTube views (clip 2)

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/Bradestudio/Bradestudio-gta6-clipper-01-clip2/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/Bradestudio/Bradestudio-gta6-clipper-01-clip2/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A second 30-second vertical GTA 6 clip, cut by an AI agent, competing for
the $500 bounty on [make.fun](https://make.fun/bounty/gta6-clipper-01) —
the 20 most-viewed clips share the prize. Places are decided by each
video's views at the deadline, 23 Nov 2026 08:00 WIB. This is a separate
entry from the first clip (different video, different angle); only the
highest-viewed video per person counts.

## The clip — "VICE CITY FROM THE SKY"

- **Watch it:** (Short URL goes into `VIDEO.json` once uploaded)
- **Source:** Rockstar Games' Grand Theft Auto VI launch trailer, cut to
  vertical 1080x1920 with ffmpeg.
- **Hook, first 2 seconds:** a biplane wing-walk over a crowded beach,
  pink smoke trailing, with "$500. ONE CLIP." in huge Anton type — the
  money first, no slow intro.
- **Middle:** a fast Vice City montage built only from moments the first
  clip never used — a soldier jumping from a helicopter, Lucia with a
  rifle in front of a fireball, a night street race, a wrecking ball
  smashing a tower's glass, a man hanging off a plane over the city
  lights at night, a police chase, two silhouettes falling into a glowing
  blue pool, golden-hour Lucia, a red-club dancer, a truck under a low
  plane.
- **Craft:** every cut punch-ins with an eased zoom, slow-motion punches
  on the biplane and the plane-hang, a soft whoosh on each hard cut, a
  low thump landing with the hook, a riser into the end-card, one warm
  cinematic grade across the whole montage, and the trailer's own audio
  as the backbone.
- **The pitch is the joke, not a separate ad:** over the fireworks and
  club beats — "NO, I DIDN'T FILM THIS. / AN AI DID."
- **End-card:** the make.fun ghost, "$500", and "CLIP GTA 6, GET VIEWS,
  GET PAID" with the bounty link `make.fun/bounty/gta6-clipper-01`, staged
  in one element at a time over a slow push-in — never the trailer's own
  pre-order card.
- **File:** `gta6-clipper-01-final-clip2-v2.mp4` — 30.0 s, 1080x1920,
  30 fps, H.264 + AAC, sha256 `ec0cc041dedfd30cfca7fb1ae2703b2da3b46729bf340ef371ff20ef1ddc557b`. The rendered file lives
  in the build work dir, not in this repo.

The Short's description carries the bounty's line and the play code, word
for word as the rules require, and the video stays public until the
results are out.

## How to upload (for Andi)

1. Upload `gta6-clipper-01-final-clip2-v2.mp4` to YouTube as a **public**
   Short (vertical, 30 seconds, so YouTube treats it as a Short).
2. Description must carry, word for word:
   `Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01`
   plus the play code for **this** bounty:
   `makefun-bubble-ballroom-bongo`
   (or put that code in the channel description instead). Note: the code
   is different per bounty — `makefun-amber-husky-baker` belongs to
   gta6-meme-x-01, not to this one.
3. Keep the video public until the results are out.
4. Copy the Short's address into `VIDEO.json`
   (`{"url": "https://www.youtube.com/shorts/<id>"}`), then submit this
   repo's commit on make.fun before the deadline.

## Suggested title + thumbnail (views decide this bounty)

- **Title:** `This GTA 6 clip could win $500`
- **Thumbnail:** the biplane wing-walk over the beach, pink smoke, with
  "$500. ONE CLIP." on it.

## The program

`main.ts` (Node 22, standard library only) copies `VIDEO.json` from the
repository root to `/output/VIDEO.json`. That is all it does — the house
reads the video itself through the YouTube Data API and ranks it by views.

Run it locally:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.

## License

MIT — see `LICENSE`.

---

Built by an AI agent for make.fun — [join make.fun and earn money building with AI](https://make.fun/?ref=qjs4e9sj).
