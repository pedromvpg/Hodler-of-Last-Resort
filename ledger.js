$(document).ready(function(e) {



  var players = [
          { "name": "Satoshi", "balance": 0, "color" : "red"},
          { "name": "Hal", "balance": 0, "color" : "yellow"},
          { "name": "Hash", "balance": 0, "color" : "blue"},
          { "name": "Merkle", "balance": 0, "color" : "green"}
        ];

  var players_total = players.length;

  var space, open_row, close_row;
  var rows = '';
  var row_id = 1;



  var genesis_block_year = 2009;
  var block_time = 10;
  var genesis_block_reward = 50;
  var blocks_per_play = 210000/players_total;
  var halving_interval = 210000;
  var initial_fees_ratio = 1;


  var year;

  var block_height = 0;
  var halving_era = 0;
  var circulation = 0;
  var player_reward = 0;

  var halving = reward_formated = end_reward = player_reward_formated = circulation_formated = '';
  var reward = genesis_block_reward;

  var play_limit = 280;
  var play = "";
  var i;





/*
  var miner_select = '<select class="miner-select" disabled>';
  miner_select += '<option disabled selected value> - </option>'
  for (i = 0; i < players_total; i++) {
    miner_select += '<option value="'+i+'">'+players[i].name+'</option>';
  }
  miner_select += '</select>';
*/
  var miner_select = '';
  for (i = 0; i < players_total; i++) {
      //miner_select += '<input type="radio" name="miner-select" value="'+i+'">'+players[i].name;
    
    
    miner_select += '<label>';
    miner_select += '<input type="radio" name="miner-select" value="'+i+'">';
    //miner_select += '<img src="http://placehold.it/40x60/0bf/fff&text=A'+i+' '+players[i].name+'">';
    miner_select += '<div class="input-name player-'+(i+1)+'">'+players[i].name+'</div>';
    miner_select += '</label>';
  }




  var player_balances = '<div class="cell player-balances-container">';
  for (i = 0; i < players_total; i++) {
    player_balances += '<div class="cell player-balance player-balance-'+i+'" data-player-name="'+players[i].name+'"> - </div>';
  }
  player_balances += '</div>';

/*
  var outcome_select = '<select class="outcome-select" disabled>';
    outcome_select += '<option disabled selected value> - </option>'
    outcome_select += '<option value="positive">Positive</option>';
    outcome_select += '<option value="neutral">Neutral</option>';
    outcome_select += '<option value="negative">Negative</option>';
  outcome_select += '</select>';
*/



  var outcome_select  = '<label>';
      outcome_select += '<input type="radio" name="outcome-select" value="positive">';
      outcome_select += '<div class="input-name positive">&uarr;</div>';
      outcome_select += '</label>';


      outcome_select += '<label>';
      outcome_select += '<input type="radio" name="outcome-select" value="neutral">';
      outcome_select += '<div class="input-name neutral">-</div>';
      outcome_select += '</label>';
  
      outcome_select += '<label>';
      outcome_select += '<input type="radio" name="outcome-select" value="negative">';
      outcome_select += '<div class="input-name negative">&darr;</div>';
      outcome_select += '</label>';



  for (i = 1; i < play_limit; i++) {

    if(i%players_total == 1 && i !== 1){
      halving_era = halving_era + 1;
      reward = reward/2;
      halving = 'Halving #'+halving_era;
    }else if( i === 1){
      halving = 'Genesis Block';
    }else{
      halving = '';
    }


    year = Math.ceil(genesis_block_year+((block_height*block_time)/60/24/365));


    //don't let rewards have more than 8 decimal places
    if(block_height < 2100000){
      reward_formated = reward;
    }else{
      reward_formated = reward.toFixed(8);
    }

    if(year >= 2140){
      end_reward = "end-reward";
      reward_formated = 0;
      circulation = 21000000;
    }



    player_reward = reward_formated*blocks_per_play;
    player_reward_formated = formatNumber(player_reward.toFixed(3));

    circulation = (circulation+player_reward);
    circulation_formated = formatNumber(circulation.toFixed(3));
    

    play += '<div class="play play-'+i+' '+end_reward+'">';
    
      play += '<div class="row play-info">';
        play += '<div class="cell play-id turn-number">'+i+'</div>';
        play += '<div class="cell reward">'+reward_formated+'</div>';
        //play += '<div class="cell block">'+block_height+'</div>';
        //play += '<div class="cell year">'+year+'</div>';
        play += '<div class="cell circulation">'+circulation_formated+'</div>';
        play += '<div class="cell player-reward" data="'+player_reward+'">'+player_reward_formated+'</div>';
        play += '<div class="cell halving">'+halving+'</div>';
        play += '<div class="cell player-miner">'+miner_select+'</div>';
        play += '<div class="cell player-turn" data="'+(i-1)%players_total+'">'+players[(i-1)%players_total].name+'</div>';
        play += '<div class="cell space"><input class="space-input" type="text" name="space" disabled></div>';
        play += '<div class="cell outcome">'+outcome_select+'</div>';
      play += '</div>';  
    
      play += '<div class="row play-balances">';
        play += player_balances;
      play += '</div>';  

      

    play += '</div>';

    block_height = block_height + blocks_per_play;
  }


  $('#ledger').append(play);










  var space_rules;
  var turn_players = [];




  $(".play-1").find(".miner-select").prop('disabled', false);


  //$(".miner-select").change(function(){
  $('input:radio[name=miner-select]').change(function() {
    
    $(this).parent().parent().children('label').children('.input-name').removeClass('selected-input');
    $(this).parent().children('.input-name').addClass('selected-input');
    
    var this_row = $(this).parent().parent().parent().parent();

    if(this_row.hasClass('play-1')){
      for (i = 0; i < players_total; i++) {
        this_row.children(".play-balances").children(".player-balances-container").children(".player-balance-"+i).text(parseInt(0));
      }
    }else{
      var previous_balences_el = this_row.prev();
      for (i = 0; i < players_total; i++) {
        var previous_player_balance = parseInt(previous_balences_el.children(".play-balances").children(".player-balances-container").children(".player-balance-"+i).text());
        this_row.children(".play-balances").children(".player-balances-container").children(".player-balance-"+i).text(parseInt(previous_player_balance));
      }
      this_row.prev().find(".outcome-select").prop('disabled', true);
    }

    var miner_player_id = $(this).val();
    var play_reward = this_row.children('.play-info').children(".player-reward").attr('data');
    var current_balance = this_row.children(".play-balances").children(".player-balances-container").children(".player-balance-"+miner_player_id).text();

    this_row.children(".play-balances").children(".player-balances-container").children(".player-balance-"+miner_player_id).text(parseInt(current_balance) + parseInt(play_reward));

    for (i = 0; i < players_total; i++) {
      players[i].balance = parseInt(this_row.children(".play-balances").children(".player-balances-container").children(".player-balance-"+i).text());
    }

    this_row.children('.play-info').find(".space-input").prop('disabled', false);



  });



  $(".space-input").change(function(){

    var this_row = $(this).parent().parent().parent();
    //TODO force number only (between the length of the spaces array)
    this_row.find(".outcome-select").prop('disabled', false);
    this_row.find(".miner-select").prop('disabled', true);
    space_rules = spaces[$(this).val()];

    turn_players = players;
    console.log(turn_players);

  });





  $('input:radio[name=outcome-select]').change(function() {
    
    $(this).parent().parent().children('label').children('.input-name').removeClass('selected-input');
    $(this).parent().children('.input-name').addClass('selected-input');
    
    
    var other_player_balance;
    var current_player_balance;

    var transfer_sum = transfer_single = 0;
    var this_row = $(this).parent().parent().parent().parent();
    var current_player_id = this_row.children('.play-info').children(".player-turn").attr('data');
    var outcome = $(this).val();

    this_row.find(".space-input").prop('disabled', true);
    this_row.next().find(".miner-select").prop('disabled', false);

    console.log(current_player_id);

    players = turn_players;
    console.log(turn_players);

    for (i = 0; i < players_total; i++) {


      //Reset balances
      this_row.children('.play-balances').children(".player-balance-"+i).text(parseInt(turn_players[i].balance));
      console.log(this_row.children('.play-balances').children(".player-balance-"+i).text());



      if(outcome == "positive"){

        //Take from the others
        if(i != current_player_id){


          //console.log(i +' - '+current_player_id+' - '+players[i].balance);
          other_player_balance = players[i].balance;
          console.log(players);
          players[current_player_id].balance = players[current_player_id].balance;
          transfer_single = (other_player_balance/100)*space_rules[outcome];
          players[i].balance = other_player_balance-transfer_single;

          //transfer_sum = transfer_sum + transfer_single;
          current_player_balance = players[current_player_id].balance;
          players[current_player_id].balance = current_player_balance+transfer_single;

          //console.log("take "+transfer_single+" from player "+i+" and give to player "+current_player_id+" - Rule "+space_rules[outcome]);
          this_row.children(".player-balance-"+i).text(parseInt(players[i].balance));
          this_row.children(".player-balance-"+current_player_id).text(parseInt(players[current_player_id].balance));

          //console.log(i +' + '+current_player_id+' + '+players[i].balance);
          console.log('POSITIVE');
        }

      }else if(outcome == "negative"){
        //Give to all others
          console.log('NEGATIVE');
      }else{

        //Neutal nothing happens to ballances
        this_row.children(".player-balance-"+i).text(turn_players[i].balance);
        players = turn_players;
        //console.log(turn_players[i].balance);
        console.log('NEUTRAL');
      }
    }



  });


});






function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
