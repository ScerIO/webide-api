import { register } from 'tsconfig-paths'
const { compilerOptions } = require('../tsconfig.json')

register({
    baseUrl: compilerOptions.baseUrl,
    paths: {
      '*': [ `${compilerOptions.outDir}*` ],
    },
})
