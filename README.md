# RES-Q
Server IP 159.65.62.205

Dev site: https://resq.nlsdev.co.uk

Impersonate deploy user
`sudo su deploy`

navigate to git repo `/var/www/resq-dev/web`
Pull from required branch

Build with npm `npm run build`

Restart ap with pm2
`pm2 restart resq-public`

Misc
Start app and give process a nicename
`pm2 start "npm run start" --name resq-public`
Stop app
`pm2 stop resq-public`
Or stop all with
`pm2 stop all`
