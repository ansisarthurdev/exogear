export default {
    name: 'banner',
    title: 'Banner',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'largetext',
            title: 'Large Text',
            type: 'string',
        },
        {
            name: 'smalltext',
            title: 'Small Text',
            type: 'string',
        },
        {
            name: 'buttontext',
            title: 'Button Text',
            type: 'string',
        }
    ]
}