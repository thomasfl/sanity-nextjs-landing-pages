export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d1db4cb3d7ea1adc85db4fc',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-bum8zgge',
                  apiId: '31cbf01e-bb47-45cb-b311-85cbd9c8970b'
                },
                {
                  buildHookId: '5d1db4cb9625f73acdcc144c',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-63mi81d6',
                  apiId: 'a0da8501-e2c8-48da-a938-8f82fddcd39d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/thomasfl/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-63mi81d6.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
