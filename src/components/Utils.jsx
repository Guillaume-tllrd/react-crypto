// pour savoir si un coin est un stable coin il n'y avait rien pour le déterminer dans la bdd donc il a fallut les rentrer manuellement dans une fonction qui reprend un tableau et après je lui demande si dans min tableau il y a le paramètre que je te passe alors ty me return false sinon true comme ça on peut filtrer nos élements
export const isStableCoin = (coin) => {
  let stables = [
    "usdt",
    "usdc",
    "busd",
    "dai",
    "ust",
    "mim",
    "tusd",
    "usdp",
    "usdn",
    "fei",
    "tribe",
    "gusd",
    "frax",
    "lusd",
    "husd",
    "ousd",
    "xsgd",
    "usdx",
    "eurs",
    "cusdc",
    "cdai",
    "usdd",
    "ibeur",
    "eurt",
    "flexusd",
    "alusd",
    "susd",
  ];
  if (stables.includes(coin)) {
    return false;
  } else {
    return true;
  }
};
