# Prism

**Acompanhe as atualizações das tecnologias que você usa — num só lugar.**

O Prism agrega release notes e changelogs das principais tecnologias do mercado diretamente do GitHub. Escolha o que quer acompanhar, defina a frequência de notificação, e receba um digest por e-mail com tudo que mudou.

Sem precisar entrar em 15 repositórios diferentes. Sem perder uma breaking change importante.

### Pré-requisitos

- Node.js 18+

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

---

## Comandos

```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build de produção
```

---

## Estrutura do projeto

```
src/
├── app/
│   ├── auth/           # Páginas de autenticação
│   ├── dashboard/      # Painel do usuário autenticado
│   └── tech/           # Catálogo e páginas de cada tecnologia
├── components/
│   ├── core/           # Componentes base da aplicação
│   └── ui/             # Componentes do design system (shadcn/ui)
└── lib/                # Utilitários, helpers e configurações
```

---

## Licença

MIT