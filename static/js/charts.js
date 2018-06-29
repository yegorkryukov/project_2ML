
//populate the select menu for the clouds
function cloudNameSelect() {
  const firstCloud = document.querySelector('#first-cloud');
  const secondCloud = document.querySelector('#second-cloud');
  const labels = ['ALL News Orgs', '-----------', 'All Right News', 'The American Conservative', 'Breitbart', 'Daily Wire', 'The Fiscal Times', 'Fox News', 'The Hill', 'NY Post', 'OANN', 'Reason', 'Washington Times', '-----------', 'All Left News', 'The Atlantic', 'BBC', 'Daily Beast', 'The Guardian', 'Intercept', 'Mother Jones', 'New Republic', 'Politico', 'Slate', 'Washington Post'];
  const png_name = [
    'AllCombined.png', 
    '', 
    'R-All.png', 
    'R-AmericanConservative.png', 
    'R-Breitbart.png', 
    'R-DailyWire.png', 
    'R-TFT.png', 
    'R-FoxNews.png', 
    'R-Hill.png', 
    'R-NYPost.png', 
    'R-OANN.png', 
    'R-Reason.png', 
    'R-WashingtonTimes.png', 
    '', 
    'L-All.png', 
    'L-Atlantic.png', 
    'L-BBC.png', 
    'L-DailyBeast.png', 
    'L-Guardian.png', 
    'L-Intercept.png', 
    'L-MotherJones.png', 
    'L-NewRepublic.png', 
    'L-Politico.png', 
    'L-Slate.png', 
    'L-WashingtonPost.png'];
  
  for (let i = 0; i < labels.length; i++) {
    let firstOption = document.createElement('option');
    let secondOption = document.createElement('option');
    firstOption.text = labels[i];
    firstOption.value = png_name[i];
    secondOption.text = labels[i];
    secondOption.value = png_name[i];
    firstCloud.appendChild(firstOption);
    secondCloud.appendChild(secondOption);
  }
}

//function to handle when a new news org is selected
function firstOptionChanged(news_org) {
  showWordCloud(news_org, side='first');
}

function secondOptionChanged(news_org) {
  showWordCloud(news_org, side='second');
}

//get the word cloud image
function showWordCloud(news_org, side) {
  let url = `/static/img/${news_org}`;
  if (side === 'first') {
    let firstImage = document.querySelector('.first-image');
    firstImage.innerHTML = '<img src=' + url + '>';
  } else if (side === 'second') {
    let secondImage = document.querySelector('.second-image');
    secondImage.innerHTML = '<img src=' + url + '>';
  }
  //console.log(url);
}

cloudNameSelect();
firstOptionChanged('L-All.png');
secondOptionChanged('R-All.png');
  
/** ['ALL', '--------', 'RIGHT', 'The American Conservative', 'Breitbart', 'Daily Wire', 'The Fiscal Times', 'Fox News', 'The Hill', 'NY Post', 'OANN', 'Reason', 'Washington Times', '--------', 'LEFT', 'The Atlantic', 'BBC', 'Daily Beast', 'The Guardian', 'Intercept', 'Mother Jones', 'New Republic', 'Politico', 'Slate', 'Washington Post'];
  const png_name = ['AllCombined', '', 'R-All', 'R-AmericanConservative', 'R-Breitbart', 'R-DailyWire', 'R-TFT', 'R-FoxNews', 'R-Hill', 'R-NYPost', 'R-OANN', 'R-Reason', 'R-WashingtonTimes', '', 'L-All', 'L-Atlantic', 'L-BBC', 'L-DailyBeast', 'L-Guardian', 'L-Intercept', 'L-MotherJones', 'L-NewRepublic', 'L-Politico', 'L-Slate', 'L-WashingtonPost']; **/
