const FEMALE = 0;
const MALE = 1;
const MISC = 2;
const MARRIED = true;
const UNMARRIED = false;

const CAMPAIGN_MARRIED_MALE = 1;
const CAMPAIGN_UNMARRIED_FEMALE = 2;
const CAMPAIGN_MARRIED_FEMALE = 3;
const CAMPAIGN_OTHERS = 4;

function campaignNumber(age, sex, married){
      if(age >= 30 && sex == 1 && married == true){
        return 1;
    }else(age >= 20 && age < 30 && sex == 0 && married == false){
        return 2;
    }else(sex == 0 && married == true){
        return 3;
    }else{
        return 4;
    }
}
