import * as dotenv from 'dotenv'
import { register } from 'tsconfig-paths'
import * as tsconfig from '../tsconfig.json'

// Load env from .env
dotenv.config()

// Resolve typescript module aliases
register({
    baseUrl: tsconfig.compilerOptions.baseUrl,
    paths: {
      '*': [ `${tsconfig.compilerOptions.outDir}*` ],
    },
})
