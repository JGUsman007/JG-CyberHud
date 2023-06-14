window.addEventListener("message", (event) => {
  let data = event.data;

  if (data.type == "pausemenu") {
    if (data.show == true) {
      $("body").fadeIn();
    } else {
      $("body").fadeOut();
    }
  }

  if (data.type == "stat") {
    if (data.health != -100) {
      $("#health").animate({ "background-size": data.health + "%" }, 200);
    } else if (data.health == -100) {
      $("#health").animate({ "background-size": "0%" }, 200);
    }

    $("#armour").animate({ "background-size": data.armour + "%" }, 200);
  }

  if (data.type == "status") {
    let playerhunger = Math.round(data.hunger);
    let playerthirst = Math.round(data.thirst);
    $("#hunger").animate({ "background-size": playerhunger + "%" }, 200);
    $("#thirst").animate({ "background-size": playerthirst + "%" }, 200);
  }

  if (data.type == "info"){
    $("#bank").html(data.bank)
    $("#money").html(data.money);
    $("#blackmoney").html(data.blackmoney);
    $("#id").html(data.id);
    $("#job").html(data.job);
    $("#grade").html(data.grade);
  }

  if (data.type == "radar"){
    if (data.radartype == 'square'){
      $(".location").animate({"bottom": "15vw"}, 100)
      $(".square").show()
      $(".circle").hide()
    }else{
      $(".location").animate({"bottom": "18vw"}, 100)
      $(".square").hide()
      $(".circle").show()
    }
  }


  if (data.type == 'weapon'){
    $(".ammo1").html(data.ammo1);
    $(".ammo2").html(data.ammo2);
    if (data.state == true){
    $(".ammo-container").show()
  }else{
    $(".ammo-container").hide()
  }

  if (data.view == 4){
    $(".ammo-container").animate({"margin-left": "15vw"},0)
  }else{
    $(".ammo-container").animate({"margin-left": "0vw"},0)
  }

  }


  if (data.type == 'location'){
    $(".locationtext").html(data.zone+" "+" "+data.street)
  }


  if (data.type == "speedometer-toggle"){
    if (data.show == true){
    $(".speedometer-container").show()
  }else{
    $(".speedometer-container").fadeOut()
  }
  }

  if (data.type == "seatbelt"){
    if (data.state == true){
      $(".speedometer-sec").fadeOut()
    } else{
      $(".speedometer-sec").fadeIn()
    }
  }


  if (data.type == "vehicle"){
    if (data.gear >= 1) {
      $(".gear1").css({
        "color": "rgb(54, 202, 231)",
        "opacity": "1",
        "text-shadow": "0px 0px 5px rgb(54, 202, 231)",
      });
    } else {
      $(".gear1").css({
        "color": "rgb(54, 202, 231,0.15)",
        "opacity": "0.2",
        "text-shadow": "0px 0px 0px rgb(54, 202, 231)",
      });
    }

    if (data.gear >= 2) {
      $(".gear2").css({
        "color": "rgb(54, 202, 231)",
        "opacity": "1",
        "text-shadow": "0px 0px 5px rgb(54, 202, 231)",
      });
    } else {
      $(".gear2").css({
        "color": "rgb(54, 202, 231,0.15)",
        "opacity": "0.2",
        "text-shadow": "0px 0px 0px rgb(54, 202, 231)",
      });
    }

    if (data.gear >= 3) {
      $(".gear3").css({
        "color": "rgb(54, 202, 231)",
        "opacity": "1",
        "text-shadow": "0px 0px 5px rgb(54, 202, 231)",
      });
    } else {
      $(".gear3").css({
        "color": "rgb(54, 202, 231,0.15)",
        "opacity": "0.2",
        "text-shadow": "0px 0px 0px rgb(54, 202, 231)",
      });
    }

    if (data.gear >= 4) {
      $(".gear4").css({
        "color": "rgb(54, 202, 231)",
        "opacity": "1",
        "text-shadow": "0px 0px 5px rgb(54, 202, 231)",
      });
    } else {
      $(".gear4").css({
        "color": "rgb(54, 202, 231,0.15)",
        "opacity": "0.2",
        "text-shadow": "0px 0px 0px rgb(54, 202, 231)",
      });
    }
    if (data.gear >= 5) {
      $(".gear5").css({
        "color": "rgb(54, 202, 231)",
        "opacity": "1",
        "text-shadow": "0px 0px 5px rgb(54, 202, 231)",
      });
    } else {
      $(".gear5").css({
        "color": "rgb(54, 202, 231,0.15)",
        "opacity": "0.2",
        "text-shadow": "0px 0px 0px rgb(54, 202, 231)",
      });
    }

    if (data.gear >= 6) {
      $(".gear6").css({
        "color": "rgb(54, 202, 231)",
        "opacity": "1",
        "text-shadow": "0px 0px 5px rgb(54, 202, 231)",
      });
    } else {
      $(".gear6").css({
        "color": "rgb(54, 202, 231,0.15)",
        "opacity": "0.2",
        "text-shadow": "0px 0px 0px rgb(54, 202, 231)",
      });
    }

    
  }

  if (data.type == "vehicle") {
    $(".veh-speed").html(data.speed);

    //////////////////////////////////////////////

    if (data.fuel >= 5) {
      $(".fuelbars1").css({
        "background-color": "rgb(54, 202, 231)",
        "box-shadow": "0px 0px 5px rgb(54, 202, 231)",
      });
    } else {
      $(".fuelbars1").css({
        "background-color": "rgb(54, 202, 231,0.15)",
        "box-shadow": "0px 0px 0px rgb(54, 202, 231)",
      });
    }

    if (data.fuel >= 10) {
      $(".fuelbars2").css({
        "background-color": "rgb(54, 202, 231)",
        "box-shadow": "0px 0px 5px rgb(54, 202, 231)",
      });
    } else {
      $(".fuelbars2").css({
        "background-color": "rgb(54, 202, 231,0.15)",
        "box-shadow": "0px 0px 0px rgb(54, 202, 231)",
      });
    }

    if (data.fuel >= 15) {
      $(".fuelbars3").css({
        "background-color": "rgb(54, 202, 231)",
        "box-shadow": "0px 0px 5px rgb(54, 202, 231)",
      });
    } else {
      $(".fuelbars3").css({
        "background-color": "rgb(54, 202, 231,0.15)",
        "box-shadow": "0px 0px 0px rgb(54, 202, 231)",
      });
    }

    if (data.fuel >= 20) {
      $(".fuelbars4").css({
        "background-color": "rgb(54, 202, 231)",
        "box-shadow": "0px 0px 5px rgb(54, 202, 231)",
      });
    } else {
      $(".fuelbars4").css({
        "background-color": "rgb(54, 202, 231,0.15)",
        "box-shadow": "0px 0px 0px rgb(54, 202, 231)",
      });
    }

    if (data.fuel >= 25) {
      $(".fuelbars5").css({
        "background-color": "rgb(54, 202, 231)",
        "box-shadow": "0px 0px 5px rgb(54, 202, 231)",
      });
    } else {
      $(".fuelbars5").css({
        "background-color": "rgb(54, 202, 231,0.15)",
        "box-shadow": "0px 0px 0px rgb(54, 202, 231)",
      });
    }

    if (data.fuel >= 30) {
      $(".fuelbars6").css({
        "background-color": "rgb(54, 202, 231)",
        "box-shadow": "0px 0px 5px rgb(54, 202, 231)",
      });
    } else {
      $(".fuelbars6").css({
        "background-color": "rgb(54, 202, 231,0.15)",
        "box-shadow": "0px 0px 0px rgb(54, 202, 231)",
      });
    }

    if (data.fuel >= 45) {
      $(".fuelbars7").css({
        "background-color": "rgb(54, 202, 231)",
        "box-shadow": "0px 0px 5px rgb(54, 202, 231)",
      });
    } else {
      $(".fuelbars7").css({
        "background-color": "rgb(54, 202, 231,0.15)",
        "box-shadow": "0px 0px 0px rgb(54, 202, 231)",
      });
    }

    if (data.fuel >= 50) {
      $(".fuelbars8").css({
        "background-color": "rgb(54, 202, 231)",
        "box-shadow": "0px 0px 5px rgb(54, 202, 231)",
      });
    } else {
      $(".fuelbars8").css({
        "background-color": "rgb(54, 202, 231,0.15)",
        "box-shadow": "0px 0px 0px rgb(54, 202, 231)",
      });
    }

    if (data.fuel >= 55) {
      $(".fuelbars9").css({
        "background-color": "rgb(54, 202, 231)",
        "box-shadow": "0px 0px 5px rgb(54, 202, 231)",
      });
    } else {
      $(".fuelbars9").css({
        "background-color": "rgb(54, 202, 231,0.15)",
        "box-shadow": "0px 0px 0px rgb(54, 202, 231)",
      });
    }

    if (data.fuel >= 60) {
      $(".fuelbars10").css({
        "background-color": "rgb(54, 202, 231)",
        "box-shadow": "0px 0px 5px rgb(54, 202, 231)",
      });
    } else {
      $(".fuelbars10").css({
        "background-color": "rgb(54, 202, 231,0.15)",
        "box-shadow": "0px 0px 0px rgb(54, 202, 231)",
      });
    }

    if (data.fuel >= 65) {
      $(".fuelbars11").css({
        "background-color": "rgb(54, 202, 231)",
        "box-shadow": "0px 0px 5px rgb(54, 202, 231)",
      });
    } else {
      $(".fuelbars11").css({
        "background-color": "rgb(54, 202, 231,0.15)",
        "box-shadow": "0px 0px 0px rgb(54, 202, 231)",
      });
    }

    if (data.fuel >= 70) {
      $(".fuelbars12").css({
        "background-color": "rgb(54, 202, 231)",
        "box-shadow": "0px 0px 5px rgb(54, 202, 231)",
      });
    } else {
      $(".fuelbars12").css({
        "background-color": "rgb(54, 202, 231,0.15)",
        "box-shadow": "0px 0px 0px rgb(54, 202, 231)",
      });
    }

    if (data.fuel >= 75) {
      $(".fuelbars13").css({
        "background-color": "rgb(54, 202, 231)",
        "box-shadow": "0px 0px 5px rgb(54, 202, 231)",
      });
    } else {
      $(".fuelbars13").css({
        "background-color": "rgb(54, 202, 231,0.15)",
        "box-shadow": "0px 0px 0px rgb(54, 202, 231)",
      });
    }

    if (data.fuel >= 80) {
      $(".fuelbars14").css({
        "background-color": "rgb(54, 202, 231)",
        "box-shadow": "0px 0px 5px rgb(54, 202, 231)",
      });
    } else {
      $(".fuelbars14").css({
        "background-color": "rgb(54, 202, 231,0.15)",
        "box-shadow": "0px 0px 0px rgb(54, 202, 231)",
      });
    }

    if (data.fuel >= 85) {
      $(".fuelbars15").css({
        "background-color": "rgb(54, 202, 231)",
        "box-shadow": "0px 0px 5px rgb(54, 202, 231)",
      });
    } else {
      $(".fuelbars15").css({
        "background-color": "rgb(54, 202, 231,0.15)",
        "box-shadow": "0px 0px 0px rgb(54, 202, 231)",
      });
    }

    if (data.fuel >= 90) {
      $(".fuelbars16").css({
        "background-color": "rgb(54, 202, 231)",
        "box-shadow": "0px 0px 5px rgb(54, 202, 231)",
      });
    } else {
      $(".fuelbars16").css({
        "background-color": "rgb(54, 202, 231,0.15)",
        "box-shadow": "0px 0px 0px rgb(54, 202, 231)",
      });
    }

    if (data.fuel >= 95) {
      $(".fuelbars17").css({
        "background-color": "rgb(54, 202, 231)",
        "box-shadow": "0px 0px 5px rgb(54, 202, 231)",
      });
    } else {
      $(".fuelbars17").css({
        "background-color": "rgb(54, 202, 231,0.15)",
        "box-shadow": "0px 0px 0px rgb(54, 202, 231)",
      });
    }

    if (data.fuel >= 100) {
      $(".fuelbars18").css({
        "background-color": "rgb(54, 202, 231)",
        "box-shadow": "0px 0px 5px rgb(54, 202, 231)",
      });
    } else {
      $(".fuelbars18").css({
        "background-color": "rgb(54, 202, 231,0.15)",
        "box-shadow": "0px 0px 0px rgb(54, 202, 231)",
      });
    }

    ///////////////////////////////////////////////

    if (data.Engine) {
      $("#motor_icon").attr("src", "img/motor_icon_pressed.png");
    } else {
      $("#motor_icon").attr("src", "img/motor_icon.png");
    }

    if (data.Seatbelt) {
      $("#seatbelt_icon").attr("src", "img/seatbelt_icon_pressed.png");
    } else {
      $("#seatbelt_icon").attr("src", "img/seatbelt_icon.png");
    }

    if (data.Lock == 2) {
      $("#doors_icon").attr("src", "img/doors_icon_pressed.png");
    } else {
      $("#doors_icon").attr("src", "img/doors_icon.png");
      // $("#doors_icon").html("<img src=img/doors_icon.png/>")
    }
    if (data.Light) {
      $("#light_icon").attr("src", "img/light_icon_pressed.png");
    } else {
      $("#light_icon").attr("src", "img/light_icon.png");
    }

    ///////////////////////////////////////////

    if (data.rpm > 0.21) {
      $(".bars1").css({
        "background-color": "rgb(54, 202, 231)",
        "box-shadow": "0px 0px 5px rgb(54, 202, 231)",
      });
    } else {
      $(".bars1").css({
        "background-color": "rgb(54, 202, 231,0.15)",
        "box-shadow": "0px 0px 0px rgb(54, 202, 231)",
      });
    }
    if (data.rpm > 0.25) {
      $(".bars2").css({
        "background-color": "rgb(54, 202, 231)",
        "box-shadow": "0px 0px 5px rgb(54, 202, 231)",
      });
    } else {
      $(".bars2").css({
        "background-color": "rgb(54, 202, 231,0.15)",
        "box-shadow": "0px 0px 0px rgb(54, 202, 231)",
      });
    }

    if (data.rpm > 0.3) {
      $(".bars3").css({
        "background-color": "rgb(54, 202, 231)",
        "box-shadow": "0px 0px 5px rgb(54, 202, 231)",
      });
    } else {
      $(".bars3").css({
        "background-color": "rgb(54, 202, 231,0.15)",
        "box-shadow": "0px 0px 0px rgb(54, 202, 231)",
      });
    }

    if (data.rpm > 0.35) {
      $(".bars4").css({
        "background-color": "rgb(54, 202, 231)",
        "box-shadow": "0px 0px 5px rgb(54, 202, 231)",
      });
    } else {
      $(".bars4").css({
        "background-color": "rgb(54, 202, 231,0.15)",
        "box-shadow": "0px 0px 0px rgb(54, 202, 231)",
      });
    }

    if (data.rpm > 0.4) {
      $(".bars5").css({
        "background-color": "rgb(54, 202, 231)",
        "box-shadow": "0px 0px 5px rgb(54, 202, 231)",
      });
    } else {
      $(".bars5").css({
        "background-color": "rgb(54, 202, 231,0.15)",
        "box-shadow": "0px 0px 0px rgb(54, 202, 231)",
      });
    }

    if (data.rpm > 0.45) {
      $(".bars6").css({
        "background-color": "rgb(54, 202, 231)",
        "box-shadow": "0px 0px 5px rgb(54, 202, 231)",
      });
    } else {
      $(".bars6").css({
        "background-color": "rgb(54, 202, 231,0.15)",
        "box-shadow": "0px 0px 0px rgb(54, 202, 231)",
      });
    }

    if (data.rpm > 0.5) {
      $(".bars7").css({
        "background-color": "rgb(54, 202, 231)",
        "box-shadow": "0px 0px 5px rgb(54, 202, 231)",
      });
    } else {
      $(".bars7").css({
        "background-color": "rgb(54, 202, 231,0.15)",
        "box-shadow": "0px 0px 0px rgb(54, 202, 231)",
      });
    }

    if (data.rpm > 0.55) {
      $(".bars8").css({
        "background-color": "rgb(54, 202, 231)",
        "box-shadow": "0px 0px 5px rgb(54, 202, 231)",
      });
    } else {
      $(".bars8").css({
        "background-color": "rgb(54, 202, 231,0.15)",
        "box-shadow": "0px 0px 0px rgb(54, 202, 231)",
      });
    }

    if (data.rpm > 0.6) {
      $(".bars9").css({
        "background-color": "rgb(54, 202, 231)",
        "box-shadow": "0px 0px 5px rgb(54, 202, 231)",
      });
    } else {
      $(".bars9").css({
        "background-color": "rgb(54, 202, 231,0.15)",
        "box-shadow": "0px 0px 0px rgb(54, 202, 231)",
      });
    }

    if (data.rpm > 0.62) {
      $(".bars10").css({
        "background-color": "rgb(54, 202, 231)",
        "box-shadow": "0px 0px 5px rgb(54, 202, 231)",
      });
    } else {
      $(".bars10").css({
        "background-color": "rgb(54, 202, 231,0.15)",
        "box-shadow": "0px 0px 0px rgb(54, 202, 231)",
      });
    }

    if (data.rpm > 0.65) {
      $(".bars11").css({
        "background-color": "rgb(54, 202, 231)",
        "box-shadow": "0px 0px 5px rgb(54, 202, 231)",
      });
    } else {
      $(".bars11").css({
        "background-color": "rgb(54, 202, 231,0.15)",
        "box-shadow": "0px 0px 0px rgb(54, 202, 231)",
      });
    }

    if (data.rpm > 0.7) {
      $(".bars12").css({
        "background-color": "rgb(54, 202, 231)",
        "box-shadow": "0px 0px 5px rgb(54, 202, 231)",
      });
    } else {
      $(".bars12").css({
        "background-color": "rgb(54, 202, 231,0.15)",
        "box-shadow": "0px 0px 0px rgb(54, 202, 231)",
      });
    }

    if (data.rpm > 0.75) {
      $(".bars13").css({
        "background-color": "rgb(54, 202, 231)",
        "box-shadow": "0px 0px 5px rgb(54, 202, 231)",
      });
    } else {
      $(".bars13").css({
        "background-color": "rgb(54, 202, 231,0.15)",
        "box-shadow": "0px 0px 0px rgb(54, 202, 231)",
      });
    }

    if (data.rpm > 0.8) {
      $(".bars14").css({
        "background-color": "rgb(54, 202, 231)",
        "box-shadow": "0px 0px 5px rgb(54, 202, 231)",
      });
    } else {
      $(".bars14").css({
        "background-color": "rgb(54, 202, 231,0.15)",
        "box-shadow": "0px 0px 0px rgb(54, 202, 231)",
      });
    }

    if (data.rpm > 0.85) {
      $(".bars15").css({
        "background-color": "rgb(54, 202, 231)",
        "box-shadow": "0px 0px 5px rgb(54, 202, 231)",
      });
    } else {
      $(".bars15").css({
        "background-color": "rgb(54, 202, 231,0.15)",
        "box-shadow": "0px 0px 0px rgb(54, 202, 231)",
      });
    }

    if (data.rpm > 0.88) {
      $(".bars16").css({
        "background-color": "rgb(54, 202, 231)",
        "box-shadow": "0px 0px 5px rgb(54, 202, 231)",
      });
    } else {
      $(".bars16").css({
        "background-color": "rgb(54, 202, 231,0.15)",
        "box-shadow": "0px 0px 0px rgb(54, 202, 231)",
      });
    }

    if (data.rpm > 0.92) {
      $(".bars17").css({
        "background-color": "rgb(54, 202, 231)",
        "box-shadow": "0px 0px 5px rgb(54, 202, 231)",
      });
    } else {
      $(".bars17").css({
        "background-color": "rgb(54, 202, 231,0.15)",
        "box-shadow": "0px 0px 0px rgb(54, 202, 231)",
      });
    }

    if (data.rpm > 0.94) {
      $(".bars18").css({
        "background-color": "rgb(54, 202, 231)",
        "box-shadow": "0px 0px 5px rgb(54, 202, 231)",
      });
    } else {
      $(".bars18").css({
        "background-color": "rgb(54, 202, 231,0.15)",
        "box-shadow": "0px 0px 0px rgb(54, 202, 231)",
      });
    }
  }
});
