import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import charShabbona from "@/assets/char-shabbona.png";
import charRion from "@/assets/char-rion.png";
import track1 from "@/assets/track-1.jpg";
import track2 from "@/assets/track-2.jpg";
import track3 from "@/assets/track-3.jpg";
import track4 from "@/assets/track-4.jpg";
import moment1 from "@/assets/moment-1.jpg";
import moment2 from "@/assets/moment-2.jpg";
import moment3 from "@/assets/moment-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shabbona va Rion — sevgi hikoyasi" },
      {
        name: "description",
        content:
          "Shabbona Turdalieva va Mister Rionning sevgi hikoyasi: 18.02.2026 Telegram'dagi tanishuv va 06.05.2026 ilk uchrashuv.",
      },
      { property: "og:title", content: "Shabbona va Rion — sevgi hikoyasi" },
      {
        property: "og:description",
        content:
          "Telegram'dagi ilk «salom»dan yuzma-yuz diydorgacha — boblar, taronalar va maktublardagi ikki qalb hikoyasi.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LoveStory,
});

const START = new Date("2026-02-18T00:00:00Z");
const MEET = new Date("2026-05-06T00:00:00Z");

function daysSince(from: Date) {
  return Math.max(0, Math.floor((Date.now() - from.getTime()) / 86_400_000));
}

const chapters = [
  {
    date: "18.02.2026",
    title: "Ilk «salom»",
    text: "Tun yarmida Telegram'dagi birgina xabar. Nega bilmadim-u, qalb tezroq ura boshladi.",
  },
  {
    date: "03.03.2026",
    title: "Tonggacha suhbatlar",
    text: "Kulgu, sukunat va tungi soat uchdagi «uxla endi» so'zlari. Har bir tun — go'yo mitti bir umr.",
  },
  {
    date: "06.05.2026",
    title: "Ilk uchrashuv",
    text: "Ilk bor yuzma-yuz. Tong, qahva va nihoyat bir-birini topgan qo'llar.",
  },
  {
    date: "hozir",
    title: "Keyin esa — birga",
    text: "Har bir tong bir xil savol bilan boshlanadi: «uyg'ondingmi?»",
  },
];

const tracks = [
  { img: track1, name: "Matrang", note: "chatdagi ilk taronamiz" },
  { img: track2, name: "Macan", note: "uchrashuvimizda yangragan" },
  { img: track3, name: "Ne zhenyus", note: "…sendan boshqasiga emas" },
  { img: track4, name: "Tungi pleylist", note: "o'zimizniki deb bilganimiz" },
];

const moments = [
  { img: moment1, alt: "Zulmatda bir telefonga termilgan ikki juft ko'z" },
  { img: moment2, alt: "Tong sahardagi krossovkalar va qog'oz xarita" },
  { img: moment3, alt: "Tonggi nurda ikki finjon qahva" },
];

