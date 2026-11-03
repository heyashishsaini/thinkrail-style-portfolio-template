import type { IconName } from "./IconSprite";

type IconProps = {
  name: IconName;
  filled?: boolean;
  className?: string;
};

/**
 * Icon primitive. All glyphs live in `IconSprite`; the sizing/stroke defaults
 * mirror the app's `svg.i` rule so an icon behaves like a character.
 */
export function Icon({ name, filled = false, className = "" }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={[
        "size-[1em] shrink-0 align-[-0.125em] [stroke-linecap:round] [stroke-linejoin:round]",
        filled ? "fill-current stroke-0" : "fill-none stroke-current [stroke-width:2]",
        className,
      ].join(" ")}
    >
      <use href={`#i-${name}`} />
    </svg>
  );
}
