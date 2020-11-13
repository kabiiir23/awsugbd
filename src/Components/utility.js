export function getImagesNames() {
  const r = require.context('../assets/images', false, /\.jpg$/);
  return getFilenames(r);
}

function getFilenames(r) {
  // return an array list of filenames (with extension)
  const importAll = (r) => r.keys().map((file) => file.match(/[^/]+$/)[0]);
  return importAll(r);
}
