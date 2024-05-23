export const getIngredient = (meal: any) => {
    const result = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 1; i <= 20; i++) {
      if (meal[`strIngredient${i}`] === '') {
        break;
      }
      result.push(meal[`strIngredient${i}`]);
    }
    return result;
  }