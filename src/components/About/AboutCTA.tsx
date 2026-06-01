import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="relative w-full flex justify-center px-4 py-12">
      
      {/* Outer glow halo behind card */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(255,255,255,0.04) 0%, transparent 70%)",
        }}
      />

      {/* Main Card — Perfectly Proportioned Premium Scale */}
      <div
        className="relative w-full max-w-5xl overflow-hidden text-center"
        style={{
          borderRadius: "40px",
          background: "linear-gradient(160deg, #111111 0%, #0a0a0a 40%, #0d0d0d 100%)",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: `
            0 0 0 1px rgba(255,255,255,0.04) inset,
            0 60px 100px -30px rgba(0,0,0,0.95),
            0 2px 0 0 rgba(255,255,255,0.12) inset
          `,
        }}
      >

        {/* Top shimmer line */}
        <div
          className="absolute top-0 inset-x-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 30%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0.3) 70%, transparent 100%)",
          }}
        />

        {/* Specular highlight — top left corner catch */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: 0, left: 0,
            width: "45%", height: "55%",
            background:
              "radial-gradient(ellipse at 0% 0%, rgba(255,255,255,0.055) 0%, transparent 65%)",
          }}
        />

        {/* Bottom right shadow pool */}
        <div
          className="absolute pointer-events-none"
          style={{
            bottom: 0, right: 0,
            width: "45%", height: "55%",
            background:
              "radial-gradient(ellipse at 100% 100%, rgba(0,0,0,0.5) 0%, transparent 65%)",
          }}
        />

        {/* Grain overlay */}
        <div
          className="absolute inset-0 opacity-[0.022] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)",
            backgroundSize: "5px 5px",
          }}
        />

        {/* ——— Content ——— Balanced Padding Profile */}
        <div className="relative z-10 px-6 py-16 sm:px-12 sm:py-20 md:px-16 md:py-24 flex flex-col items-center gap-0">

          {/* Badge — Perfect spacing that keeps headers securely isolated */}
          <div className="w-full flex justify-center mb-16 md:mb-20">
            <div
              className="inline-flex items-center gap-3 px-5 py-2.5"
              style={{
                borderRadius: "999px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.12)",
                backdropFilter: "blur(8px)",
              }}
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-70"
                  style={{ background: "#a3e635" }}
                />
                <span
                  className="relative inline-flex h-2 w-2 rounded-full"
                  style={{ background: "#a3e635" }}
                />
              </span>
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "0.38em",
                  textTransform: "uppercase",
                  color: "rgba(163,230,53,0.85)",
                }}
              >
                Available For Projects
              </span>
            </div>
          </div>

          {/* Headline Stack — Clean gap-y-4, balanced line-height */}
          <div className="flex flex-col gap-y-4 pt-4 mb-12 md:mb-14 w-full">
            <h2
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(56px, 8.5vw, 120px)",
                lineHeight: 0.95,
                letterSpacing: "0.015em",
                color: "#ffffff",
                marginBottom: 0,
              }}
            >
              LET&apos;S BUILD
            </h2>
            <h2
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(56px, 8.5vw, 120px)",
                lineHeight: 0.95,
                letterSpacing: "0.015em",
                color: "rgba(255,255,255,0.18)",
                marginBottom: 0,
              }}
            >
              SOMETHING GREAT
            </h2>
          </div>

          {/* Description */}
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(14px, 1.6vw, 17px)",
              lineHeight: 1.8,
              color: "rgba(255,255,255,0.45)",
              maxWidth: "540px",
              marginBottom: "3.5rem",
            }}
          >
            Open to freelance work, creative collaborations and long-term
            partnerships. If you have a project in mind, let&apos;s create
            something exceptional together.
          </p>

          {/* CTA Buttons — Highly interactive responsive click areas */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-[260px] sm:max-w-md mb-16">
            <Link
              href="/contact"
              className="group relative flex items-center justify-center gap-3 w-full px-6 sm:px-10 py-4.5 sm:py-5 overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                borderRadius: "16px",
                background: "#ffffff",
                color: "#000000",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "13px",
                fontWeight: 800,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                textDecoration: "none",
                paddingTop: "1.25rem",
                paddingBottom: "1.25rem",
                boxShadow: "0 0 0 1px rgba(255,255,255,0.15), 0 12px 36px rgba(255,255,255,0.1)",
              }}
            >
              <span
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 60%)",
                  borderRadius: "16px",
                }}
              />
              <span className="relative z-10 whitespace-nowrap">Start A Project</span>
              <span
                className="relative z-10 transition-transform duration-300 group-hover:translate-x-2"
                style={{ fontSize: "18px" }}
              >
                →
              </span>
            </Link>

            <a
              href="mailto:hello@cvsgfx.com"
              className="flex items-center justify-center w-full px-6 sm:px-10 py-4 sm:py-5 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:bg-white/[0.08] hover:text-white"
              style={{
                borderRadius: "16px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.14)",
                color: "rgba(255,255,255,0.8)",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                textDecoration: "none",
                paddingTop: "1.25rem",
                paddingBottom: "1.25rem",
                whiteSpace: "nowrap",
              }}
            >
              Email Directly
            </a>
          </div>

          {/* Contact Meta Grid — Clean presentation alignment */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-18 mb-16 w-full">
            {[
              { label: "Email", value: "hello@cvsgfx.com", isStatus: false, href: "mailto:hello@cvsgfx.com" },
              { label: "Based In", value: "India", isStatus: false },
              { label: "Status", value: "Open to work", isStatus: true },
            ].map((item) => {
              const ContentContainer = item.href ? "a" : "div";
              return (
                <div key={item.label} className="flex flex-col items-center gap-2.5 min-w-[150px]">
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "10px",
                      fontWeight: 700,
                      letterSpacing: "0.35em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.3)",
                    }}
                  >
                    {item.label}
                  </span>
                  {item.isStatus ? (
                    <div className="flex items-center gap-2.5 py-1 px-3.5 rounded-xl bg-emerald-500/[0.03] border border-emerald-500/[0.08]">
                      <span className="relative flex h-2 w-2">
                        <span
                          className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-70"
                          style={{ background: "#a3e635" }}
                        />
                        <span
                          className="relative inline-flex h-2 w-2 rounded-full"
                          style={{ background: "#a3e635" }}
                        />
                      </span>
                      <span
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: "16px",
                          fontWeight: 500,
                          color: "rgba(163,230,53,0.9)",
                        }}
                      >
                        {item.value}
                      </span>
                    </div>
                  ) : (
                    <ContentContainer
                      href={item.href}
                      className={item.href ? "hover:text-white transition-colors duration-200" : ""}
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "16px",
                        fontWeight: 500,
                        color: "rgba(255,255,255,0.85)",
                        textDecoration: "none",
                        padding: "3px 0",
                      }}
                    >
                      {item.value}
                    </ContentContainer>
                  )}
                </div>
              );
            })}
          </div>

          {/* Divider */}
          <div
            className="w-full mb-14"
            style={{
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.07) 30%, rgba(255,255,255,0.07) 70%, transparent)",
            }}
          />

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-10 sm:gap-4">
            {[
              { value: "3+",   label: "Years Experience"   },
              { value: "40+",  label: "Projects Delivered" },
              { value: "100%", label: "Passion Driven"     },
            ].map((item, i) => (
              <div
                key={item.label}
                className="flex flex-col items-center"
                style={{
                  borderRight: i < 2 ? "1px solid rgba(255,255,255,0.06)" : "none",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "clamp(52px, 5vw, 76px)",
                    lineHeight: 1,
                    color: "#ffffff",
                    letterSpacing: "0.01em",
                  }}
                >
                  {item.value}
                </div>
                <div
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "0.38em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.2)",
                    marginTop: "8px",
                  }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>

        </div>
        {/* ——— End Content ——— */}

        {/* Bottom shimmer line */}
        <div
          className="absolute bottom-0 inset-x-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.06) 50%, transparent)",
          }}
        />
        <div className="h-[36px]"></div>
      </div>
      {/* End Main Card */}

    </section>
  );
}