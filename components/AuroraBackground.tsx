/** Fixed, faint grid texture that sits behind the whole site. */
export function AuroraBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(to_right,color-mix(in_oklab,var(--color-brand)_30%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_oklab,var(--color-brand)_30%,transparent)_1px,transparent_1px)] [background-size:38px_38px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
    </div>
  );
}
