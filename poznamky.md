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