import { useState } from "react";

/* ─── PRODUCT MOCKUP COMPONENTS ─────────────────────────────────────────── */

function TxnCardMockup({ title, amount, status, ref_, buyer, seller, step }) {
  const STATUS = {
    funded:      { label: "Escrow Funded",   color: "#3B82F6", bg: "#EFF6FF" },
    in_delivery: { label: "In Delivery",     color: "#8B5CF6", bg: "#F5F3FF" },
    completed:   { label: "Completed",       color: "#059669", bg: "#D1FAE5" },
    pending:     { label: "Awaiting Payment",color: "#B45309", bg: "#FEF3C7" },
  };
  const s = STATUS[status] || STATUS.pending;
  const steps = ["Created", "Funded", "Shipped", "Confirmed", "Released"];
  return (
    <div style={{
      background: "white", border: "1px solid #E5E3DE", borderRadius: 12,
      padding: "20px 22px", fontFamily: "'DM Sans', sans-serif",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
        <div>
          <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: ".1em", textTransform: "uppercase", color: "#9CA3AF", marginBottom: 3 }}>{ref_}</div>
          <div style={{ fontSize: 15, fontWeight: 600, color: "#0F1117", lineHeight: 1.3 }}>{title}</div>
        </div>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 5, background: s.bg, color: s.color, fontSize: 11, fontWeight: 600, padding: "4px 10px", borderRadius: 20 }}>
          <span style={{ width: 5, height: 5, borderRadius: "50%", background: s.color, display: "inline-block" }} />
          {s.label}
        </span>
      </div>
      <div style={{ fontSize: 22, fontWeight: 700, color: "#0F1117", marginBottom: 14 }}>{amount}</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 8, alignItems: "center", marginBottom: 16 }}>
        {[{ role: "Seller", name: seller }, null, { role: "Buyer", name: buyer }].map((p, i) =>
          p ? (
            <div key={i} style={{ background: "#F4F3EF", border: "1px solid #EEECEA", borderRadius: 8, padding: "9px 12px" }}>
              <div style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: ".08em", color: "#9CA3AF", marginBottom: 2 }}>{p.role}</div>
              <div style={{ fontSize: 12, fontWeight: 600, color: "#374151" }}>{p.name}</div>
            </div>
          ) : <div key={i} style={{ textAlign: "center", color: "#D1D5DB", fontSize: 14 }}>→</div>
        )}
      </div>
      {/* Stepper */}
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        {steps.map((s2, i) => (
          <div key={i} style={{ display: "flex", alignItems: "flex-start", flex: 1 }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: "none", width: 32 }}>
              <div style={{
                width: 18, height: 18, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 9, fontWeight: 700,
                background: i < step ? "#1A6B4A" : i === step ? "#E8F5EE" : "#F3F4F6",
                color: i < step ? "white" : i === step ? "#1A6B4A" : "#9CA3AF",
                border: i === step ? "1.5px solid #1A6B4A" : "none",
              }}>
                {i < step ? "✓" : i + 1}
              </div>
              <div style={{ fontSize: 8, color: i <= step ? "#1A6B4A" : "#9CA3AF", marginTop: 3, fontWeight: i === step ? 700 : 400, whiteSpace: "nowrap" }}>{s2}</div>
            </div>
            {i < steps.length - 1 && (
              <div style={{ flex: 1, height: 2, background: i < step ? "#1A6B4A" : "#E5E3DE", marginTop: 8 }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function WalletMockup() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <div style={{
        background: "linear-gradient(135deg, #1A6B4A, #0F4A32)",
        borderRadius: 14, padding: "24px 24px 20px", color: "white", position: "relative", overflow: "hidden", marginBottom: 14,
      }}>
        <div style={{ position: "absolute", right: -30, top: -30, width: 140, height: 140, borderRadius: "50%", background: "rgba(255,255,255,.05)" }} />
        <div style={{ position: "absolute", right: 30, bottom: -40, width: 110, height: 110, borderRadius: "50%", background: "rgba(255,255,255,.04)" }} />
        <div style={{ fontSize: 10, opacity: .65, textTransform: "uppercase", letterSpacing: ".1em", marginBottom: 4, position: "relative" }}>Available Balance</div>
        <div style={{ fontSize: 30, fontWeight: 700, position: "relative", marginBottom: 4 }}>₦320,000</div>
        <div style={{ fontSize: 10, opacity: .5, position: "relative", marginBottom: 16 }}>Tier 2 · ₦500k per transaction</div>
        <div style={{ display: "flex", gap: 10, position: "relative" }}>
          {["+ Top Up", "↑ Withdraw"].map(l => (
            <button key={l} style={{ background: "rgba(255,255,255,.15)", border: "1px solid rgba(255,255,255,.25)", color: "white", borderRadius: 7, padding: "7px 14px", fontSize: 12, cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>{l}</button>
          ))}
        </div>
      </div>
      <div style={{ background: "white", border: "1px solid #E5E3DE", borderRadius: 12, padding: "14px 18px" }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: "#0F1117", marginBottom: 12 }}>Recent Transactions</div>
        {[
          { icon: "↓", bg: "#D1FAE5", col: "#059669", label: "Payment received – TXN-19034", amt: "+₦44,325", date: "23 Feb" },
          { icon: "↑", bg: "#FEE2E2", col: "#DC2626", label: "Escrow funded – TXN-38291",    amt: "–₦28,000", date: "2 Mar" },
          { icon: "+", bg: "#EFF6FF", col: "#3B82F6", label: "Top-up via Paystack",           amt: "+₦500,000",date: "1 Feb" },
        ].map((tx, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 0", borderBottom: i < 2 ? "1px solid #F4F3EF" : "none" }}>
            <div style={{ width: 28, height: 28, borderRadius: "50%", background: tx.bg, color: tx.col, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 12, flexShrink: 0 }}>{tx.icon}</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 12, fontWeight: 500, color: "#0F1117", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{tx.label}</div>
              <div style={{ fontSize: 11, color: "#9CA3AF" }}>{tx.date}</div>
            </div>
            <div style={{ fontSize: 12, fontWeight: 600, color: tx.col, whiteSpace: "nowrap" }}>{tx.amt}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ShareLinkMockup({ title, amount }) {
  const [copied, setCopied] = useState(false);
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "white", border: "1px solid #E5E3DE", borderRadius: 12, overflow: "hidden" }}>
      <div style={{ background: "#1A6B4A", padding: "18px 20px", color: "white" }}>
        <div style={{ fontSize: 10, opacity: .7, marginBottom: 4 }}>trustlink.app</div>
        <div style={{ fontSize: 16, fontFamily: "'DM Serif Display', serif", marginBottom: 2 }}>{title}</div>
        <div style={{ fontSize: 11, opacity: .65 }}>Seller: Adaeze N. · Escrow protected</div>
      </div>
      <div style={{ padding: "16px 20px" }}>
        <div style={{ textAlign: "center", background: "#E8F5EE", borderRadius: 10, padding: "14px 12px", marginBottom: 14 }}>
          <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: ".08em", textTransform: "uppercase", color: "#1A6B4A", marginBottom: 6 }}>Amount to Fund</div>
          <div style={{ fontSize: 26, fontWeight: 700, color: "#0F1117" }}>{amount}</div>
          <div style={{ fontSize: 11, color: "#6B7280", marginTop: 3 }}>Held in escrow until delivery confirmed</div>
        </div>
        <div style={{ fontSize: 11, color: "#6B7280", marginBottom: 14, background: "#F4F3EF", borderRadius: 8, padding: "10px 12px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
            <span>Item amount</span><span style={{ fontWeight: 600, color: "#0F1117" }}>{amount}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
            <span>Trustlink fee (1.5%)</span><span>+₦675</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #E5E3DE", paddingTop: 6, fontWeight: 600, color: "#0F1117" }}>
            <span>Total</span><span style={{ color: "#1A6B4A" }}>₦45,675</span>
          </div>
        </div>
        <button style={{ width: "100%", background: "#1A6B4A", color: "white", border: "none", borderRadius: 8, padding: "11px", fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>
          🔒 Fund Escrow via Paystack
        </button>
        <div style={{ display: "flex", justifyContent: "center", gap: 16, padding: "12px 0 2px", flexWrap: "wrap" }}>
          {["🔒 Escrow Protected", "✓ KYC Verified", "⚡ Instant Release"].map(f => (
            <span key={f} style={{ fontSize: 11, color: "#9CA3AF", fontWeight: 500 }}>{f}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function DashboardMockup() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#FAFAF8", border: "1px solid #E5E3DE", borderRadius: 14, overflow: "hidden" }}>
      {/* Mini nav */}
      <div style={{ background: "white", borderBottom: "1px solid #E5E3DE", padding: "10px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ fontSize: 15, fontFamily: "'DM Serif Display', serif", color: "#0F1117" }}>
          <span>Trust</span><span style={{ color: "#1A6B4A" }}>link</span>
          <span style={{ width: 6, height: 6, background: "#1A6B4A", borderRadius: "50%", display: "inline-block", marginLeft: 5, verticalAlign: "middle" }} />
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          {["Dashboard", "Wallet", "History"].map((n, i) => (
            <span key={n} style={{ fontSize: 11, fontWeight: 500, padding: "4px 10px", borderRadius: 6, background: i === 0 ? "#E8F5EE" : "transparent", color: i === 0 ? "#1A6B4A" : "#9CA3AF" }}>{n}</span>
          ))}
        </div>
        <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#1A6B4A", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: "white" }}>A</div>
      </div>
      <div style={{ padding: "14px 16px" }}>
        {/* Mini wallet */}
        <div style={{ background: "linear-gradient(135deg, #1A6B4A, #0F4A32)", borderRadius: 10, padding: "14px 16px", color: "white", marginBottom: 12, position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", right: -20, top: -20, width: 100, height: 100, borderRadius: "50%", background: "rgba(255,255,255,.05)" }} />
          <div style={{ fontSize: 9, opacity: .6, textTransform: "uppercase", letterSpacing: ".08em", position: "relative" }}>Wallet Balance</div>
          <div style={{ fontSize: 22, fontWeight: 700, position: "relative" }}>₦320,000</div>
        </div>
        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8, marginBottom: 12 }}>
          {[{ n: "4", l: "Total" }, { n: "2", l: "Active" }, { n: "1", l: "Done" }, { n: "₦473k", l: "Volume" }].map(s => (
            <div key={s.l} style={{ background: "white", border: "1px solid #E5E3DE", borderRadius: 8, padding: "8px", textAlign: "center" }}>
              <div style={{ fontSize: 15, fontWeight: 700, color: "#0F1117" }}>{s.n}</div>
              <div style={{ fontSize: 9, color: "#9CA3AF", marginTop: 1 }}>{s.l}</div>
            </div>
          ))}
        </div>
        {/* Transactions */}
        {[
          { ref_: "TXN-38291", title: "iPhone 14 Pro Max 256GB", amt: "₦28,000", status: "funded", step: 1 },
          { ref_: "TXN-72841", title: "Web Design Services – 5 Pages", amt: "₦45,000", status: "in_delivery", step: 2 },
        ].map((t, i) => (
          <div key={i} style={{ background: "white", border: "1px solid #E5E3DE", borderRadius: 10, padding: "12px 14px", marginBottom: 8, cursor: "pointer" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, alignItems: "flex-start" }}>
              <div>
                <div style={{ fontSize: 9, fontWeight: 600, letterSpacing: ".09em", textTransform: "uppercase", color: "#9CA3AF" }}>{t.ref_}</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#0F1117" }}>{t.title}</div>
              </div>
              <span style={{ fontSize: 10, fontWeight: 600, padding: "3px 8px", borderRadius: 20, background: t.status === "funded" ? "#EFF6FF" : "#F5F3FF", color: t.status === "funded" ? "#3B82F6" : "#8B5CF6", whiteSpace: "nowrap" }}>
                {t.status === "funded" ? "Funded" : "In Delivery"}
              </span>
            </div>
            <div style={{ fontSize: 14, fontWeight: 700, color: "#0F1117", marginBottom: 8 }}>{t.amt}</div>
            <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
              {["Created", "Funded", "Shipped", "Confirmed", "Released"].map((st, si) => (
                <div key={si} style={{ display: "flex", alignItems: "center", flex: 1 }}>
                  <div style={{ width: 12, height: 12, borderRadius: "50%", background: si < t.step ? "#1A6B4A" : si === t.step ? "#E8F5EE" : "#F3F4F6", border: si === t.step ? "1.5px solid #1A6B4A" : "none", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {si < t.step && <span style={{ fontSize: 7, color: "white", lineHeight: 1 }}>✓</span>}
                  </div>
                  {si < 4 && <div style={{ flex: 1, height: 1.5, background: si < t.step ? "#1A6B4A" : "#E5E3DE" }} />}
                </div>
              ))}
            </div>
          </div>
        ))}
        <button style={{ width: "100%", background: "#1A6B4A", color: "white", border: "none", borderRadius: 8, padding: "9px", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans', sans-serif", marginTop: 4 }}>
          + New Transaction
        </button>
      </div>
    </div>
  );
}

function KycMockup() {
  const [step, setStep] = useState(1);
  const steps = [
    { icon: "🪪", title: "Add your BVN", sub: "Unlocks Tier 1 · ₦50k/txn", btn: "Continue →" },
    { icon: "📋", title: "Government ID", sub: "NIN, Passport, or Driver's Licence", btn: "Submit ID →" },
    { icon: "🤳", title: "Liveness check", sub: "Quick selfie for Tier 3 · ₦5M/txn", btn: "Capture & Submit" },
    { icon: "🎉", title: "Tier 2 Unlocked!", sub: "Buy & sell up to ₦500,000 per transaction", btn: null },
  ];
  const s = steps[step - 1];
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "white", border: "1px solid #E5E3DE", borderRadius: 12, padding: "20px 22px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: "#0F1117" }}>Identity Verification</div>
        <div style={{ display: "flex", gap: 5 }}>
          {[1,2,3,4].map(n => (
            <div key={n} style={{ width: 7, height: 7, borderRadius: "50%", background: n <= step ? "#1A6B4A" : "#E5E3DE", boxShadow: n === step ? "0 0 0 2px #E8F5EE" : "none" }} />
          ))}
        </div>
      </div>
      <div style={{ textAlign: "center", padding: "8px 0 16px" }}>
        <div style={{ fontSize: 32, marginBottom: 10 }}>{s.icon}</div>
        <div style={{ fontSize: 16, fontWeight: 600, color: "#0F1117", marginBottom: 5 }}>{s.title}</div>
        <div style={{ fontSize: 13, color: "#6B7280", marginBottom: 16 }}>{s.sub}</div>
        {step < 4 && (
          <div style={{ background: "#F4F3EF", borderRadius: 8, padding: 12, marginBottom: 16, textAlign: "left" }}>
            {step === 1 && <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 3 }}><label style={{ fontSize: 11, fontWeight: 500, color: "#374151" }}>BVN</label><div style={{ height: 34, background: "white", border: "1px solid #E5E3DE", borderRadius: 6, padding: "0 10px", display: "flex", alignItems: "center", fontSize: 12, color: "#9CA3AF" }}>Enter your 11-digit BVN</div></div>
              <div style={{ display: "flex", flexDirection: "column", gap: 3 }}><label style={{ fontSize: 11, fontWeight: 500, color: "#374151" }}>Date of Birth</label><div style={{ height: 34, background: "white", border: "1px solid #E5E3DE", borderRadius: 6, padding: "0 10px", display: "flex", alignItems: "center", fontSize: 12, color: "#9CA3AF" }}>DD / MM / YYYY</div></div>
            </div>}
            {step === 2 && <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 3 }}><label style={{ fontSize: 11, fontWeight: 500, color: "#374151" }}>ID Type</label><div style={{ height: 34, background: "white", border: "1px solid #E5E3DE", borderRadius: 6, padding: "0 10px", display: "flex", alignItems: "center", fontSize: 12, color: "#374151" }}>National ID (NIN) ▾</div></div>
              <div style={{ display: "flex", flexDirection: "column", gap: 3 }}><label style={{ fontSize: 11, fontWeight: 500, color: "#374151" }}>ID Number</label><div style={{ height: 34, background: "white", border: "1px solid #E5E3DE", borderRadius: 6, padding: "0 10px", display: "flex", alignItems: "center", fontSize: 12, color: "#9CA3AF" }}>Enter your NIN</div></div>
            </div>}
            {step === 3 && <div style={{ height: 80, background: "#1a1a1a", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
              <div style={{ width: 60, height: 80, border: "1.5px solid rgba(255,255,255,.5)", borderRadius: 6 }} />
              <div style={{ position: "absolute", bottom: 8, left: 0, right: 0, textAlign: "center", fontSize: 10, color: "rgba(255,255,255,.5)" }}>Position your face in the frame</div>
            </div>}
          </div>
        )}
        {step === 4 && (
          <div style={{ background: "#E8F5EE", borderRadius: 8, padding: "12px 16px", marginBottom: 16 }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: "#1A6B4A" }}>✓ Tier 2 active</div>
            <div style={{ fontSize: 12, color: "#047857", marginTop: 3 }}>Buy and sell up to ₦500,000 per transaction</div>
          </div>
        )}
      </div>
      {s.btn && (
        <button onClick={() => setStep(s => Math.min(s + 1, 4))} style={{ width: "100%", background: "#1A6B4A", color: "white", border: "none", borderRadius: 8, padding: "11px", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>
          {s.btn}
        </button>
      )}
      {step === 4 && (
        <button onClick={() => setStep(1)} style={{ width: "100%", background: "#E8F5EE", color: "#1A6B4A", border: "none", borderRadius: 8, padding: "11px", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>
          Back to Dashboard
        </button>
      )}
    </div>
  );
}

/* ─── DEVICE FRAME ─────────────────────────────────────────────────────────── */
function PhoneFrame({ children, style = {} }) {
  return (
    <div style={{
      background: "#0F1117",
      borderRadius: 32, padding: "12px 8px 16px",
      boxShadow: "0 24px 64px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,.07)",
      position: "relative", ...style
    }}>
      <div style={{ width: 60, height: 5, background: "rgba(255,255,255,.12)", borderRadius: 3, margin: "0 auto 10px" }} />
      <div style={{ borderRadius: 20, overflow: "hidden" }}>{children}</div>
    </div>
  );
}

function BrowserFrame({ children, url = "trustlink.app", style = {} }) {
  return (
    <div style={{ background: "white", borderRadius: 12, overflow: "hidden", border: "1px solid #E5E3DE", boxShadow: "0 8px 32px rgba(0,0,0,.08)", ...style }}>
      <div style={{ background: "#F4F3EF", borderBottom: "1px solid #E5E3DE", padding: "8px 12px", display: "flex", alignItems: "center", gap: 8 }}>
        <div style={{ display: "flex", gap: 4 }}>
          {["#FF6B6B", "#FFD93D", "#6BCB77"].map(c => <div key={c} style={{ width: 9, height: 9, borderRadius: "50%", background: c }} />)}
        </div>
        <div style={{ flex: 1, background: "white", border: "1px solid #E5E3DE", borderRadius: 6, padding: "3px 10px", fontSize: 11, color: "#9CA3AF", textAlign: "center" }}>{url}</div>
      </div>
      {children}
    </div>
  );
}

/* ─── CSS ─────────────────────────────────────────────────────────────────── */
const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  :root {
    --ink: #0F1117; --ink-muted: #6B7280; --ink-faint: #9CA3AF;
    --surface: #FAFAF8; --surface-2: #F4F3EF; --surface-3: #EEECEA;
    --border: #E5E3DE; --border-strong: #D1CEC7;
    --accent: #1A6B4A; --accent-light: #E8F5EE; --accent-hover: #145A3D;
    --radius: 12px; --radius-sm: 8px;
    --shadow: 0 1px 3px rgba(0,0,0,.08),0 4px 12px rgba(0,0,0,.06);
    --shadow-lg: 0 4px 6px rgba(0,0,0,.06),0 12px 32px rgba(0,0,0,.1);
  }
  body { font-family:'DM Sans',sans-serif; background:var(--surface); color:var(--ink); line-height:1.5; -webkit-font-smoothing:antialiased; overflow-x:hidden; }

  /* NAV */
  .lp-nav { position:sticky;top:0;z-index:100;background:rgba(250,250,248,.92);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border-bottom:1px solid var(--border);height:64px;display:flex;align-items:center;padding:0 40px; }
  .lp-nav-inner { max-width:1100px;margin:0 auto;width:100%;display:flex;align-items:center;justify-content:space-between;gap:24px; }
  .lp-brand { display:flex;align-items:center;gap:7px;font-size:21px;color:var(--ink);text-decoration:none;flex-shrink:0; }
  .lp-brand-serif { font-family:'DM Serif Display',serif; }
  .lp-brand-dot { width:7px;height:7px;background:var(--accent);border-radius:50%; }
  .lp-nav-links { display:flex;gap:2px;list-style:none; }
  .lp-nav-links a { font-size:14px;font-weight:500;color:var(--ink-muted);text-decoration:none;padding:6px 12px;border-radius:var(--radius-sm);transition:all .15s; }
  .lp-nav-links a:hover { color:var(--ink);background:var(--surface-2); }
  .lp-nav-cta { display:flex;gap:10px;align-items:center; }
  .lp-btn-ghost { background:transparent;color:var(--ink-muted);border:1px solid transparent;padding:8px 16px;border-radius:var(--radius-sm);font-family:'DM Sans',sans-serif;font-size:14px;font-weight:500;cursor:pointer;transition:all .15s; }
  .lp-btn-ghost:hover { background:var(--surface-2);color:var(--ink); }
  .lp-btn-primary { background:var(--accent);color:white;border:none;padding:9px 20px;border-radius:var(--radius-sm);font-family:'DM Sans',sans-serif;font-size:14px;font-weight:500;cursor:pointer;transition:all .15s;display:inline-flex;align-items:center;gap:6px; }
  .lp-btn-primary:hover { background:var(--accent-hover); }

  /* HERO */
  .lp-hero { background:var(--ink);padding:96px 40px 0;position:relative;overflow:hidden; }
  .lp-hero-grain { position:absolute;inset:0;pointer-events:none;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.032'/%3E%3C/svg%3E");background-size:180px; }
  .lp-hero-glow { position:absolute;pointer-events:none;width:900px;height:500px;background:radial-gradient(ellipse,rgba(26,107,74,.16) 0%,transparent 70%);top:-80px;left:50%;transform:translateX(-35%); }
  .lp-hero-inner { max-width:1100px;margin:0 auto;position:relative;z-index:2;display:grid;grid-template-columns:1fr 400px;gap:56px;align-items:flex-end; }
  .lp-eyebrow-pill { display:inline-flex;align-items:center;gap:7px;background:rgba(26,107,74,.2);border:1px solid rgba(26,107,74,.35);color:#6EE7B7;font-size:11px;font-weight:600;letter-spacing:.09em;text-transform:uppercase;padding:5px 12px;border-radius:100px;margin-bottom:22px; }
  .lp-eyebrow-dot { width:5px;height:5px;background:#34D399;border-radius:50%;animation:lp-blink 2s infinite; }
  @keyframes lp-blink { 0%,100%{opacity:1}50%{opacity:.25} }
  .lp-h1 { font-family:'DM Serif Display',serif;font-size:clamp(42px,5.5vw,66px);line-height:1.05;color:white;letter-spacing:-.3px;margin-bottom:22px; }
  .lp-h1 em { font-style:italic;color:#6EE7B7; }
  .lp-hero-sub { font-size:17px;line-height:1.7;color:rgba(255,255,255,.46);max-width:480px;margin-bottom:36px; }
  .lp-hero-actions { display:flex;gap:12px;align-items:center;flex-wrap:wrap;margin-bottom:48px; }
  .lp-btn-cta { background:var(--accent);color:white;border:1px solid var(--accent);padding:13px 26px;font-size:15px;font-weight:600;border-radius:var(--radius-sm);display:inline-flex;align-items:center;gap:7px;cursor:pointer;transition:all .2s;font-family:'DM Sans',sans-serif; }
  .lp-btn-cta:hover { background:var(--accent-hover);transform:translateY(-1px);box-shadow:0 6px 20px rgba(26,107,74,.3); }
  .lp-btn-cta-ghost { background:rgba(255,255,255,.07);color:rgba(255,255,255,.65);border:1px solid rgba(255,255,255,.14);padding:13px 22px;font-size:14px;font-weight:500;border-radius:var(--radius-sm);cursor:pointer;transition:all .2s;font-family:'DM Sans',sans-serif;display:inline-flex;align-items:center;gap:6px; }
  .lp-btn-cta-ghost:hover { background:rgba(255,255,255,.12);color:white; }

  /* HERO ROLE CARDS */
  .lp-hero-roles { display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:36px; }
  .lp-role-card { background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.09);border-radius:10px;padding:14px 16px;transition:border-color .2s; }
  .lp-role-card:hover { border-color:rgba(26,107,74,.4); }
  .lp-role-label { font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.3);margin-bottom:5px; }
  .lp-role-title { font-size:13px;font-weight:600;color:white;margin-bottom:4px; }
  .lp-role-desc { font-size:11px;color:rgba(255,255,255,.38);line-height:1.55; }

  /* HERO CARD */
  .lp-hero-visual { position:relative;align-self:flex-end; }
  .lp-float-1 { position:absolute;top:-18px;right:-14px;background:white;border-radius:12px;padding:10px 14px;box-shadow:0 8px 28px rgba(0,0,0,.18);display:flex;align-items:center;gap:10px; }
  .lp-float-1-icon { width:32px;height:32px;border-radius:8px;background:var(--accent-light);display:flex;align-items:center;justify-content:center;font-size:15px; }
  .lp-float-1-label { font-size:10px;color:#9CA3AF;font-weight:500;font-family:'DM Sans',sans-serif; }
  .lp-float-1-val { font-family:'DM Serif Display',serif;font-size:14px;color:var(--ink); }
  .lp-float-2 { position:absolute;bottom:100px;left:-18px;background:#161B27;border:1px solid rgba(255,255,255,.09);border-radius:10px;padding:10px 14px;display:flex;align-items:center;gap:10px;box-shadow:0 8px 24px rgba(0,0,0,.35); }
  .lp-float-2-icon { width:26px;height:26px;background:rgba(26,107,74,.2);border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:13px; }
  .lp-float-2-val { font-size:11px;font-weight:600;color:white;font-family:'DM Sans',sans-serif; }
  .lp-float-2-sub { font-size:10px;color:rgba(255,255,255,.3);font-family:'DM Sans',sans-serif; }
  .lp-hcard { background:rgba(255,255,255,.045);border:1px solid rgba(255,255,255,.09);border-radius:16px 16px 0 0;padding:26px;backdrop-filter:blur(8px); }
  .lp-hcard-header { display:flex;justify-content:space-between;align-items:center;margin-bottom:20px; }
  .lp-hcard-ref { font-size:10px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.2); }
  .lp-hcard-status { display:inline-flex;align-items:center;gap:5px;background:rgba(26,107,74,.22);border:1px solid rgba(26,107,74,.38);color:#6EE7B7;font-size:10px;font-weight:600;padding:3px 9px;border-radius:100px; }
  .lp-hcard-status-dot { width:5px;height:5px;background:#34D399;border-radius:50%;animation:lp-blink 2s infinite; }
  .lp-hcard-amount { font-family:'DM Serif Display',serif;font-size:38px;color:white;letter-spacing:-.5px;margin-bottom:3px; }
  .lp-hcard-sublabel { font-size:11px;color:rgba(255,255,255,.25);margin-bottom:18px; }
  .lp-hcard-parties { display:grid;grid-template-columns:1fr auto 1fr;gap:8px;align-items:center;margin-bottom:18px; }
  .lp-hcard-party { background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.07);border-radius:9px;padding:11px; }
  .lp-hcard-party-role { font-size:9px;text-transform:uppercase;letter-spacing:.08em;color:rgba(255,255,255,.18);margin-bottom:3px; }
  .lp-hcard-party-name { font-size:13px;font-weight:600;color:rgba(255,255,255,.78); }
  .lp-hcard-party-badge { font-size:9px;color:rgba(255,255,255,.28);margin-top:2px; }
  .lp-hcard-arrow { color:rgba(255,255,255,.18);font-size:15px;text-align:center; }
  .lp-hcard-steps { display:flex;flex-direction:column;gap:7px; }
  .lp-hcard-step { display:flex;align-items:center;gap:9px; }
  .lp-hc-dot { width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;flex-shrink:0; }
  .lp-hc-done { background:var(--accent);color:white; }
  .lp-hc-active { background:rgba(255,255,255,.12);color:white;border:1.5px solid rgba(255,255,255,.28); }
  .lp-hc-pending { background:rgba(255,255,255,.04);color:rgba(255,255,255,.18); }
  .lp-hc-text { font-size:12px; }
  .lp-hc-text-done { color:rgba(255,255,255,.38); }
  .lp-hc-text-active { color:rgba(255,255,255,.82);font-weight:500; }
  .lp-hc-text-pending { color:rgba(255,255,255,.2); }

  /* PROOF */
  .lp-proof { border-bottom:1px solid var(--border);padding:28px 40px; }
  .lp-proof-inner { max-width:1100px;margin:0 auto;display:flex;align-items:center;gap:32px;flex-wrap:wrap; }
  .lp-proof-label { font-size:12px;font-weight:500;color:var(--ink-faint);letter-spacing:.03em;white-space:nowrap; }
  .lp-proof-divider { width:1px;height:18px;background:var(--border);flex-shrink:0; }
  .lp-proof-logos { display:flex;gap:28px;flex-wrap:wrap;align-items:center; }
  .lp-proof-logo { font-size:13px;font-weight:600;color:var(--ink-faint);opacity:.45;letter-spacing:.02em; }
  .lp-proof-stats { display:flex;gap:24px;flex-wrap:wrap;margin-left:auto; }
  .lp-proof-stat-val { font-family:'DM Serif Display',serif;font-size:19px;color:var(--ink); }
  .lp-proof-stat-label { font-size:11px;color:var(--ink-faint);margin-top:1px; }

  /* SECTIONS */
  .lp-section { padding:88px 40px; }
  .lp-container { max-width:1100px;margin:0 auto; }
  .lp-eyebrow { display:inline-flex;align-items:center;gap:7px;font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--accent);margin-bottom:14px; }
  .lp-eyebrow-line { width:18px;height:2px;background:var(--accent);border-radius:2px; }
  .lp-section-title { font-family:'DM Serif Display',serif;font-size:clamp(30px,4vw,46px);line-height:1.1;color:var(--ink);margin-bottom:12px;letter-spacing:-.2px; }
  .lp-section-sub { font-size:16px;line-height:1.7;color:var(--ink-muted);max-width:520px; }
  .lp-section-sub.center { margin:0 auto; }

  /* ROLE SPLIT */
  .lp-role-split { display:grid;grid-template-columns:1fr 1fr;gap:32px;margin-top:52px; }
  .lp-role-panel { border:1px solid var(--border);border-radius:16px;overflow:hidden; }
  .lp-role-panel-header { padding:24px 28px; }
  .lp-role-panel-tag { display:inline-flex;align-items:center;gap:6px;font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:4px 10px;border-radius:100px;margin-bottom:12px; }
  .lp-role-panel-title { font-family:'DM Serif Display',serif;font-size:22px;color:var(--ink);margin-bottom:8px; }
  .lp-role-panel-desc { font-size:14px;line-height:1.65;color:var(--ink-muted);margin-bottom:16px; }
  .lp-role-perks { display:flex;flex-direction:column;gap:9px; }
  .lp-role-perk { display:flex;gap:9px;align-items:flex-start;font-size:13px;color:var(--ink-muted); }
  .lp-role-perk-check { width:18px;height:18px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:700;flex-shrink:0;margin-top:1px; }
  .lp-role-panel-screen { padding:16px 20px 20px;background:var(--surface-2);border-top:1px solid var(--border); }

  /* HOW IT WORKS */
  .lp-how { background:var(--ink);padding:88px 40px; }
  .lp-how .lp-section-title { color:white; }
  .lp-how .lp-section-sub { color:rgba(255,255,255,.42); }
  .lp-how .lp-eyebrow { color:#6EE7B7; }
  .lp-how .lp-eyebrow-line { background:#6EE7B7; }
  .lp-how-inner { max-width:1100px;margin:0 auto; }
  .lp-flow-grid { display:grid;grid-template-columns:1fr 1fr;gap:48px;margin-top:52px;align-items:start; }
  .lp-flow-label { font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.3);margin-bottom:16px;padding:5px 12px;border:1px solid rgba(255,255,255,.1);border-radius:100px;display:inline-block; }
  .lp-flow-steps { display:flex;flex-direction:column;gap:0; }
  .lp-flow-step { display:flex;gap:14px;align-items:flex-start;position:relative; }
  .lp-flow-step-left { display:flex;flex-direction:column;align-items:center;flex-shrink:0; }
  .lp-flow-step-circle { width:38px;height:38px;border-radius:50%;background:rgba(26,107,74,.15);border:1px solid rgba(26,107,74,.3);display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0; }
  .lp-flow-step-line { width:1px;flex:1;min-height:24px;background:rgba(255,255,255,.07);margin:4px 0; }
  .lp-flow-step-body { padding:8px 0 24px; }
  .lp-flow-step-title { font-size:14px;font-weight:600;color:white;margin-bottom:4px; }
  .lp-flow-step-desc { font-size:13px;line-height:1.6;color:rgba(255,255,255,.38); }

  /* SCREENSHOT SECTION */
  .lp-screen-section { padding:88px 40px;background:var(--surface-2); }
  .lp-screen-inner { max-width:1100px;margin:0 auto; }
  .lp-screen-grid { display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-top:52px;align-items:start; }
  .lp-screen-card { display:flex;flex-direction:column;gap:16px; }
  .lp-screen-label { font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--accent);margin-bottom:4px; }
  .lp-screen-title { font-family:'DM Serif Display',serif;font-size:17px;color:var(--ink);margin-bottom:6px; }
  .lp-screen-desc { font-size:13px;line-height:1.6;color:var(--ink-muted); }

  /* WHY */
  .lp-why-grid { display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:52px; }
  .lp-why-card { background:white;border:1px solid var(--border);border-radius:var(--radius);padding:26px;transition:all .2s;position:relative;overflow:hidden;cursor:default; }
  .lp-why-card::after { content:'';position:absolute;top:0;left:0;right:0;height:2px;background:var(--accent);transform:scaleX(0);transform-origin:left;transition:transform .3s; }
  .lp-why-card:hover { transform:translateY(-3px);box-shadow:var(--shadow-lg);border-color:#BBF7D0; }
  .lp-why-card:hover::after { transform:scaleX(1); }
  .lp-why-icon { width:40px;height:40px;border-radius:10px;background:var(--accent-light);display:flex;align-items:center;justify-content:center;font-size:18px;margin-bottom:14px; }
  .lp-why-title { font-family:'DM Serif Display',serif;font-size:17px;color:var(--ink);margin-bottom:7px; }
  .lp-why-desc { font-size:14px;line-height:1.65;color:var(--ink-muted); }

  /* ESCROW */
  .lp-escrow { padding:88px 40px; }
  .lp-escrow-inner { max-width:1100px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:72px;align-items:center; }
  .lp-esc-diagram { background:var(--ink);border-radius:16px;padding:32px;position:relative;overflow:hidden; }
  .lp-esc-bg { position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.018) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.018) 1px,transparent 1px);background-size:26px 26px; }
  .lp-esc-flow { position:relative;z-index:2;display:flex;flex-direction:column;gap:0; }
  .lp-esc-node { background:rgba(255,255,255,.045);border:1px solid rgba(255,255,255,.08);border-radius:10px;padding:14px 16px;display:flex;align-items:center;gap:12px; }
  .lp-esc-node.mid { background:rgba(26,107,74,.14);border-color:rgba(26,107,74,.28); }
  .lp-esc-icon { width:34px;height:34px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0; }
  .lp-esc-title { font-size:13px;font-weight:600;color:rgba(255,255,255,.82); }
  .lp-esc-sub { font-size:10px;color:rgba(255,255,255,.3);margin-top:1px; }
  .lp-esc-tag { margin-left:auto;font-size:9px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:3px 8px;border-radius:100px; }
  .lp-esc-tag-hold { background:rgba(26,107,74,.2);border:1px solid rgba(26,107,74,.3);color:#6EE7B7; }
  .lp-esc-tag-pending { background:rgba(245,158,11,.12);border:1px solid rgba(245,158,11,.22);color:#FCD34D; }
  .lp-esc-tag-done { background:rgba(16,185,129,.12);border:1px solid rgba(16,185,129,.22);color:#6EE7B7; }
  .lp-esc-connector { width:1px;height:26px;margin-left:33px;background:rgba(255,255,255,.07);display:flex;align-items:center;justify-content:center; }
  .lp-esc-arrow { font-size:9px;color:rgba(255,255,255,.2); }
  .lp-esc-feats { margin-top:28px;display:flex;flex-direction:column;gap:13px; }
  .lp-esc-feat { display:flex;gap:11px;align-items:flex-start; }
  .lp-esc-feat-check { width:20px;height:20px;border-radius:50%;background:var(--accent-light);border:1px solid rgba(26,107,74,.22);display:flex;align-items:center;justify-content:center;font-size:10px;color:var(--accent);font-weight:700;flex-shrink:0;margin-top:1px; }
  .lp-esc-feat-text { font-size:14px;line-height:1.6;color:var(--ink-muted); }
  .lp-esc-feat-text strong { color:var(--ink);font-weight:600; }

  /* KYC */
  .lp-kyc { background:white;padding:88px 40px; }
  .lp-kyc-inner { max-width:1100px;margin:0 auto;display:grid;grid-template-columns:1fr 380px;gap:72px;align-items:center; }
  .lp-kyc-grid { display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:0; }
  .lp-kyc-card { border:1px solid var(--border);border-radius:var(--radius);padding:22px;position:relative;transition:all .2s; }
  .lp-kyc-card:not(.featured) { background:var(--surface); }
  .lp-kyc-card.featured { background:var(--ink);border-color:var(--ink); }
  .lp-kyc-card:hover { transform:translateY(-2px);box-shadow:var(--shadow); }
  .lp-kyc-pill { position:absolute;top:14px;right:14px;font-size:10px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:3px 8px;border-radius:100px; }
  .lp-kyc-pill-basic { background:var(--surface-3);color:var(--ink-faint); }
  .lp-kyc-pill-popular { background:var(--accent-light);color:var(--accent); }
  .lp-kyc-pill-premium { background:#FEF3C7;color:#B45309; }
  .lp-kyc-tier { font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-faint);margin-bottom:5px; }
  .lp-kyc-card.featured .lp-kyc-tier { color:rgba(255,255,255,.3); }
  .lp-kyc-limit { font-family:'DM Serif Display',serif;font-size:24px;letter-spacing:-.2px;color:var(--ink);margin-bottom:3px; }
  .lp-kyc-card.featured .lp-kyc-limit { color:white; }
  .lp-kyc-limit-sub { font-size:11px;color:var(--ink-faint);margin-bottom:18px; }
  .lp-kyc-card.featured .lp-kyc-limit-sub { color:rgba(255,255,255,.28); }
  .lp-kyc-reqs { display:flex;flex-direction:column;gap:7px; }
  .lp-kyc-req { display:flex;gap:8px;align-items:center;font-size:12px;color:var(--ink-muted); }
  .lp-kyc-card.featured .lp-kyc-req { color:rgba(255,255,255,.5); }
  .lp-kyc-req-dot { width:4px;height:4px;border-radius:50%;background:var(--accent);flex-shrink:0; }
  .lp-kyc-card.featured .lp-kyc-req-dot { background:#34D399; }

  /* USE CASES */
  .lp-use { padding:88px 40px;background:var(--surface-2); }
  .lp-use-grid { display:grid;grid-template-columns:repeat(2,1fr);gap:18px;margin-top:52px; }
  .lp-use-card { background:white;border:1px solid var(--border);border-radius:var(--radius);padding:26px;display:flex;gap:18px;align-items:flex-start;transition:all .2s; }
  .lp-use-card:hover { box-shadow:var(--shadow);transform:translateY(-2px);border-color:#BBF7D0; }
  .lp-use-icon { width:46px;height:46px;border-radius:var(--radius-sm);display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0; }
  .lp-use-title { font-family:'DM Serif Display',serif;font-size:17px;color:var(--ink);margin-bottom:6px; }
  .lp-use-desc { font-size:14px;line-height:1.65;color:var(--ink-muted); }

  /* TESTI */
  .lp-testi { padding:88px 40px; }
  .lp-testi-grid { display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:52px; }
  .lp-testi-card { background:white;border:1px solid var(--border);border-radius:var(--radius);padding:24px; }
  .lp-stars { display:flex;gap:2px;margin-bottom:14px; }
  .lp-star { font-size:14px;color:#F59E0B; }
  .lp-testi-text { font-size:14px;line-height:1.72;color:var(--ink-muted);font-style:italic;margin-bottom:18px; }
  .lp-testi-author { display:flex;align-items:center;gap:10px; }
  .lp-testi-av { width:34px;height:34px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;color:white;flex-shrink:0; }
  .lp-testi-name { font-size:13px;font-weight:600;color:var(--ink); }
  .lp-testi-role { font-size:11px;color:var(--ink-faint);margin-top:1px; }

  /* FAQ */
  .lp-faq { background:white;padding:88px 40px; }
  .lp-faq-list { max-width:680px;margin:52px auto 0; }
  .lp-faq-item { border-bottom:1px solid var(--border); }
  .lp-faq-q { width:100%;background:none;border:none;cursor:pointer;display:flex;justify-content:space-between;align-items:center;text-align:left;gap:16px;padding:22px 0;font-family:'DM Serif Display',serif;font-size:17px;color:var(--ink); }
  .lp-faq-icon { width:26px;height:26px;border-radius:50%;background:var(--surface-2);display:flex;align-items:center;justify-content:center;font-size:16px;color:var(--ink-muted);flex-shrink:0;transition:all .2s; }
  .lp-faq-icon.open { background:var(--accent);color:white;transform:rotate(45deg); }
  .lp-faq-a { font-size:14px;line-height:1.75;color:var(--ink-muted);max-height:0;overflow:hidden;transition:max-height .3s ease,padding-bottom .2s; }
  .lp-faq-a.open { max-height:320px;padding-bottom:22px; }

  /* CTA */
  .lp-cta { background:var(--ink);padding:100px 40px;position:relative;overflow:hidden; }
  .lp-cta-glow { position:absolute;inset:0;background:radial-gradient(ellipse at 50% 100%,rgba(26,107,74,.18) 0%,transparent 70%);pointer-events:none; }
  .lp-cta-inner { max-width:560px;margin:0 auto;text-align:center;position:relative;z-index:2; }
  .lp-cta .lp-section-title { color:white; }
  .lp-cta-sub { font-size:17px;line-height:1.7;color:rgba(255,255,255,.42);margin-bottom:36px; }
  .lp-cta-actions { display:flex;gap:12px;justify-content:center;flex-wrap:wrap; }
  .lp-cta-note { margin-top:18px;font-size:12px;color:rgba(255,255,255,.2); }

  /* FOOTER */
  .lp-footer { background:#0D1117;padding:56px 40px 32px;border-top:1px solid rgba(255,255,255,.05); }
  .lp-footer-inner { max-width:1100px;margin:0 auto; }
  .lp-footer-top { display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:48px;margin-bottom:48px; }
  .lp-footer-brand { font-family:'DM Serif Display',serif;font-size:20px;color:white;margin-bottom:12px;display:flex;align-items:center;gap:6px; }
  .lp-footer-brand-dot { width:6px;height:6px;border-radius:50%;background:var(--accent);display:inline-block; }
  .lp-footer-tagline { font-size:13px;line-height:1.65;color:rgba(255,255,255,.28);max-width:240px;margin-bottom:20px; }
  .lp-footer-socials { display:flex;gap:8px; }
  .lp-footer-social { width:32px;height:32px;border-radius:8px;background:rgba(255,255,255,.045);border:1px solid rgba(255,255,255,.07);display:flex;align-items:center;justify-content:center;font-size:13px;cursor:pointer;transition:all .15s;color:rgba(255,255,255,.3);text-decoration:none; }
  .lp-footer-social:hover { background:rgba(255,255,255,.1);color:white; }
  .lp-footer-col-title { font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.2);margin-bottom:14px; }
  .lp-footer-links { list-style:none;display:flex;flex-direction:column;gap:9px; }
  .lp-footer-links a { font-size:13px;color:rgba(255,255,255,.38);text-decoration:none;transition:color .15s; }
  .lp-footer-links a:hover { color:rgba(255,255,255,.72); }
  .lp-footer-bottom { border-top:1px solid rgba(255,255,255,.06);padding-top:22px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px; }
  .lp-footer-copy { font-size:12px;color:rgba(255,255,255,.18); }
  .lp-footer-legal { display:flex;gap:18px; }
  .lp-footer-legal a { font-size:12px;color:rgba(255,255,255,.18);text-decoration:none;transition:color .15s; }
  .lp-footer-legal a:hover { color:rgba(255,255,255,.5); }

  /* RESPONSIVE */
  @media(max-width:960px) {
    .lp-hero-inner,.lp-escrow-inner,.lp-kyc-inner { grid-template-columns:1fr; }
    .lp-hero-visual { display:none; }
    .lp-role-split,.lp-flow-grid,.lp-screen-grid { grid-template-columns:1fr; }
    .lp-why-grid,.lp-kyc-grid,.lp-testi-grid { grid-template-columns:1fr; }
    .lp-use-grid { grid-template-columns:1fr; }
    .lp-nav-links { display:none; }
    .lp-footer-top { grid-template-columns:1fr 1fr; }
    .lp-hero-roles { grid-template-columns:1fr; }
  }
  @media(max-width:600px) {
    .lp-nav,.lp-section,.lp-how,.lp-screen-section,.lp-escrow,.lp-kyc,.lp-use,.lp-testi,.lp-faq,.lp-cta,.lp-footer,.lp-proof { padding-left:20px;padding-right:20px; }
    .lp-hero { padding:72px 20px 0; }
    .lp-hero-actions { flex-direction:column;align-items:flex-start; }
    .lp-cta-actions { flex-direction:column;align-items:center; }
    .lp-footer-top { grid-template-columns:1fr;gap:28px; }
  }
`;

const FAQS = [
  { q: "How does escrow protect both parties?", a: "The buyer's payment is held by Trustlink — not the seller — from the moment of funding. The seller is guaranteed payment exists before they ship. The buyer is guaranteed nothing is released until they confirm delivery. Neither side can act unilaterally." },
  { q: "What happens if there's a dispute?", a: "Either party can raise a dispute before funds are released. Trustlink's team reviews evidence from both sides — photos, messages, delivery records — and makes a fair ruling within 48 hours. Funds remain locked until the case is resolved." },
  { q: "How do KYC tiers work?", a: "Tier 1 (BVN) activates instantly and lets both buyers and sellers transact up to ₦50,000. Tier 2 (BVN + Government ID) raises limits to ₦500,000. Tier 3 (adds a liveness check) unlocks ₦5,000,000. Upgrading takes under 2 minutes." },
  { q: "How quickly do sellers get paid after delivery?", a: "Once the buyer confirms delivery, funds enter a 24-hour security hold — a final window for the buyer to raise any concerns. After that, payment clears to the seller's Trustlink wallet automatically. No chasing, no waiting." },
  { q: "Can a buyer just claim non-delivery to get a refund?", a: "No. Trustlink's dispute process requires evidence from both sides. Sellers can submit proof of shipping, tracking numbers, photos of dispatch, and delivery confirmations. Baseless claims are rejected. Both sides are accountable." },
  { q: "What does Trustlink charge?", a: "A flat 1.5% fee on each transaction, paid by the buyer at the time of funding. No monthly fees, listing fees, or withdrawal fees. The fee covers escrow infrastructure, Paystack processing, KYC verification, and dispute resolution." },
];

const TESTIMONIALS = [
  { text: "I used to turn down high-value orders from people I didn't know online. Now I send a Trustlink link and my buyers fund escrow before I pack anything. My revenue has doubled in four months.", name: "Adaeze N.", role: "Electronics Vendor · Lagos", color: "#1A6B4A", initial: "A" },
  { text: "I paid ₦280k for a laptop from someone I met on Twitter. Had no way to verify him. Used Trustlink. Item arrived exactly as described and funds were released same day. It worked perfectly.", name: "Emeka R.", role: "Buyer · Port Harcourt", color: "#7C3AED", initial: "E" },
  { text: "I've lost money to clients who disappeared after delivery. Now I don't start a single line of work until the escrow is funded. Trustlink made that the default for all my client relationships.", name: "Chidi O.", role: "Freelance Developer · Abuja", color: "#0369A1", initial: "C" },
];

export default function TrustlinkLanding() {
  const [openFaq, setOpenFaq] = useState(null);
  return (
    <>
      <style>{CSS}</style>

      {/* ── NAV ── */}
      <nav className="lp-nav">
        <div className="lp-nav-inner">
          <a href="#" className="lp-brand">
            <span className="lp-brand-serif">Trust</span><span style={{ color: "var(--accent)" }}>link</span>
            <div className="lp-brand-dot" />
          </a>
          <ul className="lp-nav-links">
            <li><a href="#how">How it works</a></li>
            <li><a href="#for-you">For sellers & buyers</a></li>
            <li><a href="#limits">KYC & Limits</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
          <div className="lp-nav-cta">
            <button className="lp-btn-ghost">Sign in</button>
            <button className="lp-btn-primary">Get started →</button>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="lp-hero">
        <div className="lp-hero-grain" />
        <div className="lp-hero-glow" />
        <div className="lp-hero-inner">
          <div>
            <div className="lp-eyebrow-pill">
              <span className="lp-eyebrow-dot" />
              Secure escrow · Nigeria & West Africa
            </div>
            <h1 className="lp-h1">
              Trade online with<br /><em>total confidence.</em>
            </h1>
            <p className="lp-hero-sub">
              Trustlink holds funds in escrow until both sides are satisfied. Sellers get paid. Buyers get protected. Every time.
            </p>

            {/* ROLE CARDS */}
            <div className="lp-hero-roles">
              <div className="lp-role-card">
                <div className="lp-role-label">For Sellers</div>
                <div className="lp-role-title">Create a link. Get paid safely.</div>
                <div className="lp-role-desc">Generate an escrow link in seconds. Share it anywhere. Funds are locked before you ship.</div>
              </div>
              <div className="lp-role-card">
                <div className="lp-role-label">For Buyers</div>
                <div className="lp-role-title">Pay only when you're happy.</div>
                <div className="lp-role-desc">Fund escrow via Paystack. Your money is held by Trustlink — released only when you confirm delivery.</div>
              </div>
            </div>

            <div className="lp-hero-actions">
              <button className="lp-btn-cta">Get started free →</button>
              <button className="lp-btn-cta-ghost">See how it works</button>
            </div>
          </div>

          {/* Hero card mockup */}
          <div className="lp-hero-visual">
            <div className="lp-float-1">
              <div className="lp-float-1-icon">✅</div>
              <div>
                <div className="lp-float-1-label">Delivery confirmed</div>
                <div className="lp-float-1-val">Funds released</div>
              </div>
            </div>
            <div className="lp-hcard">
              <div className="lp-hcard-header">
                <div className="lp-hcard-ref">TXN-38291</div>
                <div className="lp-hcard-status"><div className="lp-hcard-status-dot" />In Escrow</div>
              </div>
              <div className="lp-hcard-amount">₦150,000</div>
              <div className="lp-hcard-sublabel">Held securely by Trustlink</div>
              <div className="lp-hcard-parties">
                <div className="lp-hcard-party">
                  <div className="lp-hcard-party-role">Seller</div>
                  <div className="lp-hcard-party-name">Adaeze N.</div>
                  <div className="lp-hcard-party-badge">Verified · Tier 2</div>
                </div>
                <div className="lp-hcard-arrow">→</div>
                <div className="lp-hcard-party">
                  <div className="lp-hcard-party-role">Buyer</div>
                  <div className="lp-hcard-party-name">Seun M.</div>
                  <div className="lp-hcard-party-badge">Verified · Tier 1</div>
                </div>
              </div>
              <div className="lp-hcard-steps">
                {[
                  { text: "Transaction created", s: "done" },
                  { text: "Buyer funded escrow", s: "done" },
                  { text: "Awaiting delivery confirmation", s: "active" },
                  { text: "Funds released to seller", s: "pending" },
                ].map((step, i) => (
                  <div key={i} className="lp-hcard-step">
                    <div className={`lp-hc-dot lp-hc-${step.s}`}>{step.s === "done" ? "✓" : i + 1}</div>
                    <div className={`lp-hc-text lp-hc-text-${step.s}`}>{step.text}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lp-float-2">
              <div className="lp-float-2-icon">🔗</div>
              <div>
                <div className="lp-float-2-val">trustlink.app/t/xk8m2j</div>
                <div className="lp-float-2-sub">Shareable transaction link</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROOF ── */}
      <div className="lp-proof">
        <div className="lp-proof-inner">
          <span className="lp-proof-label">Used by traders on</span>
          <div className="lp-proof-divider" />
          <div className="lp-proof-logos">
            {["Instagram", "WhatsApp", "Twitter / X", "Jiji.ng", "TikTok", "Facebook"].map(l => (
              <span key={l} className="lp-proof-logo">{l}</span>
            ))}
          </div>
          <div className="lp-proof-stats">
            {[{ val: "₦2.4B+", label: "Transacted safely" }, { val: "18,000+", label: "Verified users" }, { val: "99.6%", label: "Resolution rate" }].map(s => (
              <div key={s.label}>
                <div className="lp-proof-stat-val">{s.val}</div>
                <div className="lp-proof-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── HOW IT WORKS ── */}
      <section className="lp-how" id="how">
        <div className="lp-how-inner">
          <div style={{ textAlign: "center", maxWidth: 540, margin: "0 auto" }}>
            <div className="lp-eyebrow" style={{ justifyContent: "center" }}><span className="lp-eyebrow-line" />How it works</div>
            <div className="lp-section-title">One flow. Protection for everyone.</div>
            <div className="lp-section-sub center">The same transaction protects both sides simultaneously — no one has to trust a stranger.</div>
          </div>

          <div className="lp-flow-grid" style={{ marginTop: 52 }}>
            {/* SELLER FLOW */}
            <div>
              <div className="lp-flow-label">If you're selling</div>
              <div className="lp-flow-steps">
                {[
                  { icon: "➕", title: "Create a transaction", desc: "Name your item, set the price and delivery window. Takes under a minute." },
                  { icon: "🔗", title: "Share your link", desc: "Send the escrow URL to your buyer — via WhatsApp, Instagram DM, or any channel." },
                  { icon: "📦", title: "Ship when funded", desc: "You're notified the moment escrow is funded. Only then do you ship or deliver." },
                  { icon: "💰", title: "Get paid automatically", desc: "Once the buyer confirms receipt, your payment clears to your wallet within 24 hours." },
                ].map((s, i) => (
                  <div key={i} className="lp-flow-step">
                    <div className="lp-flow-step-left">
                      <div className="lp-flow-step-circle">{s.icon}</div>
                      {i < 3 && <div className="lp-flow-step-line" />}
                    </div>
                    <div className="lp-flow-step-body">
                      <div className="lp-flow-step-title">{s.title}</div>
                      <div className="lp-flow-step-desc">{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* BUYER FLOW */}
            <div>
              <div className="lp-flow-label">If you're buying</div>
              <div className="lp-flow-steps">
                {[
                  { icon: "🔗", title: "Open the seller's link", desc: "The seller sends you a Trustlink URL. Open it to see the full item details and fee breakdown." },
                  { icon: "💳", title: "Fund escrow via Paystack", desc: "Pay securely. Your money goes to Trustlink's escrow account — not to the seller yet." },
                  { icon: "📦", title: "Receive your item", desc: "The seller ships knowing payment is secured. You get your item within the agreed window." },
                  { icon: "✅", title: "Confirm and release", desc: "Happy with the delivery? Confirm receipt. Funds are released to the seller automatically." },
                ].map((s, i) => (
                  <div key={i} className="lp-flow-step">
                    <div className="lp-flow-step-left">
                      <div className="lp-flow-step-circle">{s.icon}</div>
                      {i < 3 && <div className="lp-flow-step-line" />}
                    </div>
                    <div className="lp-flow-step-body">
                      <div className="lp-flow-step-title">{s.title}</div>
                      <div className="lp-flow-step-desc">{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOR SELLERS & BUYERS (ROLE SPLIT WITH MOCKUPS) ── */}
      <section className="lp-section" id="for-you" style={{ background: "var(--surface)" }}>
        <div className="lp-container">
          <div style={{ textAlign: "center", maxWidth: 520, margin: "0 auto" }}>
            <div className="lp-eyebrow" style={{ justifyContent: "center" }}><span className="lp-eyebrow-line" />For sellers & buyers</div>
            <div className="lp-section-title">Built to benefit both sides of the deal</div>
            <div className="lp-section-sub center">Trustlink works because it's genuinely fair — sellers get certainty, buyers get protection.</div>
          </div>

          <div className="lp-role-split">
            {/* SELLER PANEL */}
            <div className="lp-role-panel">
              <div className="lp-role-panel-header" style={{ background: "#F0FDF4" }}>
                <div className="lp-role-panel-tag" style={{ background: "#D1FAE5", color: "#065F46" }}>
                  <span>🏷️</span> For sellers
                </div>
                <div className="lp-role-panel-title">Close deals with confidence</div>
                <div className="lp-role-panel-desc">You've shipped to strangers and lost money. Trustlink makes payment a guarantee, not a hope.</div>
                <div className="lp-role-perks">
                  {[
                    "Payment locked in escrow before you ship a single item",
                    "No more buyers who go silent after delivery",
                    "Shareable link works on WhatsApp, Instagram, Twitter — anywhere you sell",
                    "Dispute system protects you from bad-faith claims",
                    "Funds clear to your wallet within 24 hours of confirmation",
                  ].map((p, i) => (
                    <div key={i} className="lp-role-perk">
                      <div className="lp-role-perk-check" style={{ background: "#D1FAE5", color: "#1A6B4A" }}>✓</div>
                      {p}
                    </div>
                  ))}
                </div>
              </div>
              <div className="lp-role-panel-screen">
                <div style={{ fontSize: 11, fontWeight: 600, color: "var(--ink-muted)", marginBottom: 10, letterSpacing: ".05em", textTransform: "uppercase" }}>Your dashboard</div>
                <DashboardMockup />
              </div>
            </div>

            {/* BUYER PANEL */}
            <div className="lp-role-panel">
              <div className="lp-role-panel-header" style={{ background: "#EFF6FF" }}>
                <div className="lp-role-panel-tag" style={{ background: "#DBEAFE", color: "#1E40AF" }}>
                  <span>🛒</span> For buyers
                </div>
                <div className="lp-role-panel-title">Buy from anyone, worry-free</div>
                <div className="lp-role-panel-desc">You've sent money to strangers and never seen your item. That ends with Trustlink.</div>
                <div className="lp-role-perks">
                  {[
                    "Your payment never touches the seller until you confirm delivery",
                    "Full fee breakdown shown before you pay — no surprises",
                    "Raise a dispute if item doesn't match description or never arrives",
                    "Works for any purchase: gadgets, fashion, freelance work, or services",
                    "Paystack-secured payment process you already know and trust",
                  ].map((p, i) => (
                    <div key={i} className="lp-role-perk">
                      <div className="lp-role-perk-check" style={{ background: "#DBEAFE", color: "#1D4ED8" }}>✓</div>
                      {p}
                    </div>
                  ))}
                </div>
              </div>
              <div className="lp-role-panel-screen">
                <div style={{ fontSize: 11, fontWeight: 600, color: "var(--ink-muted)", marginBottom: 10, letterSpacing: ".05em", textTransform: "uppercase" }}>What a buyer sees</div>
                <ShareLinkMockup title="iPhone 14 Pro Max 256GB" amount="₦45,000" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCT SCREENSHOTS ── */}
      <section className="lp-screen-section">
        <div className="lp-screen-inner">
          <div style={{ textAlign: "center", maxWidth: 520, margin: "0 auto" }}>
            <div className="lp-eyebrow" style={{ justifyContent: "center" }}><span className="lp-eyebrow-line" />The product</div>
            <div className="lp-section-title">Designed to be simple for everyone</div>
            <div className="lp-section-sub center">Every screen is built around trust, clarity, and getting out of the way.</div>
          </div>

          <div className="lp-screen-grid">
            <div className="lp-screen-card">
              <div>
                <div className="lp-screen-label">Transaction tracking</div>
                <div className="lp-screen-title">Live status on every deal</div>
                <div className="lp-screen-desc">Both parties see the same transaction timeline in real time — from creation to escrow funding to delivery and release. No ambiguity, no miscommunication.</div>
              </div>
              <BrowserFrame url="trustlink.app/txn/TXN-38291">
                <div style={{ padding: "16px" }}>
                  <TxnCardMockup
                    title="iPhone 14 Pro Max 256GB"
                    amount="₦150,000"
                    status="funded"
                    ref_="TXN-38291"
                    seller="Adaeze N."
                    buyer="Seun M."
                    step={1}
                  />
                </div>
              </BrowserFrame>
            </div>

            <div className="lp-screen-card">
              <div>
                <div className="lp-screen-label">Wallet & payouts</div>
                <div className="lp-screen-title">Your balance, always clear</div>
                <div className="lp-screen-desc">Track your available balance, funds in escrow, and pending receipts in one place. Top up, withdraw to your bank account, and see a full history of every transaction.</div>
              </div>
              <BrowserFrame url="trustlink.app/wallet">
                <div style={{ padding: "16px" }}>
                  <WalletMockup />
                </div>
              </BrowserFrame>
            </div>

            <div className="lp-screen-card">
              <div>
                <div className="lp-screen-label">KYC verification</div>
                <div className="lp-screen-title">Upgrade in under 2 minutes</div>
                <div className="lp-screen-desc">Add your BVN for instant Tier 1 access. Unlock higher limits with a Government ID or liveness check. The process is clear, fast, and completely in-app.</div>
              </div>
              <BrowserFrame url="trustlink.app/kyc">
                <div style={{ padding: "16px" }}>
                  <KycMockup />
                </div>
              </BrowserFrame>
            </div>
          </div>
        </div>
      </section>

      {/* ── ESCROW EXPLAINER ── */}
      <section className="lp-escrow">
        <div className="lp-escrow-inner">
          <div className="lp-esc-diagram">
            <div className="lp-esc-bg" />
            <div className="lp-esc-flow">
              <div className="lp-esc-node">
                <div className="lp-esc-icon" style={{ background: "rgba(29,78,216,.14)" }}>💳</div>
                <div><div className="lp-esc-title">Buyer deposits funds</div><div className="lp-esc-sub">Payment via Paystack</div></div>
                <div className="lp-esc-tag lp-esc-tag-pending">Paid</div>
              </div>
              <div className="lp-esc-connector"><div className="lp-esc-arrow">↓</div></div>
              <div className="lp-esc-node mid">
                <div className="lp-esc-icon" style={{ background: "rgba(26,107,74,.22)" }}>🔒</div>
                <div><div className="lp-esc-title">Trustlink Escrow</div><div className="lp-esc-sub">Funds locked · Neither party can access</div></div>
                <div className="lp-esc-tag lp-esc-tag-hold">Protected</div>
              </div>
              <div className="lp-esc-connector"><div className="lp-esc-arrow">↓</div></div>
              <div className="lp-esc-node">
                <div className="lp-esc-icon" style={{ background: "rgba(16,185,129,.14)" }}>🎉</div>
                <div><div className="lp-esc-title">Seller receives payment</div><div className="lp-esc-sub">Released after buyer confirms delivery</div></div>
                <div className="lp-esc-tag lp-esc-tag-done">Released</div>
              </div>
            </div>
          </div>
          <div>
            <div className="lp-eyebrow"><span className="lp-eyebrow-line" />How escrow works</div>
            <div className="lp-section-title">A neutral account that serves both sides</div>
            <p style={{ fontSize: 15, lineHeight: 1.72, color: "var(--ink-muted)", marginBottom: 28 }}>
              Escrow is a neutral holding account between buyer and seller. Neither party can access the funds unilaterally — the seller can't take the money without delivering, and the buyer can't reclaim it without a valid dispute. The mechanism is fair by design.
            </p>
            <div className="lp-esc-feats">
              {[
                { title: "Sellers: ship with certainty", body: "Payment exists and is locked before you move a single product." },
                { title: "Buyers: pay without fear", body: "Your money can't reach the seller until you confirm delivery." },
                { title: "Disputes are mediated fairly", body: "Both sides submit evidence. A neutral team reviews and rules." },
                { title: "Full audit trail on every deal", body: "Every action is logged and visible to both parties in real time." },
              ].map((f, i) => (
                <div key={i} className="lp-esc-feat">
                  <div className="lp-esc-feat-check">✓</div>
                  <div className="lp-esc-feat-text"><strong>{f.title}.</strong> {f.body}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY TRUSTLINK ── */}
      <section className="lp-section" style={{ background: "var(--surface-2)" }}>
        <div className="lp-container">
          <div className="lp-eyebrow"><span className="lp-eyebrow-line" />Why Trustlink</div>
          <div className="lp-section-title">The trust layer Nigeria's online trade was missing</div>
          <div className="lp-section-sub">Billions lost to online fraud every year. Trustlink closes the gap between buyers and sellers who don't yet know each other.</div>
          <div className="lp-why-grid">
            {[
              { icon: "🔐", title: "Money is never at risk", desc: "Funds sit in a protected escrow account — accessible to neither party — until both sides fulfil their obligations." },
              { icon: "⚖️", title: "Fair dispute resolution", desc: "If something goes wrong, our team reviews evidence from both parties and makes an impartial ruling within 48 hours." },
              { icon: "🔗", title: "One link does everything", desc: "No bank details shared. No awkward conversations. The seller sends a URL. The buyer pays through Trustlink." },
              { icon: "📱", title: "Works where you already sell", desc: "Instagram, WhatsApp, Twitter, Jiji — share your link on any platform. Trustlink fits your existing workflow." },
              { icon: "⚡", title: "No manual payout requests", desc: "Buyer confirms, 24-hour hold clears, and your wallet is credited. Sellers never have to chase a payment." },
              { icon: "🪪", title: "Verified on both sides", desc: "Every user goes through KYC before transacting. That alone filters out most bad actors before a deal even starts." },
            ].map((c, i) => (
              <div key={i} className="lp-why-card">
                <div className="lp-why-icon">{c.icon}</div>
                <div className="lp-why-title">{c.title}</div>
                <div className="lp-why-desc">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KYC TIERS ── */}
      <section className="lp-kyc" id="limits">
        <div className="lp-kyc-inner">
          <div>
            <div className="lp-eyebrow"><span className="lp-eyebrow-line" />Transaction limits</div>
            <div className="lp-section-title">Start now. Scale as you trade.</div>
            <div className="lp-section-sub" style={{ marginBottom: 32 }}>Both buyers and sellers start at Tier 1 with no setup required. Verify further to unlock higher limits — for both sides of the deal.</div>
            <div className="lp-kyc-grid">
              {[
                { tier: "Tier 1", limit: "₦50,000", sub: "per transaction", pill: "lp-kyc-pill-basic", pillLabel: "Starter", reqs: ["BVN verification", "Email & phone", "Activates instantly"], featured: false },
                { tier: "Tier 2", limit: "₦500,000", sub: "per transaction", pill: "lp-kyc-pill-popular", pillLabel: "Popular", reqs: ["BVN + Government ID", "NIN, Passport, or Licence", "Verified in minutes"], featured: true },
                { tier: "Tier 3", limit: "₦5,000,000", sub: "per transaction", pill: "lp-kyc-pill-premium", pillLabel: "High volume", reqs: ["BVN + ID + Liveness", "Quick selfie check", "Full platform access"], featured: false },
              ].map((t, i) => (
                <div key={i} className={`lp-kyc-card${t.featured ? " featured" : ""}`}>
                  <div className={`lp-kyc-pill ${t.pill}`}>{t.pillLabel}</div>
                  <div className="lp-kyc-tier">{t.tier}</div>
                  <div className="lp-kyc-limit">{t.limit}</div>
                  <div className="lp-kyc-limit-sub">{t.sub}</div>
                  <div className="lp-kyc-reqs">
                    {t.reqs.map((r, j) => <div key={j} className="lp-kyc-req"><div className="lp-kyc-req-dot" />{r}</div>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Interactive KYC mockup */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 600, color: "var(--ink-muted)", marginBottom: 12, letterSpacing: ".05em", textTransform: "uppercase" }}>Live preview — click through</div>
            <KycMockup />
          </div>
        </div>
      </section>

      {/* ── USE CASES ── */}
      <section className="lp-use">
        <div className="lp-container">
          <div className="lp-eyebrow"><span className="lp-eyebrow-line" />Who uses Trustlink</div>
          <div className="lp-section-title">For every kind of online deal</div>
          <div className="lp-section-sub">From a ₦15k sneaker to a ₦5M equipment contract — if two parties are transacting online, Trustlink makes it safe for both.</div>
          <div className="lp-use-grid">
            {[
              { icon: "📱", bg: "#E8F5EE", title: "Social media vendors & buyers", desc: "Instagram and WhatsApp transactions work on reputation and trust. Trustlink makes that trust concrete — sellers get payment certainty, buyers get delivery protection, on every order." },
              { icon: "💻", bg: "#EFF6FF", title: "Freelancers & their clients", desc: "Designers, developers, writers — get paid before you start. Clients — know your money is safe until you approve the deliverable. Neither party is left exposed." },
              { icon: "🛒", bg: "#FFF7ED", title: "Marketplace & classifieds deals", desc: "Buying on Jiji, Facebook Marketplace, or forums? The seller wants assurance they'll get paid. The buyer wants assurance they'll get the item. Trustlink solves both at once." },
              { icon: "🏷️", bg: "#F5F3FF", title: "High-value peer-to-peer trades", desc: "Laptops, cameras, luxury goods, business equipment. When the stakes are high and the parties are strangers, escrow isn't optional — it's the responsible default for everyone involved." },
            ].map((u, i) => (
              <div key={i} className="lp-use-card">
                <div className="lp-use-icon" style={{ background: u.bg }}>{u.icon}</div>
                <div>
                  <div className="lp-use-title">{u.title}</div>
                  <div className="lp-use-desc">{u.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="lp-testi">
        <div className="lp-container">
          <div style={{ textAlign: "center", maxWidth: 480, margin: "0 auto" }}>
            <div className="lp-eyebrow" style={{ justifyContent: "center" }}><span className="lp-eyebrow-line" />Testimonials</div>
            <div className="lp-section-title">Both sides of the deal love it</div>
          </div>
          <div className="lp-testi-grid">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="lp-testi-card">
                <div className="lp-stars">{Array(5).fill(0).map((_, j) => <span key={j} className="lp-star">★</span>)}</div>
                <div className="lp-testi-text">{t.text}</div>
                <div className="lp-testi-author">
                  <div className="lp-testi-av" style={{ background: t.color }}>{t.initial}</div>
                  <div><div className="lp-testi-name">{t.name}</div><div className="lp-testi-role">{t.role}</div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="lp-faq" id="faq">
        <div className="lp-container">
          <div style={{ textAlign: "center", maxWidth: 480, margin: "0 auto" }}>
            <div className="lp-eyebrow" style={{ justifyContent: "center" }}><span className="lp-eyebrow-line" />FAQ</div>
            <div className="lp-section-title">Common questions</div>
            <div className="lp-section-sub center">From both sellers and buyers.</div>
          </div>
          <div className="lp-faq-list">
            {FAQS.map((faq, i) => (
              <div key={i} className="lp-faq-item">
                <button className="lp-faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  {faq.q}
                  <div className={`lp-faq-icon${openFaq === i ? " open" : ""}`}>+</div>
                </button>
                <div className={`lp-faq-a${openFaq === i ? " open" : ""}`}>{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="lp-cta">
        <div className="lp-cta-glow" />
        <div className="lp-cta-inner">
          <div className="lp-eyebrow" style={{ justifyContent: "center", color: "#6EE7B7" }}>
            <span className="lp-eyebrow-line" style={{ background: "#6EE7B7" }} />
            Get started
          </div>
          <div className="lp-section-title" style={{ color: "white" }}>Trade safely.<br />Every time.</div>
          <p className="lp-cta-sub">Whether you're selling your next product or buying from a stranger online — Trustlink makes the deal safe for both of you.</p>
          <div className="lp-cta-actions">
            <button className="lp-btn-cta" style={{ padding: "14px 28px", fontSize: 15 }}>Create a free account →</button>
            <button className="lp-btn-cta-ghost" style={{ padding: "14px 24px", fontSize: 14 }}>See how it works</button>
          </div>
          <div className="lp-cta-note">Free to join · No hidden fees · Tier 1 activates instantly</div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="lp-footer">
        <div className="lp-footer-inner">
          <div className="lp-footer-top">
            <div>
              <div className="lp-footer-brand">Trustlink <span className="lp-footer-brand-dot" /></div>
              <div className="lp-footer-tagline">Secure peer-to-peer escrow for Nigeria and West Africa.</div>
              <div className="lp-footer-socials">
                {["𝕏", "in", "ig", "▶"].map((s, i) => <a key={i} href="#" className="lp-footer-social">{s}</a>)}
              </div>
            </div>
            <div>
              <div className="lp-footer-col-title">Product</div>
              <ul className="lp-footer-links">
                {["How it works", "For sellers", "For buyers", "Pricing", "KYC & Limits", "Disputes"].map(l => <li key={l}><a href="#">{l}</a></li>)}
              </ul>
            </div>
            <div>
              <div className="lp-footer-col-title">Company</div>
              <ul className="lp-footer-links">
                {["About us", "Blog", "Careers", "Press", "Contact"].map(l => <li key={l}><a href="#">{l}</a></li>)}
              </ul>
            </div>
            <div>
              <div className="lp-footer-col-title">Support</div>
              <ul className="lp-footer-links">
                {["Help Centre", "WhatsApp Support", "Report Fraud", "API Docs", "Status Page"].map(l => <li key={l}><a href="#">{l}</a></li>)}
              </ul>
            </div>
          </div>
          <div className="lp-footer-bottom">
            <div className="lp-footer-copy">© {new Date().getFullYear()} Trustlink Technologies Ltd. All rights reserved.</div>
            <div className="lp-footer-legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}