import readme from './readme.md';

export default {
  notes: readme,

  knobs: {
    theme: {
      type: 'select',
      args: [['plain', 'primary', 'secondary', 'danger'], 'plain']
    },
    variant: {
      type: 'select',
      args: [['basic', 'raised', 'outline', 'flat'], 'basic']
    }
  },

  states: [
    {
      title: 'Flat',
      description: 'Flat Styling',
      props: {
        theme: 'primary',
        variant: 'flat',
        label: 'Primär'
      }
    },
    {
      title: 'Raised',
      description: 'Raised Styling',
      props: {
        theme: 'secondary',
        variant: 'raised',
        label: 'Sekundär'
      }
    },
    {
      title: 'Outline',
      description: 'Outline Styling',
      props: {
        theme: 'danger',
        variant: 'outline',
        label: 'Warnung'
      }
    }
  ]
};
