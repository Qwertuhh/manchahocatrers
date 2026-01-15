interface MenuHeaderProps {
  title: string;
  subtitle: string;
}

function MenuHeader({ title, subtitle }: MenuHeaderProps) {
  return (
    <div className="text-center mb-12">
      <h1 className="wix-madefor-display-bold text-5xl font-bold text-neutral-800 mb-4">
        {title}
      </h1>
      <p className="tangerine-regular text-4xl md:text-6xl text-neutral-600 my-8 questrial-regular">
        {subtitle}
      </p>
    </div>
  );
}

export { MenuHeader };
