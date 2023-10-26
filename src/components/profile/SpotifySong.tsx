const SpotifySong = ({ id }: { id: string }) => (
  <iframe
    src={`https://open.spotify.com/embed/track/${id}?utm`}
    width="100%"
    height="152"
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy"
  ></iframe>
);

export default SpotifySong;
