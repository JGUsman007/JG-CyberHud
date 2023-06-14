fx_version 'adamant'
game 'gta5'
lua54 'yes'


shared_scripts{
    'shared.lua',
    '@ox_lib/init.lua'
}

client_scripts{
    'client/status.lua',
    'client/speedometer.lua',
    'client/info.lua',
    'client/ammo.lua'
}

ui_page 'web/index.html'

files{
    'web/style.css',
    'web/script.js',
    'web/index.html',
    'web/img/*',
    'web/font/*'
}


