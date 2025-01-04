

type ShowAllButtonProps = {
  limit: number;
  totalItems: number;
  increment: number;
  onClick: () => void;
};

const ShowAllButton = ({ limit, totalItems, onClick }: ShowAllButtonProps) => {
  if (limit >= totalItems) return null; // Don't display button if all items are shown.

  return (
    <button
      onClick={onClick}
      className="text-sm text-zinc-400 hover:text-white"
    >
      Show more
    </button>
  );
};

export default ShowAllButton;
