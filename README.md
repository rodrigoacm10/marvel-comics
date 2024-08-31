<!-- This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details. -->

# MERX Energia - Teste Prático

## Tecnologias Utilizadas

- **Typescript**
- **Next.js**
- **Tailwind CSS**

## Bibliotecas

- **shadcn/ui**
- **axios**
- **tanStack Query**
- **lodash**

## Instalação e Execução em uma Máquina Local

1. Acesse a [Documentação da Marvel](https://developer.marvel.com/documentation/getting_started) e crie uma conta no site da Marvel.
2. Entre na área do desenvolvedor para obter sua **chave pública** e **chave privada**.

3. Acesse um [gerador de hash MD5](https://www.md5hashgenerator.com/) e converta o seguinte valor:

```plaintext
1 + chave privada + chave pública

```

4. Copie a hash resultante.

5. Baixe o repositório e crie um arquivo `.env` com as seguintes variáveis:

```plaintext
NEXT_PUBLIC_KEY={sua_chave_publica}
NEXT_PUBLIC_HASH_KEY={hash_que_foi_gerada}
```

6. Execute o comando:

```plaintext
npm install


```

7. Logo em seguida, execute:

```plaintext
npm run dev

```

## Deploy

[https://marvel-comics-nu.vercel.app/](https://marvel-comics-nu.vercel.app/)
