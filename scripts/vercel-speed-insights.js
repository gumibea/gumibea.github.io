/**
 * Hexo Script to inject Vercel Speed Insights
 * 
 * This script uses Hexo's injector API to add Vercel Speed Insights
 * tracking to all pages of the site.
 */

hexo.extend.injector.register('head_end', () => {
  return `
<!-- Vercel Speed Insights -->
<script>
  window.si = window.si || function () { (window.siq = window.siq || []).push(arguments); };
</script>
<script defer src="/_vercel/speed-insights/script.js"></script>
`;
}, 'default');
