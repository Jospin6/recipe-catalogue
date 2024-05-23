export const getIngredient = (meal: any) => {
    const result = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 1; i <= 20; i++) {
      if (meal[0]?.[`strIngredient${i}`] === '') {
        break;
      }
      result.push(meal[0]?.[`strIngredient${i}`]);
    }
    return result;
  }