// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Richard Middleton',
  titleTemplate: 'Richard Middleton | Python Developer',
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: []
    }
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'resume/skills/*.md',
        typeName: 'Skills'
      }
    }, {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'resume/education/*.md',
        typeName: 'Education'
      }
    }, {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'resume/work_history/*.md',
        typeName: 'WorkHistory'
      }
    }, {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'projects/*.md',
        typeName: 'Projects'
      }
    }, {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'links/*.md',
        typeName: 'Links'
      }
    }, {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'locations/*.md',
        typeName: 'Locations'
      }
    }, {
      use: 'gridsome-plugin-netlify-cms',
      options: {
        publicPath: '/admin'
      }
    }
  ]
}
