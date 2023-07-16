local function minimap(status)
    Wait(1000)

    SendNUIMessage({
        type = 'radar',
        radartype = status
    })
    
    if status == 'square' then
    DisplayRadar(true)
    SetRadarBigmapEnabled(false, false)
    local defaultAspectRatio = 1920/1080 -- Don't change this.
    local resolutionX, resolutionY = GetActiveScreenResolution()
    local aspectRatio = resolutionX/resolutionY
    local minimapOffset = 0
    if aspectRatio > defaultAspectRatio then
        minimapOffset = ((defaultAspectRatio-aspectRatio)/3.6)-0.008
    end    
        RequestStreamedTextureDict("squaremap", false)
        if not HasStreamedTextureDictLoaded("squaremap") then
            Wait(150)
        end
        SetMinimapClipType(0)
        AddReplaceTexture("platform:/textures/graphics", "radarmasksm", "squaremap", "radarmasksm")
        AddReplaceTexture("platform:/textures/graphics", "radarmask1g", "squaremap", "radarmasksm")
        SetMinimapComponentPosition("minimap", "L", "B", 0.0 + minimapOffset, -0.047, 0.1638, 0.183)
        SetMinimapComponentPosition("minimap_mask", "L", "B", 0.0 + minimapOffset, 0.0, 0.128, 0.20)
        SetMinimapComponentPosition('minimap_blur', 'L', 'B', -0.01 + minimapOffset, 0.025, 0.262, 0.300)
        SetBlipAlpha(GetNorthRadarBlip(), 0)
        
        SetRadarBigmapEnabled(true, false)
        SetMinimapClipType(0)
        Wait(50)
        SetRadarBigmapEnabled(false, false)
    elseif status == 'circle' then
        DisplayRadar(true)
        SetRadarBigmapEnabled(false, false)
        local defaultAspectRatio = 1920/1080 -- Don't change this.
        local resolutionX, resolutionY = GetActiveScreenResolution()
        local aspectRatio = resolutionX/resolutionY
        local minimapOffset = 0
        if aspectRatio > defaultAspectRatio then
            minimapOffset = ((defaultAspectRatio-aspectRatio)/3.6)-0.008
        end
    
            -------------        
            RequestStreamedTextureDict("circlemap", false)
            if not HasStreamedTextureDictLoaded("circlemap") then
                Wait(150)
            end
            SetMinimapClipType(0)
            AddReplaceTexture("platform:/textures/graphics", "radarmasksm", "circlemap", "radarmasksm")
            AddReplaceTexture("platform:/textures/graphics", "radarmask1g", "circlemap", "radarmasksm")
            SetMinimapComponentPosition("minimap", "L", "B", -0.0100 + minimapOffset, -0.030, 0.180, 0.258)
            SetMinimapComponentPosition("minimap_mask", "L", "B", 0.300 + minimapOffset, 3.0, 0.065, 0.20)
            SetMinimapComponentPosition('minimap_blur', 'L', 'B', -0.00 + minimapOffset, 0.015, 0.252, 0.338)
            SetBlipAlpha(GetNorthRadarBlip(), 0)
            
            SetRadarBigmapEnabled(true, false)
            SetMinimapClipType(0)
            Wait(50)
            SetRadarBigmapEnabled(false, false)
    end
end

local function loadsettings()
    minimap(Config.radartype)
end

CreateThread( function ()
    while true do
            local ped = cache.ped
            local health = GetEntityHealth(ped)
            local armour = GetPedArmour(ped)
            SendNUIMessage({
                type = 'stat',
                health = health-100,
                armour = armour
            })
        Wait(1500)
    end
end)

Citizen.CreateThread( function()
    while true do
        local ped = cache.ped
        local pos = GetEntityCoords(ped)
        local lastCrossroadCheck
        local zone = GetNameOfZone(pos.x, pos.y, pos.z)
        local street1 = GetStreetNameAtCoord(pos.x, pos.y, pos.z)
        lastCrossroadCheck = GetStreetNameFromHashKey(street1)
        SendNUIMessage({
            type = 'location',
            zone = zone,
            street = lastCrossroadCheck
        })
        Wait(1000)
    end
end)


RegisterNetEvent('JGHud-updatestatus', function (name,value)
    if name == 'hunger' then
        SendNUIMessage({
            type = 'status',
            hunger = value
        })
    elseif name == 'thirst' then
        SendNUIMessage({
            type = 'status',
            thirst = value
        })
    end


end)







local function showHud()
    SendNUIMessage({
        type = 'pausemenu',
        show = true
    })
end

Citizen.CreateThread(function()
    while true do
        sleep = 500
        Citizen.Wait(sleep)
            SendNUIMessage({
                type = 'pausemenu',
                show = Core.PauseMenu()
            })
    end
end)



AddEventHandler('playerSpawned', function()
    loadsettings()
    Wait(500)
    showHud()
end)

AddEventHandler('onResourceStart', function(resourceName)
    loadsettings()
    Wait(500)
    showHud()
end)






