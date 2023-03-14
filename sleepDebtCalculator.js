const getSleepHours = day => {
    if (day === 'monday') {
      return 8;
    } else if (day === 'tuesday') {
    return 8;
    } else if (day === 'wednesday') {
      return 8;
    } else if (day === 'thursday') {
      return 8;
    } else if (day === 'friday') {
      return 8;
    } else if (day === 'saturday') {
      return 9;
    } else {
      return 9;
    };
    };
    // getSleepHours('sunday');
    // console.log(getSleepHours('sunday'));
    // getSleepHours('friday');
    // console.log(getSleepHours('friday'));
    
    const getActualSleepHours = () => 
    // getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
    8 + 8 + 8 + 8 + 8 + 9 + 9;
    getActualSleepHours();
    console.log(getActualSleepHours()); 
    
     const getIdealSleepHours = () => {
       const idealHours = 8;
       return idealHours * 7;
     }
    
    getIdealSleepHours();
    console.log(getIdealSleepHours());
    
    const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
      console.log('You get the perfect amount of sleep')
    } else if (actualSleepHours > idealSleepHours) {
      console.log('You get ' + (actualSleepHours - idealSleepHours) + ' hours more sleep then needed');
    } else {
      console.log('you should get ' + (idealSleepHours - actualSleepHours) + 'more sleep');
    };
    };
    calculateSleepDebt();    