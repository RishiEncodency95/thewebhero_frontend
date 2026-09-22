const si = require('react-icons/si');
const fa = require('react-icons/fa');

const icons = [
    'SiReact', 'SiNextdotjs', 'SiHtml5', 'SiCss3', 'SiTailwindcss', 
    'SiNodedotjs', 'SiExpress', 'SiPhp', 'SiPython', 
    'SiFlutter', 'SiKotlin', 'SiSwift', 
    'SiMongodb', 'SiMysql', 'SiPostgresql', 'SiFirebase', 'SiRedis', 
    'SiGooglecloud', 'SiMicrosoftazure', 'SiDocker', 'SiKubernetes', 
    'SiVisualstudiocode', 'SiPostman', 
    'SiMagento', 'SiWoocommerce', 
    'SiGraphql', 'SiTypescript', 'SiSocketdotio',
    'FaJava', 'FaAws', 'FaFigma', 'FaGitAlt', 'FaGithub', 
    'FaWordpress', 'FaShopify', 'FaDrupal', 'FaBrain', 'FaLink'
];

icons.forEach(name => {
    if (name.startsWith('Si')) {
        if (!si[name]) console.log('Missing in SI:', name);
    } else {
        if (!fa[name]) console.log('Missing in FA:', name);
    }
});
console.log('Check complete.');
