const { defineConfig } = require('pollen-css/utils');

module.exports = defineConfig(pollen => ({
  modules: {
    scale: { ...pollen.scale, '000': '0.6875rem' },
    letter: {...pollen.letter, xxl: '0.1em' }
   } 
  })
);

module.exports = {
    // Config options
    output: "assets/css/pollen.css",
    modules: {
        color: false,
        typeset: {
            '0': 'var(--scale-0)/1.3 var(--font-sans)',
            '1': 'var(--scale-1)/1.5 var(--font-sans)',
            '2': 'var(--scale-2)/1.4 var(--font-sans)',
            '3': 'var(--scale-3)/1.2 var(--font-sans)',
            '4': 'var(--scale-4)/1.1 var(--font-sans)',
        },
    }
}




