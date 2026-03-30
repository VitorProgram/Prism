export type Technology = {
  slug: string
  name: string
  description: string
  icon: string        // 2-letter abbreviation for the icon badge
  accentColor: string // hex — one of the design system accents
  subscribers: number
  latestVersion: string
  website: string
  github: string
}

export type Release = {
  version: string
  title: string
  date: string // ISO date string (YYYY-MM-DD)
  body: string // markdown content
  url: string
  type: 'major' | 'minor' | 'patch'
}

export const TECHNOLOGIES: Technology[] = [
  {
    slug: 'react',
    name: 'React',
    description:
      'Biblioteca JavaScript para construção de interfaces de usuário declarativas e baseadas em componentes reutilizáveis.',
    icon: 'Re',
    accentColor: '#FF6B6B',
    subscribers: 1240,
    latestVersion: 'v19.1.0',
    website: 'https://react.dev',
    github: 'https://github.com/facebook/react',
  },
  {
    slug: 'typescript',
    name: 'TypeScript',
    description:
      'Superset tipado do JavaScript que compila para JavaScript puro, com tipos estáticos e suporte avançado em editores.',
    icon: 'TS',
    accentColor: '#7B5CFF',
    subscribers: 2180,
    latestVersion: 'v5.8.3',
    website: 'https://www.typescriptlang.org',
    github: 'https://github.com/microsoft/TypeScript',
  },
  {
    slug: 'next-js',
    name: 'Next.js',
    description:
      'Framework React para produção com App Router, Server Components, renderização híbrida e deploy otimizado na Vercel.',
    icon: 'Nx',
    accentColor: '#C8F042',
    subscribers: 1890,
    latestVersion: 'v15.3.0',
    website: 'https://nextjs.org',
    github: 'https://github.com/vercel/next.js',
  },
  {
    slug: 'vue',
    name: 'Vue',
    description:
      'Framework JavaScript progressivo para construção de interfaces com Composition API, reatividade e excelente DX.',
    icon: 'Vu',
    accentColor: '#00D4AA',
    subscribers: 743,
    latestVersion: 'v3.5.13',
    website: 'https://vuejs.org',
    github: 'https://github.com/vuejs/core',
  },
  {
    slug: 'tailwind-css',
    name: 'Tailwind CSS',
    description:
      'Framework CSS utility-first que permite construir designs modernos diretamente no markup com classes atômicas.',
    icon: 'Tw',
    accentColor: '#00D4AA',
    subscribers: 1560,
    latestVersion: 'v4.1.0',
    website: 'https://tailwindcss.com',
    github: 'https://github.com/tailwindlabs/tailwindcss',
  },
  {
    slug: 'vite',
    name: 'Vite',
    description:
      'Build tool de próxima geração com servidor de desenvolvimento instantâneo e HMR ultra-rápido baseado em ESM.',
    icon: 'Vi',
    accentColor: '#FFB347',
    subscribers: 918,
    latestVersion: 'v6.3.0',
    website: 'https://vitejs.dev',
    github: 'https://github.com/vitejs/vite',
  },
  {
    slug: 'node-js',
    name: 'Node.js',
    description:
      'Ambiente de execução JavaScript do lado do servidor baseado no motor V8 do Chrome, com suporte a módulos ESM nativos.',
    icon: 'No',
    accentColor: '#00D4AA',
    subscribers: 1102,
    latestVersion: 'v22.14.0',
    website: 'https://nodejs.org',
    github: 'https://github.com/nodejs/node',
  },
  {
    slug: 'prisma',
    name: 'Prisma',
    description:
      'ORM TypeScript de próxima geração com type-safety automático, migrações declarativas e Prisma Studio integrado.',
    icon: 'Pr',
    accentColor: '#7B5CFF',
    subscribers: 687,
    latestVersion: 'v6.5.0',
    website: 'https://www.prisma.io',
    github: 'https://github.com/prisma/prisma',
  },
]

