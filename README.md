# Portfólio de Alexandre Raminelli

<!-- TODO: introdução -->

<!-- TODO: como executar -->

<!-- ----------------------------------------------------------------------- -->

## 📁 File Structure

<!-- Gerar árvore mais facilmente: https://devtool.tech/en/tree -->

```bash
alexandre-raminelli-portfolio/
├── public/
│   └── ...
├── src/
│   └── ...
├── .env.example
├── .gitignore
├── components.json
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── postcss.config.mjs
└── tsconfig.json
```

<!-- Explicação -->

| Path/Arquivo         | Descrição                                                                   |
| -------------------- | --------------------------------------------------------------------------- |
| `public/`            | Arquivos estáticos.                                                         |
| `src/`               | Código-fonte da aplicação.                                                  |
| `.env.example`       | Modelo de variáveis de ambiente, sem os valores.                            |
| `.gitignore`         | Arquivos e pastas que serão ignorados pelo Git.                             |
| `components.json`    | Configurações do Shadcn.                                                    |
| `eslint.config.mjs`  | Regras de qualidade e estilo de código (ESLint).                            |
| `next.config.ts`     | Configuração do Next.js.                                                    |
| `package.json`       | Dependências e scripts do projeto.                                          |
| `pnpm-lock.yaml`     | Lockfile do pnpm. Garante versões idênticas em todos os ambientes.          |
| `postcss.config.mjs` | Configuração do PostCSS. Necessário para o Tailwind CSS funcionar no build. |
| `tsconfig.json`      | Configuração do Typescript.                                                 |

### `src/`: Código-fonte da aplicação.

```bash
alexandre-raminelli-portfolio/src/
├── app/
│   ├── (auth)/
│   ├── (portfolio)/
│   ├── dashboard/
│   ├── icon.svg
│   ├── layout.tsx
│   └── not-found.tsx
├── components/
│   ├── layout/
│   ├── sections/
│   ├── shared/
│   └── ui/
├── constants/
│   ├── content/
│   │   └── ...
│   ├── icons.ts
│   ├── images.ts
│   ├── routes.ts
│   └── site.ts
├── hooks/
├── lib/
│   ├── supabase/
│   │   ├── client.ts
│   │   └── server.ts
│   └── utils.ts
├── services/
│   └── ...
├── styles/
│   └── globals.css
├── types/
│   └── index.ts
└── middleware.ts
```

#### `app/`

| Path/Arquivo        | Descrição                                                                                                              |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `app/`              | Diretório principal do App Router do Next.js. Contém todas as rotas, layouts e páginas.                                |
| `app/(auth)/`       | Route group para as rotas de autenticação.                                                                             |
| `app/(portfolio)/`  | Route group para as páginas públicas do portfólio.                                                                     |
| `app/dashboard/`    | Área restrita de gerenciamento de informações.                                                                         |
| `app/icon.svg`      | Ícone do site, usado como favicon.                                                                                     |
| `app/layout.tsx`    | Root layout que envolve toda a aplicação. Contém providers globais, fontes, metadados base e tags `<html>` e `<body>`. |
| `app/not-found.tsx` | Página personalizada para rotas não encontradas (404).                                                                 |

#### `components/`

| Path/Arquivo           | Descrição                                                             |
| ---------------------- | --------------------------------------------------------------------- |
| `components/`          | Componentes reutilizáveis, organizados por responsabilidade.          |
| `components/layout/`   | Componentes estruturais da página, como header, footer e sidebar.     |
| `components/sections/` | Seções completas da landing page.                                     |
| `components/shared/`   | Componentes reutilizáveis sem vínculo com seção ou layout específico. |
| `components/ui/`       | Componentes base do Shadcn.                                           |

#### `constants/`

| Path/Arquivo          | Descrição                                              |
| --------------------- | ------------------------------------------------------ |
| `constants/`          | Constantes globais da aplicação.                       |
| `constants/content/`  | Textos e dados estáticos organizados por seção e tipo. |
| `constants/icons.ts`  | Mapeamento dos ícones do HugeIcons usado na aplicação. |
| `constants/images.ts` | Paths centralizados das imagens em `public/`.          |
| `constants/routes.ts` | Rotas da aplicação.                                    |
| `constants/site.ts`   | Metadados globais do site.                             |

#### `lib/`

| Path/Arquivo             | Descrição                                                                                    |
| ------------------------ | -------------------------------------------------------------------------------------------- |
| `lib/`                   | Utilitários e configurações de infraestrutura.                                               |
| `lib/supabase/`          | Configurações e clientes para integração com Supabase.                                       |
| `lib/supabase/client.ts` | Instância do Supabase para uso client-side (Client Components e browser).                    |
| `lib/supabase/server.ts` | Instância do Supabase para uso server-side (Server Components, Server Actions e middleware). |
| `lib/utils.ts`           | Funções utilitárias genéricas.                                                               |

#### Outros diretórios

| Path/Arquivo         | Descrição                                                                                                             |
| -------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `hooks/`             | Custom hooks reutilizáveis.                                                                                           |
| `services/`          | Funções que encapsulam as queries ao Supabase, organizadas por domínio.                                               |
| `styles/globals.css` | Estilos globais da aplicação, tema do Shadcn e configurações do TailwindCSS.                                          |
| `types/`             | Tipagens TypeScript globais.                                                                                          |
| `middleware.ts`      | Middleware do Next.js executado antes de cada requisição. Responsável pelo redirecionamento com base na autenticação. |
