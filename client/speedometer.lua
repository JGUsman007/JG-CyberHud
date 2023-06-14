ESX = exports['es_extended']:getSharedObject()
local pausemenuactive,vehicle
local Seatbeltstate = false
SetFlyThroughWindscreenParams(15.0, 20.0, 17.0, -500.0)
AddEventHandler('esx:pauseMenuActive', function(state)
    pausemenuactive = not state
end)



local function togglespeedometer(state)
    SendNUIMessage({
        type = 'speedometer-toggle',
        show = state
    })
end



Citizen.CreateThread( function()
    while true do
        local sleep
        if vehicle then
            sleep = 6
            HideHudComponentThisFrame(9)
            HideHudComponentThisFrame(6)
            HideHudComponentThisFrame(7)
            HideHudComponentThisFrame(8)
        else
            sleep = 1000
        end
        Citizen.Wait(sleep)
    end
end)



Citizen.CreateThread( function()
    while true do 
        local sleep = 1000
        if Seatbeltstate then
            sleep = 0
            DisableControlAction(0,75,true)
            DisableControlAction(27,75,true)
        end
            Wait(sleep)
    end
end)




Citizen.CreateThread( function()
    while true do
        local sleep = 1000
        vehicle =  cache.vehicle
    if vehicle then
        sleep = 100
        togglespeedometer(true)
        local vehrpm = GetVehicleCurrentRpm(vehicle)
        local vehspeed = math.ceil(GetEntitySpeed(vehicle) * 3.6)
        local vehfuel = math.ceil(GetVehicleFuelLevel(vehicle))
        local vehgear = GetVehicleCurrentGear(vehicle)
        SendNUIMessage({
            type = 'vehicle',
            rpm = vehrpm,
            speed = vehspeed,
            fuel = vehfuel,
            gear = vehgear
        })
    else
        togglespeedometer(false)
    end
        Wait(sleep)
    end
end)
--]]


local function toggleseatbelt()
    if cache.vehicle then
        local class = GetVehicleClass(cache.vehicle)
        if class ~= 8 and class ~= 13 and class ~= 14 then
            Seatbeltstate = not Seatbeltstate
            SendNUIMessage({
                type = 'seatbelt',
                state = Seatbeltstate
            })

            if Seatbeltstate then
                SetFlyThroughWindscreenParams(1000.0, 1000.0, 0.0, 0.0)
            else
                SetFlyThroughWindscreenParams(15.0, 20.0, 17.0, -500.0)
            end
        end
    end
end



lib.addKeybind({
    name = 'seatbelt',
    description = 'Toggle vehicle seatbelt',
    defaultKey = Config.seatbelt,
    onPressed = function(self)
        toggleseatbelt()
    end,
})

