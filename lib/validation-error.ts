
export  function checkStepsValidations(data:any) { 

    console.log(data,'data');
let error = '';

switch (data.activeTab) {
    case 0:
     error = data?.destination.length ? '' : 'Choose at least One Option';
      break;
    case 1:
        error = data?.subjects.length? '' : 'Choose at least One Option';
      break;
    case 2:
      error = data?.studyLevel.length? '' : 'Choose at least One Option';
    break;
    // ... more cases
    default:
      // code to execute if no case matches
  }

  return error;

}