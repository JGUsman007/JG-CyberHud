ESX = exports['es_extended']:getSharedObject()



local cash, bank, blackmoney


local function UpdateAccounts(accounts)
    if accounts == nil then return end

    local tempCash, tempBank, tempBlackMoney

    for _, data in pairs(accounts) do
        if data.name == 'bank' then
            tempBank = data.money
        elseif data.name == 'money' then
            tempCash = data.money
        elseif data.name == 'black_money' then
            tempBlackMoney = data.money
        end
    end

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
                job = string.upper(ESX.PlayerData.job.label),
                grade = string.upper(ESX.PlayerData.job.grade_label),
                id = string.upper(playerServerId)
            })

            Wait(1000)
        end
    end)
end



RegisterNetEvent('esx:playerLoaded')
AddEventHandler('esx:playerLoaded', function(playerData)
    Wait(2000)
    cash, bank, blackmoney = UpdateAccounts(playerData.accounts)
    ESX.PlayerData = ESX.GetPlayerData()
    InfoThread()
end)

RegisterNetEvent('esx:setAccountMoney', function(account)
    if account.name == 'money' then
        cash = account.money
    elseif account.name == 'bank' then
        bank = account.money
    elseif account.name == 'black_money' then
        blackmoney = account.money
    end
end)

RegisterNetEvent('esx:setJob')
AddEventHandler('esx:setJob', function(job)
    ESX.PlayerData.job = job
end)

AddEventHandler('onResourceStart', function (resName)
    if GetCurrentResourceName() ~= resName then return end
    Wait(1000)
    ESX.PlayerData = ESX.GetPlayerData()
    cash, bank, blackmoney = UpdateAccounts(ESX.PlayerData.accounts)
    print(blackmoney)
    InfoThread()
end)