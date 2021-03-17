import { makeSchema } from 'nexus';
import { join } from 'path';

import * as types from './types';

export const schema = makeSchema({
  contextType: {
    module: join(__dirname, 'context.ts'),
    export: 'Context'
  },
  outputs: {
    typegen: join(__dirname, '..', 'node_modules/@types/nexus-typegen/index.d.ts'),
    schema: join(__dirname, '..', 'generated/api.graphql')
  },
  sourceTypes: {
    modules: [
      {
        alias: 'prismaOne',
        module: '@example/db-one'
      },
      {
        alias: 'prismaTwo',
        module: '@example/db-two'
      }
    ]
  },
  types
});
