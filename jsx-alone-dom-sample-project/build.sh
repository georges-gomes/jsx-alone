OUTDIR=../docs/jsx-alone-dom-sample-project

export NODE_ENV=development
npx parcel build src/lotsOfPeople/index.html --no-minify --no-content-hash --public-url './' --out-dir $OUTDIR/lotsOfPeople --out-file $OUTDIR/lotsOfPeople/index.html
export NODE_ENV=production
npx parcel build src/lotsOfPeople/index.html --public-url './' --experimental-scope-hoisting --out-dir $OUTDIR/lotsOfPeople --out-file $OUTDIR/lotsOfPeople/index-min.html

export NODE_ENV=development
npx parcel build src/simple/index.html --no-minify --no-content-hash --public-url './' --out-dir $OUTDIR/simple --out-file $OUTDIR/simple/index.html
export NODE_ENV=production
npx parcel build src/simple/index.html --public-url './' --experimental-scope-hoisting --out-dir $OUTDIR/simple --out-file $OUTDIR/simple/index-min.html
