type MediaObject = {
    url: string,
    alt: string,
    title: string, 
}

type Project = {
    id: string,
    title: string,
    description: string,
    media: {
        featured: MediaObject,
        gallery: Array<MediaObject>
    },
}

export default <Array<Project>> [
    
]