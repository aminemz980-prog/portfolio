"use client";
import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

// Illustrates the final-year project: a Cypress selector breaks, then gets repaired.
const STEPS = [
  { state: "fail", selector: "#btn-submit-v1", note: "Element not found" },
  { state: "heal", selector: "#btn-submit-v1", note: "Searching for a matching element" },
  { state: "pass", selector: '[data-test="submit"]', note: "Selector repaired, test passes" },
] as const;

const color = { fail: "text-red-500 dark:text-red-400", heal: "text-heal", pass: "text-pass" } as const;
const label = { fail: "failed", heal: "healing", pass: "passed" } as const;

export function HealingDemo() {
  const reduced = useReducedMotion();
  const [i, setI] = useState(reduced ? 2 : 0);
  useEffect(() => {
    if (reduced) { setI(2); return; }
    const t = setInterval(() => setI((v) => (v + 1) % STEPS.length), 2200);
    return () => clearInterval(t);
  }, [reduced]);
  const s = STEPS[i];

  return (
    <figure className="rounded-xl border border-line bg-surface p-4 font-mono text-[13px] shadow-sm" aria-label="Illustration of a self-healing Cypress test">
      <figcaption className="mb-3 flex items-center justify-between text-muted">
        <span>checkout.cy.js</span>
        <span className={`font-semibold ${color[s.state]}`} aria-live="polite">{label[s.state]}</span>
      </figcaption>
      <pre className="overflow-x-auto leading-relaxed">
        <code>
          <span className="text-muted">it(&quot;submits the order&quot;, () =&gt; &#123;</span>{"\n"}
          {"  "}cy.get(<span className={`transition-colors ${color[s.state]}`}>{`'${s.selector}'`}</span>).click();{"\n"}
          <span className="text-muted">&#125;);</span>
        </code>
      </pre>
      <p className={`mt-3 border-t border-line pt-3 ${color[s.state]}`}>{s.note}</p>
    </figure>
  );
}
