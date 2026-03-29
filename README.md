# Prism

**Changelogs e Release Notes que fazem seu produto evoluir de forma pública.**

O Prism é uma plataforma SaaS para publicar atualizações de produtos digitais com clareza e organização. Crie uma página pública de changelog, notifique usuários por e-mail automaticamente e incorpore atualizações em qualquer site com um widget embeddable.

Feito para startups, desenvolvedores e projetos open source que querem mostrar evolução real, comunicar novas features e construir confiança com usuários.


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
│   └── [slug]/         # Página pública do changelog
├── components/
│   ├── core/           # Componentes base da aplicação
│   └── ui/             # Componentes do design system (shadcn/ui)
└── lib/                # Utilitários, helpers e configurações
```

---

## Licença

MIT
