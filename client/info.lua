local Core = exports['cs_lib']:GetLib()
Citizen.CreateThread(function()
    while not Core.FrameworkIsReady() do Wait(1000); end
end)

local cash, bank, blackmoney


local function UpdateAccounts(accounts)
    if accounts == nil then return end

    local tempCash, tempBank, tempBlackMoney
    tempBank = Core.GetAccount('bank')
    tempCash = Core.GetAccount('cash')
    tempBlackMoney = Core.GetAccount('black_money') or Core.GetAccount('crypto')

    return tempCash, tempBank, tempBlackMoney
end

local function InfoThread()


    CreateThread(function()
        local playerServerId = cache.serverId

        while true do
            SendNUIMessage({
                type = 'info',
                bank = ("$" .. bank),
                money = ("$" .. cash),
                blackmoney = ("$" .. blackmoney),
                job = string.upper(Core.GetJob()),
                grade = string.upper(Core.GetGrade()),
                id = string.upper(playerServerId)
            })

            Wait(1000)
        end
    end)
end

AddEventHandler('playerSpawned', function()
    Wait(2000)
    cash, bank, blackmoney = UpdateAccounts(Core.GetAccounts())
    InfoThread()
end)

AddEventHandler('onResourceStart', function (resName)
    if GetCurrentResourceName() ~= resName then return end
    Wait(1000)
    cash, bank, blackmoney = UpdateAccounts(Core.GetAccounts())
    InfoThread()
end)