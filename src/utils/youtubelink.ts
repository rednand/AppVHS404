export const getYouTubeEmbedUrl = (trailer: string) => {
    if (trailer.includes('youtube.com')) {
        const urlObj = new URL(trailer);
        const videoId = urlObj.searchParams.get('v');
        return `https://www.youtube.com/embed/${videoId}`;
    } else {
        return `https://www.youtube.com/embed/${trailer}`;
    }
};