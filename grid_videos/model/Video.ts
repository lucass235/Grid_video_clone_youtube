interface Video {
    title: string;
    userCreator: string;
    description: string;
    thumbnail: string;
    videoUrl: string;
    duration?: number;
    views: number;
}
    
export default Video;