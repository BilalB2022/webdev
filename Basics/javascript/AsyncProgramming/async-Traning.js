const fetchPokemon = () => {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
      //    resolve({ data: { name: "Pickachu", power: 20 } })
      reject(new Error("Danger , danger !"))
   },2000)
   })
}

console.log("Program starting ...");

const usePokemon = async () => {
   const data = await fetchPokemon();
   console.log(data);
}

usePokemon()
console.log("Program Completed");