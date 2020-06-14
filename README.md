# copypast
…or create a new repository on the command line
echo "# copypast" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin git@github.com:aapodshivalov/copypast.git
git push -u origin master
