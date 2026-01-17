import { Food } from "@/assets";

interface EmptyStateProps {
  message?: string;
}

function EmptyState({
  message = "No menu items found matching your criteria.",
}: EmptyStateProps) {
  return (
    <div className="text-center pb-16 flex flex-col items-center justify-center pt-12 border rounded-md border-neutral-300">
      <img src={Food} alt="Food" className="w-24 h-24" />
      <p className="font-mono text-neutral-500 text-lg mt-4">{message}</p>
    </div>
  );
}

export {EmptyState};