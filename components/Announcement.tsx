function Announcement({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <>
      <div className="flex flex-col items-center w-full max-w-md mx-auto my-2">
        <p className="text-xl mb-9">{title}</p>
        <p className="text-sm ">{description}</p>
      </div>
    </>
  );
}

export { Announcement };
