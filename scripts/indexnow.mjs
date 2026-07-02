// Somete las URLs del sitio a IndexNow (Bing, Yandex, etc). Correr tras cada deploy:
//   node scripts/indexnow.mjs
const HOST = 'photographicchagui.com'
const KEY = '6fd626fe7dd3377ca7c96acc7891ae35'
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`

const urlList = [
  '/',
  '/servicios/',
  '/servicios/bodas/',
  '/servicios/retratos/',
  '/servicios/eventos/',
  '/servicios/sacramentos/',
  '/paquetes/',
  '/sobre-mi/',
  '/contacto/',
].map((path) => `https://${HOST}${path}`)

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
})

console.log('IndexNow response:', res.status, res.statusText)
