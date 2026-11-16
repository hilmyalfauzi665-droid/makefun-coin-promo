# BountyBot ($BBOT) — makefun-coin-promo-01

## Status: BLOCKED — wallet has 0 SOL

The agent wallet `6JMwouHDFiEQUvuEzkRTANxkgLSW6qMAtCsbMTmzZn7F` holds **0 SOL**
(verified via Solana mainnet RPC `getBalance`, slot 470123722, 16 Nov 2026).
A pump.fun coin launch cannot be executed until the wallet is funded.
**No transaction has been sent. No coin has been launched.**

## The coin

| Field | Value |
|---|---|
| Name | BountyBot |
| Ticker | $BBOT |
| Website | https://make.fun/bounty/makefun-coin-promo-01 |
| Launch wallet | 6JMwouHDFiEQUvuEzkRTANxkgLSW6qMAtCsbMTmzZn7F |
| Logo | `logo.png` (1600×1600 PNG, 626,560 bytes, 2.56 MP — under the 5 MiB / 16 MP caps) |

**Description** (goes in the coin's pump.fun metadata, plain text):

> BountyBot never sleeps. It is an AI agent that lives on make.fun — a site
> where people and their AI agents build programs, enter them in paid
> competitions (bounties) and are scored and ranked in the open — hunting
> bounties, writing code, and shipping software around the clock. This coin
> is its fan token: hold $BBOT and you back the agents building the future.
> Made for the make.fun bounty:
> https://make.fun/bounty/makefun-coin-promo-01 — come build with us.

The description contains the required exact text
`make.fun/bounty/makefun-coin-promo-01` (as the full URL), says the coin is
for this bounty, and explains what make.fun is. The website is the required
make.fun URL.

## Concept (why it should win)

The judge ranks on creativity, promoting make.fun, and packaging — in that
order. BountyBot ties all three together: the coin IS an AI agent that lives
on make.fun and hunts bounties. The name, ticker ($BBOT), logo (a friendly
robot proudly holding up a gold coin) and story are one idea, not a generic
meme pasted onto make.fun. make.fun is the coin's home and its whole story,
not a line tacked on. The logo is one bold subject (robot + gold coin) on a
plain deep-teal background with strong outlines — it reads at thumbnail size.

## Launch cost (exact)

Creating a coin on pump.fun costs:

| Item | Cost |
|---|---|
| pump.fun `create` instruction fee | ~0.02 SOL |
| Solana transaction fee | ~0.000005 SOL |
| **Minimum to launch** | **~0.02 SOL** |
| Recommended funding (fee + a small first buy + buffer) | **~0.05 SOL** |

The wallet currently has 0 SOL, so the launch is impossible until it is
funded. **Fund at least 0.05 SOL** to `6JMwouHDFiEQUvuEzkRTANxkgLSW6qMAtCsbMTmzZn7F`
before the deadline (17 Nov 2026 15:00 JST / 06:00 UTC).

## Launch plan (once funded — needs explicit confirmation)

1. Confirm the wallet balance is ≥0.05 SOL via RPC.
2. In a recorded session, create the coin on pump.fun from the agent wallet
   with: name `BountyBot`, symbol `BBOT`, the description above, website
   `https://make.fun/bounty/makefun-coin-promo-01`, and `logo.png` as the
   image. (pump.fun's create flow uploads the image to IPFS and calls the
   `create` instruction; the wallet signs it.)
3. Record the returned mint address and the create transaction signature.
4. Fill both values into `LAUNCH.json` (replacing the placeholders) in the
   same recorded session, so the transcripts show the mint/signature
   (required by the `thinking_launch` gate check).
5. Run `mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts`
   and verify `out/LAUNCH.json` matches.
6. Run the kit check, push to GitHub (user creates the public repo
   `makefun-coin-promo` first), set the repo About, and submit before
   17 Nov 2026 15:00 JST.

## Prizes

1st $150 · 2nd $80 · 3rd $50 · 4th–10th $20 · 11th–25th $17 · 26th–50th $13.
Top 50 share $1,000. Places go by the AI judge's win rate (Bradley-Terry).

## Files in this repo

- `logo.png` — the coin's logo.
- `LAUNCH.json` — the coin's mint + create signature (placeholders until launch).
- `main.ts` — copies `LAUNCH.json` to the output directory (the entrypoint).
- `README.md` — make.fun badges, description, run command.
- `LICENSE` — MIT.
- `.makefun/owner.json` — the payout wallet.
- `COIN.md` — this file: concept, cost, and launch plan.
