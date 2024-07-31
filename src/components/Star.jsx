export default function Star() {
  const randomDelay = Math.random() + "s";
  return (
    <span class="relative flex h-[6px] w-[6px]">
      <span
        style={{ animationDelay: randomDelay }}
        class={`animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-200 opacity-75`}
      ></span>
      <span class="relative inline-flex h-[6px] w-[6px] bg-amber-200 opacity-30"></span>
    </span>
  );
}
