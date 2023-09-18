export default {
    name: 'workexperiences',
    title: 'WorkExperiences',
    type: 'document',
    fields: [
        {
            name: 'jobTitle',
            title: 'JobTitle',
            type: 'string'
        },
        {
            name: 'companyImage',
            title: 'CompanyImage',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'company',
            title: 'Company',
            type: 'string'
        },
        {
            name: 'dateStarted',
            title: 'DateStarted',
            type: 'date'
        },
        {
            name: 'dateEnded',
            title: 'DateEnded',
            type: 'date'
        },
        {
            name: 'isCurrentlyWorkingHere',
            title: 'IsCurrentlyWorkingHere',
            type: 'boolean'
        },
        {
            name: 'technologies',
            title: 'Technologies',
            type: 'array',
            of: [{ type: "reference", to: { type: 'skills' } }]
        },
        {
            name: 'achievements',
            title: 'Achievements',
            type: 'array',
            of: [{ type: 'string' }]
        }
    ]
}