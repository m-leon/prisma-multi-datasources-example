# Prisma Multiple Datasources

This repository demonstrates the monorepo structure outlined by [@dfee](https://github.com/prisma/prisma/issues/1274#issuecomment-703572369) that allows using multiple [Prisma](https://github.com/prisma/prisma) clients in a single project.

There are two different example packages:

- `packages/consumer` - Simple example with Node
- `packages/apollo-nexus` - Complex example with [Apollo Server](https://www.apollographql.com/docs/apollo-server/) and [Nexus](https://nexusjs.org/)

## Installation

Requirements:

- yarn

Execute the following:

```
git clone https://github.com/m-leon/prisma-multi-datasources-example.git
cd prisma-multi-datasources-example
yarn
cd packages/db-one
yarn prisma db push --preview-feature
cd ../db-two
yarn prisma db push --preview-feature
```

## Usage

- `cd packages/consumer` OR `cd packages/apollo-nexus`
- `yarn dev`

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
