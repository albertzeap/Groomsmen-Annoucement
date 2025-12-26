function LoginAnnouncement({ announcement }: { announcement: string }) {
  return (
    <>
      <div className="flex flex-col items-center w-full max-w-md mx-auto">
        <p className="text-xl mb-9">{announcement}</p>
        <p className="text-sm text-muted-foreground">
          You've been considered for a top secret mission involving good times,
          praying when neccessary, Friday night dancing, and so much more. But
          first, who are you? Fill out the fields below and then we can keep
          talking.
        </p>
      </div>
    </>
  );
}

export { LoginAnnouncement };
