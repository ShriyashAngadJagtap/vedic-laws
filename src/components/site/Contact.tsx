import { SectionHeading } from "./Shared";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-28 md:py-36 surface-ink">
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeading
          eyebrow="Connect"
          title="Begin a conversation."
          italic="Walk the path."
          light
        />

        <div className="mt-20 grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div className="space-y-10">
            <div>
              <div className="eyebrow !text-[var(--lotus)]">Speak Directly</div>
              <a href="tel:+919923203334" className="mt-3 block font-display text-3xl md:text-4xl text-[var(--ivory)] story-link after:!bg-[var(--lotus)]">
                +91 99232 03334
              </a>
              <a
                href="https://wa.me/919923203334"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-[var(--lotus)] story-link after:!bg-[var(--lotus)]"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            </div>

            <div>
              <div className="eyebrow !text-[var(--lotus)]">Write</div>
              <a
                href="mailto:office@drshrikantkallurkar.com"
                className="mt-3 block font-display text-2xl md:text-3xl text-[var(--ivory)] story-link after:!bg-[var(--lotus)]"
              >
                office@drshrikantkallurkar.com
              </a>
            </div>

            <div>
              <div className="eyebrow !text-[var(--lotus)]">Office Hours</div>
              <p className="mt-3 leading-relaxed text-[var(--ivory)]/75">
                Monday — Saturday · 10:00 to 18:00 IST
                <br />
                Consultations by appointment
              </p>
            </div>

            <div>
              <div className="eyebrow !text-[var(--lotus)]">Elsewhere</div>
              <div className="mt-4 flex flex-wrap gap-5 text-[var(--ivory)]/70">
                {["LinkedIn", "YouTube", "Instagram", "X"].map((s) => (
                  <a key={s} href="#" className="story-link text-sm after:!bg-[var(--lotus)]">
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form
            className="rounded-sm border border-[color-mix(in_oklab,var(--ivory)_12%,transparent)] bg-[color-mix(in_oklab,var(--chalk)_96%,transparent)] p-8 md:p-10"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="italic-quote text-2xl text-[var(--forest-deep)]">Request an appointment</div>
            <div className="mt-6 space-y-5">
              <label className="block">
                <span className="eyebrow text-[var(--forest-deep)]">Full Name</span>
                <input
                  type="text"
                  className="mt-2 w-full border-0 border-b border-[var(--forest)]/25 bg-transparent py-3 text-[var(--forest-deep)] outline-none focus:border-[var(--forest)]"
                  placeholder="Your name"
                />
              </label>
              <label className="block">
                <span className="eyebrow text-[var(--forest-deep)]">Email</span>
                <input
                  type="email"
                  className="mt-2 w-full border-0 border-b border-[var(--forest)]/25 bg-transparent py-3 text-[var(--forest-deep)] outline-none focus:border-[var(--forest)]"
                  placeholder="you@example.com"
                />
              </label>
              <label className="block">
                <span className="eyebrow text-[var(--forest-deep)]">Interest</span>
                <select className="mt-2 w-full border-0 border-b border-[var(--forest)]/25 bg-transparent py-3 text-[var(--forest-deep)] outline-none focus:border-[var(--forest)]">
                  <option>Executive Coaching</option>
                  <option>Corporate Program</option>
                  <option>Speaking Engagement</option>
                  <option>Life Mentoring</option>
                  <option>Student Guidance</option>
                </select>
              </label>
              <label className="block">
                <span className="eyebrow text-[var(--forest-deep)]">Message</span>
                <textarea
                  rows={4}
                  className="mt-2 w-full resize-none border-0 border-b border-[var(--forest)]/25 bg-transparent py-3 text-[var(--forest-deep)] outline-none focus:border-[var(--forest)]"
                  placeholder="A few words about what you are seeking…"
                />
              </label>
              <button type="submit" className="btn-primary mt-4 w-full">
                Send Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
