function SectionMarker({ name }: { name: string }) {
  return (
    <div className="flex flex-row items-center justify-center gap-0">
      <p className="ibm-plex-sans-bold font-mono text-neutral-500 px-2inline text-sm font-semibold mr-2">
        {name}
      </p>
      <div className="h-[1px] w-full rounded-br-md rounded-tr-md bg-(--section-marker)"></div>
    </div>
  );
}

export default SectionMarker;