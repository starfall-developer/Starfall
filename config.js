/* Starfall asset delivery settings.
   Set githubUser, githubRepo and branch to enable jsDelivr for static assets.
   Example: https://cdn.jsdelivr.net/gh/USERNAME/REPOSITORY@main/path/to/file.jpg
   Note: jsDelivr is for static assets (images/CSS/JS/JSON). Do not use it to execute
   standalone HTML game files; host those on your site, GitHub Pages, or object storage.
*/
window.STARFALL_CONFIG = {
  siteName: 'Starfall',
  cdn: {
    enabled: false,
    githubUser: 'YOUR_GITHUB_USERNAME',
    githubRepo: 'YOUR_REPOSITORY',
    branch: 'main'
  },
  // Optional: set this to your Cloudflare R2 public base URL for large game files.
  gameStorageBase: ''
};

window.starfallAsset = function (path) {
  const cfg = window.STARFALL_CONFIG.cdn;
  if (!cfg.enabled || !cfg.githubUser || cfg.githubUser.startsWith('YOUR_')) return path;
  return `https://cdn.jsdelivr.net/gh/${cfg.githubUser}/${cfg.githubRepo}@${cfg.branch}/${String(path).replace(/^\//, '')}`;
};
