const getSongIdFromLink = (songLink?: string): string | undefined => {
  if (!songLink) return "";
  try {
    console.log(songLink.split("track/")[1].split("?")[0]);
    return songLink.split("track/")[1].split("?")[0];
  } catch {
    return;
  }
};

export default getSongIdFromLink;
