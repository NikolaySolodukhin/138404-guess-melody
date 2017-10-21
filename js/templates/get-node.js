const getNode = (string) => {
  let node = document.createElement(`section`);
  node.innerHTML = string;

  return node.firstChild;
};

export default getNode;
