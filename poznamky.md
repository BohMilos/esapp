nemazať node_modules ale .next!!!
ls - vypíše súbory v priečinku
cd – zmení priečinok
npx create-next-app@latest – vytvorí aplikáciu
npm run build – postaví aplikáciu
npm start – spustí server+aplikáciu
npm run dev – spustí developerský mód
git init – vytvorí git spojenie
git branch -m <name> - vytvorí branch
git config --global user.name "meno" – nastaví meno pre git
git config --global user.email "email" – nastaví email pre git
git remote add origin https://github.com/username/repositoryname.git – nahodí do github repository
/*find . -path ./node_modules -prune -o -path ./.next -prune -o -path ./.git -prune -o -print*/
find . -type d \( -name 'node_modules' -o -name '.next' -o -name '.git' \) -prune -o -print

NEXTAUTH_URL = http://localhost:3000/
NEXTAUTH_SECRET = ag4r6re5a4v1a65g4e6ag54a6e54r6r84gae6haf4gb56a456fag4sa65g4



1. Vercel -> Storage:
    Neon -> Create -> Accept -> Region -> Frankfurt, Germany-(fra1) -> Connect
    in snap-zoska-4h-postgres:
    .env.local -> Show secret -> Copy value of DATABASE_URL

2. NextAuth:
    Get started -> Adapters -> Prisma 
    npm install @prisma/client @auth/prisma-adapter
    npm install prisma --save-dev
    npx prisma init

3. VsCode:
    In .env replace value of DATABASE_URL
    .env
    Create prisma.ts in src/app/api/auth/[...nextauth] -> copy code from NextAuth docs
    Update authOptions.ts -> add:   import { PrismaAdapter } from "@auth/prisma-adapter"
                                    import { prisma } from "./prisma"
                                    adapter: PrismaAdapter(prisma),

    package.json:   "build": "prisma generate && next build",
                    "postinstall": "prisma generate"


4. VsCode terminal:
    npx prisma migrate dev --name user-profile-added
    npx prisma generate
    npx prisma studio

