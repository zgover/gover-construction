export type MediaObject = {
    src: string,
    alt?: string,
    title?: string, 
}

export type Project = {
    title: string,
    subtitle?: string,
    description?: string,
    media: {
        featured: MediaObject,
        gallery?: Array<MediaObject>
    },
}

export default <Array<Project>> [
    {
        title: 'Sink Remodel',
        media: {
            featured: {
                src: '/projects/IMG_1517.JPG'
            }
        }
    },
    {
        title: 'Custom gate',
        media: {
            featured: {
                src: '/projects/IMG_1502.JPG'
            }
        }
    },
    {
        title: 'Deck build',
        media: {
            featured: {
                src: '/projects/IMG_1518.JPG'
            }
        }
    },
    {
        title: 'Island bar',
        media: {
            featured: {
                src: '/projects/IMG_1503.JPG'
            }
        }
    },
    {
        title: 'Laminate flooring',
        media: {
            featured: {
                src: '/projects/IMG_1508.JPG'
            }
        }
    },
    {
        title: 'Sliding barn door',
        media: {
            featured: {
                src: '/projects/IMG_1512.JPG'
            }
        }
    },
    {
        title: 'Hardwood flooring',
        media: {
            featured: {
                src: '/projects/IMG_1515.JPG'
            }
        }
    },
    {
        title: 'Vessel sink',
        media: {
            featured: {
                src: '/projects/IMG_1516.JPG'
            }
        }
    },
]