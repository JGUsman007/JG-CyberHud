
local aiming


Citizen.CreateThread( function()
    while true do
        local sleep = 1000
        local ped = cache.ped
        aiming = IsControlPressed(0, 25) and cache.weapon
        if aiming then
            sleep = 100
            local weapon = cache.weapon
            local ammoTotal = GetAmmoInPedWeapon(ped,weapon)
            local bool,ammoClip = GetAmmoInClip(ped,weapon)
            local ammoRemaining = math.floor(ammoTotal - ammoClip)
            local gameview = GetFollowPedCamViewMode()
            SendNUIMessage({
                type = 'weapon',
                state = true,
                view = gameview,
                ammo1 = ammoTotal,
                ammo2 = ammoRemaining
            })
        else
            SendNUIMessage({
                type = 'weapon',
                state = false
            })
        end
        Wait(sleep)
    end
end)



Citizen.CreateThread( function()
    while true do
        local sleep = 1000
        if cache.weapon then
            sleep = 6
       HideHudComponentThisFrame(2)
        end
        Wait(sleep)
    end
end)