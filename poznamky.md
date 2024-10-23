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