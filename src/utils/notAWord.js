const notAWord = (i, j, letters, ori) => {
  let left = letters[i].charAt(j - 1);
  let right = letters[i].charAt(j + 1);
  let top = letters[i - 1] ? letters[i - 1].charAt(j) : "";
  let bottom = letters[i + 1] ? letters[i + 1].charAt(j) : "";
  let checkA = ori ? left : top;
  let checkB = ori ? right : bottom;
  if (
    (checkA === "0" && checkB === "0") ||
    (checkA === "0" && checkB === "") ||
    (checkA === "" && checkB === "0")
  )
    return true;
  else return false;
};

export default notAWord;
