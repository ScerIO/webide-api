import { register } from 'tsconfig-paths'
import * as dotenv from 'dotenv'
const { compilerOptions } = require('../tsconfig.json')

// Load env from .env
dotenv.config()

// Resolve typescript module aliases
register({
    baseUrl: compilerOptions.baseUrl,
    paths: {
      '*': [ `${compilerOptions.outDir}*` ],
    },
})