export const TYPESCRIPT_RELEASES: Release[] = [
  {
    version: 'v5.8.3',
    title: 'TypeScript 5.8.3',
    date: '2025-03-11',
    type: 'patch',
    url: 'https://github.com/microsoft/TypeScript/releases/tag/v5.8.3',
    body: `## TypeScript 5.8.3

Versão patch com correções de regressões introduzidas no 5.8.

### Correções

- Corrigida regressão onde certos tipos condicionais falhavam ao distribuir corretamente com \`--strictNullChecks\`.
- Resolvido problema com emissão de declaração para módulos que usam \`export * from\` com re-exportações.
- Corrigido comportamento de narrowing incorreto ao usar análise de fluxo de controle com optional chaining.
- Tratada regressão de performance afetando projetos com grande quantidade de generics profundamente aninhados.`,
  },
  {
    version: 'v5.8.0',
    title: 'TypeScript 5.8',
    date: '2025-02-28',
    type: 'minor',
    url: 'https://github.com/microsoft/TypeScript/releases/tag/v5.8.0',
    body: `## TypeScript 5.8

TypeScript 5.8 introduz verificações granulares para expressões de retorno, suporte a \`require()\` de módulos ECMAScript no Node.js e novas opções de compilador.

### Destaques

- **Verificações Granulares para Retornos Condicionais**: TypeScript agora verifica cada branch de uma expressão de retorno condicional de forma independente.
- **\`--module nodenext\` suporta \`require()\` de ESM**: É possível usar \`require()\` para importar módulos ESM em ambientes Node.js que suportam a feature.
- **\`--erasableSyntaxOnly\`**: Nova flag que reporta erros em sintaxe específica do TypeScript que não pode ser apagada de forma limpa.`,
  },
  {
    version: 'v5.7.3',
    title: 'TypeScript 5.7.3',
    date: '2025-01-31',
    type: 'patch',
    url: 'https://github.com/microsoft/TypeScript/releases/tag/v5.7.3',
    body: `## TypeScript 5.7.3

Versão patch endereçando múltiplos problemas reportados desde o 5.7.2.

### Correções

- Corrigido reporte de erros incorreto para declarações \`using\` em certos contextos.
- Resolvido crash ao usar \`--composite\` com referências circulares entre projetos.
- Melhorada inferência de tipos para variadic tuple types em contextos de mapped types.`,
  },
  {
    version: 'v5.7.0',
    title: 'TypeScript 5.7',
    date: '2024-11-22',
    type: 'minor',
    url: 'https://github.com/microsoft/TypeScript/releases/tag/v5.7.0',
    body: `## TypeScript 5.7

TypeScript 5.7 traz reescrita de caminhos para imports relativos, atribuições compostas para \`&&=\`, \`||=\` e \`??=\`, e melhorias de performance em geral.

### Destaques

- **Verificações para Variáveis Nunca Inicializadas**: TypeScript agora detecta variáveis que são declaradas mas nunca de fato inicializadas com um valor.
- **Reescrita de Caminho para Imports Relativos**: A flag \`--rewriteRelativeImportExtensions\` reescreve extensões de imports relativos nos arquivos de saída.
- **\`--target es2024\` e lib.es2024**: Novo compilation target com suporte completo à biblioteca ES2024.`,
  },
  {
    version: 'v5.6.0',
    title: 'TypeScript 5.6',
    date: '2024-09-09',
    type: 'minor',
    url: 'https://github.com/microsoft/TypeScript/releases/tag/v5.6.0',
    body: `## TypeScript 5.6

TypeScript 5.6 proíbe verificações nulas e truthy em certas construções, introduz métodos helper de Iterator e tipos de iteradores builtin mais estritos.

### Destaques

- **Verificações Nulas e Truthy Proibidas**: Erros são gerados em verificações como \`if (str !== undefined)\` quando o valor é sempre truthy.
- **Métodos Helper de Iterator**: Suporte completo a \`Iterator.prototype.map\`, \`.filter\`, \`.take\`, \`.drop\` e outros.
- **Tipos de Iteradores Builtin Estritos**: Tipos de iteradores agora são mais estritos e refletem melhor a especificação ECMAScript.`,
  },
]
