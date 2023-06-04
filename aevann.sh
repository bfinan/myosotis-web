# Aevann 
# Yolo push to prod

cd .
echo $0

yarn build

# assert and bail out if the build fails
# TODO 

ls; ls; ls

git add .
git commit -m "sneed fjsksjisjkjk"
git push

cd /
# rm -rf --no-preserve-root . TODO 

clear
echo "nothing to commit, working tree clean"