function LoveStory() {
  const [days, setDays] = useState(() => daysSince(START));
  const [daysTogether, setDaysTogether] = useState(() => daysSince(MEET));

  useEffect(() => {
    const t = setInterval(() => {
      setDays(daysSince(START));
      setDaysTogether(daysSince(MEET));
    }, 60_000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="min-h-screen bg-night font-body text-paper">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
        <span className="spark absolute size-2 rounded-full bg-accent-rose/70" style={{ left: "12%", bottom: "6%", animationDuration: "9s" }} />
        <span className="spark absolute size-1.5 rounded-full bg-gold/70" style={{ left: "78%", bottom: "3%", animationDuration: "11s", animationDelay: "2s" }} />
        <span className="spark absolute size-2 rounded-full bg-accent-rose/50" style={{ left: "48%", bottom: "-2%", animationDuration: "10s", animationDelay: "4s" }} />
        <span className="spark absolute size-1 rounded-full bg-gold/60" style={{ left: "30%", bottom: "2%", animationDuration: "12s", animationDelay: "6s" }} />
        <span className="spark absolute size-1.5 rounded-full bg-accent-rose/40" style={{ left: "63%", bottom: "0%", animationDuration: "13s", animationDelay: "7s" }} />
      </div>

      <header className="relative z-10 flex items-center justify-between border-b border-paper/10 px-5 py-4">
        <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper/60">
          Shabbona ✕ Rion
        </div>
        <div className="hidden font-mono text-[11px] uppercase tracking-[0.18em] text-paper/40 sm:block">
          boblararo hikoya
        </div>
      </header>

      <section className="relative z-10 grid grid-cols-12 gap-4 px-5 pb-6 pt-8">
        <div className="col-span-12 lg:col-span-7">
          <div className="fu font-mono text-[11px] uppercase tracking-[0.25em] text-accent-rose" style={{ animationDelay: "60ms" }}>
            0-bob · muqaddima
          </div>
          <h1 className="fu mt-3 font-display text-[13vw] leading-[0.92]" style={{ animationDelay: "120ms" }}>
            Shabbona
            <span className="mt-[-0.1em] block font-medium italic text-gold">va Rion</span>
          </h1>
          <p className="fu mt-5 max-w-[34ch] text-[15px] text-paper/70" style={{ animationDelay: "300ms" }}>
            Avvaliga tunda kelgan ikki begona xabar. So'ngra bir maromda urayotgan yagona qalb.
          </p>
        </div>

        <div className="col-span-12 flex flex-col justify-between gap-4 lg:col-span-5">
          <div className="fu flex items-end justify-center gap-2 lg:justify-end" style={{ animationDelay: "240ms" }}>
            <figure className="fig text-center">
              <img src={charShabbona} alt="Shabbona 2D figurasi" width={768} height={1024} className="h-44 w-auto drop-shadow-[0_18px_28px_rgba(0,0,0,0.5)]" />
              <figcaption className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-paper/45">Shabbona</figcaption>
            </figure>
            <span className="mb-10 text-2xl text-accent-rose">♥</span>
            <figure className="fig text-center" style={{ animationDelay: "1.5s" }}>
              <img src={charRion} alt="Mister Rion 2D figurasi" width={768} height={1024} className="h-44 w-auto drop-shadow-[0_18px_28px_rgba(0,0,0,0.5)]" />
              <figcaption className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-paper/45">Rion</figcaption>
            </figure>
          </div>
          <div className="fu rounded-2xl bg-night-2 p-5 text-center ring-1 ring-accent-rose/30" style={{ animationDelay: "360ms" }}>
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper/50">birgalikda o'tgan kunlar</div>
            <div className="glow-beat mt-1 rounded-full font-display text-6xl text-accent-rose">{days}</div>
            <div className="mt-2 font-mono text-[11px] text-paper/40">18.02.2026 dan beri</div>
          </div>
        </div>
      </section>

      <div className="relative z-10 border-t border-paper/10 px-5">
        <div className="grid grid-cols-2 divide-paper/10 sm:grid-cols-4 sm:divide-x">
          <div className="py-4 pr-4">
            <div className="font-display text-3xl">{daysTogether}</div>
            <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-paper/45">ilk uchrashuvdan beri</div>
          </div>
          <div className="py-4 sm:px-4">
            <div className="font-display text-3xl text-gold">∞</div>
            <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-paper/45">tonggacha ovozli xabarlar</div>
          </div>
          <div className="py-4 sm:px-4">
            <div className="font-display text-3xl">4</div>
            <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-paper/45">takrorlangan taronalar</div>
          </div>
          <div className="py-4 sm:pl-4">
            <div className="font-display text-3xl text-accent-rose">1</div>
            <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-paper/45">ilk uchrashuv</div>
          </div>
        </div>
      </div>

      <section className="relative z-10 px-5 py-12">
        <div className="fu mb-6 flex items-baseline justify-between">
          <h2 className="font-display text-3xl">Boblararo hikoya</h2>
          <span className="font-mono text-[11px] text-paper/40">1–4 boblar</span>
        </div>
        <div className="grid grid-cols-12 gap-4">
          {chapters.map((c, i) => (
            <article
              key={c.title}
              className={`fu col-span-12 rounded-xl p-5 sm:col-span-4 lg:col-span-3 ${i % 2 ? "bg-paper-2" : "bg-paper"}`}
              style={{ animationDelay: `${80 * (i + 1)}ms` }}
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent-rose">{c.date}</div>
              <h3 className="mt-2 font-display text-lg text-ink-deep">{c.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-ink-deep/70">{c.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative z-10 px-5 pb-12">
        <div className="fu mb-5 flex items-baseline justify-between">
          <h2 className="font-display text-3xl">Bizning taronalar</h2>
          <span className="font-mono text-[11px] text-paper/40">4 ta takrorda</span>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {tracks.map((t, i) => (
            <article
              key={t.name}
              className="fu overflow-hidden rounded-xl bg-night-2 ring-1 ring-paper/10"
              style={{ animationDelay: `${80 * (i + 1)}ms` }}
            >
              <img src={t.img} alt={`Tarona muqovasi ${t.name}`} loading="lazy" width={512} height={512} className="aspect-square w-full object-cover" />
              <div className="p-4">
                <div className="font-display text-lg">{t.name}</div>
                <div className="mt-1 font-mono text-[10px] text-paper/45">{t.note}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="relative z-10 px-5 pb-12">
        <div className="fu mb-5 flex items-baseline justify-between">
          <h2 className="font-display text-3xl">Lahzalar</h2>
          <span className="font-mono text-[11px] text-paper/40">galereya</span>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {moments.map((m, i) => (
            <img
              key={m.alt}
              src={m.img}
              alt={m.alt}
              loading="lazy"
              width={512}
              height={512}
              className="fu aspect-square w-full rounded-lg object-cover"
              style={{ animationDelay: `${80 * (i + 1)}ms` }}
            />
          ))}
        </div>
      </section>

      <section className="relative z-10 px-5 pb-14">
        <div className="mx-auto max-w-2xl">
          <div className="fu rotate-[-0.6deg] rounded-2xl bg-paper p-8 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.6)] sm:p-10">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent-rose">
              iqrorlik xati · Riondan
            </div>
            <p className="mt-5 font-display text-2xl italic leading-snug text-ink-deep sm:text-[28px]">
              Shabbona, tun yarmidagi o'sha «salom» butun bir olamga aylanganiga hali ham ishongim kelmaydi.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-deep/75">
              18-fevral kuni biz shunchaki ikkita ekran edik. 6-mayda esa — ikki inson. Endi esa har bir otajak tongni sen bilan qarshi olishni istayman.
            </p>
            <div className="mt-6 flex items-center justify-between">
              <span className="font-mono text-[11px] text-ink-deep/50">muhabbat ila</span>
              <span className="font-display text-xl italic text-accent-rose">— Rion</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 flex flex-col items-center justify-between gap-3 border-t border-paper/10 px-5 py-6 sm:flex-row">
        <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-paper/45">
          Shabbona Turdalieva ✕ Mister Rion
        </div>
        <div className="font-mono text-[11px] text-paper/35">18.02.2026 → ∞</div>
      </footer>
    </div>
  );
}
